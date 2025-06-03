import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { 
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair">About Me</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me.
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
              alt="John Doe portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-playfair">John Doe</h2>
            <h3 className="text-xl text-muted-foreground">Full Stack Developer</h3>
            <p>
              I am a passionate full stack developer with over 5 years of experience building
              web applications. I specialize in creating responsive, user-friendly interfaces
              and robust backend systems that deliver exceptional user experiences.
            </p>
            <p>
              My journey in technology began when I was 15, tinkering with HTML and CSS to create
              simple websites. That early curiosity evolved into a career where I now work with
              modern frameworks and tools to build scalable applications.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Location</h4>
                <p>San Francisco, CA</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Email</h4>
                <p>hello@example.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Experience</h4>
                <p>5+ Years</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Availability</h4>
                <p>Freelance / Full-time</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">
            Work Experience
          </h2>
          
          <div className="space-y-12">
            <ExperienceItem 
              title="Senior Frontend Developer"
              company="Tech Solutions Inc."
              period="2021 - Present"
              description="Led the frontend development team in creating responsive web applications. Implemented modern React patterns and improved performance by 40%."
              icon={<BriefcaseIcon className="h-6 w-6" />}
            />
            
            <ExperienceItem 
              title="Full Stack Developer"
              company="Digital Innovations"
              period="2018 - 2021"
              description="Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement pixel-perfect interfaces."
              icon={<BriefcaseIcon className="h-6 w-6" />}
            />
            
            <ExperienceItem 
              title="Junior Web Developer"
              company="WebCraft Agency"
              period="2016 - 2018"
              description="Created responsive websites for clients using HTML, CSS, JavaScript, and WordPress. Assisted senior developers with larger projects."
              icon={<BriefcaseIcon className="h-6 w-6" />}
            />
          </div>
        </div>
        
        <Separator className="my-12" />
        
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">
            Education
          </h2>
          
          <div className="space-y-12">
            <ExperienceItem 
              title="Master's in Computer Science"
              company="Stanford University"
              period="2014 - 2016"
              description="Specialized in web technologies and software engineering. Graduated with honors."
              icon={<GraduationCapIcon className="h-6 w-6" />}
            />
            
            <ExperienceItem 
              title="Bachelor's in Software Engineering"
              company="University of California, Berkeley"
              period="2010 - 2014"
              description="Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions."
              icon={<GraduationCapIcon className="h-6 w-6" />}
            />
          </div>
        </div>
        
        <Separator className="my-12" />
        
        {/* Interests Section */}
        <div>
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">
            Interests & Hobbies
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InterestCard 
              title="Photography"
              description="Capturing moments and landscapes through my lens."
              icon={<HeartIcon className="h-6 w-6" />}
            />
            <InterestCard 
              title="Hiking"
              description="Exploring nature trails and mountains on weekends."
              icon={<HeartIcon className="h-6 w-6" />}
            />
            <InterestCard 
              title="Reading"
              description="Science fiction and technology books are my favorites."
              icon={<HeartIcon className="h-6 w-6" />}
            />
            <InterestCard 
              title="Open Source"
              description="Contributing to open source projects in my free time."
              icon={<HeartIcon className="h-6 w-6" />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  icon: React.ReactNode
}

function ExperienceItem({ title, company, period, description, icon }: ExperienceItemProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground">
          <span>{company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{period}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

interface InterestCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function InterestCard({ title, description, icon }: InterestCardProps) {
  return (
    <div className="p-6 border rounded-lg bg-card">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}