import workingImg from "../assets/guisite/assets/SujalPhoto_Working-DjzFLg1L.webp";
import landingImg from "../assets/guisite/assets/SujalPhoto_Landing-CgxmKT61.webp";
import satDownImg from "../assets/guisite/assets/SujalPhoto_SatDown-CzahmRAm.jpg";
import talkingImg from "../assets/guisite/assets/SujalPhoto_Talking-BKF4BjGT.jpeg";
import unImg from "../assets/guisite/assets/SujalPhoto_UN-B-KwvBp5.webp";
import debatingImg from "../assets/guisite/assets/SujalPhoto_Debating-5OPizy9E.webp";
import parliamentImg from "../assets/guisite/assets/SujalPhoto_Parliament-ibSNbslr.webp";
import rotaractImg from "../assets/guisite/assets/Sujal_Rotaract-DrHziJNU.jpg";
import landscapeImg from "../assets/guisite/assets/View_Landscape-oyS7pnHc.jpg";

export const IMAGES = [
  { id: 1, src: landingImg, alt: "Landing Portrait", caption: "Sujal Bikram Thapa - Portrait" },
  { id: 2, src: workingImg, alt: "Working", caption: "Deep in thoughts and code" },
  { id: 3, src: satDownImg, alt: "Sat Down", caption: "Professional Stance" },
  { id: 4, src: talkingImg, alt: "Talking", caption: "Engaging in Dialogue" },
  { id: 5, src: unImg, alt: "UN Event", caption: "Diplomacy & Engagement" },
  { id: 6, src: debatingImg, alt: "Debating", caption: "The Art of Persuasion" },
  { id: 7, src: parliamentImg, alt: "Parliament", caption: "Civic Insights" },
  { id: 8, src: rotaractImg, alt: "Rotaract", caption: "International Service" },
  { id: 9, src: landscapeImg, alt: "Kathmandu Valley", caption: "Where it all begins" },
];

export const ASCII_BANNER = `
 ███████╗██╗   ██╗     ██╗ █████╗ ██╗     
 ██╔════╝██║   ██║     ██║██╔══██╗██║     
 ███████╗██║   ██║     ██║███████║██║     
 ╚════██║██║   ██║██   ██║██╔══██║██║     
 ███████║╚██████╔╝╚█████╔╝██║  ██║███████╗
 ╚══════╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚══════╝`;

export const HELP_TEXT = [
  { cmd: "whoami", desc: "The Profile" },
  { cmd: "cat experience.txt", desc: "Professional Impact" },
  { cmd: "cat skills.txt", desc: "Domains Of Expertise" },
  { cmd: "cat research.txt", desc: "Research & Publications" },
  { cmd: "cat mun.txt", desc: "Diplomacy & MUN Highlights" },
  { cmd: "cat rotaract.txt", desc: "Rotaract & Global Service" },
  { cmd: "cat civic.txt", desc: "Civic Involvement" },
  { cmd: "cat education.txt", desc: "Academic Foundations" },
  { cmd: "cat social.txt", desc: "Digital Presence & Links" },
  { cmd: "cat poetry.txt", desc: "Where Logic Meets Lyricism" },
  { cmd: "cv", desc: "Download Master Resume" },
  { cmd: "imageviewer", desc: "Open Image Gallery" },
  { cmd: "clear", desc: "Clear terminal" },
  { cmd: "help", desc: "Show this help" },
];

export const VALID_COMMANDS = HELP_TEXT.map(h => h.cmd);

export const SIDEBAR_COMMANDS = [
  { label: "The Profile", icon: "👤", cmd: "whoami" },
  { label: "Professional Impact", icon: "💼", cmd: "cat experience.txt" },
  { label: "Domains Of Expertise", icon: "⚡", cmd: "cat skills.txt" },
  { label: "Research & Pubs", icon: "🔬", cmd: "cat research.txt" },
  { label: "Diplomacy & MUN", icon: "🗳️", cmd: "cat mun.txt" },
  { label: "Rotaract & Service", icon: "🌍", cmd: "cat rotaract.txt" },
  { label: "Civic Involvement", icon: "🤝", cmd: "cat civic.txt" },
  { label: "Academic Foundations", icon: "🎓", cmd: "cat education.txt" },
  { label: "Digital Presence", icon: "🌐", cmd: "cat social.txt" },
  { label: "Poetry & Verse", icon: "🖋️", cmd: "cat poetry.txt" },
  { label: "Image Gallery", icon: "🖼️", cmd: "imageviewer" },
  { label: "Master Resume", icon: "📄", cmd: "cv" },
  { label: "Help", icon: "❓", cmd: "help" },
];

export const EXPERIENCE = [
  { role: "Co-Founder & Managing Director", company: "Lunar Chronicles Ltd.", date: "2025 — Present", desc: "Oversee strategic planning and operations; coordinated high-profile Health Dialogues with Health Minister Hon. Pradeep Poudel and Heart Surgeon Dr. Bhagwan Koirala." },
  { role: "MUN Trainer/Organiser & UI/Web Designer", company: "Youth Thinkers' Society (YTS)", date: "2022 — 2026", desc: "Managed training programmes and resources over 3.5 years; coordinated cross-functional teams in large-scale event environments." },
  { role: "Program Director & Event Co-Lead", company: "HULT Prize @ NCIT", date: "2023 — 2024", desc: "Directed full program lifecycle for one of the world's largest student entrepreneurship competitions; managed 5+ sub-teams." },
  { role: "Design Team Lead", company: "NCIT Tech Fest", date: "2023 — 2024", desc: "Managed full design workflow from concept to delivery, producing event branding, promotional materials, and digital assets." },
  { role: "UI/UX Designer & Web Developer", company: "Nepal Open Source Klub (NOSK)", date: "2023 — 2026", desc: "Managed end-to-end web lifecycle for 3 major events (SFD 2024, Noskathon Lite, SFD 2025); coordinated distributed contributor teams via GitHub workflows." },
  { role: "Vice President & Creative Design Lead", company: "MUN Society Nepal", date: "Sep 2024 — Present", desc: "Oversee digital infrastructure and innovation strategy. Managed branding for nationwide circuits." },
  { role: "Director General & Head of IT", company: "TIMUN 5.0 & 6.0", date: "2021 — 2023", desc: "Managed conference operations and technical infrastructure for one of Nepal's largest MUN circuits." }
];

export const SKILLS = [
  { category: "Digital & Architecture", title: "Software Engineering", skills: ["React", "TypeScript", "Node.js", "Software Architecture", "Mobile Apps"], color: "text-elegant-primary" },
  { category: "Operations & Leadership", title: "Strategic Management", skills: ["Event Lifecycle", "Team Coordination", "Stakeholder Mgmt", "Program Strategy"], color: "text-elegant-secondary" },
  { category: "Diplomacy", title: "Geopolitics & IR", skills: ["International Relations", "Negotiation", "Public Speaking", "Multilateral Diplomacy"], color: "text-elegant-success" },
  { category: "Security", title: "Cybersecurity & IT", skills: ["Vulnerability Assessment", "Secure Frameworks", "IT TechOps", "System Integrity"], color: "text-elegant-danger" },
  { category: "Aesthetics & Brand", title: "Design & Branding", skills: ["UI/UX", "Illustrator", "InDesign", "Photoshop", "Visual Identity"], color: "text-elegant-warning" },
  { category: "Scientific Inquiry", title: "Research & Documentation", skills: ["IEEE Researcher", "Data Analysis", "Academic Writing", "Peer Review"], color: "text-elegant-info" }
];

export const PROJECTS = [
  { name: "EventWebLifecycles", tech: "Vite, React, GitHub Actions", desc: "Managed end-to-end web lifecycle for SFD 2024, Noskathon Lite, and SFD 2025." },
  { name: "TrinetraFullstack", tech: "Next.js, FastAPI, ResNet-50", desc: "Full stack application for retinal disease classification with high-performance inference." },
  { name: "NepalParliamentPokedex", tech: "React, D3.js", desc: "Visualizing demographic and legislative data for Nepali Parliament MPs." }
];

export const MUN_HIGHLIGHTS = [
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

export const CIVIC_INVOLVEMENT = [
  { title: "Event Volunteer", company: "UN Volunteers Nepal", date: "2024 — Onwards", desc: "Provided logistical and operational support for the 6th National Level Poetry Event, ensuring smooth event flow and delegate management.", color: "border-elegant-info" },
  { title: "Open Source Contributor", company: "Nepal Open Source Klub (NOSK)", date: "2023 — Onwards", desc: "Active contributor focusing on visual identity and web development for major events like Software Freedom Day (SFD).", color: "border-elegant-primary" },
  { title: "Public Speaking & Research Trainer", company: "Youth Leadership Initiatives", date: "2022 — Onwards", desc: "Conducting intensive training sessions on public speaking, structured research, and diplomatic negotiation for student leaders.", color: "border-elegant-secondary" },
  { title: "PR Coordinator & Web Designer", company: "IEEE NCIT Student Branch", date: "2025 — 2026", desc: "Overseeing the branch's web infrastructure, designing promotional assets, and coordinating public relations strategies.", color: "border-elegant-warning" },
  { title: "Junior Member", company: "Nepal Red Cross Society", date: "2015 — 2017", desc: "Participated in community-level health camps, first aid training, and relief distribution programs.", color: "border-elegant-danger" },
  { title: "Nepal Representative", company: "Goethe-Institut Pash Youth Camp", date: "2019", desc: "Selected for intensive leadership training across Sri Lanka and Germany; focused on cultural diplomacy.", color: "border-elegant-success" },
  { title: "General Member", company: "Friends of Zoo (FOZ)", date: "2014 — 2017", desc: "Engaging in wildlife conservation and environmental education programs.", color: "border-elegant-accent" }
];

export const EDUCATION = [
  { degree: "BE Software Engineering", inst: "Nepal College of Information Technology (PU)", date: "2022 — 2026 (Expected)", desc: "Comprehensive engineering program focused on scalable software architecture and distributed systems.", coursework: "AI & Neural Networks, Agile Methodologies, DBMS, DSA, Software Testing & QA" },
  { degree: "Ethical Hacking Certification", inst: "Broadway Infosys", date: "2026", desc: "Advanced security protocols and vulnerability assessment; focusing on penetration testing and defensive security." },
  { degree: "Technical Training — IT/Electronics", inst: "Don Bosco Institute (CTEVT)", date: "2016 — 2019", desc: "Grade: A. Early foundation in IT hardware and electronics infrastructure." },
  { degree: "+2 Science (NEB)", inst: "Trinity International College", date: "2020 — 2022", desc: "Grade: A. Comprehensive foundation in physical sciences and mathematical analysis." },
  { degree: "Secondary Education (SEE)", inst: "DAV School", date: "2014 — 2020", desc: "Grade: A. Early academic foundation with focus on foundational science and mathematics." }
];

export const ROTARACT_DATA = {
  role: "International Service Director",
  club: "Rotaract Central Valley Kasthamandap",
  date: "2025 — Present",
  quote: "Directing global service initiatives and fostering international partnerships to drive sustainable community impact across borders.",
  description: [
    "Orchestrating cross-border community welfare projects in collaboration with international clubs, managing multi-lingual communications, and aligning local initiatives with Rotary International’s seven areas of focus.",
    "Facilitating cultural exchange programs and representing the club in international summits and District conferences. Overseeing grant applications for international projects and managing project budgets."
  ],
  district: "3292",
  zone: "VIII"
};

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/sujalbthapa", icon: "🐙", handle: "@sujalbthapa" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/sujalbthapa", icon: "🔗", handle: "sujalbthapa" },
  { platform: "Twitter / X", url: "https://twitter.com/sujalbthapa", icon: "🐦", handle: "@sujalbthapa" },
  { platform: "Instagram", url: "https://instagram.com/sujalbthapa", icon: "📸", handle: "@sujalbthapa" },
  { platform: "Personal Site", url: "https://sujalbthapa.com.np", icon: "🏠", handle: "sujalbthapa.com.np" },
  { platform: "Cat Social", url: "https://sujalbthapa.com.np", icon: "🐱", handle: "meow-social" },
];
