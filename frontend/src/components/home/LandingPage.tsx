import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  BrainCircuit, 
  Shield, 
  ChevronDown, 
  Layers
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-indigo-500/30 overflow-x-hidden relative font-['Inter']">
      
      {/* Dynamic Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-violet-600/10 blur-[150px] rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px] rounded-full animate-pulse-slow delay-2000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/5 bg-bg-primary/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 rounded-xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300 ring-1 ring-white/20">
              <ShieldCheck className="text-white" size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">Fund<span className="text-indigo-500">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-[11px] font-black uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-[11px] font-black uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors">Process</a>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <Link 
                to="/home/login" 
                className="text-[11px] font-black uppercase tracking-[0.2em] px-8 py-3 bg-white text-black hover:bg-indigo-50 rounded-full shadow-2xl transition-all active:scale-95"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/5 border border-indigo-500/10 rounded-full mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Intelligent Mutual Fund Assistant</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter text-text-primary"
          >
            Insights Powered by<br />
            <span className="bg-gradient-to-br from-indigo-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">Practical AI.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-text-muted text-xl md:text-2xl max-w-xl mx-auto mb-12 font-medium leading-relaxed opacity-80"
          >
            FundAI helps you navigate mutual funds and market trends with an intelligent conversational interface designed for clarity and accuracy.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6">
            <Link 
              to="/home/registration" 
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-indigo-600/40 transition-all hover:-translate-y-1 flex items-center gap-3 group"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/home/login" 
              className="px-10 py-5 glass-panel border border-white/10 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all hover:bg-white/5"
            >
              Sign In
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Preview Mockup - Repositioned and Focused */}
      <section className="pb-32 px-6 relative z-10">
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] bg-bg-surface/50 backdrop-blur-xl"
        >
          <div className="bg-bg-primary/50 border-b border-white/5 p-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
            </div>
            <div className="text-[9px] font-black tracking-widest uppercase opacity-40">System Dashboard Preview</div>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                <div className="text-[9px] font-black text-indigo-500 uppercase tracking-widest mb-2">Recent Answer</div>
                <div className="text-xs font-medium leading-relaxed opacity-70">
                  "The Large Cap Mutual Fund has shown steady growth of 12.4% over the last fiscal year..."
                </div>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <div className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-2">AI Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold">Accuracy Monitoring Active</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                    <div className="text-xl font-black text-text-primary">1.2k+</div>
                    <div className="text-[8px] font-bold uppercase opacity-40">Queries Analyzed</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                    <div className="text-xl font-black text-emerald-500">92%</div>
                    <div className="text-[8px] font-bold uppercase opacity-40">Reliability Rate</div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Core Intelligence Sections */}
      <section id="features" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter"
            >
              Neural Architecture for <br />
              <span className="text-indigo-500">Unrivaled Alpha.</span>
            </motion.h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto font-medium">
              We've replaced gut feelings with neural pathways. Our engine processes trillions of global data points to find the signals in the noise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<BrainCircuit className="text-indigo-500" size={36} />}
              title="Intelligent Analysis"
              description="A conversational engine trained on diverse financial data to provide clear, actionable insights."
              tags={["AI Chat", "Clear Insights"]}
            />
            <FeatureCard 
              icon={<Layers className="text-violet-500" size={36} />}
              title="Knowledge Monitoring"
              description="Real-time tracking of information gaps to ensure the AI's knowledge base is constantly evolving."
              tags={["Active Learning", "Evolving"]}
            />
            <FeatureCard 
              icon={<Shield size={36} className="text-emerald-500" />}
              title="Focused Security"
              description="Professional data protection ensuring your queries and financial interests remain confidential."
              tags={["Data Protection", "Privacy"]}
            />
          </div>
        </div>
      </section>

      {/* How It Works - Process Flow */}
      <section id="how-it-works" className="py-40 px-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                How Your AI <br />
                <span className="text-indigo-500">Grows Smarter.</span>
              </h2>
              <div className="space-y-10">
                <ProcessStep 
                  number="01"
                  title="Ask Anything"
                  description="Start a conversation about any mutual fund or market trend to get instant insights."
                />
                <ProcessStep 
                  number="02"
                  title="Data Synthesis"
                  description="Our system cross-references multiple data sources to provide a clear, concise summary."
                />
                <ProcessStep 
                  number="03"
                  title="Expert Refinement"
                  description="The AI identifies its own knowledge gaps and learns from expert input to ensure future accuracy."
                />
              </div>
            </div>
            <div className="relative group">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full animate-pulse group-hover:bg-indigo-500/20 transition-all duration-700" />
              <div className="absolute -inset-4 border border-indigo-500/5 rounded-[4rem] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative glass-strong rounded-[3.5rem] p-12 aspect-square flex flex-col justify-center items-center gap-10 border-white/20 shadow-2xl overflow-hidden bg-bg-surface/40">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl rounded-full -z-10" />
                
                {/* Radial Progress Visualization */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle 
                      cx="96" cy="96" r="88" 
                      fill="none" stroke="currentColor" 
                      strokeWidth="6" className="text-white/5"
                    />
                    {/* Progress Circle (92%) */}
                    <motion.circle 
                      cx="96" cy="96" r="88" 
                      fill="none" stroke="currentColor" 
                      strokeWidth="6" strokeDasharray="552.92"
                      initial={{ strokeDashoffset: 552.92 }}
                      whileInView={{ strokeDashoffset: 552.92 * (1 - 0.92) }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      strokeLinecap="round"
                      className="text-indigo-500"
                    />
                  </svg>
                  
                  <div className="flex flex-col items-center">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-5xl font-black text-text-primary tracking-tighter"
                    >
                      92%
                    </motion.div>
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400 mt-1">Accuracy</div>
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-black italic uppercase tracking-widest text-text-primary">Intelligence Scaling</h3>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">System Self-Correction Active</p>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl shadow-indigo-600/40 cursor-default ring-1 ring-white/20"
                  >
                    Knowledge Refinement
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            <FaqItem 
              id={1} 
              active={activeFaq === 1} 
              onToggle={() => setActiveFaq(activeFaq === 1 ? null : 1)}
              question="What exactly does FundAI do?"
              answer="FundAI is an intelligent assistant that helps you analyze mutual funds and market segments. It uses AI to answer your financial questions and constantly improves its own knowledge base based on your interactions."
            />
            <FaqItem 
              id={2} 
              active={activeFaq === 2} 
              onToggle={() => setActiveFaq(activeFaq === 2 ? null : 2)}
              question="How do you ensure the information is accurate?"
              answer="Our AI monitors its own confidence levels. If it encounters a complex query it cannot fully answer, the system flags it as a 'Knowledge Gap' for expert refinement, ensuring future responses are even more reliable."
            />
            <FaqItem 
              id={3} 
              active={activeFaq === 3} 
              onToggle={() => setActiveFaq(activeFaq === 3 ? null : 3)}
              question="Can I build my own bots with the API?"
              answer="Absolutely. Professional and Institution tiers include full programmatic access to our neural endpoints, allowing you to trigger trades or ingest signals into your own architecture."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-panel p-20 rounded-[4rem] text-center relative border-white/10 bg-indigo-600/5 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] rounded-full animate-pulse-slow" />
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter relative z-10">Ready to Evolve?</h2>
          <p className="text-text-muted text-xl mb-12 font-medium max-w-xl mx-auto relative z-10">
            Start using the most intuitive market assistant today. Get the insights you need to make informed decisions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <Link to="/home/registration" className="px-12 py-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/30 ring-1 ring-white/20">
              Get Started
            </Link>
            <Link to="/home/login" className="px-12 py-5 glass-panel border border-white/20 hover:bg-white/5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
              Log In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/5 bg-bg-primary relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => navigate('/home')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <ShieldCheck className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tight">FUND<span className="text-indigo-500">AI</span></span>
            </div>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed font-medium">
              Empowering better financial decisions through conversational intelligence and practical market insights.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8">Platform</h4>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><Link to="/home" className="hover:text-indigo-500 transition-colors">Conversation Hub</Link></li>
              <li><Link to="/home" className="hover:text-indigo-500 transition-colors">Market Tracker</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8">Resources</h4>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Whitepaper</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
          <div className="text-[10px] font-black uppercase tracking-widest text-text-muted/40">
            © 2026 FundAI. Practical intelligence for modern markets.
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-text-muted/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Safety</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- Sub-Components --- */

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, tags: string[] }> = ({ icon, title, description, tags }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="premium-card p-10 flex flex-col items-start gap-8 border-white/5 bg-white/2 group"
  >
    <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/10">
      {icon}
    </div>
    <div className="flex gap-2">
      {tags.map(t => <span key={t} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md opacity-40">{t}</span>)}
    </div>
    <h3 className="text-3xl font-black leading-tight tracking-tight">{title}</h3>
    <p className="text-text-muted font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
      {description}
    </p>
  </motion.div>
);

const ProcessStep: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
  <div className="flex gap-10 items-start group">
    <div className="text-4xl font-black text-indigo-500/40 group-hover:text-indigo-500 transition-colors duration-500 tracking-tighter">{number}</div>
    <div className="space-y-2">
      <h4 className="text-2xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-500 text-text-primary">{title}</h4>
      <p className="text-text-muted font-medium leading-relaxed max-w-sm">{description}</p>
    </div>
  </div>
);



const FaqItem: React.FC<{ id: number, active: boolean, onToggle: () => void, question: string, answer: string }> = ({ active, onToggle, question, answer }) => (
  <div className={`rounded-3xl border transition-all duration-300 overflow-hidden ${active ? 'bg-bg-secondary border-white/10 shadow-xl' : 'bg-transparent border-white/5 hover:border-white/10'}`}>
    <button onClick={onToggle} className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left">
      <span className="text-lg font-black tracking-tight">{question}</span>
      <ChevronDown className={`transition-transform duration-300 shrink-0 ${active ? 'rotate-180 text-indigo-500' : 'opacity-30'}`} />
    </button>
    <AnimatePresence>
      {active && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-8 pb-8 text-text-muted font-medium leading-relaxed opacity-80 italic"
        >
          {answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);


export default LandingPage;
