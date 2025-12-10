import React from 'react';
import { BookOpen, Settings, CalendarCheck, ArrowRight } from 'lucide-react';

const KnowledgeBase: React.FC = () => {
  const articles = [
    {
      icon: <BookOpen size={24} />,
      title: 'Getting Started with Nivra',
      description: 'A comprehensive guide to setting up your account, importing contacts, and launching your first bot.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Customizing Your Chatbot',
      description: 'Learn how to tweak the personality, tone, and response handling of your AI assistant.',
    },
    {
      icon: <CalendarCheck size={24} />,
      title: 'Setting Up Automated Appointments',
      description: 'Connect your Google or Outlook calendar to start accepting bookings 24/7.',
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
            <h2 className="text-3xl font-bold mb-2">Knowledge Base</h2>
            <p className="text-slate-400">Master the platform with our detailed guides.</p>
        </div>
        <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 mt-4 md:mt-0 transition-colors">
            View all articles <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              {article.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{article.description}</p>
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide group-hover:text-indigo-400">Read Guide</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;