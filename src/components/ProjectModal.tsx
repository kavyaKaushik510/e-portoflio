import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Download, X } from "lucide-react"

interface Project {
  id: string
  title: string
  image: string
  techStack: string[]
  description: string
  fullDescription: string
  githubUrl: string
  reportUrl: string
  skills: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 bg-card border-border overflow-y-auto">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              variant="hero"
              className="flex items-center gap-2"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
            <Button 
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(project.reportUrl, '_blank')}
            >
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}