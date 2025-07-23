
export default async function loadRazorpay(userDetails) {
  if (!window.Razorpay) {
    alert("Razorpay SDK failed to load. Check <script> in index.html");
    return;
  }
  const res = await fetch("http://localhost:5000/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
  const errorText = await res.text(); // read raw error
  console.error("Create order failed:", errorText);
  alert("Failed to create Razorpay order. See console.");
  return;
}

const data = await res.json();
  return new Promise((resolve, reject) => {
    const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Your Brand Name",
      description: "Monthly Membership",
      order_id: data.id,
      handler: async function (response) {
        try {
          const verifyRes = await fetch("http://localhost:5000/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              userDetails,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            resolve("Payment successful");
          } else {
            reject("Verification failed");
          }
        } catch (err) {
          reject("Verification error");
        }
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: { color: "#0ABAB5" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  });
}
