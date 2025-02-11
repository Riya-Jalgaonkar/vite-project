require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;

app.post('/subscribe-whatsapp', async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ error: "Phone number is required" });
    }

    try {
        const response = await axios.post(
            WHATSAPP_API_URL,
            {
                messaging_product: "whatsapp",
                to: phoneNumber,
                type: "text",
                text: { body: "Thank you for subscribing to updates!" }
            },
            { headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, "Content-Type": "application/json" } }
        );

        res.status(200).json({ success: "WhatsApp message sent!", response: response.data });
    } catch (error) {
        console.error("Error sending WhatsApp message:", error);
        res.status(500).json({ error: "Failed to send WhatsApp message" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
