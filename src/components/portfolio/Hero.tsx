import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'hsl(168 70% 55%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8" style={{ background: 'hsl(260 60% 55%)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-secondary/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium tracking-wide">Student Developer</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl font-800 mb-6 leading-tight">
          Harika
          <span className="gradient-text"> Sama</span>
        </h1>

        {/* Bio */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          I craft sleek web apps with the MERN stack and turn ideas into real, impactful products.
          <span className="text-foreground"> Clean UI, solid logic, zero excuses.</span> Always leveling up.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <a href="https://github.com/harika300805" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl border-glow bg-secondary/60 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:glow-sm group">
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/harika-sama-119834323/" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl border-glow bg-secondary/60 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 group">
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="mailto:harikasama12@gmail.com"
            className="p-3 rounded-xl border-glow bg-secondary/60 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 group">
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects"
            className="px-8 py-3.5 rounded-xl font-display font-600 text-sm tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 glow">
            View Projects
          </a>
          <a href="#contact"
            className="px-8 py-3.5 rounded-xl font-display font-600 text-sm tracking-wide border-glow bg-secondary/50 text-foreground hover:bg-primary/10 transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
