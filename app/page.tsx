"use client";

import { motion } from 'framer-motion';
import { BookOpen, Brain, Sparkles, ArrowRight, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <BookOpen className="w-16 h-16 text-purple-400" />
                <Sparkles className="w-6 h-6 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            
            {/* Arabic Title */}
            <div className="mb-4">
              <h1 className="text-8xl md:text-9xl font-bold mb-2 arabic-font" style={{
                fontFamily: 'system-ui, -apple-system, "Noto Sans Arabic", "Arial Unicode MS", serif',
                direction: 'rtl'
              }}>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  نحو
                </span>
              </h1>
              <p className="text-xl text-gray-400 italic">Nahw - Arabic Grammar</p>
            </div>
            
            {/* Site Title */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                NahwSarf
              </span>
              <span className="text-white">.com</span>
            </h2>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master Arabic Grammar with AI-Powered Learning
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              An intelligent platform that adapts to your learning style. 
              From basic إعراب to advanced بلاغة, unlock the beauty of Arabic grammar 
              through interactive lessons, instant feedback, and personalized practice.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-purple-500/20 rounded-xl p-6"
              >
                <Brain className="w-10 h-10 text-purple-400 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-sm text-gray-400">Instant grammatical breakdown of any Arabic text</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-cyan-500/20 rounded-xl p-6"
              >
                <Target className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Adaptive Learning</h3>
                <p className="text-sm text-gray-400">Personalized lessons that match your pace</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-pink-500/20 rounded-xl p-6"
              >
                <Zap className="w-10 h-10 text-pink-400 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Interactive Practice</h3>
                <p className="text-sm text-gray-400">Real-time exercises with instant feedback</p>
              </motion.div>
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-block mb-12">
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur rounded-full px-8 py-3 border border-purple-500/30">
                <p className="text-purple-300 font-semibold text-lg">Coming Soon</p>
              </div>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-xl font-semibold transition flex items-center justify-center group"
                  >
                    Get Early Access
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-400 font-semibold text-lg"
                >
                  ✓ شكراً! We&apos;ll notify you when we launch.
                </motion.div>
              )}
            </div>

            {/* Arabic Quote */}
            <div className="mt-16 p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 max-w-2xl mx-auto">
              <p className="text-2xl mb-2" style={{
                fontFamily: 'system-ui, -apple-system, "Noto Sans Arabic", "Arial Unicode MS", serif',
                direction: 'rtl'
              }}>
                إن النحو طريق العلم
              </p>
              <p className="text-sm text-gray-400 italic">
                &ldquo;Grammar is the path to knowledge&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-gray-500">
            © 2024 NahwSarf.com - Revolutionizing Arabic Grammar Education with AI
          </p>
        </div>
      </footer>
    </div>
  );
}