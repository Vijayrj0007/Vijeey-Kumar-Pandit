'use client';

import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'UCET, Vinoba Bhave University',
      location: 'Hazaribag, Jharkhand',
      duration: '2022 - Present',
      cgpa: '7.5',
      status: 'Pursuing',
      description: [
        'Specializing in Computer Science with focus on software development',
        'Strong foundation in Data Structures, Algorithms, and Programming',
        'Active participation in coding competitions and technical events',
        'Relevant coursework: Object-Oriented Programming, Database Systems, Software Engineering'
      ],
      subjects: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Web Technologies',
        'Mobile Application Development'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining consistent CGPA of 7.5 throughout the course',
      icon: Award
    },
    {
      title: 'Project Leadership',
      description: 'Led multiple academic projects in Android and Web development',
      icon: GraduationCap
    },
    {
      title: 'Technical Skills',
      description: 'Gained expertise in Java, Kotlin, Android development, and Web technologies',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Academic journey and the knowledge that drives my passion for technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{edu.cgpa}</div>
                      <div className="text-xs text-muted-foreground">CGPA</div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subjects */}
                <div>
                  <h4 className="font-semibold mb-3">Key Subjects:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {edu.subjects.map((subject, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm text-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Academic Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-border"
          >
            <h3 className="text-xl font-bold mb-4">Looking Ahead</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As I continue my B.Tech journey, I'm focused on expanding my knowledge in emerging technologies, 
              contributing to open-source projects, and preparing for a successful career in software development. 
              My goal is to graduate with honors while building innovative solutions that make a positive impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}