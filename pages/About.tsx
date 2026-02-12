
import React from 'react';
import { Cpu, Zap, Target, Mail, Activity, Database, Shield, Globe, Star, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-blue-900">
      {/* Introduction */}
      <section className="py-16 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-4 py-1 rounded-full border border-blue-600/20 mb-2">
            <Activity size={14} className="text-blue-600 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest mono text-blue-600">Established Node: 2025</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-blue-900 mb-4 italic tracking-tighter leading-none uppercase">The Protocol.</h1>
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic max-w-2xl mx-auto">
            PProtocol isn't a company; it's a decentralized infrastructure designed for the trillion-token productivity era. 
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl font-black italic uppercase tracking-tighter text-blue-900">Why PProtocol?</h2>
               <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                 Traditional productivity tools were built for humans typing on keyboards. We built PProtocol for humans orchestrating autonomous agent clusters. Our mission is to provide the blueprints for this transition.
               </p>
               <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-black italic text-blue-600 leading-none">28B</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mono">Active Nodes</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-black italic text-blue-600 leading-none">1.2T</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mono">Tokens Optimized</div>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-blue-50 rounded-[48px] blur-xl"></div>
               <img src="https://picsum.photos/seed/pp_about_v2/1000/800" alt="Core Infrastructure" className="relative rounded-[40px] shadow-2xl border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Architect */}
      <section className="py-20 bg-slate-50 border-y border-blue-50">
        <div className="max-w-5xl mx-auto px-4">
           <div className="bg-white p-10 lg:p-16 rounded-[60px] shadow-xl flex flex-col md:flex-row items-center gap-12 border border-blue-50">
              <div className="w-48 h-48 rounded-[40px] overflow-hidden border-4 border-blue-100 flex-shrink-0 shadow-lg">
                <img src="https://i.pravatar.cc/300?u=architect" alt="Founder" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="space-y-6">
                 <div className="space-y-1">
                    <h3 className="text-3xl font-black text-blue-900 italic uppercase tracking-tighter">The Architect</h3>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mono">Node Origin: SF-CLUSTER-1</p>
                 </div>
                 <p className="text-base text-slate-500 font-medium italic leading-relaxed">
                   "PProtocol was born out of a simple observation: we have more processing power than we know how to use. The Playbook is my attempt to bridge the gap between trillion-token potential and actual daily output."
                 </p>
                 <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-blue-600 text-[10px] font-black uppercase tracking-widest"><Star size={14}/> 15 Years in AI</div>
                    <div className="flex items-center gap-1 text-blue-600 text-[10px] font-black uppercase tracking-widest"><Users size={14}/> 10k+ Syncs</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-10">
          <Target size={64} className="mx-auto text-blue-400" />
          <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter uppercase leading-none">The Vision</h2>
          <p className="text-2xl text-blue-100 opacity-90 italic leading-snug">
            "To build the first productivity infrastructure where human intent is amplified by trillion-scale agentic intelligence."
          </p>
          <div className="flex justify-center gap-12 pt-8">
             <div className="text-center">
                <div className="text-5xl font-black italic mb-2">100%</div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 mono">Autonomous</div>
             </div>
             <div className="text-center">
                <div className="text-5xl font-black italic mb-2">∞</div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 mono">Scalability</div>
             </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Globe size={400} className="absolute -bottom-40 -left-40 text-white" />
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="bg-slate-50 p-12 rounded-[50px] border border-blue-100 shadow-inner">
              <Mail size={40} className="text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-black text-blue-900 italic tracking-tighter uppercase mb-4">Connect with the Cluster</h2>
              <p className="text-base text-gray-600 max-w-lg mx-auto mb-10 font-medium italic">Have questions about the Playbook or the DNA server sync? Our agent cluster is ready.</p>
              <a href="mailto:sync@pprotocol.ai" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl active:scale-95 transform uppercase tracking-widest">
                Email the Protocol
              </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
