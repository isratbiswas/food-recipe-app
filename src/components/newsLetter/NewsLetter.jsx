import React, { useState } from "react";

import { showError, showSuccess, showWarning } from "../../utils/sweetAlert";
import { isValidEmail } from "../../utils/validator";
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      showWarning("⚠️ Oops!", "Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      showError("❌ Invalid Email", "Please enter a valid email address.");
      return;
    }
    showSuccess(
      "🎉 Thank You!",
      "You have successfully subscribed to our newsletter."
    );
    setEmail("");
  };
  return (
    <section
      className="relative py-16 bg-cover bg-center mb-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-lg mb-6 opacity-90">
          Get delicious recipes, cooking tips, and food inspiration delivered
          straight to your inbox every week.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
          >
            Subscribe
          </button>
        </form>

        {/* Extra note */}
        <p className="mt-4 text-sm opacity-80">
          ✅ No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
