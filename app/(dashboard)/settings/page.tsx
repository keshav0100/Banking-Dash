"use client";
import React from "react";
import Razorpay from "razorpay";
import Script from "next/script";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Razorpay: any;
  }
}
const PaymentPage = () => {
  const AMOUNT = 100;
  const [isProcessing, setIsProcessing] = React.useState(false);
  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
      });
      const data = await response.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "Payment",
        description: "Payment",
        order_id: data.orderId,
        handler: function (response: any) {
          console.log("Payment Successful", response);
        },
        prefill: {
          name: "Keshav Bansal",
          email: "123@gmail.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("Error in payment", error);
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        <p className="mb-4">Amount to pay: {AMOUNT} INR</p>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-500 items-center"
        >
          {isProcessing ? "Processing...." : "Pay Now"}
        </button>
      </div>
    </div>
    );
};
export default PaymentPage;
