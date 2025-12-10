import React from 'react';
import { ArrowUpRight, Download, Clock } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 6390 },
  { name: 'Sun', value: 3490 },
];

const ClientPortal: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold mb-2">Client Portal Analytics</h2>
           <p className="text-slate-400">Real-time insights into your automation performance.</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:text-white flex items-center gap-2 border border-slate-700">
                <Clock size={16} /> Last 30 Days
            </button>
            <button className="px-4 py-2 bg-indigo-600/10 text-indigo-400 rounded-lg text-sm hover:bg-indigo-600/20 flex items-center gap-2 border border-indigo-500/30">
                <Download size={16} /> Export Report
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* KPI Card 1 */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
                <div className="text-slate-400 text-sm font-medium">Avg Response Time</div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ArrowUpRight size={12} /> 12%
                </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2s</div>
            <div className="h-10 w-full opacity-50">
               <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={data}>
                     <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2} />
                   </AreaChart>
               </ResponsiveContainer>
            </div>
        </div>

        {/* KPI Card 2 */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
                <div className="text-slate-400 text-sm font-medium">Customer Satisfaction</div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ArrowUpRight size={12} /> 4.8%
                </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
             <div className="h-10 w-full opacity-50">
               <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={data}>
                     <Area type="monotone" dataKey="value" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} strokeWidth={2} />
                   </AreaChart>
               </ResponsiveContainer>
            </div>
        </div>

        {/* KPI Card 3 */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
                <div className="text-slate-400 text-sm font-medium">Booking Conversion</div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ArrowUpRight size={12} /> 24%
                </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">32.5%</div>
             <div className="h-10 w-full opacity-50">
               <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={data}>
                     <Area type="monotone" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2} />
                   </AreaChart>
               </ResponsiveContainer>
            </div>
        </div>

        {/* KPI Card 4 */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
                <div className="text-slate-400 text-sm font-medium">Content ROI</div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ArrowUpRight size={12} /> 8%
                </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">12x</div>
             <div className="h-10 w-full opacity-50">
               <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={data}>
                     <Area type="monotone" dataKey="value" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} strokeWidth={2} />
                   </AreaChart>
               </ResponsiveContainer>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ClientPortal;