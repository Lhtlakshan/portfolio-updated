import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp, Facebook } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Lhtlakshan",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/thilinalakshanhewage99/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Facebook,
      href: "https://web.facebook.com/thilinalakshanhewage99",
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    {
      icon: Mail,
      href: "mailto:thilinalakshanhewage1999@gmail.com",
      label: "Email",
      color: "hover:text-emerald-400"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900' 
        : 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'
    } text-white`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-4 text-3xl font-bold text-transparent transition-all duration-300 cursor-pointer bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text hover:from-emerald-300 hover:via-blue-300 hover:to-purple-300"
              whileHover={{ scale: 1.05 }}
            >
              Thilina Hewage
              <ArrowUp className="w-6 h-6 text-emerald-400" />
            </motion.button>
            <p className="text-lg text-gray-400">Software Engineer</p>
            <p className="max-w-md mx-auto mt-2 text-gray-500">
              Building the future, one line of code at a time
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl text-gray-400 transition-all duration-300 shadow-lg hover:shadow-2xl ${social.color} ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-slate-800/80 hover:bg-gradient-to-br hover:from-emerald-600/20 hover:to-blue-600/20'
                    : 'bg-gradient-to-br from-gray-800/80 to-slate-700/80 hover:bg-gradient-to-br hover:from-emerald-600/20 hover:to-blue-600/20'
                } backdrop-blur-sm border border-gray-700/50`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px max-w-md mb-8 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Copyright Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center gap-2 text-lg text-gray-400 sm:flex-row">
              <span>&copy; 2025 Thilina Hewage. All rights reserved.</span>
              <span className="hidden text-gray-600 sm:inline">•</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;