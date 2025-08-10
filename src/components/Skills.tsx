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
                    I specialize in Java backend development with Spring Boot, Express.js. Also I am creating 
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
                    <div className='flex'>
                      <img src="data:image/png;base64,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" className="h-[100px] w-[100px] rounded-[10px]" alt="" />
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-5`}>
                      <span className="font-semibold">BSc in Computer Science (Graduated)</span><br />
                      University of Colombo School of Computing (UCSC) <br />( April 2021 - October 2024 )<br />
                    </p>
                    </div>
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