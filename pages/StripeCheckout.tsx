
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, CreditCard, Lock, CheckCircle2, Loader2, Download } from 'lucide-react';

const StripeCheckout: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'form' | 'processing' | 'success'>('loading');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setStatus('form'), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    setTimeout(() => setStatus('success'), 3500);
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        <Loader2 className="animate-spin text-blue-600 mb-6" size={64} />
        <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter italic">Initializing Secure Sync...</h2>
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.4em] mt-4 mono">NEUROLOGICAL_VAULT_HANDSHAKE</p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center animate-in zoom-in-95 duration-1000">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-10 shadow-3xl border-4 border-green-200">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-6xl font-black text-blue-900 italic tracking-tighter uppercase mb-6">Access Granted</h1>
        <p className="text-slate-500 max-w-lg text-xl font-medium italic leading-relaxed mb-12">
          Your node has been authenticated. The trillion-token productivity assets are now ready for local synchronization.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
          <button className="flex-1 bg-blue-600 text-white py-6 rounded-[30px] font-black text-sm uppercase tracking-widest shadow-[0_30px_60px_-10px_rgba(0,85,255,0.4)] hover:bg-blue-700 transition-all flex items-center justify-center space-x-3 active:scale-95">
            <Download size={20} />
            <span>Download All Assets</span>
          </button>
          <button 
            onClick={() => navigate('/')}
            className="flex-1 bg-slate-100 text-blue-900 py-6 rounded-[30px] font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
          >
            Go to Console
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-blue-100">
      {/* Product View */}
      <div className="lg:w-1/2 bg-slate-50 p-12 lg:p-24 flex flex-col justify-between border-r border-slate-100">
        <div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-3 text-slate-400 hover:text-blue-600 transition-all mb-16 text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft size={18} />
            <span>Back to Ecosystem</span>
          </button>

          <div className="max-w-md mx-auto lg:mx-0 space-y-12">
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 bg-blue-600 rounded-[20px] flex items-center justify-center text-white font-black italic text-2xl shadow-2xl">P</div>
              <span className="text-2xl font-black text-blue-900 uppercase tracking-tighter italic">PProtocol Sync</span>
            </div>

            <div className="space-y-4">
              <span className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mono">Authorized Sync Amount</span>
              <h1 className="text-7xl font-black text-slate-900 tracking-tighter italic">$29.00</h1>
            </div>

            <div className="space-y-10">
              <div className="flex items-center justify-between py-6 border-b-2 border-slate-100 group">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center shadow-sm overflow-hidden group-hover:border-blue-200 transition-all">
                    <img src="https://picsum.photos/seed/ppstripe_v11/200/200" alt="Book" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 text-xl uppercase italic tracking-tighter">Quantum Playbook</h3>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mono mt-1">1.2T Token Master Tier</p>
                  </div>
                </div>
                <span className="font-black text-slate-800 text-xl">$29.00</span>
              </div>
              
              <div className="space-y-4 font-bold text-sm">
                <div className="flex justify-between text-slate-500 italic">
                  <span>Subtotal</span>
                  <span>$29.00</span>
                </div>
                <div className="flex justify-between text-slate-500 italic border-b border-slate-100 pb-4">
                  <span>Sync Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-2xl font-black pt-2 text-slate-900 uppercase italic tracking-tighter">
                  <span>Total Due</span>
                  <span>$29.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center space-x-6 text-slate-400 opacity-60">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified Cluster</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">No Recurring Fees</span>
        </div>
      </div>

      {/* Payment Form */}
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white relative">
        <div className="max-w-md mx-auto w-full">
          {status === 'processing' ? (
            <div className="py-24 flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
              <Loader2 className="animate-spin text-blue-600 mb-10" size={80} />
              <h2 className="text-4xl font-black text-blue-900 uppercase italic tracking-tighter">Syncing Node...</h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mt-6 mono animate-pulse">DO NOT REFRESH CLUSTER</p>
            </div>
          ) : (
            <form onSubmit={handlePayment} className="space-y-12 animate-in slide-in-from-right-10 duration-1000">
              <div className="space-y-10">
                <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Payment Credentials</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mono ml-1">Email Protocol</label>
                    <input 
                      type="email" 
                      required
                      placeholder="agent@neurological.vault"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-lg focus:ring-[8px] focus:ring-blue-100 border-slate-200 outline-none transition-all placeholder:text-slate-300 italic font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mono ml-1">Card Information</label>
                    <div className="relative border-2 border-slate-100 rounded-[25px] overflow-hidden focus-within:ring-[8px] focus-within:ring-blue-100 transition-all">
                      <div className="relative">
                        <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={24} />
                        <input 
                          type="text" 
                          required
                          placeholder="1234 5678 1234 5678"
                          className="w-full bg-white border-b-2 border-slate-100 pl-16 pr-6 py-6 text-lg outline-none placeholder:text-slate-200 italic font-medium"
                        />
                      </div>
                      <div className="flex">
                        <input 
                          type="text" 
                          required
                          placeholder="MM / YY"
                          className="w-1/2 bg-white px-8 py-6 text-lg outline-none border-r-2 border-slate-100 placeholder:text-slate-200 italic font-medium"
                        />
                        <input 
                          type="text" 
                          required
                          placeholder="CVC"
                          className="w-1/2 bg-white px-8 py-6 text-lg outline-none placeholder:text-slate-200 italic font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mono ml-1">Global Node Origin</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-lg focus:ring-[8px] focus:ring-blue-100 outline-none appearance-none cursor-pointer italic font-medium">
                      <option>United States Cluster</option>
                      <option>Global Alpha (Mesh)</option>
                      <option>Mars Horizon (Node-1)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-6 rounded-[30px] font-black text-xl uppercase tracking-[0.2em] shadow-[0_35px_70px_-15px_rgba(0,85,255,0.4)] hover:bg-blue-700 active:scale-[0.97] transition-all flex items-center justify-center space-x-4 group"
                >
                  <Lock size={24} className="group-hover:animate-pulse" />
                  <span>Authorize Sync</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-3 opacity-30">
                <ShieldCheck size={20} />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] mono">SECURED BY STRIPE CLONE PROTOCOL</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;
