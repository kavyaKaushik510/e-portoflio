import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomePage } from "@/components/HomePage";
import { ProjectsPage } from "@/components/ProjectsPage";
import { ResumePage } from "@/components/ResumePage";
import { ContactPage } from "@/components/ContactPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content with Tabs */}
      <Tabs defaultValue="home" className="w-full">
        <div className="border-b border-border bg-background-secondary sticky top-0 z-40">
          <div className="container mx-auto px-6">
            <TabsList className="grid w-full grid-cols-4 bg-transparent h-16">
              <TabsTrigger 
                value="home" 
                className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Home
              </TabsTrigger>
              <TabsTrigger 
                value="projects"
                className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="resume"
                className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Resume
              </TabsTrigger>
              <TabsTrigger 
                value="contact"
                className="text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Contact
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="home" className="mt-0">
          <HomePage />
        </TabsContent>

        <TabsContent value="projects" className="mt-0">
          <ProjectsPage />
        </TabsContent>

        <TabsContent value="resume" className="mt-0">
          <ResumePage />
        </TabsContent>

        <TabsContent value="contact" className="mt-0">
          <ContactPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;