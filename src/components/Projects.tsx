'use client';

import { motion } from 'motion/react';
import { Github, ExternalLink, Shield, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Password Manager App',
      description: 'A secure Android application for storing and managing passwords and credentials with advanced encryption and biometric authentication.',
      longDescription: [
        'Developed a comprehensive password manager using Android Studio with Kotlin',
        'Implemented SQLite database with Room for secure local storage',
        'Added biometric authentication for enhanced security',
        'Created intuitive Material Design UI for seamless user experience',
        'Implemented password generation with customizable complexity',
        'Added export/import functionality for data backup'
      ],
      image: 'https://images.unsplash.com/photo-1650035422416-b304ab1ada47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzd29yZCUyMG1hbmFnZXIlMjBzZWN1cml0eSUyMGFwcHxlbnwxfHx8fDE3NTgxMzAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Android', 'Kotlin', 'SQLite', 'Room Database', 'Material Design', 'Biometric API'],
      github: 'https://github.com/Vijayrj0007',
      demo: '#',
      category: 'android',
      featured: true,
      icon: Shield
    },
    {
      title: 'VirtuNexa Mini Projects',
      description: 'Collection of 4 Android mini-projects built during internship, showcasing various Android development concepts and features.',
      longDescription: [
        'Calculator App with advanced mathematical operations',
        'Weather App with real-time data fetching',
        'Todo List with local database integration',
        'Photo Gallery with camera integration',
        'Implemented modern Android architecture patterns',
        'Used various Android APIs and third-party libraries'
      ],
      image: 'https://images.unsplash.com/photo-1619979808438-42e52095e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwbW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU4MTMwMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Android', 'Java', 'Kotlin', 'XML', 'REST APIs', 'SharedPreferences'],
      github: 'https://github.com/Vijayrj0007',
      demo: '#',
      category: 'android',
      featured: false,
      icon: Smartphone
    }
  ];

  const [expandedProject, setExpandedProject] = React.useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A showcase of my work and the solutions I've built
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Project Icon */}
                <div className="absolute top-4 left-4 p-3 bg-background/90 backdrop-blur-sm rounded-lg">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expanded Content */}
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 border-t border-border pt-4"
                  >
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.longDescription.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">All Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && project.demo !== '#' && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-primary hover:text-primary/80"
                  >
                    {expandedProject === index ? 'Show Less' : 'Learn More'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-bold mb-4">More Projects Coming Soon!</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm constantly working on new projects and learning new technologies. 
            Check out my GitHub for the latest updates.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="https://github.com/Vijayrj0007" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Add React import for useState
import React from 'react';