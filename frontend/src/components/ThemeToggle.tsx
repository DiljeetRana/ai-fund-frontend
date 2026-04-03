import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-bg-secondary border border-border-primary text-text-primary hover:border-indigo-500/30 transition-all shadow-sm flex items-center justify-center relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{ 
            y: theme === 'dark' ? 0 : 30,
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.5
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="absolute inset-0 flex items-center justify-center text-indigo-400"
        >
          <Moon size={20} fill="currentColor" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ 
            y: theme === 'light' ? 0 : -30,
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.5
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="absolute inset-0 flex items-center justify-center text-amber-500"
        >
          <Sun size={20} fill="currentColor" />
        </motion.div>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors -z-10" />
    </motion.button>
  );
};

export default ThemeToggle;
