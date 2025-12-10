import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, RefreshCcw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const LiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm NivraBot. I can help you book appointments, answer FAQs, or generate content. What can I do for you today?", sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      let botResponse = "That sounds interesting! Tell me more about your requirements.";
      const inputLower = userMsg.text.toLowerCase();
      
      if (inputLower.includes('price') || inputLower.includes('cost')) {
        botResponse = "Our pricing starts at $299/mo for the Starter plan. Would you like to see a comparison?";
      } else if (inputLower.includes('book') || inputLower.includes('appointment')) {
        botResponse = "I can help with that. Please select a preferred date from the calendar below (Mockup: Calendar Widget would appear here).";
      } else if (inputLower.includes('hello') || inputLower.includes('hi')) {
        botResponse = "Hi there! Ready to automate your workflow?";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="container mx-auto px-6 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience NivraBot Live</h2>
        <p className="text-slate-400">Interact with our Gemini 2.5 powered assistant below.</p>
      </div>

      <div className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="bg-slate-900 p-4 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">NivraBot AI Assistant</h3>
              <p className="text-xs text-indigo-400">Online • Powered by Gemini 2.5</p>
            </div>
          </div>
          <button 
            onClick={() => setMessages([{ id: 1, text: "Hello! I'm NivraBot. I can help you book appointments, answer FAQs, or generate content. What can I do for you today?", sender: 'bot' }])}
            className="text-slate-500 hover:text-white p-2"
            title="Reset Chat"
          >
            <RefreshCcw size={18} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user' ? 'bg-slate-700' : 'bg-indigo-600'
              }`}>
                {msg.sender === 'user' ? <User size={14} className="text-slate-300" /> : <Bot size={14} className="text-white" />}
              </div>
              
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-white" />
               </div>
               <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex gap-1 items-center h-10">
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
          <div className="flex gap-2 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2 text-[10px] text-slate-600">
            NivraBot can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;