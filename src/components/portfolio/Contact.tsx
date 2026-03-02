import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Let's connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Open to collaborations, internships, or just a good conversation about tech. Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email card */}
          <a
            href="mailto:harikasama12@gmail.com"
            className="group card-gradient rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-700 text-foreground mb-1">Email Me</h3>
            <p className="text-sm text-muted-foreground mb-4">harikasama12@gmail.com</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
              <Send className="w-3 h-3" /> Send a message
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/harika-sama-119834323/"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-gradient rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <Linkedin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-700 text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground mb-4">Let's connect professionally</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
              View Profile →
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/harika300805"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-gradient rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-700 text-foreground mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground mb-4">Check out my repositories</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
              View Code →
            </span>
          </a>

          {/* Quote card */}
          <div className="card-gradient rounded-2xl p-7 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-6xl opacity-10 font-display font-800">"</div>
            <p className="font-display text-xl font-600 text-foreground leading-snug mb-4">
              "Clean UI, solid logic, zero excuses."
            </p>
            <p className="text-sm text-primary font-medium">— Harika Sama</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
