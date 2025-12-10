import React from 'react';
import { Bot, Twitter, Linkedin, Github, Shield, FileText, RefreshCw, Activity, CreditCard, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <span className="text-xl font-bold text-white">Nivra Solutions</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering businesses with next-generation AI automation, chatbots, and analytics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#plans" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#live-demo" className="hover:text-indigo-400 transition-colors">Live Demo</a></li>
              <li><a href="#client-portal" className="hover:text-indigo-400 transition-colors">Client Portal</a></li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal & Support</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <Shield size={14} /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                   <FileText size={14} /> Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                   <RefreshCw size={14} /> Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                   <Activity size={14} /> System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Payments Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Accepted Payments</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  Visa
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  MasterCard
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  PayPal
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  Interac
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  Wire Transfer
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  Bitcoin (BTC)
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  Ethereum (ETH)
               </div>
               <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-center hover:border-indigo-500/30 transition-colors cursor-default">
                  Certified Check
               </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Lock size={12} /> Encrypted & Secure
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2025 Nivra Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>AI Automation</span>
             <span>•</span>
             <span>Chatbots</span>
             <span>•</span>
             <span>Booking</span>
             <span>•</span>
             <span>Content</span>
             <span>•</span>
             <span>Analytics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;