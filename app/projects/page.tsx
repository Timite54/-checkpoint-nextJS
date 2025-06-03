"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/project-card'
import { motion } from '@/lib/motion'

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with shopping cart functionality, user authentication, and payment processing.",
    imageUrl: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "Web Development",
    link: "/projects/ecommerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A clean, modern portfolio site built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
    imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Web Development",
    link: "/projects/portfolio"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A real-time weather application with location tracking, forecast data, and beautiful UI for displaying weather conditions.",
    imageUrl: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg",
    tags: ["React", "Weather API", "CSS", "JavaScript"],
    category: "Web Development",
    link: "/projects/weather-app"
  },
  {
    id: 4,
    title: "Task Management Dashboard",
    description: "A comprehensive task management solution with drag-and-drop functionality, team collaboration, and performance analytics.",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    category: "Web Development",
    link: "/projects/task-dashboard"
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking application with transaction history, bill payments, and account management.",
    imageUrl: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
    tags: ["React Native", "Node.js", "MongoDB", "Express"],
    category: "Mobile Development",
    link: "/projects/banking-app"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A fitness tracking application that monitors workouts, nutrition, and progress with data visualization.",
    imageUrl: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    tags: ["React Native", "Firebase", "Chart.js"],
    category: "Mobile Development",
    link: "/projects/fitness-tracker"
  },
  {
    id: 7,
    title: "Restaurant Website",
    description: "A modern website for a restaurant featuring online ordering, reservation system, and menu showcase.",
    imageUrl: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    category: "Web Development",
    link: "/projects/restaurant-website"
  },
  {
    id: 8,
    title: "Travel Blog",
    description: "A travel blog with content management system, photo galleries, and interactive maps of visited locations.",
    imageUrl: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg",
    tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
    category: "Web Development",
    link: "/projects/travel-blog"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design"
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair">My Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work across various platforms and technologies.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          layout
          transition={{ duration: 0.4 }}
        >
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </motion.div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              There are no projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}