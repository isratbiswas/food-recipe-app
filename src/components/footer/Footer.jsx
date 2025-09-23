import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wide">
            SavorySpoon
          </h1>
          <p className="text-gray-400 mt-4">
            Discover delicious recipes, cooking tips, and food inspiration for
            every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 block">
            <li>
              <Link to="/" className="hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-green-500 transition"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-green-500 transition">
                Favorites
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources / Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-500 transition ml-16 ">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SavorySpoon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
