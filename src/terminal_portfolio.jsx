import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// Image Imports from guisite assets (kept for the imageviewer only)
import workingImg from "./assets/guisite/assets/SujalPhoto_Working-DjzFLg1L.webp";
import landingImg from "./assets/guisite/assets/SujalPhoto_Landing-CgxmKT61.webp";
import satDownImg from "./assets/guisite/assets/SujalPhoto_SatDown-CzahmRAm.jpg";
import talkingImg from "./assets/guisite/assets/SujalPhoto_Talking-BKF4BjGT.jpeg";
import unImg from "./assets/guisite/assets/SujalPhoto_UN-B-KwvBp5.webp";
import debatingImg from "./assets/guisite/assets/SujalPhoto_Debating-5OPizy9E.webp";
import parliamentImg from "./assets/guisite/assets/SujalPhoto_Parliament-ibSNbslr.webp";
import rotaractImg from "./assets/guisite/assets/Sujal_Rotaract-DrHziJNU.jpg";
import landscapeImg from "./assets/guisite/assets/View_Landscape-oyS7pnHc.jpg";

const IMAGES = [
  { src: landingImg, alt: "Landing Portrait", caption: "Sujal Bikram Thapa - Portrait" },
  { src: workingImg, alt: "Working", caption: "Deep in thoughts and code" },
  { src: satDownImg, alt: "Sat Down", caption: "Professional Stance" },
  { src: talkingImg, alt: "Talking", caption: "Engaging in Dialogue" },
  { src: unImg, alt: "UN Event", caption: "Diplomacy & Engagement" },
  { src: debatingImg, alt: "Debating", caption: "The Art of Persuasion" },
  { src: parliamentImg, alt: "Parliament", caption: "Civic Insights" },
  { src: rotaractImg, alt: "Rotaract", caption: "International Service" },
  { src: landscapeImg, alt: "Kathmandu Valley", caption: "Where it all begins" },
];

const ASCII_BANNER = `
 ███████╗██╗   ██╗     ██╗ █████╗ ██╗     
 ██╔════╝██║   ██║     ██║██╔══██╗██║     
 ███████╗██║   ██║     ██║███████║██║     
 ╚════██║██║   ██║██   ██║██╔══██║██║     
 ███████║╚██████╔╝╚█████╔╝██║  ██║███████╗
 ╚══════╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚══════╝`;

const HELP_TEXT = [
  { cmd: "whoami", desc: "The Profile" },
  { cmd: "cat experience.txt", desc: "Professional Impact" },
  { cmd: "cat skills.txt", desc: "Domains Of Expertise" },
  { cmd: "ls projects/", desc: "Research & Publications" },
  { cmd: "cat mun.txt", desc: "Diplomacy & MUN Highlights" },
  { cmd: "cat rotaract.txt", desc: "Rotaract & Global Service" },
  { cmd: "cat civic.txt", desc: "Civic Involvement" },
  { cmd: "cat education.txt", desc: "Academic Foundations" },
  { cmd: "imageviewer", desc: "Open Image Gallery" },
  { cmd: "clear", desc: "Clear terminal" },
  { cmd: "help", desc: "Show this help" },
];

const VALID_COMMANDS = HELP_TEXT.map(h => h.cmd);

const SIDEBAR_COMMANDS = [
  { label: "The Profile", icon: "👤", cmd: "whoami" },
  { label: "Professional Impact", icon: "💼", cmd: "cat experience.txt" },
  { label: "Domains Of Expertise", icon: "⚡", cmd: "cat skills.txt" },
  { label: "Research & Pubs", icon: "🔬", cmd: "ls projects/" },
  { label: "Diplomacy & MUN", icon: "🗳️", cmd: "cat mun.txt" },
  { label: "Rotaract & Service", icon: "🌍", cmd: "cat rotaract.txt" },
  { label: "Civic Involvement", icon: "🤝", cmd: "cat civic.txt" },
  { label: "Academic Foundations", icon: "🎓", cmd: "cat education.txt" },
  { label: "Image Gallery", icon: "🖼️", cmd: "imageviewer" },
  { label: "Help", icon: "❓", cmd: "help" },
];

function WhoamiOutput() {
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
           <div className="flex flex-col">
             <span className="text-[10px] text-elegant-secondary font-bold uppercase">Software Engineering</span>
             <span className="text-xs opacity-70">NCIT, PU (2022-2026)</span>
           </div>
           <div className="flex flex-col border-l border-elegant-border pl-4">
             <span className="text-[10px] text-elegant-success font-bold uppercase">Diplomacy</span>
             <span className="text-xs opacity-70">MUN Trainer & Executive</span>
           </div>
           <div className="flex flex-col border-l border-elegant-border pl-4">
             <span className="text-[10px] text-elegant-warning font-bold uppercase">Design</span>
             <span className="text-xs opacity-70">UI/UX & Branding Specialist</span>
           </div>
        </div>
        <p className="text-[10px] text-elegant-info mt-4 italic">
          [Tip: Use 'imageviewer' to see visual profile assets]
        </p>
      </div>
    </div>
  );
}

function ExperienceOutput() {
  const items = [
    { role: "Co-Founder & Managing Director", company: "Lunar Chronicles Ltd.", date: "2025 — Present", desc: "Oversee strategic planning and operations; coordinated high-profile Health Dialogues with Health Minister Hon. Pradeep Poudel and Heart Surgeon Dr. Bhagwan Koirala." },
    { role: "MUN Trainer/Organiser & UI/Web Designer", company: "Youth Thinkers' Society (YTS)", date: "2022 — 2026", desc: "Managed training programmes and resources over 3.5 years; coordinated cross-functional teams in large-scale event environments." },
    { role: "Program Director & Event Co-Lead", company: "HULT Prize @ NCIT", date: "2023 — 2024", desc: "Directed full program lifecycle for one of the world's largest student entrepreneurship competitions; managed 5+ sub-teams." },
    { role: "Design Team Lead", company: "NCIT Tech Fest", date: "2023 — 2024", desc: "Managed full design workflow from concept to delivery, producing event branding, promotional materials, and digital assets." },
    { role: "UI/UX Designer & Web Developer", company: "Nepal Open Source Klub (NOSK)", date: "2023 — 2026", desc: "Managed end-to-end web lifecycle for 3 major events (SFD 2024, Noskathon Lite, SFD 2025); coordinated distributed contributor teams via GitHub workflows." },
    { role: "Vice President & Creative Design Lead", company: "MUN Society Nepal", date: "Sep 2024 — Present", desc: "Oversee digital infrastructure and innovation strategy. Managed branding for nationwide circuits." },
    { role: "Director General & Head of IT", company: "TIMUN 5.0 & 6.0", date: "2021 — 2023", desc: "Managed conference operations and technical infrastructure for one of Nepal's largest MUN circuits." }
  ];

  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">PROFESSIONAL IMPACT LOG</p>
      {items.map((item, i) => (
        <div key={i} className="group border-l-2 border-elegant-border pl-6 relative pb-2">
          <div className="absolute w-3 h-3 bg-elegant-secondary rounded-full -left-[7.5px] top-1.5 shadow-sm" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
             <h4 className="font-bold text-elegant-primary uppercase tracking-tight">{item.role}</h4>
             <span className="text-[10px] text-elegant-warning font-bold uppercase">{item.date}</span>
          </div>
          <p className="text-sm font-bold opacity-90 mb-2">@ {item.company}</p>
          <p className="text-xs opacity-80 leading-relaxed max-w-3xl">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function SkillsOutput() {
  const expertise = [
    { category: "Digital & Architecture", title: "Software Engineering", skills: ["React", "TypeScript", "Node.js", "Software Architecture", "Mobile Apps"], color: "text-elegant-primary" },
    { category: "Operations & Leadership", title: "Strategic Management", skills: ["Event Lifecycle", "Team Coordination", "Stakeholder Mgmt", "Program Strategy"], color: "text-elegant-secondary" },
    { category: "Diplomacy", title: "Geopolitics & IR", skills: ["International Relations", "Negotiation", "Public Speaking", "Multilateral Diplomacy"], color: "text-elegant-success" },
    { category: "Security", title: "Cybersecurity & IT", skills: ["Vulnerability Assessment", "Secure Frameworks", "IT TechOps", "System Integrity"], color: "text-elegant-danger" },
    { category: "Aesthetics & Brand", title: "Design & Branding", skills: ["UI/UX", "Illustrator", "InDesign", "Photoshop", "Visual Identity"], color: "text-elegant-warning" },
    { category: "Scientific Inquiry", title: "Research & Documentation", skills: ["IEEE Researcher", "Data Analysis", "Academic Writing", "Peer Review"], color: "text-elegant-info" }
  ];

  return (
    <div className="mt-2 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">DOMAINS OF EXPERTISE</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertise.map((skill, i) => (
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

function ProjectsOutput() {
  const otherProjects = [
    { name: "EventWebLifecycles", tech: "Vite, React, GitHub Actions", desc: "Managed end-to-end web lifecycle for SFD 2024, Noskathon Lite, and SFD 2025." },
    { name: "TrinetraFullstack", tech: "Next.js, FastAPI, ResNet-50", desc: "Full stack application for retinal disease classification with high-performance inference." },
    { name: "NepalParliamentPokedex", tech: "React, D3.js", desc: "Visualizing demographic and legislative data for Nepali Parliament MPs." }
  ];

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
          <a href="https://ieeexplore.ieee.org/document/11441375" target="_blank" className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-elegant-primary text-white hover:bg-elegant-primary/90 transition-all rounded">[ VIEW_IEEE_XPLORE ]</a>
          <a href="https://www.researchgate.net/publication/399407643_Retinal_Fundus_Disease_Detection_and_Classification_using_ResNet-50" target="_blank" className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-2 border-elegant-primary text-elegant-primary hover:bg-elegant-primary hover:text-white transition-all rounded">[ RESEARCHGATE ]</a>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] uppercase tracking-widest text-elegant-secondary font-bold">OTHER PROJECTS</p>
        <div className="grid grid-cols-1 gap-4">
          {otherProjects.map((p, i) => (
            <div key={i} className="p-4 border border-elegant-border rounded hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-elegant-primary">{p.name}/</span>
                <span className="text-[9px] text-elegant-info uppercase">{p.tech}</span>
              </div>
              <p className="text-xs opacity-80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MunHighlightsOutput() {
  const categories = [
    {
      title: "Executive Leadership",
      roles: [
        "President: UNHRC (NaLC, RPMUN X, NAMI), ECOSOC (RC, SXJ, RUPY’s, Swostishree), UNICEF (CS MUN 2.0, Sudesha)",
        "Co-President: UNGA (Ripumardini Army), UNHRC (CS MUN 3.0)",
        "Executive Director: UNDP (UAG, BNKS), UNWOMEN (KNS)",
        "President of the Senate: US SENATE (KMC, Chelsea)"
      ]
    },
    {
      title: "Chair & Crisis Management",
      roles: [
        "Chair/Director: DISEC (V MUN, ULLENS), UNESCO (ULLENS), SOCHUM (ULLENS), UNCSTD (ULLENS IBDP), IMF (IIMUN.NEPAL)",
        "Crisis Director: HCC (XI MUN 8.0)"
      ]
    },
    {
      title: "International Press",
      roles: [
        "Head of Press: KU MUN 2025, NAMSS MUN-YTS, Pabson NIST MUN-GHF, TIMUN 5.0/6.0, KMC MUN, SXJ MUN, etc."
      ]
    }
  ];

  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">DIPLOMACY & MUN ARCHIVE</p>
      
      <div className="flex gap-8 border-b border-elegant-border pb-6">
        <div>
          <p className="text-3xl font-bold text-elegant-primary">60+</p>
          <p className="text-[9px] uppercase tracking-widest opacity-60">Conferences</p>
        </div>
        <div className="border-l border-elegant-border pl-8">
          <p className="text-3xl font-bold text-elegant-secondary">17</p>
          <p className="text-[9px] uppercase tracking-widest opacity-60">Press Roles</p>
        </div>
        <div className="border-l border-elegant-border pl-8">
          <p className="text-3xl font-bold text-elegant-success">50</p>
          <p className="text-[9px] uppercase tracking-widest opacity-60">Dais Roles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
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

function RotaractOutput() {
  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">ROTARACT & GLOBAL SERVICE</p>
      
      <div className="p-6 border-2 border-elegant-success bg-elegant-success/5 rounded-xl">
        <h3 className="text-2xl font-bold mb-1">International Service Director</h3>
        <p className="text-sm font-bold text-elegant-success mb-6">Rotaract Central Valley Kasthamandap // 2025 — Present</p>
        
        <div className="space-y-4 text-sm opacity-90 leading-relaxed max-w-3xl">
           <p className="italic border-l-4 border-elegant-success pl-4 bg-elegant-success/5 py-2">
             "Directing global service initiatives and fostering international partnerships to drive sustainable community impact across borders."
           </p>
           <p>
             Orchestrating cross-border community welfare projects in collaboration with international clubs, managing multi-lingual communications, and aligning local initiatives with Rotary International’s seven areas of focus.
           </p>
           <p>
             Facilitating cultural exchange programs and representing the club in international summits and District conferences. Overseeing grant applications for international projects and managing project budgets.
           </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 pt-6 border-t border-elegant-success/20">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-elegant-warning font-bold">Administrative District</p>
            <p className="text-2xl font-bold text-elegant-primary">3292</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-elegant-warning font-bold">Operational Zone</p>
            <p className="text-2xl font-bold text-elegant-primary">VIII</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CivicOutput() {
  const civic = [
    { title: "Event Volunteer", company: "UN Volunteers Nepal", date: "2024 — Onwards", desc: "Provided logistical and operational support for the 6th National Level Poetry Event, ensuring smooth event flow and delegate management.", color: "border-elegant-info" },
    { title: "Open Source Contributor", company: "Nepal Open Source Klub (NOSK)", date: "2023 — Onwards", desc: "Active contributor focusing on visual identity and web development for major events like Software Freedom Day (SFD).", color: "border-elegant-primary" },
    { title: "Public Speaking & Research Trainer", company: "Youth Leadership Initiatives", date: "2022 — Onwards", desc: "Conducting intensive training sessions on public speaking, structured research, and diplomatic negotiation for student leaders.", color: "border-elegant-secondary" },
    { title: "PR Coordinator & Web Designer", company: "IEEE NCIT Student Branch", date: "2025 — 2026", desc: "Overseeing the branch's web infrastructure, designing promotional assets, and coordinating public relations strategies.", color: "border-elegant-warning" },
    { title: "Junior Member", company: "Nepal Red Cross Society", date: "2015 — 2017", desc: "Participated in community-level health camps, first aid training, and relief distribution programs.", color: "border-elegant-danger" },
    { title: "Nepal Representative", company: "Goethe-Institut Pash Youth Camp", date: "2019", desc: "Selected for intensive leadership training across Sri Lanka and Germany; focused on cultural diplomacy.", color: "border-elegant-success" },
    { title: "General Member", company: "Friends of Zoo (FOZ)", date: "2014 — 2017", desc: "Engaging in wildlife conservation and environmental education programs.", color: "border-elegant-accent" }
  ];

  return (
    <div className="mt-2 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">CIVIC INVOLVEMENT LOG</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {civic.map((v, i) => (
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

function EducationOutput() {
  const edu = [
    { degree: "BE Software Engineering", inst: "Nepal College of Information Technology (PU)", date: "2022 — 2026 (Expected)", desc: "Comprehensive engineering program focused on scalable software architecture and distributed systems.", coursework: "AI & Neural Networks, Agile Methodologies, DBMS, DSA, Software Testing & QA" },
    { degree: "Ethical Hacking Certification", inst: "Broadway Infosys", date: "2026", desc: "Advanced security protocols and vulnerability assessment; focusing on penetration testing and defensive security." },
    { degree: "Technical Training — IT/Electronics", inst: "Don Bosco Institute (CTEVT)", date: "2016 — 2019", desc: "Grade: A. Early foundation in IT hardware and electronics infrastructure." },
    { degree: "+2 Science (NEB)", inst: "Trinity International College", date: "2020 — 2022", desc: "Grade: A. Comprehensive foundation in physical sciences and mathematical analysis." },
    { degree: "Secondary Education (SEE)", inst: "DAV School", date: "2014 — 2020", desc: "Grade: A. Early academic foundation with focus on foundational science and mathematics." }
  ];

  return (
    <div className="mt-2 space-y-6 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">ACADEMIC FOUNDATIONS</p>
      {edu.map((e, i) => (
        <div key={i} className="flex gap-6 group">
           <div className="text-[10px] text-elegant-warning font-bold w-32 shrink-0 uppercase pt-1.5">{e.date}</div>
           <div className="pb-6 border-b border-elegant-border flex-1">
              <h4 className="text-xl font-bold text-elegant-primary">{e.degree}</h4>
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

function PoetryOutput() {
  return (
    <div className="mt-1 space-y-4 animate-fade-in font-mono text-elegant-fg">
      <p className="text-xs italic text-elegant-secondary">
        Directory changed to <span className="underline decoration-elegant-warning font-bold">/poetry</span>
      </p>
      <div className="p-8 border-2 border-elegant-secondary/30 bg-elegant-secondary/5 rounded-2xl">
        <p className="text-xl leading-relaxed italic max-w-2xl">
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

function ImageViewer({ images, onClose }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in font-mono">
      <div className="w-[95%] max-w-2xl bg-elegant-bg border-2 border-elegant-border shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden flex flex-col">
        {/* Window Title Bar */}
        <div className="bg-elegant-subtle px-4 py-2.5 border-b-2 border-elegant-border flex items-center justify-between">
          <div className="flex gap-2">
            <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-elegant-danger hover:scale-110 transition-transform flex items-center justify-center text-[8px] text-black font-bold">✕</button>
            <div className="w-3.5 h-3.5 rounded-full bg-elegant-warning opacity-50" />
            <div className="w-3.5 h-3.5 rounded-full bg-elegant-success opacity-50" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-elegant-primary">GALLERY_VIEWER.EXE // {images[index].caption}</span>
          <div className="w-16" />
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-8 flex flex-col items-center">
          <div className="relative group w-full flex justify-center bg-black/40 rounded-lg p-2 border border-elegant-border/30 shadow-inner">
            <img 
              src={images[index].src} 
              alt={images[index].alt} 
              className="max-h-[45vh] object-contain border-2 border-elegant-border shadow-2xl rounded" 
            />
            
            {/* Arrows */}
            <button 
              onClick={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-elegant-primary/90 hover:bg-elegant-primary text-white p-2.5 rounded-lg transition-all shadow-lg hover:scale-110"
            >←</button>
            <button 
              onClick={() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))} 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-elegant-primary/90 hover:bg-elegant-primary text-white p-2.5 rounded-lg transition-all shadow-lg hover:scale-110"
            >→</button>
          </div>
          
          <div className="mt-6 text-center">
            <h4 className="text-lg font-bold text-elegant-fg tracking-tight">{images[index].caption}</h4>
            <p className="text-[9px] uppercase tracking-[0.5em] text-elegant-warning mt-2 font-bold bg-elegant-warning/10 px-3 py-1 rounded-full inline-block">{index + 1} / {images.length}</p>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 flex gap-3 overflow-x-auto max-w-full py-2 px-1 no-scrollbar scroll-smooth">
            {images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)} 
                className={`shrink-0 w-12 h-12 border-2 transition-all overflow-hidden rounded-md shadow-md ${i === index ? 'border-elegant-primary scale-110 ring-4 ring-elegant-primary/20' : 'border-elegant-border opacity-40 hover:opacity-100 hover:scale-105'}`}
              >
                <img src={img.src} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpOutput() {
  return (
    <div className="mt-1 animate-fade-in font-mono text-elegant-fg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-secondary mb-4 font-bold">AVAILABLE COMMANDS</p>
      <div className="grid grid-cols-1 gap-2">
        {HELP_TEXT.map((h) => (
          <div key={h.cmd} className="flex gap-4 text-xs py-2 border-b border-elegant-border/10">
            <span className="font-bold w-48 shrink-0 text-elegant-primary">{h.cmd}</span>
            <span className="opacity-40">→</span>
            <span className="text-elegant-fg dark:text-elegant-dark-fg opacity-80">{h.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCommandOutput(cmd) {
  const trimmed = cmd.trim().toLowerCase();
  let result;
  if (trimmed === "whoami") result = { type: "whoami" };
  else if (trimmed === "ls projects/" || trimmed === "ls projects") result = { type: "projects" };
  else if (trimmed === "cat experience.txt") result = { type: "experience" };
  else if (trimmed === "cat skills.txt") result = { type: "skills" };
  else if (trimmed === "cat education.txt") result = { type: "education" };
  else if (trimmed === "cat mun.txt") result = { type: "mun" };
  else if (trimmed === "cat rotaract.txt") result = { type: "rotaract" };
  else if (trimmed === "cat civic.txt") result = { type: "civic" };
  else if (trimmed === "imageviewer") result = { type: "imageviewer" };
  else if (trimmed === "help") result = { type: "help" };
  else if (trimmed === "clear") result = { type: "clear" };
  else if (trimmed === "") return null;
  else {
    return {
      type: "error",
      message: `bash: ${cmd}: command not found. Type 'help' for available commands.`,
      success: false
    };
  }
  return { ...result, success: true };
}

function OutputBlock({ output }) {
  switch (output.type) {
    case "whoami": return <WhoamiOutput />;
    case "projects": return <ProjectsOutput />;
    case "experience": return <ExperienceOutput />;
    case "mun": return <MunHighlightsOutput />;
    case "skills": return <SkillsOutput />;
    case "education": return <EducationOutput />;
    case "rotaract": return <RotaractOutput />;
    case "civic": return <CivicOutput />;
    case "poetry": return <PoetryOutput />;
    case "help": return <HelpOutput />;
    case "banner":
      return (
        <div className="animate-fade-in">
          <pre className="text-[10px] leading-tight font-mono select-none text-elegant-primary font-bold">{ASCII_BANNER}</pre>
          <p className="text-[10px] uppercase tracking-[0.4em] mt-6 text-elegant-secondary font-bold">
            Sujal Bikram Thapa // Portfolio OS v3.2 // Ready.
          </p>
        </div>
      );
    case "boot":
      return <p className="text-xs font-mono text-elegant-info animate-fade-in opacity-80">{output.message}</p>;
    case "error":
      return <p className="text-xs font-mono text-elegant-danger font-bold animate-fade-in">ERROR: {output.message}</p>;
    default:
      return null;
  }
}

export default function TerminalPortfolio() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [booted, setBooted] = useState(false);
  const [typing, setTyping] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    const bootLines = [
      { delay: 200, output: { type: "banner", success: true } },
      { delay: 800, output: { type: "boot", message: ">> Initializing CLI_Kernel v3.2...", success: true } },
      { delay: 1300, output: { type: "boot", message: ">> Loading modules: [CORE] [UI] [NETWORK] [STORAGE] [AI]", success: true } },
      { delay: 1800, output: { type: "boot", message: ">> Done. Welcome to Sujal's Terminal.", success: true } },
    ];
    const timeouts = [];
    bootLines.forEach(({ delay, output }) => {
      timeouts.push(setTimeout(() => { setHistory((h) => [...h, { id: Date.now() + delay, output, cmd: null }]); }, delay));
    });
    timeouts.push(setTimeout(() => { setBooted(true); setTyping(false); }, 2000));
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);
  useEffect(() => { if (booted) inputRef.current?.focus(); }, [booted]);

  const executeCommand = useCallback((cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    if (trimmed.toLowerCase() === "imageviewer") {
        setShowGallery(true);
        setHistory((h) => [...h, { id: Date.now(), cmd: trimmed, output: { type: "boot", message: "Launching visual_engine.bin...", success: true } }]);
        setInput("");
        return;
    }
    const result = getCommandOutput(trimmed);
    if (result?.type === "clear") { setHistory([]); setInput(""); return; }
    
    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistIdx(-1);
    setHistory((h) => [...h, { id: Date.now(), cmd: trimmed, output: result }]);
    setInput("");
  }, []);

  const isCommandValid = useMemo(() => {
    const trimmed = input.trim().toLowerCase();
    return VALID_COMMANDS.includes(trimmed);
  }, [input]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;
      const matches = VALID_COMMANDS.filter(c => c.startsWith(trimmed));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory(h => [...h, { id: Date.now(), cmd: input, output: { type: "boot", message: `Suggestions: ${matches.join(", ")}`, success: true } }]);
      }
    }
  };

  const handleSidebarCmd = (cmd) => {
    if (!booted) return;
    inputRef.current?.focus();
    setInput(cmd);
    setTimeout(() => executeCommand(cmd), 80);
  };

  return (
    <div className={`flex h-screen w-screen overflow-hidden font-mono bg-elegant-bg text-elegant-fg`} onClick={() => inputRef.current?.focus()}>
      {showGallery && <ImageViewer images={IMAGES} onClose={() => setShowGallery(false)} />}

      <aside className={`flex flex-col shrink-0 border-r-2 w-[300px] hidden md:flex bg-elegant-subtle border-elegant-border`}>
        <div className="px-8 py-10 border-b-2 border-elegant-border/20">
          <div className="font-serif text-[1.5rem] font-normal">Sujal <span style={{opacity: 0.5}}>Thapa.</span></div>
          <p className="text-[10px] uppercase tracking-[0.4em] mt-3 text-elegant-secondary font-bold">Terminal Interface</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-8 space-y-2 custom-scrollbar">
          {SIDEBAR_COMMANDS.map((c) => (
            <button key={c.cmd} onClick={(e) => { e.stopPropagation(); handleSidebarCmd(c.cmd); }} className={`w-full text-left px-5 py-4 rounded-xl group transition-all duration-300 flex items-center gap-4 hover:bg-white/5 shadow-sm`}>
              <span className="text-xl group-hover:scale-125 transition-transform duration-300">{c.icon}</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold group-hover:text-elegant-primary transition-colors">{c.label}</span>
                <span className="text-[10px] opacity-40 font-mono mt-0.5 group-hover:opacity-100 group-hover:text-elegant-secondary transition-all">&gt;&gt; {c.cmd}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="px-8 py-6 border-t-2 border-elegant-border/20 flex justify-between items-center bg-white/5">
          <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">v3.2 // 2026</span>
        </div>
      </aside>

      <main className="flex flex-col flex-1 min-w-0 overflow-hidden relative bg-elegant-bg">
        <div className={`shrink-0 px-8 py-5 flex items-center justify-between border-b-2 border-elegant-border bg-elegant-bg/95 backdrop-blur-sm z-10`}>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 mr-6"><div className="w-3 h-3 rounded-full bg-elegant-danger shadow-sm" /><div className="w-3 h-3 rounded-full bg-elegant-warning shadow-sm" /><div className="w-3 h-3 rounded-full bg-elegant-success shadow-sm" /></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-elegant-primary">sujal@portfolio: ~</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-elegant-secondary font-bold px-2 py-1 bg-elegant-secondary/10 rounded">BASH 5.0</span>
        </div>

        <div className="flex-1 overflow-y-auto px-10 py-10 space-y-12 custom-scrollbar scroll-smooth">
          {history.map((entry) => (
            <div key={entry.id} className="animate-fade-in">
              {entry.cmd && (
                <div className="flex items-center gap-4 mb-6 opacity-60">
                  <Prompt /><span className="text-sm font-bold text-elegant-success">{entry.cmd}</span>
                </div>
              )}
              {entry.output && <OutputBlock output={entry.output} />}
            </div>
          ))}

          {booted && (
            <div className="flex items-center gap-4 mt-6">
              <Prompt />
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  className={`bg-transparent border-none outline-none w-full font-mono text-sm font-bold transition-colors ${isCommandValid ? "text-elegant-success" : "text-elegant-fg"}`}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  autoFocus
                />
              </div>
            </div>
          )}

          {!booted && typing && (
            <div className="flex items-center gap-3 mt-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-elegant-info animate-pulse">Initializing Environment...</span>
              <span className="inline-block w-2 h-4 bg-elegant-primary animate-blink" />
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </main>
    </div>
  );
}

function Prompt() {
  return (
    <span className="text-sm shrink-0 select-none font-mono flex items-center font-bold">
      <span className="text-elegant-success">➜</span>
      <span className="ml-3 text-elegant-info">~</span>
      <span className="ml-2 text-elegant-secondary">$</span>
    </span>
  );
}