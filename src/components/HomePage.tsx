import profilePhoto from "../assets/pfp.png";

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-light opacity-50"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative">
            <div className="w-80 h-85 rounded-lg overflow-hidden shadow-glow border-4 border-primary/20 animate-glow lg:mr-16">
              <img src={profilePhoto} alt="Kavya Kaushik - Portfolio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-foreground">Kavya Kaushik</span>
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in delay-200">
            <p>
              I'm a passionate final-year Electrical & Computer Engineering student at the University of Cape Town, 
              driven by the endless possibilities at the intersection of hardware and software innovation.
            </p>
            <p>
              My journey has led me through embedded systems, AI development, and full-stack engineering, 
              where I transform complex problems into elegant, practical solutions. From autonomous robots 
              to computer vision systems, I thrive on building technology that makes a meaningful impact.
            </p>
            <p>
              When I'm not immersed in code or circuit design, you'll find me leading the Google Developer 
              Student Club, mentoring fellow engineers, or exploring the latest advances in machine learning 
              and robotics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}