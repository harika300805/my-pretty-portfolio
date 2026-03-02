const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <span className="font-display font-800 text-lg gradient-text tracking-tight">HS</span>

      <div className="hidden md:flex items-center gap-8">
        {["Skills", "Projects", "Coding", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="mailto:harikasama12@gmail.com"
        className="text-xs font-medium px-4 py-2 rounded-lg border-glow bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
