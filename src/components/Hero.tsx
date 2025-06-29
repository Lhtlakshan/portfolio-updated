import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Code, Sparkles } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 ${
            darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-gradient-to-r from-emerald-200 to-blue-200'
          }`}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 ${
            darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-200 to-pink-200'
          }`}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-[30%] h-[20%] mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-500 p-1.5 shadow-2xl">
            <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm ${
              darkMode ? 'bg-gray-800/90' : 'bg-white/90'
            }`}>
              <img src="/portfolio-updated/pic/thilina_updated.jpg" alt="" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className={`text-lg font-semibold ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Welcome to my portfolio</span>
            <Sparkles className="w-6 h-6 text-blue-500" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="p-6 mb-6 text-5xl font-bold leading-tight text-transparent md:text-8xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text"
        >
          Thilina Hewage
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-2xl md:text-3xl mb-8 font-semibold ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Software Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          }`}
        >
          A responsible and dedicated computer science student, with a keen
          interest in and{" "}
          <b>full stack development (Java , Spring boot , React , Angular)</b>
          .Seeking professional experience, where I can effectively utilize my
          knowledge and skills
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-6 mb-16 sm:flex-row"
        >
          <motion.a
  href="/CV/Thilina_Hewage_ASE.pdf"
  download
  className="relative flex items-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl hover:shadow-emerald-500/25"
  whileHover={{ scale: 1.05, y: -3 }}
  whileTap={{ scale: 0.95 }}
>
  <Download className="w-6 h-6 group-hover:animate-bounce" />
  Download Resume
  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 group-hover:opacity-100 -z-10 blur-xl"></div>
</motion.a>


          <motion.button
            className={`px-10 py-5 border-3 font-bold rounded-2xl transition-all duration-300 text-lg ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                : 'border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
            }`}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className={`w-10 h-10 mx-auto ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;