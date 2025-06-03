"use client"

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon,
  SendIcon
} from 'lucide-react'

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values)
    
    // Show success message
    toast.success("Message sent successfully! I'll get back to you soon.")
    
    // Reset form
    form.reset()
  }
  
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 font-playfair">Send Me a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..."
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  <SendIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 font-playfair">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-6">
              <ContactInfoItem 
                icon={<MapPinIcon className="h-6 w-6" />}
                title="Location"
                content="San Francisco, CA, United States"
              />
              
              <ContactInfoItem 
                icon={<MailIcon className="h-6 w-6" />}
                title="Email"
                content="hello@example.com"
                link="mailto:hello@example.com"
              />
              
              <ContactInfoItem 
                icon={<PhoneIcon className="h-6 w-6" />}
                title="Phone"
                content="+1 (555) 123-4567"
                link="tel:+15551234567"
              />
            </div>
            
            <div className="pt-8 border-t">
              <h3 className="text-lg font-medium mb-4">My Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and new opportunities. My working hours are 9 AM to 6 PM, Monday through Friday.
              </p>
              <p className="text-muted-foreground">
                Response time: <span className="text-foreground font-medium">Within 24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ContactInfoItemProps {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

function ContactInfoItem({ icon, title, content, link }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {link ? (
          <a 
            href={link}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  )
}