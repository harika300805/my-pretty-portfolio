import { Code2, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    handle: "@harika_sama_",
    description: "Consistent problem solving — algorithms, data structures, and competitive challenges.",
    url: "https://leetcode.com/u/harika_sama_/",
    color: "hsl(38 95% 55%)",
    bg: "hsl(38 95% 55% / 0.08)",
    border: "hsl(38 95% 55% / 0.25)",
    emoji: "🧩",
  },
  {
    name: "HackerRank",
    handle: "@harikasama12",
    description: "Badges and certifications in problem solving, Python, Java, and SQL.",
    url: "https://www.hackerrank.com/profile/harikasama12",
    color: "hsl(145 63% 45%)",
    bg: "hsl(145 63% 45% / 0.08)",
    border: "hsl(145 63% 45% / 0.25)",
    emoji: "🏆",
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Always grinding</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground">Coding Practice</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Consistently sharpening problem-solving skills through competitive programming and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative card-gradient rounded-2xl p-7 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 30px hsl(220 20% 3% / 0.4)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: profile.bg, border: `1px solid ${profile.border}` }}
                >
                  {profile.emoji}
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <h3 className="font-display text-xl font-700 text-foreground mb-1" style={{ color: profile.color }}>
                {profile.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 font-mono">{profile.handle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium" style={{ color: profile.color }}>
                <Code2 className="w-3.5 h-3.5" />
                View Profile
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
