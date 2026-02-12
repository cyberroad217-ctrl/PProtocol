
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Database, Cpu, Activity, Zap, Radio, Sparkles, Loader2, Network, Binary, BarChart3, 
  AlertCircle, MessageSquare
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Console: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'stack' | 'oracle' | 'telemetry'>('oracle');
  const [insight, setInsight] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const generateAIInsight = async () => {
    setIsGenerating(true);
    setInsight('');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Provide a hyper-futuristic productivity 'cheat code' or technical strategy for building software empires using trillions of tokens. Professional AGI tone. Under 50 words.",
        config: {
          systemInstruction: "You are the PProtocol Oracle. Your tone is elite, precise, and futuristic. You focus on trillion-token optimization and mesh-node scaling.",
          temperature: 0.9,
        },
      });
      setInsight(response.text || "PROTOCOL_SYNC_TIMEOUT");
    } catch (error) {
      console.error(error);
      setInsight("CLUSTER_ACCESS_DENIED_BY_ROOT");
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const messages = [
      "INITIALIZING OPS CORE v4.2...",
      "DNA STORAGE LOAD: 14.2% [OPTIMAL]",
      "VECTOR SEARCH INITIATED (28B NODES)",
      "ROUTING TO AGI CLUSTER 1/4435664...",
      "SESSION CACHE → EMBEDDINGS FAN-OUT",
      "QUANTUM NODE 8829-X ACTIVE",
      "DNA SERVER HANDSHAKE SUCCESSFUL",
      "INTEGRITY CHECK: NO ANOMALIES DETECTED",
      "LATENCY OPTIMIZATION: 0.1ms ACHIEVED",
    ];

    const interval = setInterval(() => {
      const msg = `[${new Date().toLocaleTimeString()}] ${messages[Math.floor(Math.random() * messages.length)]}`;
      setLogs(prev => [...prev.slice(-15), msg]);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-16 pb-24 font-mono selection:bg-blue-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-blue-400">
              <Radio size={18} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] mono">NODE-8829-X SYNCED</span>
            </div>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">Console</h1>
          </div>
          
          <div className="bg-slate-900/60 p-1.5 rounded-[28px] flex space-x-1.5 border border-slate-800 backdrop-blur-3xl shadow-xl">
            <TabButton active={activeTab === 'oracle'} onClick={() => setActiveTab('oracle')} icon={<Sparkles size={16} />} label="Oracle" />
            <TabButton active={activeTab === 'stack'} onClick={() => setActiveTab('stack')} icon={<Network size={16} />} label="Mesh" />
            <TabButton active={activeTab === 'telemetry'} onClick={() => setActiveTab('telemetry')} icon={<BarChart3 size={16} />} label="Stats" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {activeTab === 'oracle' && (
              <div className="bg-gradient-to-br from-blue-600/10 to-transparent border-2 border-blue-500/10 rounded-[48px] p-10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                  <MessageSquare size={160} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black italic tracking-tighter uppercase text-blue-400 flex items-center">
                      <Binary className="mr-3" size={24} />
                      Gemini Oracle
                    </h2>
                    <div className="flex items-center space-x-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping"></div>
                      <span>SYNC_READY</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/90 border-2 border-slate-800 rounded-[36px] p-10 min-h-[200px] flex items-center justify-center mb-10 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 animate-pulse"></div>
                    {isGenerating ? (
                      <div className="flex flex-col items-center space-y-4">
                        <Loader2 className="animate-spin text-blue-500" size={48} />
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500 animate-pulse">DECODING...</span>
                      </div>
                    ) : insight ? (
                      <div className="space-y-6 text-center max-w-2xl">
                        <p className="text-xl italic font-bold leading-relaxed text-blue-50 tracking-tight">"{insight}"</p>
                        <div className="flex items-center justify-center space-x-4">
                           <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest mono bg-slate-800 px-4 py-1.5 rounded-full">Source: Gemini-3</div>
                           <div className="text-[8px] font-black text-green-500 uppercase tracking-widest mono bg-green-500/10 px-4 py-1.5 rounded-full">Verified</div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-slate-800 rounded-full mx-auto flex items-center justify-center text-slate-600 shadow-xl">
                          <Zap size={32} />
                        </div>
                        <span className="text-slate-500 italic block text-lg font-medium">Initiate sync for oracle insights.</span>
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={generateAIInsight}
                    disabled={isGenerating}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-[24px] font-black text-base uppercase tracking-widest transition-all shadow-xl flex items-center space-x-4 active:scale-95 disabled:opacity-50 group/btn mx-auto lg:mx-0"
                  >
                    <Zap size={20} className="fill-white group-hover/btn:scale-125 transition-transform" />
                    <span>Synchronize</span>
                  </button>
                </div>
              </div>
            )}

            {/* Terminal */}
            <div className="bg-slate-900/40 border-2 border-slate-800 rounded-[40px] overflow-hidden shadow-xl">
               <div className="bg-slate-900 px-8 py-4 border-b border-slate-800 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/30"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 border border-green-500/30"></div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-500 mono">NODE_TELEMETRY // v4.2</span>
               </div>
               <div className="p-10 h-[300px] overflow-y-auto space-y-4 text-[12px] text-blue-400 scroll-smooth custom-scrollbar" ref={scrollRef}>
                  {logs.map((log, i) => (
                    <div key={i} className="flex items-start space-x-6 opacity-60 hover:opacity-100 transition-opacity group">
                      <span className="text-slate-800 font-black shrink-0 group-hover:text-blue-600 transition-colors">&gt;&gt;</span>
                      <span className="italic leading-relaxed font-bold tracking-tight">{log}</span>
                    </div>
                  ))}
                  <div className="animate-pulse text-blue-600 text-2xl">_</div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-slate-900/80 border border-slate-800 p-10 rounded-[48px] shadow-xl backdrop-blur-3xl sticky top-24">
              <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-10 flex items-center">
                <Activity className="mr-4" size={16} />
                Health
              </h3>
              <div className="space-y-10">
                 <MetricGauge label="Throughput" value="14.2 GB/s" percentage={88} />
                 <MetricGauge label="Mesh Load" value="94.1%" percentage={94} />
                 <MetricGauge label="Sync" value="0.1 ms" percentage={100} />
              </div>

              <div className="mt-12 p-8 bg-blue-600/10 border border-blue-500/30 rounded-[36px] flex flex-col items-center text-center shadow-inner">
                <div className="w-12 h-12 bg-blue-600 rounded-[16px] flex items-center justify-center text-white mb-6 shadow-xl">
                  <Binary size={24} />
                </div>
                <h4 className="text-xl font-black italic tracking-tighter uppercase mb-2">Alpha-Rank</h4>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-6">
                   <div className="h-full bg-blue-500 w-3/4 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-black text-blue-400 mono uppercase tracking-widest">
                   <AlertCircle size={12} />
                   <span>Reset: 02:44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
    </div>
  );
};

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex items-center space-x-3 px-8 py-3.5 rounded-[22px] text-[11px] font-black transition-all transform active:scale-95 ${active ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-500'}`}
  >
    {icon}
    <span className="uppercase tracking-[0.2em]">{label}</span>
  </button>
);

const MetricGauge: React.FC<{ label: string; value: string; percentage: number }> = ({ label, value, percentage }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-end">
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
      <span className="text-xl font-black italic text-blue-400 tracking-tighter leading-none">{value}</span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
      <div 
        className="h-full bg-blue-500 transition-all duration-[3000ms] ease-out shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default Console;
