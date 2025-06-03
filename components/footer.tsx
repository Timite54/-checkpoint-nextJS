import React from 'react'
import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-playfair">Portfolio</h3>
          <p className="text-muted-foreground text-sm">
            A showcase of my professional work, skills, and experience.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-base font-medium">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-base font-medium">Connect</h4>
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-base font-medium">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MailIcon className="h-4 w-4" />
            <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
              hello@example.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}