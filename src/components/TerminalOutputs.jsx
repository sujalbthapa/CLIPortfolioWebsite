import { 
  EXPERIENCE, 
  SKILLS, 
  MUN_HIGHLIGHTS, 
  ROTARACT_DATA, 
  CIVIC_INVOLVEMENT, 
  EDUCATION, 
  HELP_TEXT,
  SOCIAL_LINKS 
} from '../data/portfolioData';

// Rotaract data was missing from previous write_file, adding it here or assuming it's in data
// Actually I missed Rotaract in data.js, let me add it to data.js first or just define it here if it's small.
// I'll add it to data.js in a moment.

export function WhoamiOutput() {
  return (
    <div className="mt-1 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-elegant-primary underline underline-offset-4">USER PROFILE: sujal</h2>
        <p className="text-lg leading-relaxed italic">
          "I'm a software engineering student who happens to love diplomacy, design, and a good challenge."
        </p>
        <div className="space-y-3 opacity-90 text-sm leading-relaxed max-w-3xl">
          <p>
            I've always been a bit of a geek about how things work—whether it's the logic of a React component or the complexity of international relations. 
            Right now, I'm balancing my studies in Kathmandu with projects like co-founding Lunar Chronicles and researching deep learning. 
            For me, it's less about the titles and more about the curiosity that comes with building something new.
          </p>
          <p>
            My time in the MUN circuit and Rotaract has taught me that the best solutions usually come from listening and collaborating. 
            I'm just a perpetual learner trying to use code and community to make things a little better, one project at a time.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 border-t border-elegant-border pt-4">
           <div className="flex flex-col min-w-[120px]">
             <span className="text-[9px] sm:text-[10px] text-elegant-secondary font-bold uppercase">Software Engineering</span>
             <span className="text-[11px] sm:text-xs opacity-70">NCIT, PU (2022-2026)</span>
           </div>
           <div className="flex flex-col border-l border-elegant-border pl-4 min-w-[120px]">
             <span className="text-[9px] sm:text-[10px] text-elegant-success font-bold uppercase">Diplomacy</span>
             <span className="text-[11px] sm:text-xs opacity-70">MUN Trainer & Executive</span>
           </div>
           <div className="flex flex-col border-l border-elegant-border pl-4 min-w-[120px]">
             <span className="text-[9px] sm:text-[10px] text-elegant-warning font-bold uppercase">Design</span>
             <span className="text-[11px] sm:text-xs opacity-70">UI/UX & Branding Specialist</span>
           </div>
        </div>
        <p className="text-[10px] text-elegant-info mt-4 italic">
          [Tip: Use 'imageviewer' to see visual profile assets]
        </p>
      </div>
    </div>
  );
}

export function ExperienceOutput() {
  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">PROFESSIONAL IMPACT LOG</p>
      {EXPERIENCE.map((item, i) => (
        <div key={i} className="group border-l-2 border-elegant-border pl-6 relative pb-2">
          <div className="absolute w-3 h-3 bg-elegant-secondary rounded-full -left-[7.5px] top-1.5 shadow-sm" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
             <h4 className="text-sm sm:text-base font-bold text-elegant-primary uppercase tracking-tight">{item.role}</h4>
             <span className="text-[10px] text-elegant-warning font-bold uppercase">{item.date}</span>
          </div>
          <p className="text-[13px] sm:text-sm font-bold opacity-90 mb-2">@ {item.company}</p>
          <p className="text-xs opacity-80 leading-relaxed max-w-3xl">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function SkillsOutput() {
  return (
    <div className="mt-2 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">DOMAINS OF EXPERTISE</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((skill, i) => (
          <div key={i} className="p-4 border-2 border-elegant-border bg-elegant-subtle/30 rounded-lg">
            <p className="text-[9px] uppercase tracking-widest opacity-60 mb-1">{skill.category}</p>
            <h4 className={`text-lg mb-2 font-bold ${skill.color}`}>{skill.title}</h4>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((s, j) => (
                <span key={j} className="text-[10px] px-2 py-0.5 bg-white/5 border border-elegant-border rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsOutput() {
  return (
    <div className="mt-2 space-y-8 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">RESEARCH & PUBLICATIONS</p>
      
      <div className="p-6 border-2 border-elegant-border bg-elegant-primary/5 rounded-xl border-dashed">
        <p className="text-[10px] uppercase tracking-widest text-elegant-info font-bold mb-2"># FEATURED_PUBLICATION</p>
        <h3 className="text-xl font-bold mb-2">Retinal Fundus Disease Detection and Classification using ResNet-50</h3>
        <p className="text-xs italic text-elegant-warning mb-4">IEEE ICISCT 2025 // DOI: 10.1109/ICISCT65133.2025.11441375</p>
        <p className="text-sm leading-relaxed opacity-90 mb-6">
          A deep learning system utilizing the ResNet-50 architecture for multi-label retinal disease classification, 
          aimed at early diagnostic support for ocular conditions. Published in the proceedings of the 2025 International 
          Conference on Information Science and Communications Technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://ieeexplore.ieee.org/document/11441375" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-elegant-primary text-white hover:bg-elegant-primary/90 transition-all rounded">[ VIEW_IEEE_XPLORE ]</a>
          <a href="https://www.researchgate.net/publication/399407643_Retinal_Fundus_Disease_Detection_and_Classification_using_ResNet-50" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-2 border-elegant-primary text-elegant-primary hover:bg-elegant-primary hover:text-white transition-all rounded">[ RESEARCHGATE ]</a>
        </div>
      </div>
    </div>
  );
}

export function MunHighlightsOutput() {
  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">DIPLOMACY & MUN ARCHIVE</p>
      
      <div className="grid grid-cols-2 sm:flex sm:gap-8 border-b border-elegant-border pb-6 gap-4">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-elegant-primary">60+</p>
          <p className="text-[8px] sm:text-[9px] uppercase tracking-widest opacity-60">Conferences</p>
        </div>
        <div className="sm:border-l sm:border-elegant-border sm:pl-8">
          <p className="text-2xl sm:text-3xl font-bold text-elegant-secondary">17</p>
          <p className="text-[8px] sm:text-[9px] uppercase tracking-widest opacity-60">Press Roles</p>
        </div>
        <div className="sm:border-l sm:border-elegant-border sm:pl-8">
          <p className="text-2xl sm:text-3xl font-bold text-elegant-success">50</p>
          <p className="text-[8px] sm:text-[9px] uppercase tracking-widest opacity-60">Dais Roles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MUN_HIGHLIGHTS.map((cat, i) => (
          <div key={i} className="space-y-3">
            <h4 className="text-xs font-bold text-elegant-warning uppercase border-b border-elegant-warning/20 pb-1">{cat.title}</h4>
            <ul className="space-y-2">
              {cat.roles.map((r, j) => (
                <li key={j} className="text-xs flex gap-2">
                  <span className="text-elegant-info font-bold">▹</span>
                  <span className="opacity-80 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RotaractOutput() {
  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">ROTARACT & GLOBAL SERVICE</p>
      
      <div className="p-6 border-2 border-elegant-success bg-elegant-success/5 rounded-xl">
        <h3 className="text-2xl font-bold mb-1">{ROTARACT_DATA.role}</h3>
        <p className="text-sm font-bold text-elegant-success mb-6">{ROTARACT_DATA.club} // {ROTARACT_DATA.date}</p>
        
        <div className="space-y-4 text-sm opacity-90 leading-relaxed max-w-3xl">
           <p className="italic border-l-4 border-elegant-success pl-4 bg-elegant-success/5 py-2">
             "{ROTARACT_DATA.quote}"
           </p>
           {ROTARACT_DATA.description.map((desc, i) => (
             <p key={i}>{desc}</p>
           ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 pt-6 border-t border-elegant-success/20">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-elegant-warning font-bold">Administrative District</p>
            <p className="text-2xl font-bold text-elegant-primary">{ROTARACT_DATA.district}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-elegant-warning font-bold">Operational Zone</p>
            <p className="text-2xl font-bold text-elegant-primary">{ROTARACT_DATA.zone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CivicOutput() {
  return (
    <div className="mt-2 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">CIVIC INVOLVEMENT LOG</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CIVIC_INVOLVEMENT.map((v, i) => (
          <div key={i} className={`p-4 border-2 border-elegant-border ${v.color} bg-white/5 rounded-lg`}>
            <span className="text-[9px] text-elegant-warning font-bold uppercase">{v.date}</span>
            <h4 className="text-lg font-bold mt-1 text-elegant-primary tracking-tight">{v.title}</h4>
            <p className="text-xs font-bold opacity-70 mb-2">@ {v.company}</p>
            <p className="text-[11px] opacity-80 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EducationOutput() {
  return (
    <div className="mt-2 space-y-8 sm:space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">ACADEMIC FOUNDATIONS</p>
      {EDUCATION.map((e, i) => (
        <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 group">
           <div className="text-[10px] text-elegant-warning font-bold sm:w-32 shrink-0 uppercase pt-1.5">{e.date}</div>
           <div className="pb-6 border-b border-elegant-border flex-1">
              <h4 className="text-lg sm:text-xl font-bold text-elegant-primary">{e.degree}</h4>
              <p className="text-sm font-bold opacity-90 mt-1">{e.inst}</p>
              <p className="text-xs opacity-70 mt-2 leading-relaxed max-w-2xl">{e.desc}</p>
              {e.coursework && (
                <p className="text-[10px] mt-2 text-elegant-success font-bold uppercase tracking-widest">&gt;&gt; Key Coursework: {e.coursework}</p>
              )}
           </div>
        </div>
      ))}
    </div>
  );
}

export function HelpOutput() {
  return (
    <div className="mt-1 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">AVAILABLE COMMANDS</p>
      <div className="grid grid-cols-1 gap-2">
        {HELP_TEXT.map((h) => (
          <div key={h.cmd} className="flex flex-col sm:flex-row sm:gap-4 text-xs py-2 border-b border-elegant-border/10">
            <span className="font-bold sm:w-48 shrink-0 text-elegant-primary">{h.cmd}</span>
            <span className="hidden sm:inline opacity-40">→</span>
            <span className="text-elegant-fg dark:text-elegant-dark-fg opacity-80">{h.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialOutput() {
  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">DIGITAL PRESENCE & SOCIAL LINKS</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SOCIAL_LINKS.map((link, i) => (
          <a 
            key={i} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border-2 border-elegant-border bg-white/5 rounded-lg hover:bg-elegant-primary/10 hover:border-elegant-primary transition-all group flex items-center gap-4"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-elegant-primary uppercase">{link.platform}</span>
              <span className="text-[10px] opacity-60">{link.handle}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export function PoetryOutput() {
  return (
    <div className="mt-1 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <p className="text-xs italic text-elegant-secondary">
        Directory changed to <span className="underline decoration-elegant-warning font-bold">/poetry</span>
      </p>
      <div className="p-4 sm:p-8 border-2 border-elegant-secondary/30 bg-elegant-secondary/5 rounded-2xl">
        <p className="text-lg sm:text-xl leading-relaxed italic max-w-2xl">
          "Where logic meets lyricism — a space where <span className="text-elegant-primary">binary trees</span> bloom into metaphors and <span className="text-elegant-secondary">recursive patterns</span> echo through verse."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="p-4 border border-elegant-border rounded-lg">
          <h4 className="text-[10px] uppercase tracking-[0.2em] mb-4 text-elegant-info font-bold">EDITORIAL EXPERIENCE</h4>
          <ul className="text-sm space-y-3 opacity-90 text-elegant-fg">
            <li className="flex gap-3"><span className="text-elegant-primary font-bold">#</span> <span>Editor-in-Chief for multiple international conference magazines.</span></li>
            <li className="flex gap-3"><span className="text-elegant-primary font-bold">#</span> <span>Expert in policy framework writing and artistic anthologies.</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
