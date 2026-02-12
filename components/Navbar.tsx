
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Cpu, Globe, ShoppingCart, Terminal, LayoutDashboard, Lock, Sparkles, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: <Globe size={16} /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingCart size={16} /> },
    { name: 'Blog', path: '/blog', icon: <LayoutDashboard size={16} /> },
    { name: 'Console', path: '/console', icon: <Terminal size={16} /> },
    { name: 'About', path: '/about', icon: <Cpu size={16} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-active:scale-90 shadow-lg shadow-blue-200">
              <span className="text-white font-black text-xl italic">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-blue-900 italic uppercase leading-none">PProtocol</span>
              <span className="text-[6px] font-black text-blue-400 uppercase tracking-widest mono">Quantum Core Sync</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  isActive(item.path) ? 'text-blue-600 bg-blue-50 shadow-inner' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <button 
              onClick={() => navigate('/checkout')}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center space-x-2 group active:scale-95"
            >
              <Lock size={12} className="group-hover:animate-bounce" />
              <span>Purchase</span>
              <Sparkles size={12} className="text-blue-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
             <button onClick={() => navigate('/checkout')} className="text-blue-600 p-2 bg-blue-50 rounded-lg">
                <ShoppingCart size={18} />
             </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-blue-50 animate-in slide-in-from-top duration-300">
          <div className="px-3 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-4 rounded-2xl text-xs font-black uppercase tracking-widest ${
                  isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <button 
              onClick={() => { setIsOpen(false); navigate('/checkout'); }}
              className="flex items-center justify-center space-x-3 w-full text-center bg-blue-600 text-white px-6 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest mt-6 shadow-2xl active:scale-95"
            >
              <Lock size={16} />
              <span>Purchase Sync Access</span>
              <Activity size={16} className="text-blue-300" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
