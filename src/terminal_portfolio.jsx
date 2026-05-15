import { useState, useEffect, useRef, useCallback } from "react";

const ASCII_BANNER = `
 ███████╗██╗   ██╗     ██╗ █████╗ ██╗     
 ██╔════╝██║   ██║     ██║██╔══██╗██║     
 ███████╗██║   ██║     ██║███████║██║     
 ╚════██║██║   ██║██   ██║██╔══██║██║     
 ███████║╚██████╔╝╚█████╔╝██║  ██║███████╗
 ╚══════╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚══════╝`;

const HELP_TEXT = [
  { cmd: "whoami", desc: "01 The Profile" },
  { cmd: "cat experience.txt", desc: "02 Professional Impact" },
  { cmd: "cat skills.txt", desc: "03 Domains Of Expertise" },
  { cmd: "ls projects/", desc: "04 Research & Publications" },
  { cmd: "cat mun.txt", desc: "05 Diplomacy & MUN Highlights" },
  { cmd: "cat rotaract.txt", desc: "06 Rotaract & Global Service" },
  { cmd: "cat civic.txt", desc: "07 Civic Involvement" },
  { cmd: "cat education.txt", desc: "08 Academic Foundations" },
  { cmd: "cd poetry/", desc: "Editorial & Creative Writing" },
  { cmd: "clear", desc: "Clear terminal" },
  { cmd: "help", desc: "Show this help" },
];

const SIDEBAR_COMMANDS = [
  { label: "The Profile", icon: "👤", cmd: "whoami" },
  { label: "Professional Impact", icon: "💼", cmd: "cat experience.txt" },
  { label: "Domains Of Expertise", icon: "⚡", cmd: "cat skills.txt" },
  { label: "Research & Pubs", icon: "📁", cmd: "ls projects/" },
  { label: "Diplomacy & MUN", icon: "🗳️", cmd: "cat mun.txt" },
  { label: "Rotaract & Service", icon: "🌍", cmd: "cat rotaract.txt" },
  { label: "Civic Involvement", icon: "🤝", cmd: "cat civic.txt" },
  { label: "Academic Foundations", icon: "🎓", cmd: "cat education.txt" },
  { label: "Creative Writing", icon: "✍️", cmd: "cd poetry/" },
  { label: "help", icon: "❓", cmd: "help" },
  { label: "clear", icon: "🗑️", cmd: "clear" },
];

function WhoamiOutput() {
  return (
    <div className="mt-1 space-y-2 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="text-2xl">⚡</div>
        <div>
          <p className="text-dracula-yellow font-bold text-base">Sujal Bikram Thapa</p>
          <p className="text-dracula-green text-sm mt-1">Software Engineer & Creative Strategist</p>
          <p className="text-dracula-fg text-sm mt-2 leading-relaxed max-w-xl">
            Software Engineer (NCIT, Pokhara University) with multiple years of project coordination and team leadership. 
            Operating at the intersection of <span className="text-dracula-cyan font-semibold">robust software architecture</span> and <span className="text-dracula-pink font-semibold">high-impact creative strategy</span>. 
            Directed HULT Prize at NCIT, co-founded Lunar Chronicles Ltd., and published as an IEEE researcher.
          </p>
          <p className="text-dracula-comment text-xs mt-3 flex items-center gap-2">
            <span className="text-dracula-purple">Linguistic Fluency:</span> 
            <span className="px-1.5 py-0.5 rounded bg-dracula-current/30 border border-dracula-current/50">Nepali</span>
            <span className="px-1.5 py-0.5 rounded bg-dracula-current/30 border border-dracula-current/50">English</span>
            <span className="px-1.5 py-0.5 rounded bg-dracula-current/30 border border-dracula-current/50">German</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectsOutput() {
  const projects = [
    {
      name: "RetinalDiseaseDetection/",
      color: "text-dracula-green",
      icon: "🔬",
      desc: "Deep learning system utilizing ResNet-50 for multi-label retinal disease classification. Published in IEEE ICISCT 2025.",
      tags: ["ResNet-50", "Deep Learning", "IEEE Research"],
      link: "DOI: 10.1109/ICISCT65133.2025.11441375"
    },
    {
      name: "EventWebLifecycles/",
      color: "text-dracula-cyan",
      icon: "🌐",
      desc: "Managed end-to-end web lifecycle for major events: SFD 2024, Noskathon Lite, and SFD 2025; coordinated teams via GitHub workflows.",
      tags: ["Web Dev", "GitHub Workflows", "Event Ops"],
    },
    {
      name: "TrinetraFullstack/",
      color: "text-dracula-yellow",
      icon: "👁️",
      desc: "Full stack Trinetra app using Next.js and FastAPI for retinal disease classification.",
      tags: ["Python", "Next.js", "FastAPI"],
    },
    {
      name: "NepalParliamentPokedex/",
      color: "text-dracula-purple",
      icon: "🏛️",
      desc: "Practice project visualizing data for Nepali Parliament MPs (acting as a sort of PokeDex).",
      tags: ["JavaScript", "React", "DataViz"],
    },
  ];

  return (
    <div className="mt-1 space-y-3 animate-fade-in">
      <p className="text-dracula-comment text-xs">── 04 Research & Publications ───────</p>
      {projects.map((p) => (
        <div
          key={p.name}
          className="border border-dracula-current rounded p-3 hover:border-dracula-purple transition-colors bg-dracula-bg-dark/50"
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
                <span>{p.icon}</span>
                <span className={`font-bold ${p.color}`}>
                {p.name}
                </span>
            </div>
            {p.link && <span className="text-[10px] text-dracula-comment italic hidden sm:inline">{p.link}</span>}
          </div>
          <p className="text-dracula-fg/90 text-sm ml-6">{p.desc}</p>
          <div className="flex gap-2 mt-2 ml-6">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded bg-dracula-current/40 text-dracula-cyan border border-dracula-cyan/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceOutput() {
  const roles = [
    {
      title: "Co-Founder & Managing Director",
      org: "Lunar Chronicles Ltd.",
      period: "2025 – PRESENT",
      icon: "🚀",
      color: "text-dracula-yellow",
      desc: "Oversee strategic planning and operations; coordinated high-profile Health Dialogues with Health Minister."
    },
    {
      title: "Vice President & Creative Design Lead",
      org: "MUN Society Nepal",
      period: "SEP 2024 – PRESENT",
      icon: "🤝",
      color: "text-dracula-cyan",
      desc: "Oversee digital infrastructure and innovation strategy. Managed branding for nationwide circuits."
    },
    {
       title: "MUN Trainer/Organiser & UI/Web Designer",
       org: "Youth Thinkers' Society (YTS)",
       period: "2022 – 2026",
       icon: "🗳️",
       color: "text-dracula-purple",
       desc: "Managed training programmes and resources; coordinated cross-functional teams in time-critical environments."
    },
    {
      title: "Program Director (HULT Prize NCIT)",
      org: "NCIT / HULT Prize Foundation",
      period: "2023 – 2024",
      icon: "🏆",
      color: "text-dracula-pink",
      desc: "Led the campus-wide social entrepreneurship challenge; managed event logistics, sponsorships, and participant mentoring."
    },
    {
      title: "Design Team Lead (NCIT Tech Fest)",
      org: "NCIT Student Council",
      period: "2023 – 2024",
      icon: "🎨",
      color: "text-dracula-orange",
      desc: "Spearheaded the visual identity and promotional materials for NCIT's flagship technical festival."
    },
    {
      title: "Director General & Head of IT",
      org: "TIMUN 5.0 & 6.0 (Trinity College)",
      period: "2021 – 2023",
      icon: "💻",
      color: "text-dracula-cyan",
      desc: "Managed conference operations and technical infrastructure for one of Nepal's largest MUN circuits."
    },
    {
      title: "President (Performing Arts Troupe)",
      org: "Trinity International College",
      period: "2021 – 2022",
      icon: "🎭",
      color: "text-dracula-purple",
      desc: "Led the artistic division, coordinating performances and cultural exhibitions for college events."
    },
    {
      title: "Organizer (SciTech & Management Expo)",
      org: "Trinity International College",
      period: "2021",
      icon: "🔬",
      color: "text-dracula-green",
      desc: "Coordinated the annual science and management exhibition, facilitating industry-academia interaction."
    },
    {
      title: "College Representative",
      org: "7th Kantipur Hissan Edu-Fair",
      period: "2022",
      icon: "🏫",
      color: "text-dracula-yellow",
      desc: "Represented Trinity International College at Nepal's premier education fair, engaging with prospective students."
    }
  ];

  return (
    <div className="mt-1 space-y-4 animate-fade-in">
      <p className="text-dracula-comment text-xs">── 02 Professional Impact ───────────</p>
      {roles.map((r, i) => (
        <div key={i} className="flex items-start gap-3 group">
          <div className="flex flex-col items-center">
            <span className="text-lg group-hover:scale-110 transition-transform">{r.icon}</span>
            {i < roles.length - 1 && (
              <div className="w-px h-10 mt-1 bg-dracula-current" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className={`font-bold text-sm ${r.color}`}>
                {r.title}
              </p>
              <span className="text-[10px] text-dracula-comment px-1.5 py-0.5 rounded bg-dracula-current/30 border border-dracula-current/50">
                {r.period}
              </span>
            </div>
            <p className="text-dracula-fg text-xs font-medium">@ {r.org}</p>
            <p className="text-dracula-comment text-[11px] mt-1 max-w-md italic leading-tight">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MunHighlightsOutput() {
  const stats = [
    { label: "Conferences", val: "60+" },
    { label: "Press Roles", val: "17" },
    { label: "Dais Roles", val: "50" },
  ];

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
    <div className="mt-1 space-y-4 animate-fade-in">
      <p className="text-dracula-comment text-xs">── 05 Diplomacy & MUN Highlights ─────</p>
      <div className="flex gap-4 mb-4">
        {stats.map(s => (
          <div key={s.label} className="px-3 py-1 rounded bg-dracula-purple/20 border border-dracula-purple/40">
            <p className="text-[10px] text-dracula-comment uppercase">{s.label}</p>
            <p className="text-lg font-bold text-dracula-purple leading-tight">{s.val}</p>
          </div>
        ))}
      </div>
      {categories.map((cat, i) => (
        <div key={i} className="space-y-1">
          <p className="text-dracula-pink text-xs font-bold uppercase tracking-wider">{cat.title}</p>
          <ul className="list-none space-y-1 ml-2">
            {cat.roles.map((r, j) => (
              <li key={j} className="text-dracula-fg text-[11px] flex gap-2">
                <span className="text-dracula-cyan">▹</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SkillsOutput() {
  const categories = [
    {
      name: "Software Engineering",
      color: "text-dracula-green",
      borderColor: "border-dracula-green/30",
      bg: "bg-dracula-green/10",
      icon: "💻",
      skills: ["React", "TypeScript", "Full-stack", "Software Architecture", "Mobile Apps"],
    },
    {
      name: "Design & Branding",
      color: "text-dracula-pink",
      borderColor: "border-dracula-pink/30",
      bg: "bg-dracula-pink/10",
      icon: "🎨",
      skills: ["UI/UX", "Illustrator", "InDesign", "Photoshop", "Figma", "Visual Identity"],
    },
    {
      name: "Diplomacy & Strategy",
      color: "text-dracula-cyan",
      borderColor: "border-dracula-cyan/30",
      bg: "bg-dracula-cyan/10",
      icon: "🌐",
      skills: ["Geopolitics", "International Relations", "Strategic Management", "MUN", "Public Relations"],
    },
    {
        name: "Research & Security",
        color: "text-dracula-purple",
        borderColor: "border-dracula-purple/30",
        bg: "bg-dracula-purple/10",
        icon: "🔬",
        skills: ["IEEE Researcher", "Data Analysis", "Academic Writing", "Vulnerability Assessment", "IT TechOps"],
    }
  ];

  return (
    <div className="mt-1 space-y-3 animate-fade-in">
      <p className="text-dracula-comment text-xs mb-1">── 03 Domains Of Expertise ──────────</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
            <div key={cat.name} className={`p-3 rounded border ${cat.borderColor} ${cat.bg}`}>
            <div className="flex items-center gap-2 mb-2">
                <span>{cat.icon}</span>
                <span className={`font-bold text-[10px] uppercase tracking-wider ${cat.color}`}>
                {cat.name}
                </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                <span
                    key={s}
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono bg-dracula-bg-dark/60 ${cat.color} border border-white/5`}
                >
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

function EducationOutput() {
    const edu = [
        {
            degree: "BE Software Engineering",
            inst: "Nepal College of Information Technology (PU)",
            period: "2022 – 2026 (Expected)",
            desc: "Focus on scalable software architecture, distributed systems, and modern web technologies.",
            electives: ["Cybersecurity", "Web Services & Applications", "Information System Audit"],
            coursework: ["Software Design & Architecture", "Distributed Systems", "AI & Neural Networks", "Agile Methodologies", "Computer Networks", "Software Testing & QA", "DBMS", "Data Structures & Algorithms"],
            icon: "🎓"
        },
        {
            degree: "Ethical Hacking Certification",
            inst: "Broadway Infosys",
            period: "MAY 2026 – JUL 2026",
            desc: "Advanced security protocols and vulnerability assessment.",
            icon: "🛡️"
        },
        {
            degree: "Technical Training – IT/Electronics",
            inst: "Don Bosco Institute (CTEVT)",
            period: "2016 – 2019",
            desc: "Grade: A. Foundation in electronics and IT infrastructure.",
            icon: "⚙️"
        },
        {
            degree: "+2 Science (NEB)",
            inst: "Trinity International College",
            period: "2020 – 2022",
            desc: "Comprehensive foundation in physical sciences.",
            icon: "🧪"
        },
        {
            degree: "Secondary Education (SEE)",
            inst: "DAV School",
            period: "2014 – 2020",
            desc: "Grade: A. Early academic foundation.",
            icon: "🏫"
        }
    ];

    return (
        <div className="mt-1 space-y-3 animate-fade-in">
            <p className="text-dracula-comment text-xs mb-2">── 08 Academic Foundations ──────────</p>
            {edu.map((e, i) => (
                <div key={i} className="border-l-2 border-dracula-purple pl-4 py-1">
                    <div className="flex items-center gap-2">
                        <span className="text-sm">{e.icon}</span>
                        <p className="text-dracula-fg font-bold text-sm">{e.degree}</p>
                        <span className="text-[10px] text-dracula-comment">[{e.period}]</span>
                    </div>
                    <p className="text-dracula-cyan text-xs">{e.inst}</p>
                    <p className="text-dracula-comment text-[11px] mt-0.5">{e.desc}</p>
                    {e.electives && (
                      <p className="text-[10px] mt-1 text-dracula-pink">
                        <span className="font-bold">Core Electives:</span> {e.electives.join(", ")}
                      </p>
                    )}
                    {e.coursework && (
                      <p className="text-[10px] mt-0.5 text-dracula-comment">
                        <span className="font-bold text-dracula-green">Key Coursework:</span> {e.coursework.join(", ")}
                      </p>
                    )}
                </div>
            ))}
        </div>
    );
}

function RotaractOutput() {
  return (
    <div className="mt-1 space-y-3 animate-fade-in">
      <p className="text-dracula-comment text-xs mb-2">── 06 Rotaract & Global Service ──────</p>
      <div className="flex items-start gap-4 p-4 rounded bg-dracula-bg-dark border border-dracula-purple/30">
        <div className="text-3xl">🌍</div>
        <div>
          <p className="text-dracula-yellow font-bold text-base">International Service Director</p>
          <p className="text-dracula-fg text-sm">Rotaract Central Valley Kasthamandap</p>
          <p className="text-dracula-cyan text-xs mt-1 font-mono uppercase">JUL 2025 – PRESENT</p>
          <p className="text-dracula-comment text-[11px] mt-2 italic leading-relaxed">
            "Directing global service initiatives and fostering international partnerships to drive 
            sustainable community impact across borders."
          </p>
          <p className="text-dracula-fg text-[11px] mt-2">
            Overseeing the club's international portfolio, focused on cross-continental collaboration 
            and aligning local projects with global humanitarian goals.
          </p>
          <div className="flex gap-4 mt-3">
            <div className="text-[10px]">
              <p className="text-dracula-comment uppercase">District</p>
              <p className="text-dracula-pink font-bold">3292</p>
            </div>
            <div className="text-[10px]">
              <p className="text-dracula-comment uppercase">Zone</p>
              <p className="text-dracula-pink font-bold">VIII</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CivicOutput() {
    const civic = [
        {
            role: "Public Speaking & Research Trainer",
            org: "Youth Leadership Initiatives",
            period: "2022 – ONWARDS",
            desc: "Mentoring youth in public speaking, academic research, and policy analysis.",
            icon: "🗣️"
        },
        {
            role: "Open Source Contributor",
            org: "Nepal Open Source Klub (NOSK)",
            period: "2023 – PRESENT",
            desc: "Actively contributing to local OSS projects and promoting FOSS culture on campus.",
            icon: "🐧"
        },
        {
            role: "Event Volunteer",
            org: "UN Volunteers Nepal",
            period: "2024 – ONWARDS",
            desc: "Assisting in coordination of the 6th National Level Poetry Event with UNV Nepal.",
            icon: "🇺🇳"
        },
        {
            role: "Fielder",
            org: "GitHub Field Day Nepal",
            period: "OCT – NOV 2024",
            desc: "Coordinating community building and collaborative problem-solving for local developers.",
            icon: "🐙"
        },
        {
            role: "PR Coordinator & Web Designer",
            org: "IEEE NCIT Student Branch",
            period: "JAN 2025 – MAR 2026",
            desc: "Managing external communications and digital presence for the IEEE student branch.",
            icon: "🛰️"
        },
        {
            role: "Junior Member",
            org: "Nepal Red Cross Society",
            period: "2015 – 2017",
            desc: "Engaging in disaster relief, first aid, and community health awareness.",
            icon: "🏥"
        },
        {
            role: "Nepal Representative",
            org: "Goethe-Institut International Pash Youth Camp",
            period: "2019",
            desc: "Represented Nepal in leadership training across Sri Lanka and Germany.",
            icon: "🇩🇪"
        },
        {
            role: "General Member",
            org: "Friends of Zoo (FOZ)",
            period: "2014 – 2017",
            desc: "Supporting wildlife conservation and environmental education programs.",
            icon: "🐘"
        }
    ];

    return (
        <div className="mt-1 space-y-3 animate-fade-in">
            <p className="text-dracula-comment text-xs mb-2">── 07 Civic Involvement ──────────────</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {civic.map((v, i) => (
                    <div key={i} className="p-2 rounded bg-dracula-current/20 border border-dracula-current/40">
                        <div className="flex items-center gap-2">
                            <span>{v.icon}</span>
                            <p className="text-dracula-fg font-bold text-xs">{v.role}</p>
                        </div>
                        <p className="text-dracula-pink text-[10px] font-medium">{v.org}</p>
                        <p className="text-dracula-comment text-[10px] mt-1 italic">{v.desc}</p>
                        <p className="text-dracula-cyan text-[9px] mt-1 uppercase tracking-tighter">{v.period}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PoetryOutput() {
  return (
    <div className="mt-1 space-y-2 animate-fade-in">
      <p className="text-dracula-green text-sm">
        Directory changed to <span className="text-dracula-yellow">/poetry</span>
      </p>
      <div className="border-l-2 border-dracula-pink pl-3 mt-2 py-2 pr-3 bg-dracula-pink/10 rounded-r">
        <p className="text-dracula-fg text-sm leading-relaxed italic">
          "Where logic meets lyricism — a space where{" "}
          <span className="text-dracula-cyan">binary trees</span> bloom into metaphors and{" "}
          <span className="text-dracula-purple">recursive patterns</span> echo through verse."
        </p>
      </div>
      <div className="mt-3 space-y-2">
        <p className="text-xs text-dracula-fg">
          <span className="text-dracula-purple font-bold">Editorial Experience:</span>
        </p>
        <ul className="text-[11px] text-dracula-comment list-none space-y-1 ml-2">
          <li>• <span className="text-dracula-cyan">Editor-in-Chief</span> for multiple international conference magazines.</li>
          <li>• Expert in <span className="text-dracula-pink">Editorial & Creative Writing</span> for policy frameworks and artistic anthologies.</li>
        </ul>
      </div>
      <p className="text-dracula-comment text-xs mt-3">
        Type <span className="text-dracula-green">'ls'</span> to view selected works, or{" "}
        <span className="text-dracula-green">'cat philosophy.txt'</span> to read about the intersection
        of technical and creative writing.
      </p>
    </div>
  );
}

function HelpOutput() {
  return (
    <div className="mt-1 animate-fade-in">
      <p className="text-dracula-comment text-xs mb-2">── available commands ──────────────</p>
      <div className="space-y-1">
        {HELP_TEXT.map((h) => (
          <div key={h.cmd} className="flex gap-3 text-sm">
            <span className="text-dracula-green w-36 shrink-0 font-bold">{h.cmd}</span>
            <span className="text-dracula-comment">→</span>
            <span className="text-dracula-fg">{h.desc}</span>
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
  else if (trimmed === "cat mun.txt") result = { type: "mun" };
  else if (trimmed === "cat skills.txt") result = { type: "skills" };
  else if (trimmed === "cat education.txt") result = { type: "education" };
  else if (trimmed === "cat rotaract.txt") result = { type: "rotaract" };
  else if (trimmed === "cat civic.txt") result = { type: "civic" };
  else if (trimmed === "cd poetry/" || trimmed === "cd poetry") result = { type: "poetry" };
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
  const textClass = "text-dracula-fg";
  switch (output.type) {
    case "whoami": return <div className={textClass}><WhoamiOutput /></div>;
    case "projects": return <div className={textClass}><ProjectsOutput /></div>;
    case "experience": return <div className={textClass}><ExperienceOutput /></div>;
    case "mun": return <div className={textClass}><MunHighlightsOutput /></div>;
    case "skills": return <div className={textClass}><SkillsOutput /></div>;
    case "education": return <div className={textClass}><EducationOutput /></div>;
    case "rotaract": return <div className={textClass}><RotaractOutput /></div>;
    case "civic": return <div className={textClass}><CivicOutput /></div>;
    case "poetry": return <div className={textClass}><PoetryOutput /></div>;
    case "help": return <div className={textClass}><HelpOutput /></div>;
    case "banner":
      return (
        <div className="animate-fade-in">
          <pre className="text-dracula-purple text-xs leading-tight font-mono select-none">{ASCII_BANNER}</pre>
          <p className="text-dracula-pink text-xs mt-2 ml-1">
            v2.3.0 — Sujal Bikram Thapa's Portfolio OS
          </p>
        </div>
      );
    case "boot":
      return <p className="text-dracula-cyan text-sm animate-fade-in">{output.message}</p>;
    case "error":
      return <p className="text-dracula-red text-sm animate-fade-in">{output.message}</p>;
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
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    const bootLines = [
      { delay: 200, output: { type: "banner", success: true } },
      { delay: 900, output: { type: "boot", message: "Initializing portfolio environment...", success: true } },
      { delay: 1400, output: { type: "boot", message: "Loading modules: [engineering] [design] [leadership] [diplomacy] ✓", success: true } },
      { delay: 1900, output: { type: "boot", message: "Welcome! Type 'help' to see a list of available commands.", success: true } },
    ];

    const timeouts = [];

    bootLines.forEach(({ delay, output }) => {
      timeouts.push(
        setTimeout(() => {
          setHistory((h) => [...h, { id: Date.now() + delay, output, cmd: null }]);
        }, delay)
      );
    });

    timeouts.push(
      setTimeout(() => {
        setBooted(true);
        setTyping(false);
      }, 2200)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (booted) inputRef.current?.focus();
  }, [booted]);

  const executeCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      const result = getCommandOutput(trimmed);

      if (result?.type === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      setCmdHistory((h) => [trimmed, ...h]);
      setHistIdx(-1);

      setHistory((h) => [
        ...h,
        { id: Date.now(), cmd: trimmed, output: result },
      ]);
      setInput("");
    },
    []
  );

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
    }
  };

  const handleSidebarCmd = (cmd) => {
    if (!booted) return;
    inputRef.current?.focus();
    setInput(cmd);
    setTimeout(() => executeCommand(cmd), 80);
  };

  return (
    <div
      className="flex h-screen w-screen overflow-hidden font-mono bg-dracula-bg text-dracula-fg"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Sidebar */}
      <aside className="flex flex-col shrink-0 border-r border-dracula-current bg-dracula-bg-dark w-[250px] hidden md:flex">
        {/* Sidebar header */}
        <div className="px-4 py-3 border-b border-dracula-current bg-dracula-bg flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-dracula-red shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-dracula-yellow shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-dracula-green shadow-sm" />
          </div>
          <span className="text-xs ml-2 text-dracula-comment">
            command palette
          </span>
        </div>

        {/* User badge */}
        <div className="px-4 py-4 border-b border-dracula-current">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 text-dracula-bg-dark bg-gradient-to-br from-dracula-purple to-dracula-pink shadow-[0_0_10px_rgba(189,147,249,0.3)] font-bold">
              S
            </div>
            <div>
              <p className="text-sm font-bold text-dracula-purple">
                sujal
              </p>
              <p className="text-xs text-dracula-comment">
                ~/portfolio
              </p>
            </div>
          </div>
        </div>

        {/* Commands */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          <p className="text-xs px-2 pb-2 text-dracula-current">
            ── COMMANDS ───────────
          </p>
          {SIDEBAR_COMMANDS.map((c) => (
            <button
              key={c.cmd}
              onClick={(e) => { e.stopPropagation(); handleSidebarCmd(c.cmd); }}
              className="w-full text-left px-3 py-2 rounded text-xs flex items-center gap-2 transition-all duration-200 text-dracula-fg hover:bg-dracula-purple/10 hover:text-dracula-purple hover:pl-4 border-l-2 border-transparent hover:border-dracula-purple"
            >
              <span className="text-sm">{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t text-center border-dracula-current text-dracula-comment text-[10px]">
          portfolio OS v2.3 • 2026
        </div>
      </aside>

      {/* Main Terminal */}
      <main className="flex flex-col flex-1 min-w-0 overflow-hidden bg-dracula-bg">
        {/* Terminal title bar */}
        <div className="shrink-0 px-4 py-2 border-b flex items-center justify-between border-dracula-current bg-dracula-bg-dark">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-dracula-purple shadow-[0_0_6px_var(--color-dracula-purple)]" />
            <span className="text-xs text-dracula-comment">
              sujal@portfolio: ~
            </span>
          </div>
          <span className="text-xs text-dracula-current">
            bash — 80×24
          </span>
        </div>

        {/* Output area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-4 space-y-3">
          {history.map((entry) => (
            <div key={entry.id} className="break-words">
              {entry.cmd && (
                <div className="flex items-center gap-2 mt-2">
                  <Prompt />
                  <span className={`text-sm font-bold ${entry.output?.success ? "text-dracula-green" : "text-dracula-red"}`}>
                    {entry.cmd}
                  </span>
                </div>
              )}
              {entry.output && <OutputBlock output={entry.output} />}
            </div>
          ))}

          {/* Active input line */}
          {booted && (
            <div className="flex items-center gap-2 mt-2">
              <Prompt />
              <div className="relative flex-1 flex items-center overflow-hidden">
                <span className="text-sm text-dracula-fg whitespace-pre-wrap break-all">
                  {input}
                </span>
                <span className="inline-block w-2 h-4 ml-px shrink-0 bg-dracula-pink animate-blink" />
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  className="absolute inset-0 opacity-0 w-full"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
              </div>
            </div>
          )}

          {!booted && typing && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-dracula-purple">
                booting...
              </span>
              <span className="inline-block w-2 h-4 bg-dracula-pink animate-blink-fast" />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Statusbar */}
        <div className="shrink-0 px-4 py-1 border-t flex items-center justify-between text-xs border-dracula-current bg-dracula-bg-dark text-dracula-comment">
          <div className="flex items-center gap-4">
            <span className="text-dracula-purple font-bold">● NORMAL</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span className="hidden sm:inline">bash</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{history.filter((h) => h.cmd).length} commands run</span>
            <span className="text-dracula-purple font-bold">sujal@portfolio</span>
          </div>
        </div>
      </main>
    </div>
  );
}

function Prompt() {
  return (
    <span className="text-sm shrink-0 select-none mr-1">
      <span className="text-dracula-green font-bold">sujal</span>
      <span className="text-dracula-fg">@</span>
      <span className="text-dracula-purple font-bold">portfolio</span>
      <span className="text-dracula-fg">:</span>
      <span className="text-dracula-cyan font-bold">~</span>
      <span className="text-dracula-pink font-bold ml-1">$</span>
    </span>
  );
}