import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ClientPortal from './components/ClientPortal';
import ContentGenerator from './components/ContentGenerator';
import KnowledgeBase from './components/KnowledgeBase';
import LiveDemo from './components/LiveDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20">
          <Services />
        </section>

        <section id="plans" className="py-20 bg-slate-900/50">
          <Pricing />
        </section>

        <section id="client-portal" className="py-20">
          <ClientPortal />
        </section>

        <section id="content-generator" className="py-20 bg-slate-900/50">
          <ContentGenerator />
        </section>

        <section id="knowledge-base" className="py-20">
          <KnowledgeBase />
        </section>

        <section id="live-demo" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <LiveDemo />
        </section>

        {/* Future Widget Placeholder */}
        <section className="py-12 px-4 container mx-auto text-center">
            <div className="border-2 border-dashed border-slate-700 rounded-xl p-12 bg-slate-900/30 flex flex-col items-center justify-center text-slate-400">
                <p className="text-sm uppercase tracking-widest mb-2 font-semibold text-indigo-400">Integration Area</p>
                <h3 className="text-xl font-medium">Embed Your Future AI Chatbot Widget Here</h3>
                <p className="mt-2 text-sm opacity-60">This section is reserved for the &lt;script&gt; embed code.</p>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;