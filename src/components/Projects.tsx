import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Niwahana Hardware Shop",
      description: "Niwahana Hardware Shop is a full-stack E-commerce web application designed to facilitate the online purchase of hardware products. This project, developed individually by me, includes essential features such as user authentication, product management, a shopping cart and order processing. The frontend is built using Angular for a dynamic and responsive user experience, while the backend is powered by Spring Boot with MySQL and Hibernate for efficient data management. The system also implements role-based access control for administrators and customers.",
      technologies: ["Angular", "Spring Boot", "MySQL", "Hibernate"],
      features: ["User Authentication", "Product Management", "Shopping Cart", "Order Processing"],
      demoUrl: "#",
      githubUrl: "https://github.com/Lhtlakshan/niwahana-hardware-shop-backend",
      image: "./projects/hardwareShop.png",
      gradient: "from-emerald-500 to-blue-500",
      bgGradient: darkMode ? "from-emerald-900/20 to-blue-900/20" : "from-emerald-50 to-blue-50"
    },
    {
      title: "Prescription Management - WeCare System",
      description: "WeCare prescription management system is an innovative, highly reliable, and expertly developed system tailored to transform healthcare delivery. By streamlining the prescription process, it enhances accuracy, ensures compliance, and improves overall operational efficiency.",
      technologies: ["Spring Boot", "Microservices", "MySQL", "Angular"],
      features: ["Prescription Handling", "Role-based Access", "Data Security"],
      demoUrl: "#",
      githubUrl: "https://github.com/Lhtlakshan/niwahana-hardware-shop-backend",
      image: "./projects/hospital.jpg",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: darkMode ? "from-purple-900/20 to-blue-900/20" : "from-purple-50 to-blue-50"
    },
    {
      title: "Sarusara agro - E commerce web application",
      description: "Sarusara is a comprehensive full-stack web application built with the MERN stack, currently under active development as a group project. Its primary goal is to revolutionize the traditional agricultural marketplace by providing an online platform that allows farmers to sell their harvest directly to wholesalers, vegetable shop owners, and regular buyers who purchase fresh produce for their households. This platform addresses common challenges faced by farmers, such as limited market access and dependency on intermediaries, by creating a transparent and convenient marketplace where all stakeholders can connect seamlessly.",
      technologies: ["React.js", "Express.js", "Node.js", "Mongodb", "Tailwind CSS"],
      features: ["Counsellor Functionalities", "Meditation Modules"],
      demoUrl: "#",
      githubUrl: "https://github.com/orgs/sarusara-agro/repositories",
      image: "https://i0.wp.com/asombarta.com/wp-content/uploads/2025/03/paddy-1-scaled.jpg?fit=2560%2C1707&ssl=1",
      gradient: "from-green-500 to-teal-500",
      bgGradient: darkMode ? "from-green-900/20 to-teal-900/20" : "from-green-50 to-teal-50"
    },
    {
      title: "Be Care",
      description: "Public Health web application. The 2nd year group project at UCSC. I have done the Counsellor's and Meditation instructor's Functionalities of this project.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      features: ["Counsellor Functionalities", "Meditation Modules"],
      demoUrl: "#",
      githubUrl: "https://github.com/Janod-Umayanga/bE-CARE",
      image: "./projects/becare.jpg",
      gradient: "from-green-500 to-teal-500",
      bgGradient: darkMode ? "from-green-900/20 to-teal-900/20" : "from-green-50 to-teal-50"
    },
    {
      title: "Weather Application",
      description: "A real-time weather application created using Weather APIs. This is an individual software project developed by me.",
      technologies: ["HTML", "CSS", "JavaScript", "Weather APIs"],
      features: ["Real-time Weather", "API Integration", "Responsive Design"],
      demoUrl: "#",
      githubUrl: "https://github.com/Lhtlakshan/weather-app",
      image: "./projects/weather_app.png",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: darkMode ? "from-cyan-900/20 to-blue-900/20" : "from-cyan-50 to-blue-50"
    },
    {
      title: "MOS Burgers",
      description: "MOS Burgers is a simple yet interactive Point of Sale (POS) system designed for managing fast-food restaurant orders efficiently. This project, developed individually by me, focuses on frontend functionalities, providing an intuitive user interface for selecting menu items, processing orders, and calculating totals.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Menu Selection", "Cart Management", "Dynamic UI"],
      demoUrl: "#",
      githubUrl: "https://github.com/Lhtlakshan/niwahana-hardware-shop-backend",
      image: "./projects/mosBurgers.png",
      gradient: "from-yellow-500 to-red-500",
      bgGradient: darkMode ? "from-yellow-900/20 to-red-900/20" : "from-yellow-50 to-red-50"
    },
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="px-4 mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pb-2 mb-12 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text">
            My Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 shadow-lg rounded-2xl backdrop-blur-md bg-white/80 dark:bg-gray-800/80 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <img src={project.image} alt={project.title} className="object-cover w-full mb-6 rounded-xl h-52" />
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                <div className="mb-3">
                  <strong className="block mb-1 text-gray-800 dark:text-gray-200">Technologies:</strong>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={project.githubUrl} className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  {project.demoUrl !== "#" && (
                    <a href={project.demoUrl} className="flex items-center gap-2 text-emerald-600 hover:underline dark:text-emerald-400">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
