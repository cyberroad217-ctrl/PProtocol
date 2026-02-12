
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-blue-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-blue-900">PProtocol</span>
            </Link>
            <p className="text-gray-600 leading-relaxed text-sm">
              The world's first productivity ecosystem powered by multi-trillion quantum AI agents. Optimized for high-demand scaling and cutting-edge digital asset creation.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">How it works</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/console" className="hover:text-blue-600 transition-colors">LLM Console</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Research Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-xs">Marketplace</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/marketplace" className="hover:text-blue-600 transition-colors">E-Books</Link></li>
              <li><Link to="/marketplace" className="hover:text-blue-600 transition-colors">Software Templates</Link></li>
              <li><Link to="/marketplace" className="hover:text-blue-600 transition-colors">AI Prompt Kits</Link></li>
              <li><Link to="/marketplace" className="hover:text-blue-600 transition-colors">DNA Servers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Billing Docs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">
            © 2025 PProtocol & InfiniteMarket. All rights reserved. Built for high-demand, scalable digital products.
          </p>
          <div className="flex space-x-6">
             <span className="text-[10px] text-blue-300 mono uppercase">Nodes: 28B</span>
             <span className="text-[10px] text-blue-300 mono uppercase">Agents: Trillion-Scale</span>
             <span className="text-[10px] text-blue-300 mono uppercase">Latency: Sub-ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
