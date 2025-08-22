import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const response = await fetch("https://formspree.io/f/xdkdqgvg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
             I’m open to opportunities and collaboration, so feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card hover:shadow-hover transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <p className="text-sm text-green-600 mt-2">✅ Your message has been sent!</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600 mt-2">❌ Something went wrong. Please try again.</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links (unchanged) */}
          {/* Keep your right-hand contact cards as-is */}
          <div className="space-y-8">
          {/* Contact Info */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">kavyaashi10@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Contact Number</p>
                    <p className="text-muted-foreground">+27 64 422 5684</p> {/* Replace with your actual number */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/kavyaKaushik510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background-tertiary hover:bg-card-hover transition-smooth group"
                >
                  <Github className="h-6 w-6 text-primary group-hover:text-primary-glow transition-colors" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@kavyakaushik510</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/kavya-kaushik-a4b67719b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background-tertiary hover:bg-card-hover transition-smooth group"
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-primary-glow transition-colors" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">kavyakaushik</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </section>
  )
}
