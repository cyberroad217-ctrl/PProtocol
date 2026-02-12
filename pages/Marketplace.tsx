
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Cpu, Database, Zap, Activity, ChevronRight, Star, Lock, Filter, Clock, Gift, Grid, LayoutList, CheckCircle2 } from 'lucide-react';

const TOTAL_PAGES = 54883237565; 

const Marketplace: React.FC = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();

  const categories = ['All', 'AGI RESEARCH', 'QUANTUM CORE', 'DNA STORAGE', 'SMART SOFTWARE'];

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      const generated = Array.from({ length: 8 }).map((_, i) => ({
        id: page * 100 + i,
        title: `${[
          'Agent Stream v9.4',
          'Memory DNA Node',
          'Quantum DNS Gateway',
          'AGI Financial Core',
          'Trillion-Token Marketing',
          'Dev Stack Edge Core',
          'Social Agent Automator',
          'Vault Root Access'
        ][i % 8]}`,
        description: `Cutting edge system for high-demand scaling. Created by multi-trillions of quantum agents on decentralized clusters.`,
        price: (Math.random() * 80 + 19).toFixed(2),
        category: categories[1 + (i % (categories.length - 1))],
        image: `https://picsum.photos/seed/ppmarket_v11_${page}_${i}/800/600`
      }));
      setProducts(generated);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 450);
    return () => clearTimeout(timeout);
  }, [page, activeCategory]);

  const handleBuy = () => navigate('/checkout');

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-blue-900 overflow-x-hidden">
      {/* Marketplace Header */}
      <div className="bg-blue-900 text-white py-12 px-4 relative overflow-hidden border-b-[8px] border-blue-600">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-600/40 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-lg border border-blue-400/50">
              <Activity size={12} className="animate-pulse" />
              <span>Quantum Market Active</span>
            </div>
            <h1 className="text-5xl lg:text-[80px] font-black italic tracking-tighter leading-[0.75] uppercase">THE VAULT.</h1>
            <p className="text-blue-100 text-xl max-w-xl font-bold italic opacity-90 leading-relaxed mx-auto lg:mx-0">
              Infinite access to trillion-token software and agent clusters.
            </p>
            <div className="relative max-w-xl mx-auto lg:mx-0 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="Search trillions of assets..." 
                className="w-full bg-white text-gray-900 pl-16 pr-8 py-5 rounded-[32px] shadow-xl focus:ring-[12px] focus:ring-blue-500/20 outline-none text-lg font-black italic transition-all"
              />
            </div>
          </div>

          <div className="hidden lg:block">
             <div className="bg-gradient-to-br from-blue-800 to-blue-950 border-4 border-blue-700 p-10 rounded-[48px] backdrop-blur-xl relative overflow-hidden group shadow-xl">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-6 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Elite Bundle</div>
                <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-2 flex items-center">
                  <Gift className="mr-4 text-yellow-400" size={32} />
                  Master Pack
                </h3>
                <p className="text-blue-100/80 text-sm italic mb-6">Full E-book Bundle + 10 Root Kits.</p>
                <div className="flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest mono">Sync Value</span>
                      <span className="text-5xl font-black italic tracking-tighter leading-none">$149</span>
                   </div>
                   <button 
                    onClick={handleBuy}
                    className="bg-white text-blue-900 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                   >
                     <Zap size={16} className="fill-blue-900" />
                     <span>Buy Now</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-slate-50 border border-blue-50 p-8 rounded-[48px] sticky top-24 shadow-inner">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-[14px] flex items-center justify-center text-white shadow-lg">
                  <Filter size={20} />
                </div>
                <h3 className="font-black text-blue-900 uppercase italic tracking-tighter text-xl">Filter</h3>
              </div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-6 py-3.5 rounded-[24px] text-[11px] font-black uppercase tracking-widest transition-all flex justify-between items-center group ${activeCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-white text-gray-500 hover:text-blue-600'}`}
                  >
                    <span>{cat}</span>
                    <ChevronRight size={14} className={`transition-transform ${activeCategory === cat ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-blue-100 space-y-6">
                <div className="bg-blue-900 text-white p-6 rounded-[32px] shadow-lg text-center relative overflow-hidden">
                   <div className="text-[10px] font-black text-blue-300 uppercase mb-2 tracking-widest mono leading-none">Node Reset In:</div>
                   <div className="text-3xl font-black italic tracking-tighter">04:12:44</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-end mb-10">
               <div className="space-y-1">
                  <h2 className="text-2xl font-black italic tracking-tighter uppercase text-blue-900 flex items-center gap-3"><Grid size={24} className="text-blue-500" /> Active Inventory</h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mono">Indexed: {TOTAL_PAGES.toLocaleString()}</p>
               </div>
               <div className="flex bg-slate-50 p-1 rounded-2xl border border-blue-50">
                  <button onClick={() => setViewMode('grid')} className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-400 hover:text-blue-600'}`}>
                    <Grid size={20} />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-400 hover:text-blue-600'}`}>
                    <LayoutList size={20} />
                  </button>
               </div>
            </div>

            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 gap-8" : "space-y-6"}>
              {isLoading ? (
                Array.from({length: 4}).map((_, i) => (
                  <div key={i} className="bg-slate-50 rounded-[48px] h-[400px] animate-pulse"></div>
                ))
              ) : (
                products.map((p) => (
                  <div key={p.id} className={`bg-white rounded-[48px] overflow-hidden border border-blue-50 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,85,255,0.1)] transition-all group flex flex-col hover:-translate-y-3 ${viewMode === 'list' ? 'flex-row h-40 items-center' : ''}`}>
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-full shrink-0' : 'h-56'}`}>
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      {viewMode === 'grid' && (
                        <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg border border-blue-400/50 flex items-center gap-2">
                          <Star size={10} className="fill-white" />
                          {p.category}
                        </div>
                      )}
                    </div>
                    <div className={`p-8 flex-grow flex flex-col ${viewMode === 'list' ? 'py-4 flex-row justify-between items-center' : ''}`}>
                      <div className={viewMode === 'list' ? 'max-w-md' : ''}>
                        <h3 className="font-black text-blue-900 text-2xl leading-tight italic tracking-tighter group-hover:text-blue-600 transition-colors uppercase mb-2 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-green-500" />
                          {p.title}
                        </h3>
                        {viewMode === 'grid' && <p className="text-sm text-gray-500 leading-relaxed font-medium italic mb-6 line-clamp-2">{p.description}</p>}
                      </div>
                      <div className={`mt-auto flex justify-between items-center ${viewMode === 'list' ? 'mt-0 space-x-12' : 'pt-6 border-t border-blue-50'}`}>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest mono leading-none mb-1">Sync Rate</span>
                            <span className="text-3xl font-black text-blue-600 tracking-tighter italic leading-none">${p.price}</span>
                        </div>
                        <button 
                          onClick={handleBuy}
                          className="bg-blue-600 text-white w-14 h-14 rounded-3xl flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg active:scale-90"
                        >
                          <ShoppingCart size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
