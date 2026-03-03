const webSkills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TailwindCSS", icon: "💨" },
];

const langSkills = [
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "🔧" },
  { name: "C++", icon: "⚙️" },
];

const toolSkills = [
  { name: "Git", icon: "🌿" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💻" },
  { name: "Jupyter", icon: "📓" },
];

const SkillBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border bg-secondary/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground">Skills &amp; Tech</h2>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Web Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {webSkills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {langSkills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Tools & Environment</h3>
            <div className="flex flex-wrap gap-3">
              {toolSkills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
