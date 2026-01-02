const Footer = () => {
  return (
    <footer className="w-full bg-[#020617] border-t border-slate-800 px-6 py-16">
      <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Interview<span className="text-blue-500">AI</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            Practice real-world interviews using AI-powered voice interactions and instant feedback.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Mock Interviews</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer">Interview Tips</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} InterviewAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
