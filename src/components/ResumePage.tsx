import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

export function ResumePage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top Row: Title + Download Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold">My Resume</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Education + Awards */}
          <div className="space-y-8">

            {/* Education Section */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-2">University of Cape Town</h4>
                    <p className="text-primary font-medium mb-2">BSc. Electrical and Computer Engineering (2022–2025)</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Dean's Merit List (Years 1–3)</li>
                      <li>• Merit-based entrance scholarship (R60,000)</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-secondary pl-6">
                    <h4 className="text-xl font-semibold mb-2">Bryanston High School</h4>
                    <p className="text-primary font-medium mb-2">Matric (2017–2021)</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• GPA: 90%, 8 distinctions</li>
                      <li>• Two Honours blazers (school's highest award)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards & Leadership Section */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Awards & Leadership</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-lg font-semibold">Lead, Google Developer Student Club</h4>
                    <p className="text-primary font-medium mb-2">2023–2024</p>
                    <p className="text-muted-foreground text-sm">Hosted coding events & hackathons for 300+ students</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-lg font-semibold">Finalist, McKinsey Future Leaders Prize</h4>
                    <p className="text-primary font-medium mb-2">2022</p>
                    <p className="text-muted-foreground text-sm">Selected after essays and case interviews</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-6">
                    <h4 className="text-lg font-semibold">Finalist, Global Youth Science and Technology Bowl - Hong Kong</h4>
                    <p className="text-primary font-medium mb-2">2021</p>
                    <p className="text-muted-foreground text-sm">ML-based arrhythmia project — Special award recipient</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-6">
                    <h4 className="text-lg font-semibold">Finalist, Eskom Expo</h4>
                    <p className="text-primary font-medium mb-2">2019–2020</p>
                    <p className="text-muted-foreground text-sm">Won silver & bronze medals for science innovation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Experience */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="space-y-6">
                  {/* Each experience block */}
                  {[
                    {
                      title: "Software Engineer Intern",
                      company: "Sourcy",
                      date: "Jul 2025 – Present",
                      bullets: [
                        "Analysed Viral video datasets to uncover content trends",
                        "Built video-based computer vision pipelines",
                      ]
                    },
                    {
                      title: "Developer Intern",
                      company: "Electrum Payments",
                      date: "Jun 2025 – Jul 2025",
                      bullets: [
                        "Designed MySQL schemas, implemented Java DAOs",
                        "Wrote unit/integration tests using JUnit, Docker",
                      ]
                    },
                    {
                      title: "AI Intern",
                      company: "CaliVision",
                      date: "Jan 2025 – Feb 2025",
                      bullets: [
                        "Built stereo vision human detection system",
                        "Led YOLO-based pose estimation team",
                      ]
                    },
                    {
                      title: "Software Intern",
                      company: "Trixta AI",
                      date: "Nov 2024 – Dec 2024",
                      bullets: [
                        "Created onboarding UI using React + Elixir",
                      ]
                    },
                    {
                      title: "Backend Intern",
                      company: "Impact.com",
                      date: "Jun 2024 – Jul 2024",
                      bullets: [
                        "Built knowledge graph features using Neo4j",
                      ]
                    },
                    {
                      title: "Software Intern",
                      company: "Mandla Money",
                      date: "Jun 2023 – Jul 2023",
                      bullets: [
                        "Tested blockchain app backend, wrote documentation",
                      ]
                    },
                    {
                      title: "Full-stack Intern",
                      company: "Empire Partner Foundation",
                      date: "Jun 2022 – Jul 2022",
                      bullets: [
                        "Built Django-based backend for startup platform",
                      ]
                    }
                  ].map((exp, idx) => (
                    <div key={idx} className={`border-l-2 ${idx < 3 ? 'border-primary' : 'border-secondary'} pl-6`}>
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <p className="text-primary font-medium mb-2">{exp.company} • {exp.date}</p>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {exp.bullets.map((line, i) => (
                          <li key={i}>• {line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
