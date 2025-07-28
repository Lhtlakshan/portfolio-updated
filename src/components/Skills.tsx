import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
  // Backend Development
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "from-gray-300 to-blue-400",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // Frontend Development
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  // Database Management
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  // Version Control
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Bitbucket",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  },
  {
    name: "Gerrit",
    icon: "https://www.svgrepo.com/show/306092/gerrit.svg",
  }
];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="about" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-800 via-slate-800 to-gray-800' 
        : 'bg-gradient-to-br from-white via-blue-50 to-emerald-50'
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
              Education and Skills
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div variants={itemVariants}>
              <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-700/90 to-slate-700/90 border-gray-600/50' 
                  : 'bg-white/80 border-white/50'
              }`}>
                <h3 className={`text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent`}>
                  My Journey
                </h3>
                <div className="space-y-6">
                  <p className={`leading-relaxed text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Recent Computer Science graduate with a passion for full-stack development. 
                    Over the past year, I've immersed myself in modern web technologies, 
                    building scalable applications and learning industry best practices.
                  </p>
                  <p className={`leading-relaxed text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I specialize in Java backend development with Spring Boot and creating 
                    dynamic frontends using Angular and React. My goal is to write clean, 
                    maintainable code that solves real-world problems.
                  </p>
                  <div className={`p-6 rounded-2xl shadow-xl ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-600/50 to-slate-600/50' 
                      : 'bg-gradient-to-br from-emerald-400/50 to-blue-400/50'
                  }`}>
                    <h4 className={`font-bold text-xl mb-3 ${
                      darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>Education</h4>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="font-semibold">BSc in Computer Science (Graduated)</span><br />
                      University of Colombo School of Computing (UCSC) <br />( April 2021 - October 2024 )<br />
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className={`text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent`}>
                Technical Skills
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className={`p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm border ${
                      darkMode 
                        ? 'bg-gradient-to-br from-gray-700/90 to-slate-700/90 border-gray-600/50' 
                        : 'bg-white/20 border-white/20'
                    }`}
                    whileHover={{ y: -8, scale: 1.125 }}
                  >
                    <div className="flex flex-col items-center gap-4 text-center">
    <div className="flex items-center justify-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="object-contain w-20 h-20"
      />
    </div>
    <span className={`font-bold text-lg ${
      darkMode ? 'text-gray-100' : 'text-gray-800'
    }`}>{skill.name}</span>
  </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;