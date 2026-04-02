import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-4">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6">Social Links</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0b1120] hover:bg-gray-200 transition">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
