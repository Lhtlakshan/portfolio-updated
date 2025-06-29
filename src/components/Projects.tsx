import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Zap, ShoppingCart, MessageSquare, Calendar } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration using Stripe API.",
      icon: ShoppingCart,
      technologies: ["Spring Boot", "Angular", "PostgreSQL", "Stripe API", "Docker"],
      features: ["User Authentication", "Payment Processing", "Admin Dashboard", "Real-time Inventory"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-500 to-blue-500",
      bgGradient: darkMode ? "from-emerald-900/20 to-blue-900/20" : "from-emerald-50 to-blue-50"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, task assignment, and progress tracking for teams.",
      icon: Calendar,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
      features: ["Real-time Collaboration", "Team Management", "Progress Analytics", "File Sharing"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: darkMode ? "from-purple-900/20 to-pink-900/20" : "from-purple-50 to-pink-50"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging application with group chats, file sharing, and emoji reactions built with modern web technologies.",
      icon: MessageSquare,
      technologies: ["React", "Express.js", "Socket.io", "Redis", "JWT"],
      features: ["Real-time Messaging", "Group Chats", "File Sharing", "Message History"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: darkMode ? "from-cyan-900/20 to-blue-900/20" : "from-cyan-50 to-blue-50"
    },
    {
      title: "Performance Monitor",
      description: "System monitoring dashboard that tracks application performance metrics with beautiful data visualizations and alerts.",
      icon: Zap,
      technologies: ["Spring Boot", "React", "InfluxDB", "Grafana", "Docker"],
      features: ["Real-time Metrics", "Custom Alerts", "Data Visualization", "API Monitoring"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-500 to-red-500",
      bgGradient: darkMode ? "from-orange-900/20 to-red-900/20" : "from-orange-50 to-red-50"
    }
  ];

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
    <section id="projects" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-800 via-slate-800 to-gray-800' 
        : 'bg-gradient-to-br from-white via-blue-50 to-emerald-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Showcasing innovative solutions built with modern technologies and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border backdrop-blur-sm h-full ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-700/90 to-slate-700/90 border-gray-600/50' 
                      : 'bg-white/80 border-white/50'
                  }`}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Project Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`p-5 bg-gradient-to-r ${project.gradient} rounded-2xl text-white shadow-xl`}>
                      <project.icon className="w-10 h-10" />
                    </div>
                    <h3 className={`text-3xl font-bold group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
                      darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className={`leading-relaxed mb-8 text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className={`text-xl font-bold mb-4 ${
                      darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className={`text-xl font-bold mb-4 ${
                      darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all duration-300 shadow-md ${
                            darkMode 
                              ? 'bg-gradient-to-r from-gray-600/50 to-slate-600/50 text-gray-300 border-gray-500 hover:border-emerald-400 hover:shadow-emerald-400/20'
                              : 'bg-gradient-to-r from-white/70 to-blue-50/70 text-gray-700 border-gray-200 hover:border-emerald-300 hover:shadow-emerald-300/20'
                          }`}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex gap-4 pt-6 border-t ${
                    darkMode ? 'border-gray-600' : 'border-gray-200'
                  }`}>
                    <motion.a
                      href={project.demoUrl}
                      className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold flex-1 justify-center`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className={`flex items-center gap-3 px-6 py-3 border-2 rounded-xl transition-all duration-300 font-semibold ${
                        darkMode 
                          ? 'border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                          : 'border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      Source
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;