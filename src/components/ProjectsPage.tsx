import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectModal } from "@/components/ProjectModal";

// Import images
import projectBongi from "../assets/BONGI.jpeg";
import projectFPGA from "../assets/project-fpga.jpg";
import projectScheduler from "../assets/project-scheduler.jpg";
import projectSandpile from "../assets/project-sandpile.jpg";
import projectP2P from "../assets/project-p2p.jpg";
import projectMicromouse from "../assets/project-micromouse.jpg";

interface Project {
  id: string;
  title: string;
  image: string;
  techStack: string[];
  description: string;
  fullDescription: string;
  githubUrl: string;
  reportUrl: string;
  skills: string[];
}

const projects: Project[] = [{
  id: "1",
  title: "B.O.N.G.I",
  image: projectBongi,
  techStack: ["C++", "Computer Vision", "ESP32-CAM", "Python"],
  description: "A remote-controlled robot built for the conservation of African Penguins using the ESP32-CAM for guano collection.",
  fullDescription: "B.O.N.G.I is an innovative conservation project designed to help protect African Penguins through autonomous guano collection. The robot utilizes an ESP32-CAM module for real-time video streaming and AI-powered computer vision to identify and navigate to guano deposits. Built with C++ for optimal performance on embedded systems, the project demonstrates advanced integration of hardware and software for environmental conservation. The system features remote control capabilities, autonomous navigation algorithms, and real-time data collection to support penguin habitat management.",
  githubUrl: "https://github.com/kavyaKaushik510/B.O.N.G.I",
  reportUrl: "/reports/BONGI.pdf",
  skills: ["Embedded Systems", "C++", "Computer Vision", "ESP32", "AI Detection", "Environmental Conservation"]
}, {
  id: "2",
  title: "Image Edge Detection Processing using FPGAs",
  image: projectFPGA,
  techStack: ["VHDL", "FPGA", "Image Processing"],
  description: "A hardware accelerator for image denoising and edge detection using a median filter and Sobel operator.",
  fullDescription: "This project implements a comprehensive hardware solution for real-time image processing using FPGA technology. The system combines median filtering for noise reduction with Sobel edge detection algorithms, all implemented in VHDL for maximum performance. The hardware accelerator processes grayscale images efficiently, demonstrating the power of parallel processing in FPGAs for computationally intensive tasks. The project showcases advanced digital design principles, memory management, and pipeline optimization for high-throughput image processing applications.",
  githubUrl: "https://github.com/kavyaKaushik510/Image-Edge-Detection-Processing-using-FPGAs",
  reportUrl: "/reports/yoda.pdf",
  skills: ["VHDL", "FPGA Design", "Digital Signal Processing", "Hardware Acceleration", "Image Processing"]
}, {
  id: "3",
  title: "CPU Processes Scheduler",
  image: projectScheduler,
  techStack: ["Java", "Operating Systems", "Schedulers", "Simulation"],
  description: "A Java-based operating systems simulator implementing FCFS, SJF, and RR scheduling for simulated customer orders.",
  fullDescription: "This comprehensive operating systems simulator demonstrates the implementation and comparison of three fundamental CPU scheduling algorithms: First-Come-First-Served (FCFS), Shortest Job First (SJF), and Round Robin (RR). Built in Java, the simulator processes customer orders as jobs, providing detailed analytics on turnaround time, waiting time, and system efficiency. The project includes a user-friendly interface for inputting job parameters and visualizing scheduling results, making it an excellent educational tool for understanding operating systems concepts.",
  githubUrl: "https://github.com/kavyaKaushik510/CPU-Processes-Scheduler",
  reportUrl: "/reports/CPU Process Scheduler.pdf",
  skills: ["Java", "Operating Systems", "Algorithm Implementation", "Performance Analysis", "System Simulation"]
}, {
  id: "4",
  title: "PCP Albian Sandpile Simulation",
  image: projectSandpile,
  techStack: ["C++", "Parallel Computing", "Multi-threading", "Simulation"],
  description: "A parallel sandpile simulation exploring grid-based overflow behavior using multi-threading in C++.",
  fullDescription: "This project implements the Abelian Sandpile Model using advanced parallel computing techniques in C++. The simulation explores complex emergent behaviors in grid-based systems where sand grains topple according to simple local rules, creating fascinating patterns and avalanche dynamics. Utilizing multi-threading for optimal performance, the project demonstrates parallel algorithm design, thread synchronization, and efficient memory management. The simulation provides insights into self-organized criticality and complex systems behavior, making it valuable for both computational physics and parallel programming education.",
  githubUrl: "https://github.com/kavyaKaushik510/PCP-Albian-Sandpile-Simulation",
  reportUrl: "/reports/albian.pdf",
  skills: ["C++", "Parallel Computing", "Multi-threading", "Complex Systems", "Computational Physics"]
}, {
  id: "5",
  title: "Socket Programming P2P",
  image: projectP2P,
  techStack: ["Python", "Network Programming", "Sockets", "P2P"],
  description: "Python-based peer-to-peer socket file sharing system with error checking and message acknowledgment.",
  fullDescription: "This peer-to-peer file sharing system demonstrates advanced network programming concepts using Python sockets. The system implements reliable file transfer protocols with comprehensive error checking, message acknowledgment, and connection management. Features include multi-client support, file integrity verification, and robust error handling for network failures. The project showcases network protocol design, concurrent programming, and distributed systems principles, providing a solid foundation for understanding modern peer-to-peer architectures.",
  githubUrl: "https://github.com/kavyaKaushik510/Socket-Programming-P2P",
  reportUrl: "/reports/networks.pdf",
  skills: ["Python", "Network Programming", "Socket Programming", "P2P Architecture", "Protocol Design"]
}, {
  id: "6",
  title: "Micromouse Maze Solver",
  image: projectMicromouse,
  techStack: ["C++", "Robotics", "Embedded Systems", "Algorithms"],
  description: "A micromouse robot that autonomously navigates a maze using microcontroller logic and wall detection.",
  fullDescription: "The Micromouse project involves designing and programming an autonomous robot capable of navigating through an unknown maze to reach its center in the shortest possible time. Implemented in C++ on embedded systems, the robot uses sophisticated wall-sensing algorithms, path planning strategies, and real-time decision making. The project combines mechanical design, sensor integration, and intelligent algorithms to create a competitive micromouse capable of learning maze layouts and optimizing its path. This project demonstrates expertise in robotics, sensor fusion, and autonomous navigation systems.",
  githubUrl: "https://github.com/ZuhayrHalday/EEE3088F-Micromouse-Project",
  reportUrl: "/reports/micromouse.pdf",
  skills: ["C++", "Robotics", "Embedded Systems", "Path Planning", "Sensor Integration", "Autonomous Navigation"]
}];

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="py-20 bg-background-secondary min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card 
              key={project.id} 
              className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden flex flex-col" 
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="mt-auto">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}