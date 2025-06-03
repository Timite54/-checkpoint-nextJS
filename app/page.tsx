import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import ProjectCard from '@/components/project-card'
import SkillsSection from '@/components/skills-section'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container flex flex-col items-start space-y-8 md:flex-row md:space-y-0 md:space-x-12 md:items-center">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-playfair">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">John Doe</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate full-stack developer specializing in creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                alt="Professional portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <Button asChild variant="link" className="hidden md:flex">
              <Link href="/projects">
                View All Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-Commerce Platform"
              description="A fully responsive e-commerce platform with shopping cart functionality."
              imageUrl="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg"
              tags={["React", "Node.js", "MongoDB"]}
              link="/projects/ecommerce"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A clean, modern portfolio site built with Next.js and Tailwind CSS."
              imageUrl="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg"
              tags={["Next.js", "Tailwind CSS", "TypeScript"]}
              link="/projects/portfolio"
            />
            <ProjectCard
              title="Weather App"
              description="A real-time weather application with location tracking."
              imageUrl="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg"
              tags={["React", "Weather API", "CSS"]}
              link="/projects/weather-app"
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="link">
              <Link href="/projects">
                View All Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold font-playfair">Let's Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting opportunities.
            If you have a project that needs some creative attention, let's talk!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}