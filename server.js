import express from 'express';
import Razorpay from 'razorpay';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import sgMail from '@sendgrid/mail';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);  

dotenv.config();
console.log("KEY_ID:", process.env.VITE_RAZORPAY_KEY_ID);
console.log("KEY_SECRET:", process.env.VITE_RAZORPAY_KEY_SECRET);


const app = express();
app.use(cors());
app.use(express.json());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.VITE_RAZORPAY_KEY_ID,
  key_secret: process.env.VITE_RAZORPAY_KEY_SECRET
});

// Initialize SendGrid
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create order endpoint
app.post('/api/create-order', async (req, res) => {
  try {
    const amount = process.env.PAYMENT_AMOUNT || 29900; // Default to ₹299 if not set
    console.log('Creating order with amount:', amount);
    
    const options = {
      amount: parseInt(amount), // amount in paise
      currency: 'INR',
      receipt: 'receipt_' + Date.now(),
      payment_capture: 1, // Auto capture payment
      notes: {
        description: "Monthly Community Membership"
      }
    };

    console.log('Order options:', options);
    const order = await razorpay.orders.create(options);
    if (!order || !order.id) {
  console.error("Invalid order response from Razorpay:", order);
  return res.status(500).json({ error: "Invalid order response" });
}

console.log('Order created successfully:', order);
res.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ 
      error: 'Error creating order',
      message: error.message || 'Please try again',
      details: error.error?.description || 'Unknown error occurred'
    });
  }
});

// Verify payment endpoint
app.post('/api/verify-payment', async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userDetails
  } = req.body;

  console.log('Verifying payment:', {
    order_id: razorpay_order_id,
    payment_id: razorpay_payment_id,
    signature: razorpay_signature ? 'present' : 'missing'
  });

  try {
    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    console.log('Signature verification:', { isAuthentic });

    if (!isAuthentic) {
      console.error('Invalid signature');
      return res.status(400).json({
        success: false,
        error: 'Invalid payment signature',
        message: 'Payment verification failed. Please try again.'
      });
    }

    // Verify payment status with Razorpay
    try {
      console.log('Fetching payment details...');
      const payment = await razorpay.payments.fetch(razorpay_payment_id);
      console.log('Payment details:', payment);
      
      if (payment.status !== 'captured') {
        console.error('Payment not captured:', payment.status);
        return res.status(400).json({
          success: false,
          error: 'Payment not captured',
          message: 'Payment was not successful. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error verifying payment status:', error);
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed',
        message: 'Could not verify payment status. Please contact support.'
      });
    }

    console.log('Payment verified successfully');
    res.json({ 
      success: true,
      message: 'Payment successful'
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error processing payment verification',
      message: 'An error occurred while processing your payment. Please try again.'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 