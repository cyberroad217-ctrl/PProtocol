
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, User, ArrowRight, ArrowLeft, Cpu, Zap, Activity, Database, Share2, BookOpen, CheckCircle2 } from 'lucide-react';

const TOTAL_BLOG_PAGES = 364494774;

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  image: string;
  nodeId: string;
}

const Blog: React.FC = () => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'deep-stream'>('list');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const generateLongContent = (title: string) => {
    const segments = [
      `The emergence of ${title} represents a paradigm shift in trillion-token productivity. Our quantum AI agents have identified correlations between DNA-based storage and sub-ms latency.`,
      `In AGI research, we consider chain-of-thought algorithms governing autonomous creation. Every node in the PProtocol cluster simulates trillions of potential outcomes.`,
      `Decentralized DNS tiers ensure research nodes are immutable. We are moving away from cold storage towards 'Hot Layer' synthetic queries updated every cycle.`,
      `Multi-trillion quantum agents act as the connective tissue between disparate data structures. Software that evolves is the goal for modern developers.`,
      `Integration with biological servers is the final frontier. Memory DNA storage allows for petabyte-scale density in a single local node.`
    ];
    return [...segments, ...segments, ...segments];
  };

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      const generated = Array.from({ length: 4 }).map((_, i) => {
        const title = [
          'Quantum DNA Algorithms',
          'Trillion-Token Reasoning Sync',
          'Autonomous AGI Node Content',
          'Neural DNS Storage Decoding'
        ][i % 4];
        return {
          id: page * 100 + i,
          nodeId: `NODE-${page}-${i}-${Math.floor(Math.random()*999)}`,
          title: `[RESEARCH] ${title}`,
          excerpt: `Exploring the core of digital ecosystems with trillion-token AGI agents.`,
          content: generateLongContent(title),
          author: `AGENT-NODE-${Math.floor(Math.random() * 999)}`,
          date: "SYNCED 10m AGO",
          image: `https://picsum.photos/seed/ppblog_v11_${page}_${i}/1200/600`
        };
      });
      setArticles(generated);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
    return () => clearTimeout(timeout);
  }, [page]);

  const handleNodeClick = (id: number) => {
    const target = articles.find(a => a.id === id) || articles[0];
    setSelectedArticle(target);
    setViewMode('deep-stream');
  };

  const handleBuy = () => navigate('/checkout');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubscribed(true);
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-blue-900 overflow-x-hidden">
      {/* Blog Header */}
      <section className="bg-blue-900 py-12 text-white border-b-8 border-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl text-center md:text-left space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-600/30 px-4 py-1.5 rounded-full border border-blue-400/30">
              <Activity size={14} className="text-blue-300 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest mono text-blue-100">Neurological Vault Sync</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none">The Lab</h1>
            <p className="text-blue-100 text-xl opacity-90 italic font-medium">
              AGI insights from 1.2T token analysis.
            </p>
          </div>
          <div className="bg-slate-800/80 p-6 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-xl">
             <div className="text-[9px] font-black text-blue-400 mono uppercase mb-4 tracking-widest">Node Mesh Explorer</div>
             <div className="grid grid-cols-5 gap-2">
               {Array.from({ length: 10 }).map((_, i) => (
                 <button 
                   key={i}
                   onClick={() => setPage(p => p + 1)}
                   className="w-9 h-9 rounded-lg flex items-center justify-center transition-all bg-slate-700 hover:bg-blue-600 hover:scale-110 active:scale-90 shadow-md"
                 >
                   <Cpu size={16} className="text-slate-400" />
                 </button>
               ))}
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {viewMode === 'list' ? (
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-16">
              {isLoading ? (
                 <div className="flex flex-col items-center justify-center py-24">
                    <Activity className="text-blue-600 animate-spin mb-6" size={48} />
                    <p className="text-blue-900 text-base font-black mono italic tracking-tighter">DECODING STREAMS...</p>
                 </div>
              ) : (
                <div className="space-y-12">
                  {articles.map((article) => (
                    <article key={article.id} className="group relative">
                      <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-[40px] mb-6 shadow-xl border-4 border-slate-50">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                          <h2 className="text-3xl lg:text-4xl font-black text-white mb-2 leading-none tracking-tighter italic uppercase">
                            {article.title}
                          </h2>
                          <div className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] mono">{article.author} // {article.nodeId}</div>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 mb-6 font-medium italic leading-relaxed">{article.excerpt}</p>
                      <button 
                        onClick={() => handleNodeClick(article.id)}
                        className="inline-flex items-center space-x-3 text-blue-600 font-black text-xs hover:translate-x-2 transition-all italic uppercase tracking-widest border-b-2 border-blue-100 pb-1"
                      >
                        <span>Deep Node Stream</span>
                        <ArrowRight size={20} />
                      </button>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-12 pt-10 border-t-4 border-blue-50 flex flex-col items-center">
                <div className="flex items-center space-x-4">
                  <button onClick={() => setPage(p => Math.max(1, p-1))} className="w-12 h-12 rounded-xl border-2 border-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"><ArrowLeft size={24}/></button>
                  <div className="px-8 py-3 bg-blue-50 rounded-2xl font-black text-blue-900 text-base shadow-inner">
                    PAGE {page.toLocaleString()}
                  </div>
                  <button onClick={() => setPage(p => p+1)} className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all"><ArrowRight size={24}/></button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-50 p-8 rounded-[48px] border border-blue-100 sticky top-24 space-y-8">
                 <div className="space-y-4">
                    <h3 className="text-xl font-black text-blue-900 italic tracking-tighter uppercase flex items-center">
                      <Database size={20} className="mr-3 text-blue-600" />
                      Intelligence
                    </h3>
                    <p className="text-xs text-gray-500 font-medium italic leading-relaxed">Every research node is synced via DNA servers for permanent access.</p>
                 </div>
                 <div className="bg-blue-900 p-8 rounded-[32px] text-white shadow-xl space-y-4">
                    <Zap size={32} className="text-blue-400 fill-blue-400" />
                    <h3 className="text-xl font-black italic tracking-tighter uppercase leading-tight">Master Sync</h3>
                    <button onClick={handleBuy} className="w-full bg-white text-blue-900 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-blue-50 active:scale-95 transition-all">Buy Full Access</button>
                 </div>
              </div>
            </div>
          </div>
        ) : (
          /* Article Deep View */
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
            <button onClick={() => setViewMode('list')} className="mb-8 flex items-center space-x-3 text-blue-600 font-black italic hover:text-blue-800 transition-colors text-xs uppercase tracking-widest group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Streams</span>
            </button>

            {selectedArticle && (
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-blue-500 font-black mono text-[9px] uppercase tracking-[0.4em] bg-blue-50 w-fit px-4 py-1.5 rounded-full border border-blue-100">
                    <Activity size={12} /> <span>{selectedArticle.nodeId}</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black text-blue-900 italic tracking-tighter uppercase leading-[0.85]">
                    {selectedArticle.title}
                  </h1>
                </div>
                
                <img src={selectedArticle.image} alt="Deep Mesh" className="w-full rounded-[48px] shadow-xl border-[8px] border-slate-50" />
                
                <div className="prose prose-lg max-w-none space-y-8 text-xl text-gray-700 font-light leading-relaxed italic">
                   {selectedArticle.content.map((p, i) => (
                     <p key={i} className="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                       {p}
                     </p>
                   ))}
                </div>

                {/* Newsletter CTA in Blog */}
                <div className="my-20 p-10 bg-slate-50 rounded-[40px] border border-blue-100 text-center space-y-6">
                   <h3 className="text-2xl font-black text-blue-900 italic uppercase tracking-tighter">Stay Synced with Research</h3>
                   <p className="text-sm text-slate-500 font-medium italic">Join 50k+ nodes receiving our weekly trillion-token insights.</p>
                   {isSubscribed ? (
                     <div className="flex items-center justify-center gap-2 text-green-600 font-black uppercase text-xs italic"><CheckCircle2 size={20}/> Node Subscribed</div>
                   ) : (
                     <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email node..." 
                          className="flex-grow bg-white border-2 border-blue-50 rounded-xl px-4 py-3 outline-none focus:border-blue-400 text-sm italic font-medium"
                        />
                        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-700 active:scale-95 transition-all">
                          Subscribe
                        </button>
                     </form>
                   )}
                </div>

                <div className="mt-16 p-12 bg-blue-900 rounded-[56px] text-white text-center shadow-2xl border-b-[12px] border-blue-700">
                   <Activity className="mx-auto text-blue-400 mb-6 animate-pulse" size={48} />
                   <h3 className="text-3xl font-black mb-4 italic tracking-tighter uppercase">SYNC_LIMIT</h3>
                   <button 
                     onClick={handleBuy} 
                     className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl italic uppercase tracking-widest flex items-center justify-center space-x-3 mx-auto"
                   >
                     <Zap size={20} className="fill-blue-900" />
                     <span>Buy Full Access</span>
                   </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
