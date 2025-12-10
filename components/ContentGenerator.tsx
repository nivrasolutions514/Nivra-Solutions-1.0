import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw } from 'lucide-react';

const ContentGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedContent(null);
    setTimeout(() => {
      setGeneratedContent(
        "Here are 5 strategies to improve your SaaS retention:\n\n1. Personalized Onboarding: Tailor the first login experience.\n2. In-App Messaging: Guide users to key features.\n3. Proactive Support: Reach out before they encounter issues.\n4. Community Building: Create a space for users to connect.\n5. Regular Updates: Show constant value addition.\n\nReady to implement these with Nivra Solutions?"
      );
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Input */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
             <Sparkles size={14} /> AI Content Studio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Create marketing assets in seconds</h2>
          <p className="text-slate-400 mb-8">
            Select your parameters and let our Gemini-powered engine write high-converting copy for you.
          </p>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl">
             <div>
                <label className="block text-sm text-slate-400 mb-2">Content Type</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>Blog Post Outline</option>
                    <option>Social Media Caption</option>
                    <option>Email Newsletter</option>
                </select>
             </div>
             <div>
                <label className="block text-sm text-slate-400 mb-2">Topic</label>
                <input type="text" placeholder="e.g., SaaS Retention Strategies" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
             </div>
             <div>
                <label className="block text-sm text-slate-400 mb-2">Tone</label>
                <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg border border-indigo-500 bg-indigo-500/10 text-indigo-300 text-sm font-medium">Professional</button>
                    <button className="flex-1 py-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-400 text-sm hover:bg-slate-700">Witty</button>
                    <button className="flex-1 py-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-400 text-sm hover:bg-slate-700">Urgent</button>
                </div>
             </div>
             
             <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg text-white font-semibold shadow-lg shadow-indigo-600/20 hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
             >
                {isGenerating ? (
                    <><RefreshCw className="animate-spin" size={20}/> Generating...</>
                ) : (
                    <><Sparkles size={20}/> Generate Content</>
                )}
             </button>
          </div>
        </div>

        {/* Right: Output */}
        <div className="relative">
             <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-20 pointer-events-none"></div>
             <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden h-[400px] flex flex-col">
                <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    </div>
                    <button className="text-slate-500 hover:text-indigo-400 transition-colors">
                        <Copy size={18} />
                    </button>
                </div>
                <div className="p-6 font-mono text-sm text-slate-300 leading-relaxed overflow-y-auto flex-1">
                    {generatedContent ? (
                        <div className="whitespace-pre-line animate-pulse-slow text-indigo-100">
                            {generatedContent}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-600">
                            <Sparkles size={48} className="mb-4 opacity-20" />
                            <p>Result will appear here...</p>
                        </div>
                    )}
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;