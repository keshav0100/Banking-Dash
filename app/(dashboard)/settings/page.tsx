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

// Payment page removed for production stability
const SettingsPage = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <p className="mb-4">Settings page content goes here.</p>
  </div>
);

export default SettingsPage;
