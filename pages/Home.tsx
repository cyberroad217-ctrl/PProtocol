
import React, { useState, useEffect } from 'react';
import { 
  Zap, Shield, Database, Activity, Cpu, Terminal, Quote, 
  Check, Mail, Lock, Star, ChevronRight, BarChart3, Cloud, 
  BookOpen, Globe, Radio, Binary, Sparkles, 
  Network, ShoppingCart, Users, Trophy, Rocket, Plus, Minus
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Define pricing tiers for the home page
const pricingTiers = [
  {
    name: "Base Sync",
    price: "$29",
    button: "Initialize Access",
    highlight: false,
    features: ["Core Playbook PDF", "DNA Root Access (Basic)", "5 AGI Templates", "Sub-ms Latency Guide"]
  },
  {
    name: "Quantum Edge",
    price: "$49",
    button: "Upgrade Sync",
    highlight: true,
    features: ["Full Interactive Playbook", "Unlimited DNA Storage", "50+ AGI Agent Clusters", "Priority Mesh Routing", "Commercial License"]
  },
  {
    name: "Cluster Prime",
    price: "$99",
    button: "Max Sync",
    highlight: false,
    features: ["Everything in Edge", "1-on-1 Architect Sync", "Custom Node Deployment", "Trillion-Token Support", "Beta Protocol Access"]
  }
];

const Home: React.FC = () => {
  const [syncProgress, setSyncProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSyncProgress(prev => (prev >= 100 ? 100 : prev + 0.3));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const handleBuy = () => navigate('/checkout');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubscribed(true);
  };

  const features = [
    { icon: <Cpu />, title: "AGI Agent Core", desc: "Trillion-token reasoning for complex business workflows and autonomous scaling." },
    { icon: <Database />, title: "DNA Root Sync", desc: "Permanent storage on decentralized biological tiers for immutable digital assets." },
    { icon: <Zap />, title: "Sub-ms Latency", desc: "High-frequency operations optimized for real-time mesh networking." },
    { icon: <Shield />, title: "Quantum Security", desc: "Encryption layers designed for post-quantum threat environments." },
    { icon: <LayoutDashboard />, title: "Modular Stack", desc: "Pre-synced building blocks for rapid agency and cluster deployment." },
    { icon: <Cloud />, title: "Decentralized DNS", desc: "Domain logic rooted in global PProtocol mesh nodes." },
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "CTO, NeuralNode", text: "The PProtocol playbook changed how we think about agent scaling. We doubled our throughput in 3 weeks.", avatar: "https://i.pravatar.cc/150?u=sarah" },
    { name: "David Chen", role: "Independent Developer", text: "Finally, a guide that actually understands the trillion-token economy. The DNA server insights are mind-blowing.", avatar: "https://i.pravatar.cc/150?u=david" },
    { name: "Elena Rodriguez", role: "Product Manager", text: "This isn't just an e-book; it's a blueprint for the next decade of software. Pure gold.", avatar: "https://i.pravatar.cc/150?u=elena" }
  ];

  const faqs = [
    { q: "Is this suitable for beginners?", a: "Yes. While we dive into advanced trillion-token concepts, the playbook starts with fundamental mental models for the AGI era." },
    { q: "What format is the E-book in?", a: "You'll receive high-fidelity PDF, EPUB, and a custom interactive console version hosted on our DNA nodes." },
    { q: "Do I get lifetime updates?", a: "Yes. Every sync cycle (major version update) is pushed to your terminal free of charge." },
    { q: "Can I use the agent templates for commercial projects?", a: "Absolutely. All templates included in the 'Quantum Edge' tier are licensed for commercial deployment." }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white pb-12 overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 lg:pt-16 lg:pb-20 bg-quantum border-b border-blue-50">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white border border-blue-100 px-4 py-1.5 rounded-full shadow-sm">
                <Activity size={14} className="text-blue-600 animate-pulse" />
                <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest mono">
                  Status: {syncProgress.toFixed(1)}% Synced
                </span>
              </div>
              <h1 className="text-6xl lg:text-[90px] font-black text-blue-900 leading-[0.85] tracking-tighter italic uppercase">
                THE <span className="text-gradient">ULTIMATE</span> <br/> PRODUCTIVITY.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium italic">
                Master the trillion-token economy with the PProtocol Playbook. The world's most advanced guide for high-demand scaling.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-4">
                <button 
                  onClick={handleBuy}
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-base hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg active:scale-95 transform group"
                >
                  <Lock size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Secure Access</span>
                </button>
                <Link to="/marketplace" className="bg-white text-blue-600 border-2 border-blue-50 px-8 py-4 rounded-2xl font-black text-base hover:bg-blue-50 transition-all text-center flex items-center justify-center space-x-2 shadow-sm">
                  <ShoppingCart size={20} />
                  <span>Marketplace</span>
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-[8px] border-white transform transition-all duration-1000 group-hover:rotate-1 group-hover:scale-[1.01]">
                <img src="https://picsum.photos/seed/pp_v2_hero/1200/1000" alt="Quantum AI Visualization" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <div className="py-12 border-b border-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Trusted by Global Clusters</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
             <div className="font-black text-2xl italic flex items-center gap-2"><Globe size={24}/> NEURAL</div>
             <div className="font-black text-2xl italic flex items-center gap-2"><Binary size={24}/> MATRIX</div>
             <div className="font-black text-2xl italic flex items-center gap-2"><Database size={24}/> VAULT</div>
             <div className="font-black text-2xl italic flex items-center gap-2"><Cpu size={24}/> ATOM</div>
             <div className="font-black text-2xl italic flex items-center gap-2"><Zap size={24}/> BOLT</div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="bg-blue-950 text-blue-400 py-3 border-y border-blue-800 overflow-hidden whitespace-nowrap shadow-xl relative z-20">
        <div className="inline-block animate-marquee mono text-[10px] font-black uppercase tracking-[0.5em] px-8">
          <Sparkles size={12} className="inline mr-2 text-blue-500" /> RECENT SYNC: AGENT-X920 GENERATED 14.2GB DATA ... CLUSTER STATUS: VERIFIED ... DNA STORAGE LOAD: 12.4% ...
        </div>
        <div className="inline-block animate-marquee mono text-[10px] font-black uppercase tracking-[0.5em] px-8">
          <Sparkles size={12} className="inline mr-2 text-blue-500" /> RECENT SYNC: AGENT-X920 GENERATED 14.2GB DATA ... CLUSTER STATUS: VERIFIED ... DNA STORAGE LOAD: 12.4% ...
        </div>
      </div>

      {/* Who is this for? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl lg:text-6xl font-black text-blue-900 italic tracking-tighter uppercase leading-none">Who is this for?</h2>
             <p className="text-xl text-slate-500 font-medium italic">Engineered for the high-demand digital elite.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-10 bg-slate-50 rounded-[40px] border border-blue-50 space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white"><Terminal size={32}/></div>
                <h3 className="text-2xl font-black italic uppercase text-blue-900">Developers</h3>
                <p className="text-sm text-slate-500 font-medium italic leading-relaxed">Scaling your software with agent-led autonomous workflows.</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[40px] border border-blue-50 space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white"><Users size={32}/></div>
                <h3 className="text-2xl font-black italic uppercase text-blue-900">Founders</h3>
                <p className="text-sm text-slate-500 font-medium italic leading-relaxed">Building lean companies using the trillion-token productivity stack.</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[40px] border border-blue-50 space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white"><BookOpen size={32}/></div>
                <h3 className="text-2xl font-black italic uppercase text-blue-900">Creators</h3>
                <p className="text-sm text-slate-500 font-medium italic leading-relaxed">Monetizing high-fidelity digital assets with sub-ms sync speed.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-blue-900 italic tracking-tighter uppercase leading-none">The Proof</h2>
            <div className="flex gap-1 text-blue-600"><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/><Star fill="currentColor" size={24}/></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-blue-50 shadow-sm relative space-y-6">
                <Quote className="absolute top-6 right-8 text-blue-100" size={48} />
                <p className="text-base text-slate-600 font-medium italic leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center space-x-4 pt-4 border-t border-blue-50">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
                  <div>
                    <h4 className="font-black text-blue-900 text-sm uppercase italic">{t.name}</h4>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-blue-900 italic tracking-tighter uppercase text-center mb-12">Cluster Intelligence FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden border border-blue-50">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="font-black text-blue-900 italic uppercase text-sm">{f.q}</span>
                  {openFaq === i ? <Minus className="text-blue-600" size={20} /> : <Plus className="text-blue-600" size={20} />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm font-medium italic leading-relaxed animate-in slide-in-from-top-2 duration-300">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Magnet */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-900 rounded-[50px] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-8">
               <Mail size={48} className="mx-auto text-blue-300" />
               <div className="space-y-4">
                 <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter uppercase leading-tight">Free Chapter Sync</h2>
                 <p className="text-lg text-blue-100 font-medium italic max-w-xl mx-auto">Get the first 20 pages of the PProtocol Playbook delivered to your inbox instantly.</p>
               </div>
               
               {isSubscribed ? (
                 <div className="bg-white/10 p-6 rounded-3xl border border-white/20 animate-in zoom-in-95 duration-500">
                    <CheckCircle2 className="mx-auto text-green-400 mb-4" size={40} />
                    <h4 className="text-xl font-black uppercase italic tracking-tighter">Sync Successful</h4>
                    <p className="text-xs text-blue-200 mt-2 mono">Check your neurological vault (email).</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email node..." 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-blue-400 transition-all text-white placeholder:text-blue-300 italic font-medium"
                    />
                    <button type="submit" className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                      Sync
                    </button>
                 </form>
               )}
               <p className="text-[8px] font-black uppercase tracking-[0.4em] text-blue-300/50">NO SPAM. ONLY PURE DATA. UNSUBSCRIBE ANYTIME.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Compact */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-blue-900 italic tracking-tighter uppercase mb-12">Choose Your Access Level</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`p-8 rounded-[40px] border-4 flex flex-col text-left transition-all duration-700 ${tier.highlight ? 'border-blue-600 shadow-xl bg-white scale-105 relative z-10' : 'border-white bg-white/50 backdrop-blur-sm hover:bg-white hover:border-blue-100'}`}>
                {tier.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-lg">
                    Best Sync
                  </div>
                )}
                <h3 className="text-[10px] font-black text-blue-900 uppercase italic mb-3 tracking-[0.3em]">{tier.name}</h3>
                <div className="text-5xl font-black text-blue-600 mb-6 tracking-tighter leading-none">{tier.price}</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start text-[11px] text-slate-600 font-black italic leading-tight">
                      <Check size={14} className="text-blue-500 mr-3 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleBuy}
                  className={`w-full py-4 rounded-xl font-black text-[10px] transition-all text-center uppercase tracking-[0.2em] shadow-md flex items-center justify-center gap-2 active:scale-95 ${tier.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-black'}`}
                >
                  <Lock size={14} />
                  {tier.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-blue-50 text-center">
         <Trophy size={48} className="mx-auto text-blue-600 mb-6" />
         <h2 className="text-5xl lg:text-7xl font-black text-blue-900 italic uppercase tracking-tighter leading-none mb-6">READY TO SCALE?</h2>
         <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium italic leading-relaxed mb-10">Join 28B nodes in the PProtocol ecosystem. The future of productivity is autonomous.</p>
         <button 
           onClick={handleBuy}
           className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg uppercase tracking-[0.2em] shadow-xl hover:bg-blue-700 transition-all active:scale-95 flex items-center space-x-3 mx-auto"
         >
           <Rocket size={24} />
           <span>Sync Now</span>
         </button>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 60s linear infinite; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const LayoutDashboard = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" />
  </svg>
);

const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

export default Home;
