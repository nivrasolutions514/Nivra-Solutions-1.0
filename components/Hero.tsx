import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Send } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-indigo-900/20">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Now powered by Gemini 2.5
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Automate your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-500 to-cyan-400">
                customer interactions
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
              Nivra Solutions delivers next-gen AI chatbots, automated booking engines, review management, and AI-driven content scaling for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#live-demo"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
              >
                Try Live Demo <ArrowRight size={18} />
              </a>
              <a
                href="#plans"
                className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white rounded-full font-semibold transition-all flex items-center justify-center"
              >
                View Plans
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> 24/7 Availability
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> Instant Setup
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> Cancel Anytime
              </div>
            </div>
        </div>

        {/* Hero Image / Chat Mockup */}
        <div className="relative animate-float hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
            {/* Mockup Header */}
            <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 text-xs text-slate-500 font-mono">NivraBot v2.5</div>
            </div>
            
            {/* Mockup Body */}
            <div className="p-6 space-y-4 h-[350px] bg-slate-900/90">
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs">AI</div>
                 <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200 shadow-md max-w-[80%]">
                    Hello! Welcome to Nivra Solutions. How can I help you automate your business today?
                 </div>
              </div>

              <div className="flex gap-3 flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">User</div>
                 <div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-md max-w-[80%]">
                    I need to improve my booking rates. Can you help?
                 </div>
              </div>

              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs">AI</div>
                 <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200 shadow-md max-w-[80%]">
                    Absolutely! Our Automated Booking module integrates directly with your calendar and increases conversion by up to 45%.
                 </div>
              </div>
              
              <div className="flex justify-center my-2">
                 <span className="text-xs text-slate-600">NivraBot is typing...</span>
              </div>
            </div>

            {/* Mockup Input */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex gap-2">
                <input type="text" disabled placeholder="Type a message..." className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full text-slate-400 focus:outline-none cursor-not-allowed" />
                <button className="p-2 bg-indigo-600 rounded-lg text-white opacity-50 cursor-not-allowed">
                    <Send size={18} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;