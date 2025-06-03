"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 85 },
  { name: "CSS/SCSS", level: 90 },
  { name: "UI/UX Design", level: 75 },
  { name: "GraphQL", level: 70 },
]

export default function SkillsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've spent several years honing my skills in development and design. 
            Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid gap-y-6 gap-x-12 md:grid-cols-2 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}