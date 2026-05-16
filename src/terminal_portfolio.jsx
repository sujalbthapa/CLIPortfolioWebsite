import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { 
  IMAGES, 
  ASCII_BANNER, 
  VALID_COMMANDS, 
  SIDEBAR_COMMANDS 
} from "./data/portfolioData";
import {
  WhoamiOutput,
  ExperienceOutput,
  SkillsOutput,
  ProjectsOutput,
  MunHighlightsOutput,
  RotaractOutput,
  CivicOutput,
  EducationOutput,
  HelpOutput,
  SocialOutput,
  PoetryOutput
} from "./components/TerminalOutputs";

function ImageViewer({ images, onClose }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in font-mono p-4" role="dialog" aria-modal="true" aria-label="Image Gallery">
      <div className="w-full max-w-2xl bg-elegant-bg border-2 border-elegant-border shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Window Title Bar */}
        <div className="bg-elegant-subtle px-3 sm:px-4 py-2 sm:py-2.5 border-b-2 border-elegant-border flex items-center justify-between">
          <div className="flex gap-2">
            <button 
              onClick={onClose} 
              aria-label="Close Gallery"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-elegant-danger hover:scale-110 transition-transform flex items-center justify-center text-[7px] sm:text-[8px] text-black font-bold"
            >
              ✕
            </button>
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-elegant-warning opacity-50" />
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-elegant-success opacity-50" />
          </div>
          <span className="text-[7px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-elegant-primary truncate px-2">GALLERY_VIEWER.EXE // {images[index].caption}</span>
          <div className="w-8 sm:w-16" />
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-8 flex flex-col items-center overflow-y-auto">
          <div className="relative group w-full flex justify-center bg-black/40 rounded-lg p-2 border border-elegant-border/30 shadow-inner">
            <img 
              src={images[index].src} 
              alt={images[index].alt} 
              className="max-h-[35vh] sm:max-h-[45vh] object-contain border-2 border-elegant-border shadow-2xl rounded" 
            />
            
            {/* Arrows */}
            <button 
              onClick={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))} 
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-elegant-primary/90 hover:bg-elegant-primary text-white p-1.5 sm:p-2.5 rounded-lg transition-all shadow-lg hover:scale-110"
            >
              ←
            </button>
            <button 
              onClick={() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))} 
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-elegant-primary/90 hover:bg-elegant-primary text-white p-1.5 sm:p-2.5 rounded-lg transition-all shadow-lg hover:scale-110"
            >
              →
            </button>
          </div>
          
          <div className="mt-4 sm:mt-6 text-center">
            <h4 className="text-base sm:text-lg font-bold text-elegant-fg tracking-tight">{images[index].caption}</h4>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-elegant-warning mt-1.5 sm:mt-2 font-bold bg-elegant-warning/10 px-3 py-1 rounded-full inline-block">{index + 1} / {images.length}</p>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3 overflow-x-auto max-w-full py-2 px-1 no-scrollbar scroll-smooth">
            {images.map((img, i) => (
              <button 
                key={img.id || i} 
                onClick={() => setIndex(i)} 
                aria-label={`View image ${i + 1}`}
                className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 border-2 transition-all overflow-hidden rounded-md shadow-md ${i === index ? 'border-elegant-primary scale-110 ring-4 ring-elegant-primary/20' : 'border-elegant-border opacity-40 hover:opacity-100 hover:scale-105'}`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getCommandOutput(cmd) {
  const trimmed = cmd.trim().toLowerCase();
  
  const commandsMap = {
    "whoami": { type: "whoami" },
    "cat research.txt": { type: "projects" },
    "cat experience.txt": { type: "experience" },
    "cat skills.txt": { type: "skills" },
    "cat education.txt": { type: "education" },
    "cat mun.txt": { type: "mun" },
    "cat rotaract.txt": { type: "rotaract" },
    "cat civic.txt": { type: "civic" },
    "cat social.txt": { type: "social" },
    "cat poetry.txt": { type: "poetry" },
    "imageviewer": { type: "imageviewer" },
    "help": { type: "help" },
    "clear": { type: "clear" }
  };

  if (trimmed === "") return null;
  
  const result = commandsMap[trimmed];
  if (result) {
    return { ...result, success: true };
  }

  return {
    type: "error",
    message: `bash: ${cmd}: command not found. Type 'help' for available commands.`,
    success: false
  };
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
    case "social": return <SocialOutput />;
    case "poetry": return <PoetryOutput />;
    case "help": return <HelpOutput />;
    case "banner":
      return (
        <div className="animate-fade-in overflow-x-auto no-scrollbar">
          <pre className="text-[7px] sm:text-[10px] leading-tight font-mono select-none text-elegant-primary font-bold whitespace-pre">{ASCII_BANNER}</pre>
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] mt-4 sm:mt-6 text-elegant-secondary font-bold">
            Sujal Bikram Thapa // Portfolio OS v3.2 // Ready.
          </p>
        </div>
      );
    case "boot":
      return <p className="text-[10px] sm:text-xs font-mono text-elegant-info animate-fade-in opacity-80">{output.message}</p>;
    case "error":
      return <p className="text-[10px] sm:text-xs font-mono text-elegant-danger font-bold animate-fade-in">ERROR: {output.message}</p>;
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <div className={`flex h-dvh w-screen overflow-hidden font-mono bg-elegant-bg text-elegant-fg`} onClick={() => inputRef.current?.focus()}>
      {showGallery && <ImageViewer images={IMAGES} onClose={() => setShowGallery(false)} />}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Side Menu */}
      <aside className={`fixed inset-y-0 right-0 z-50 w-[240px] bg-elegant-subtle border-l-2 border-elegant-border transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-5 py-6 border-b-2 border-elegant-border/20 flex items-center justify-between">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 text-elegant-primary hover:bg-white/5 rounded-lg"
            aria-label="Close Menu"
          >
            ✕
          </button>
          <div className="font-serif text-lg">Sujal <span style={{opacity: 0.5}}>Thapa.</span></div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 custom-scrollbar">
          {SIDEBAR_COMMANDS.map((c) => (
            <button 
              key={c.cmd} 
              onClick={(e) => { 
                e.stopPropagation(); 
                handleSidebarCmd(c.cmd); 
                setIsMobileMenuOpen(false);
              }} 
              className={`w-full text-left px-3.5 py-2.5 rounded-xl group transition-all duration-300 flex items-center gap-3 hover:bg-white/5 shadow-sm`}
            >
              <span className="text-base">{c.icon}</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold group-hover:text-elegant-primary transition-colors">{c.label}</span>
                <span className="text-[8px] opacity-40 font-mono mt-0.5">&gt;&gt; {c.cmd}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="px-6 py-4 border-t-2 border-elegant-border/20 bg-white/5">
          <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold">v3.2 // 2026</span>
        </div>
      </aside>

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
        <header className={`shrink-0 px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-elegant-border bg-elegant-bg/95 backdrop-blur-sm z-10 sticky top-0`}>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <div className="flex gap-2 mr-4 sm:mr-6">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-elegant-danger shadow-sm" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-elegant-warning shadow-sm" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-elegant-success shadow-sm" />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-elegant-primary">sujal@portfolio: ~</span>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(true); }}
              className="p-1.5 ml-2 text-elegant-primary md:hidden border border-elegant-primary/30 rounded bg-elegant-primary/5 hover:bg-elegant-primary/10"
              aria-label="Open Commands Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <a 
              href="https://sujalbthapa.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] uppercase tracking-widest text-elegant-primary font-bold px-2 sm:px-3 py-1.5 border border-elegant-primary/30 rounded hover:bg-elegant-primary hover:text-white transition-all shadow-sm flex items-center gap-2"
            >
              <span>Formal Website</span>
              <span className="text-[8px]">↗</span>
            </a>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-elegant-secondary font-bold px-2 py-1 bg-elegant-secondary/10 rounded">BASH 5.0</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 sm:px-10 pt-6 pb-32 sm:py-10 space-y-8 sm:space-y-12 custom-scrollbar scroll-smooth">
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
                  className={`bg-transparent border-none outline-none w-full font-mono text-[12px] sm:text-sm font-bold transition-colors ${isCommandValid ? "text-elegant-success" : "text-elegant-fg"}`}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  autoFocus
                  aria-label="Terminal Input"
                />
              </div>
            </div>
          )}

          {!booted && typing && (
            <div className="flex items-center gap-3 mt-6">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-elegant-info animate-pulse">Initializing Environment...</span>
              <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-elegant-primary animate-blink" />
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
    <span className="text-[12px] sm:text-sm shrink-0 select-none font-mono flex items-center font-bold">
      <span className="text-elegant-success">➜</span>
      <span className="ml-2 sm:ml-3 text-elegant-info">~</span>
      <span className="ml-1 sm:ml-2 text-elegant-secondary">$</span>
    </span>
  );
}
