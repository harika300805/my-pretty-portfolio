import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CrowdFree Commute",
    description: "A smart commute planning web app that helps users discover less crowded routes and public transport options for a stress-free daily commute experience.",
    tags: ["React", "JavaScript", "TailwindCSS"],
    emoji: "🚌",
    github: "https://github.com/harika300805",
  },
  {
    title: "Image Processing Suite",
    description: "Developed and implemented multiple image processing applications using OpenCV, providing hands-on experience with real-time computer vision techniques.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    emoji: "🖼️",
    github: "https://github.com/harika300805",
  },
  {
    title: "Civic Issue Tracker",
    description: "A MERN stack web application that enables citizens to report and track civic issues like potholes and garbage. Helps authorities manage complaints efficiently, improving transparency and resolution speed.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    emoji: "🏙️",
    github: "https://github.com/harika300805",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Things I've built</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative card-gradient rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 30px hsl(220 20% 3% / 0.5)' }}
            >
              {/* Emoji icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl mb-5">
                {project.emoji}
              </div>

              <h3 className="font-display text-lg font-700 text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
