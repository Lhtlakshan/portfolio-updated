import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, ChevronRight} from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
  company: "UniverSL Softwares (Pvt) Ltd",
  position: "Trainee Software Engineer",
  duration: "Jan 2025 - Present",
  type: "Full-time",
  achievements: [
    "Developing internal applications, including an E-Commerce style appointments management web application.",
    "Developing REST APIs using Spring Boot and securing them with Spring Security and JWT.",
    "Implemented unit tests using JUnit and Mockito to ensure code reliability and support test-driven development.",
    "Deploying the Spring Boot application on Google Cloud Platform (GCP).",
    "Actively participating in daily stand-ups, sprint planning, and retrospective meetings to align with Agile practices.",
    "Using Bitbucket for version control and Jira for project management.",
    "Consistently applying best coding practices and software engineering principles such as OOP.",
    "Soft skills: Team player, Adaptability, Communication, and Analytical thinking."
  ],
  technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Spring Security", "JWT", "JUnit", "Mockito", "GCP"]
}
,
    {
  company: "Zebra Technologies Lanka (Pvt) Ltd",
  position: "Software Engineer Intern",
  duration: "Dec 2023 – June 2024",
  type: "Internship",
  achievements: [
    "Fixed internal application issues and improved essential features to enhance user-friendliness, functionality, and stability.",
    "Successfully implemented enhanced logging across multiple sub-projects within the internal product.",
    "Developed and updated test cases and maintained detailed test case documentation.",
    "Conducted full system testing (manual and automated) using Zebra tools and SDKs.",
    "Followed best coding practices and applied Software Engineering concepts like OOP.",
    "Followed Agile development methodologies to ensure smooth project management.",
    "Actively participated in Agile practices such as daily stand-ups, sprint planning, and retrospectives.",
    "Used Gerrit for version control and Jira for project management."
  ],
  technologies: ["C#", "C++"],
  softSkills: ["Team player", "Adaptability", "Communication", "Analytical skills"]
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50'
    }`}>
      <div className="max-w-6xl px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text">
              Work Experience
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Building innovative solutions and growing expertise through hands-on development experience.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800/90 to-slate-800/90 border-gray-700/50' 
                      : 'bg-white/80 border-white/50'
                  }`}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  {/* Header Section */}
                  <div className="flex flex-col mb-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-6 mb-6 lg:mb-0">
                      <div className="p-4 text-white shadow-xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl">
                        <Building2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
                          darkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}>
                          {exp.position}
                        </h3>
                        <p className={`text-xl font-semibold ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{exp.company}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                          exp.type === 'Full-time' 
                            ? 'bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700'
                            : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg font-semibold">{exp.duration}</span>
                    </div>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-3">
                    {/* Achievements Section */}
                    <div className="lg:col-span-2">
                      <h4 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        <ChevronRight className="w-6 h-6 text-emerald-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-2"
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                            <span className={`leading-relaxed text-lg ${
                              darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Section */}
                    <div>
                      <h4 className={`text-2xl font-bold mb-6 ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all duration-300 shadow-md ${
                              darkMode 
                                ? 'bg-gradient-to-r from-gray-700/50 to-slate-700/50 text-gray-300 border-gray-600 hover:border-emerald-400 hover:shadow-emerald-400/20'
                                : 'bg-gradient-to-r from-white/70 to-blue-50/70 text-gray-700 border-gray-200 hover:border-emerald-300 hover:shadow-emerald-300/20'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
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

export default Experience;