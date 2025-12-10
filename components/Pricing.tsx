import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/mo',
      features: ['24/7 Chatbot', 'Basic Analytics', 'Email Support', '1,000 conversations/mo'],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$599',
      period: '/mo',
      features: [
        'Chatbot',
        'Booking System',
        'Review Management',
        'Advanced Analytics',
        'Priority Support',
        'Unlimited conversations',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'All Growth features',
        'AI Content Studio',
        'Account Manager',
        'Fine-tuning',
        'API Access',
        'White-label option',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
        <p className="text-slate-400">Choose the plan that fits your scaling needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border transition-all duration-300 ${
              plan.highlighted
                ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-900/20 scale-105 z-10'
                : 'bg-slate-950 border-slate-800 hover:border-slate-700'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                {plan.badge}
              </div>
            )}

            <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-slate-500 ml-1">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-slate-400">
                  <Check size={16} className="text-indigo-400 mr-3 mt-1 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.highlighted
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;