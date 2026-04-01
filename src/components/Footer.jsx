import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-xl text-white">ToolForge</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering creators with next-generation digital tools.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-3">Product</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-sm text-gray-500">
          <p>Made with <FaHeart className="inline text-red-500 mx-1" /> for digital creators</p>
          <p className="mt-2">© 2026 ToolForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
