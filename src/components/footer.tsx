import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#3A82F6] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Company</h3>
            <div className="mb-4 bg-white p-2 w-40">
              <img
                src="/one-home-service-trial/logo.svg" // Replace with your logo URL
                alt="Company Logo"
                className="h-12 "
              />
            </div>
            <p className="text-lg">
              Join the best home service companies in Broward County with our
              referral-based marketing system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-lg text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-white"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-white"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-white"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="text-lg mb-4">
              Stay updated with the latest from our community.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full text-black rounded-md mb-2"
              />
              <button
                type="submit"
                className="bg-white text-[#3A82F6] py-2 px-4 rounded-md font-semibold w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-300 pt-4">
          <p className="text-lg text-gray-300">
            &copy; {new Date().getFullYear()} Broward County's Best Home Service
            Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
