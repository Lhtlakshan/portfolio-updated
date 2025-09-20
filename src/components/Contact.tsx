import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Added loading state
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        toast.success("✅ Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send email. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "thilinalakshanhewage1999@gmail.com", href: "mailto:thilinalakshanhewage1999@gmail.com", color: "from-blue-500 to-cyan-500" },
    { icon: Phone, label: "Phone", value: "+94 77 6645236", href: "tel:+94 77 6645236", color: "from-emerald-500 to-green-500" },
    { icon: MapPin, label: "Location", value: "Matara , Sri Lanka", href: "#", color: "from-purple-500 to-pink-500" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Lhtlakshan", color: darkMode ? "hover:text-gray-300" : "hover:text-gray-900", bgColor: "from-gray-600 to-gray-700" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/thilinalakshanhewage99/", color: "hover:text-blue-600", bgColor: "from-blue-600 to-blue-700" },
    { icon: Facebook, label: "Face Book", href: "https://web.facebook.com/thilinalakshanhewage99", color: "hover:text-blue-400", bgColor: "from-sky-500 to-blue-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50'
    }`}>
      <div className="px-4 mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text">
              Get In Touch
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something extraordinary.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border ${
                darkMode ? 'bg-gradient-to-br from-gray-800/90 to-slate-800/90 border-gray-700/50' : 'bg-white/80 border-white/50'
              }`}>
                <h3 className="mb-8 text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div className="group" whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="name" className={`block text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 ${
                          darkMode ? 'bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white/70 border-gray-200 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </motion.div>
                    <motion.div className="group" whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="email" className={`block text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 ${
                          darkMode ? 'bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white/70 border-gray-200 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </motion.div>
                  </div>
                  <motion.div className="group" whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="subject" className={`block text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 ${
                        darkMode ? 'bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white/70 border-gray-200 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </motion.div>
                  <motion.div className="group" whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="message" className={`block text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      required
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 resize-none ${
                        darkMode ? 'bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white/70 border-gray-200 text-gray-900 placeholder-gray-500'
                      }`}
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center w-full gap-3 px-8 py-5 text-lg font-bold text-white transition-all duration-300 shadow-2xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-xl hover:shadow-emerald-500/25 group disabled:opacity-50"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Information */}
              <div className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm border ${darkMode ? 'bg-gradient-to-br from-gray-800/90 to-slate-800/90 border-gray-700/50' : 'bg-white/80 border-white/50'}`}>
                <h3 className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                        darkMode ? 'hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-slate-700/50' : 'hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-blue-50/50'
                      }`}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl text-white shadow-lg`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                        <p className={`font-bold group-hover:text-emerald-600 transition-colors ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm border ${darkMode ? 'bg-gradient-to-br from-gray-800/90 to-slate-800/90 border-gray-700/50' : 'bg-white/80 border-white/50'}`}>
                <h3 className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-2 group ${darkMode ? 'bg-gradient-to-br from-gray-700/50 to-slate-700/50 text-gray-400' : 'bg-gradient-to-br from-gray-50/50 to-blue-50/50 text-gray-600'}`}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={`p-3 bg-gradient-to-r ${social.bgColor} rounded-xl text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
