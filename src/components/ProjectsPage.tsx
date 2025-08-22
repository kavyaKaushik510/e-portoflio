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
  course: string; // ✅ NEW
}

const projects: Project[] = [{
  id: "1",
  title: "B.O.N.G.I",
  image: projectBongi,
  techStack: ["C++", "Computer Vision", "ESP32-CAM", "Python"],
  description: "A remote-controlled robot built for the conservation of African Penguins using the ESP32-CAM for guano collection.",
  fullDescription: "B.O.N.G.I. is a remotely operated robotic system designed for the conservation of African Penguins. The robot integrates a 3D-printed chassis, a servo-actuated scraping mechanism, and an ESP32-CAM module for live video streaming. Controlled over Wi-Fi via a custom web interface, the robot enables researchers to collect guano samples without disturbing moulting penguins. The project combined embedded systems programming (C++/Arduino), real-time camera streaming, and GUI design, while ensuring robustness in outdoor environments. The prototype passed 33/35 acceptance tests, demonstrating reliable navigation, scraping, and video feedback. This project highlighted how affordable robotics can support ethical wildlife monitoring and conservation.",
  githubUrl: "https://github.com/kavyaKaushik510/B.O.N.G.I",
  reportUrl: "/reports/BONGI.pdf",
  skills: ["Embedded Systems", "C++", "Computer Vision", "ESP32", "AI Detection", "Environmental Conservation"],
  course: "EEE4113F – Design Project" //
}, {
  id: "2",
  title: "Image Edge Detection Processing using FPGAs",
  image: projectFPGA,
  techStack: ["VHDL", "FPGA", "Image Processing"],
  description: "A hardware accelerator for image denoising and edge detection using a median filter and Sobel operator.",
  fullDescription: "This project developed a high-performance digital accelerator for real-time image enhancement on FPGA hardware. The pipeline combined a 3×3 median filter to remove salt-and-pepper noise with Sobel edge detection for sharp boundary extraction. MATLAB served as a golden reference before translation into Verilog HDL and deployment on a Xilinx Spartan A7 FPGA. By exploiting parallelism, the design achieved a 189× speed-up compared to a software implementation, processing images in just 2.65 ms. The project also explored pipeline optimization, hardware resource trade-offs, and validation across multiple test images. It demonstrated the benefits of FPGA acceleration for computer vision tasks in robotics, surveillance, and embedded AI.",
  githubUrl: "https://github.com/kavyaKaushik510/Image-Edge-Detection-Processing-using-FPGAs",
  reportUrl: "/reports/yoda.pdf",
  skills: ["VHDL", "FPGA Design", "Digital Signal Processing", "Hardware Acceleration", "Image Processing"],
   course: "EEE4120F – High Performance Embedded Systems"
}, {
  id: "3",
  title: "CPU Processes Scheduler",
  image: projectScheduler,
  techStack: ["Java", "Operating Systems", "Schedulers", "Simulation"],
  description: "A Java-based operating systems simulator implementing FCFS, SJF, and RR scheduling for simulated customer orders.",
  fullDescription: "This project implemented a parallel solution for simulating the Abelian Sandpile, a two-dimensional cellular automaton where grains of sand topple between cells until reaching a stable state. Using Java’s fork/join framework, the grid was recursively divided into sub-tasks to exploit multi-core processors while avoiding data races. Extensive testing identified optimal sequential cut-offs to balance parallel overhead with runtime gains. Benchmarking across different machines showed significant speed-ups (up to 3.5×) for large grid sizes. The project highlighted challenges in workload partitioning, synchronization, and parallel algorithm design, demonstrating how parallelism transforms computationally heavy simulations into scalable, efficient processes.",
  githubUrl: "https://github.com/kavyaKaushik510/CPU-Processes-Scheduler",
  reportUrl: "/reports/CPU Process Scheduler.pdf",
  skills: ["Java", "Operating Systems", "Algorithm Implementation", "Performance Analysis", "System Simulation"],
  course: "CSC3002F – Operating Systems"
}, {
  id: "4",
  title: "PCP Albian Sandpile Simulation",
  image: projectSandpile,
  techStack: ["Java", "Parallel Computing", "Multi-threading", "Simulation"],
  description: "A parallel sandpile simulation exploring grid-based overflow behavior using multi-threading in C++.",
  fullDescription: "This project implemented a parallel solution for simulating the Abelian Sandpile, a two-dimensional cellular automaton. Using the Java fork/join framework, the grid was recursively divided into smaller segments to eliminate data races and optimise execution. Extensive benchmarking on different machines demonstrated significant runtime improvements compared to the serial version, particularly for large grid sizes.",
  githubUrl: "https://github.com/kavyaKaushik510/PCP-Albian-Sandpile-Simulation",
  reportUrl: "/reports/albian.pdf",
  skills: ["C++", "Parallel Computing", "Multi-threading", "Complex Systems", "Computational Physics"],
  course: "CSC2000S – Parallel Computing"
}, {
  id: "5",
  title: "Socket Programming P2P",
  image: projectP2P,
  techStack: ["Python", "Network Programming", "Sockets", "P2P"],
  description: "Python-based peer-to-peer socket file sharing system with error checking and message acknowledgment.",
  fullDescription: "This project implemented a mini peer-to-peer file sharing system in Python, inspired by BitTorrent. The system consisted of a tracker (UDP server) to maintain available seeders, a seeder (TCP server) to distribute file chunks, and a leecher (TCP client) to download and reassemble files. Features included parallel downloads, SHA-256 based file integrity verification, automatic re-seeding after download, and a progress bar GUI. The design demonstrated how hybrid UDP/TCP architectures balance lightweight coordination with reliable data transfer. Robust error handling was integrated to manage failed downloads and inactive peers. This project provided a solid foundation in distributed systems, concurrency, and practical protocol design.",
  githubUrl: "https://github.com/kavyaKaushik510/Socket-Programming-P2P",
  reportUrl: "/reports/networks.pdf",
  skills: ["Python", "Network Programming", "Socket Programming", "P2P Architecture", "Protocol Design"],
  course: "CSC3002F – Computer Networks"
}, {
  id: "6",
  title: "Micromouse Maze Solver",
  image: projectMicromouse,
  techStack: ["Simulink", "Robotics", "Embedded Systems", "Algorithms"],
  description: "A micromouse robot that autonomously navigates a maze using microcontroller logic and wall detection.",
  fullDescription: "The Micromouse project involved designing and programming an autonomous robot to solve a maze and reach its center using the shortest path possible. The robot was built by integrating power, sensing, and control subsystems on a custom motherboard. MATLAB Simulink was used to program navigation logic, with sensors providing line-following and wall detection. Early implementations relied on left-hand wall following, while future work aimed to integrate the Flood Fill algorithm for optimal pathfinding. Challenges included sensor calibration, sunlight interference during demos, and fine-tuning motor control. The project emphasized real-world robotics trade-offs between hardware limitations and algorithmic ambition, giving experience in autonomous navigation and embedded control systems.",
  githubUrl: "https://github.com/ZuhayrHalday/EEE3088F-Micromouse-Project",
  reportUrl: "/reports/micromouse.pdf",
  skills: ["C++", "Robotics", "Embedded Systems", "Path Planning", "Sensor Integration", "Autonomous Navigation"],
  course: "EEE3097S – Electrical Engineering Design"
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