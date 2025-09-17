import image_65f3bf1326a7790e7965dc76ddabffd2ddbc166f from 'figma:asset/65f3bf1326a7790e7965dc76ddabffd2ddbc166f.png';
'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Linkedin, MapPin, Phone, Mail, Download } from 'lucide-react';
import resumeFile from '../assets/Vijay_Kumar_Resume.pdf';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <ImageWithFallback
                src={image_65f3bf1326a7790e7965dc76ddabffd2ddbc166f}
                alt="Vijay Kumar Pandit"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Hi, I'm Vijay Kumar Pandit</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a third-year B.Tech Computer Science student at UCET, Vinoba Bhave University. 
                I specialize in Java, DSA, Android development (Kotlin/Java), and frontend web development. 
                I'm passionate about problem-solving, learning new technologies, and building innovative solutions 
                that make a difference in people's lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Dipugadha, Hazaribag, Jharkhand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 6201135206</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">vijay931111@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border">
                <Linkedin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">vijay-kumar-912ab2206</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <a href="https://linkedin.com/in/vijay-kumar-912ab2206" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumeFile;
                  link.download = 'Vijay_Kumar_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                  Hindi
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                  English
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                  Bengali
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}