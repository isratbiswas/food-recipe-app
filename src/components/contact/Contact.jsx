import { useState } from "react";
import { isValidEmail } from "../../utils/validator";
import { showError, showSuccess, showWarning } from "../../utils/sweetAlert";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showWarning("⚠️ Oops!", "Please fill out all fields.");
      return;
    }

    if (!isValidEmail(form.email)) {
      showError("❌ Invalid Email", "Please enter a valid email address.");
      return;
    }
    // Success
    showSuccess(
      "📩 Message Sent!",
      "Thank you for contacting us. We’ll reply soon."
    );
    console.log("Contact form submitted:", form);
    // reset
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-200 mb-10">
          Have a question, suggestion, or feedback? We’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-white">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>support@foodrecipes.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+880 123 456 789</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
