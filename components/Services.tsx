import React from 'react';
import { MessageSquare, Calendar, Star, PenTool, Layout, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Intelligent Chatbots',
      description: '24/7 customer support driven by advanced NLP. Handles 80% of queries instantly without human intervention.',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Automated Booking',
      description: 'Seamless calendar integration that lets clients book appointments directly through chat interactions.',
    },
    {
      icon: <Star size={24} />,
      title: 'Review Management',
      description: 'Automatically request reviews from happy customers and manage your reputation across all platforms.',
    },
    {
      icon: <PenTool size={24} />,
      title: 'AI Content Studio',
      description: 'Generate SEO-optimized blog posts, social media updates, and marketing copy in seconds.',
    },
    {
      icon: <Layout size={24} />,
      title: 'Client Portal',
      description: 'Give your clients a branded dashboard to view their project status, invoices, and analytics.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Website Integration',
      description: 'Embed our tools into any website (WordPress, Shopify, Custom) with a single line of code.',
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Everything you need to scale your operations efficiently using cutting-edge AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>

            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-indigo-500/30">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;