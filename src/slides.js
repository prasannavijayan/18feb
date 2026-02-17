import { MonitorCloud } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';
import {
  Cpu,
  Briefcase,
  Zap,
  ShieldCheck,
  Code2,
  Globe,
  GraduationCap,
  Trophy,
  BrainCircuit,
  Terminal,
  Search,
  Users,
  MessageSquare,
} from 'lucide-react';

export const slides = [
  {
    title: "Leverage AI Tools to explore IT opportunities",
    subtitle: "By Prasanna Vijayan",
    content: "Software Engineer (Frontend) @ Freshworks <br><br> 10+ Years Experience in app development",
    presenterContent: "Introduce yourself, mention 10+ years experience, and current role at Freshworks.",
    icon: Users,
    color: "bg-pink-50"
  },
  {
    title: "What do you think this session is about?",
    subtitle: 'Take a guess, hint: All answers might be correct',
    content: '',
    presenterContent: "Engage the audience. Ask them to guess the topic. Mention that all answers might be correct in some context.",
    icon: CircleQuestionMark,
    color: "bg-white"
  },
  {
    title: 'Software development cycle',
    subtitle: '',
    content: '<div class="flex justify-center"><img width="640px" id="zoomin" src="/src/assets/aibeforeafter.png" alt="Traditional software development cycle" /></div>',
    presenterContent: "Explain the traditional SDLC vs AI-assisted. Point out the 'zoomin' feature on the image.",
    icon: MonitorCloud,
    color: 'bg-teal-100'
  },
  {
    title: "The Traditional Way: Hand-Coding Every Step",
    subtitle: "In traditional development, a programmer is like a translator.",
    content: "Until now, AI just answered questions. In 2026, AI acts on your behalf. It can build whole apps, manage servers, and solve bugs while you sleep. Your new job? Being the 'Boss' of these AI",
    presenterContent: "Emphasize the shift from 'User' to 'Boss'. AI is no longer just a tool, it's an agent.",
    icon: Cpu,
    color: "bg-blue-50"
  },
  {
    title: "The Agentic Leap (2026)",
    subtitle: "The Shift from Chat to Action",
    content: "We have moved beyond simple chatbots to Agentic AI—systems capable of executing multi-step workflows autonomously. By 2026, 37% of routine roles will be automated, but 'Orchestrator' roles are exploding.",
    list: ["Multi-Agent Systems", "Enterprise Integration", "Autonomous Workflow Execution"],
    presenterContent: "Define Agentic AI. Give examples of autonomous workflows. Mention the 2026 prediction.",
    icon: Zap,
    color: "bg-yellow-50"
  },
  {
    title: "The Hybrid Skill Premium",
    subtitle: "Why Human-AI Collaboration Pays",
    content: "Professionals who combine technical fluency with human-centered skills (creativity, ethics) earn a 28% salary premium. Skills for AI-exposed roles are evolving 66% faster than traditional roles.",
    list: ["Critical Thinking", "Ethical Reasoning", "Strategic Orchestration"],
    presenterContent: "Discuss the salary premium. Why human skills matter more when AI does the coding.",
    icon: Trophy,
    color: "bg-purple-50"
  },
  {
    title: "India: The Deep-Tech Hub",
    subtitle: "Rise of Global Capability Centers (GCCs)",
    content: "India's tech industry is hitting $300B. GCCs have moved from back-offices to R&D hubs for global products, cybersecurity, and AI research.",
    list: ["9.5M tech professionals by 2026", "$17B Indian AI Economy by 2027", "Massive gap in GenAI-ready talent"],
    presenterContent: "Highlight India's growth. GCCs are key employers. The gap in GenAI talent is an opportunity.",
    icon: Globe,
    color: "bg-green-50"
  },
  {
    title: "Local Focus: The Chennai Hub",
    subtitle: "SaaS, AI & Product Engineering",
    content: "Chennai is a magnet for 'Applied AI'. Key players like Zoho and Freshworks integrate AI directly into global products.",
    list: ["OMR/Taramani: Computer Vision & SaaS", "Guduvanchery: Business Productivity (Zoho)", "Entry-level salaries: ₹6L - ₹12L for AI Specialists"],
    presenterContent: "Focus on Chennai. Mention specific companies and salary ranges to make it real for students.",
    icon: Search,
    color: "bg-orange-50"
  },
  {
    title: "Reverse Thinking Framework",
    subtitle: "A Creative Learning Mechanism",
    content: "Don't just code from scratch. Take a finished AI output (code or architecture) and deconstruct it to reveal its 'DNA'. Analyze the trajectory from idea to artifact.",
    list: ["Identify design patterns", "Study structural relationships", "Understand architectural tradeoffs"],
    presenterContent: "Explain Reverse Thinking. Start with the output and work backwards. Good for learning AI architectures.",
    icon: BrainCircuit,
    color: "bg-indigo-50"
  },
  {
    title: "The Socratic AI Tutor",
    subtitle: "Learning Architects, Not Answer Generators",
    content: "Use LLMs (Claude/GPT) to guide discovery rather than provide answers. Socratic prompting turns interaction into a dialogue that surfaces hidden assumptions.",
    list: ["Force the AI to ask YOU questions", "Validate logic step-by-step", "Build deep intuition over rote memory"],
    presenterContent: "Socratic method: AI asks questions. This builds deeper understanding than just getting answers.",
    icon: Users,
    color: "bg-pink-50"
  },
  {
    title: "Pedagogical Power-Ups",
    subtitle: "High-Yield Learning Techniques",
    content: "Leverage proven educational frameworks using AI personas to accelerate comprehension of complex IT topics.",
    list: ["Feynman Technique: Explain like I'm 12", "Pareto (80/20): Identify high-yield topics", "Peer Debate: Use AI as a skeptic to toughen logic"],
    presenterContent: "Briefly explain Feynman, Pareto, and Peer Debate techniques using AI.",
    icon: GraduationCap,
    color: "bg-blue-50"
  },
  {
    title: "Agentic IDEs: Cursor",
    subtitle: "The Future of Coding Environments",
    content: "Cursor is an AI-native IDE. Its 'Agent Mode' understands your entire codebase, plans changes, and executes them across multiple files.",
    list: ["The Understanding Layer (Context)", "The Planning Layer (Proposal)", "The Execution Layer (Action)"],
    presenterContent: "Introduce Cursor. Explain Agent Mode and how it understands context.",
    icon: Terminal,
    color: "bg-gray-100"
  },
  {
    title: "The Windsurf Revolution",
    subtitle: "Cascade & Autonomous Flow",
    content: "Windsurf's 'Cascade' logic automates 90% of code generation and debugging. It acts as an interactive partner for enterprise-grade projects.",
    list: ["Multi-file editing", "Context-aware suggestions", "Instant browser-based app building (Replit)"],
    presenterContent: "Mention Windsurf and Cascade. Compare with Cursor. Mention Replit for browser-based dev.",
    icon: Code2,
    color: "bg-cyan-50"
  },
  {
    title: "Algorithmic Job Matching",
    subtitle: "Beyond the Job Board",
    content: "In 2026, AI matches you based on personality assessments and 'biography' analysis. Use platforms that surface your profile to relevant recruiters.",
    list: ["Talentprise: Value-based matching", "LinkedIn Premium: AI Gap Analysis", "ResumeNerd: Bio-to-Role alignment"],
    presenterContent: "Job matching is changing. It's not just keywords anymore, it's about 'biography' and 'value'.",
    icon: Briefcase,
    color: "bg-emerald-50"
  },
  {
    title: "Beating the ATS",
    subtitle: "Resume Optimization vs. Authenticity",
    content: "AI scanners (ATS) screen for keywords. Use tools like Jobscan to match requirements, but keep your 'Unique Snowflake' personality in the content.",
    list: ["Match scores vs. Job Descriptions", "Keyword coverage optimization", "Avoiding 'over-automation' patterns"],
    presenterContent: "ATS tips. Use AI to optimize, but keep it authentic. Don't look like a bot.",
    icon: ShieldCheck,
    color: "bg-red-50"
  },
  {
    title: "AI Mock Interviews",
    subtitle: "Agentic Interviewing Practice",
    content: "Prepare with AI agents that behave like real recruiters. They don't just ask questions—they probe your answers for depth.",
    list: ["SpectraSeek: Dynamic follow-up questions", "Nexvo.AI: Indian campus placement patterns", "Yoodli: Speech & communication analysis"],
    presenterContent: "Mock interviews with AI. Mention SpectraSeek, Nexvo, and Yoodli.",
    icon: MessageSquare,
    color: "bg-teal-50"
  },
  {
    title: "The 2026 Portfolio Strategy",
    subtitle: "Real-World Utility > Flashy AI",
    content: "Hiring managers want to see 'Human-in-the-Loop' systems and 'Explainable AI'. Show that you can solve real problems with intelligent tools.",
    list: ["RAG-based Document Assistants", "Explainable Coding Tutors", "Privacy-First Local AI Solutions"],
    presenterContent: "Portfolio strategy: Build real things. RAG, Explainable AI, Privacy-first.",
    icon: Trophy,
    color: "bg-amber-50"
  },
  {
    title: "High-Impact Project Ideas",
    subtitle: "Differentiate Your Portfolio",
    content: "Focus on projects that bridge the gap between theory and deployment. These are the most sought-after skills in 2026.",
    list: ["Autonomous Drone Navigation (RL)", "Predictive Maintenance for IIoT", "Emotion Recognition from Multi-modal data"],
    presenterContent: "Project ideas. Drone nav, IIoT, Emotion recognition. These show advanced skills.",
    icon: Cpu,
    color: "bg-rose-50"
  },
  {
    title: "Certification Pathways",
    subtitle: "Proving Your Competency",
    content: "In a crowded market, industry-standard certs are the 'Proof of Work'. Prioritize Cloud-AI and foundational engineering certs.",
    list: ["AWS Certified AI Practitioner", "Azure AI Fundamentals (AI-900)", "IBM AI Engineering Professional"],
    presenterContent: "Certs matter. AWS, Azure, IBM. 'Proof of Work'.",
    icon: GraduationCap,
    color: "bg-blue-50"
  },
  {
    title: "Ethics & Sovereignty",
    subtitle: "The Regulatory Tsunami",
    content: "EU AI Act enforcement begins in 2026. Companies are hiring 'Ethics & Governance' officers. Understanding bias and privacy is now a technical requirement.",
    list: ["Trustworthy AI Standards", "On-premises/Edge AI for data privacy", "AI Governance Frameworks"],
    presenterContent: "Ethics and Regulation. EU AI Act. Data privacy is huge.",
    icon: ShieldCheck,
    color: "bg-slate-100"
  },
  {
    title: "Your 8-Week Action Plan",
    subtitle: "Phase 1 & 2: Mapping & Optimization",
    content: "Weeks 1-4: Map the market and optimize your resume. Identify the 'Hybrid Skills' needed for your target roles.",
    list: ["Skill Gap Analysis via LLMs", "ATS-Friendly Resume Architecture", "Market Mapping (Regional Focus)"],
    presenterContent: "Action Plan Phase 1 & 2. Map the market, fix resume.",
    icon: Zap,
    color: "bg-yellow-50"
  },
  {
    title: "Your 8-Week Action Plan",
    subtitle: "Phase 3 & 4: Rehearsal & Execution",
    content: "Weeks 5-8: Shift to high-pressure interview practice and networking automation. Use agentic tools to simulate technical rounds.",
    list: ["Dynamic Mock Interviews", "Portfolio Deployment", "Automated Networking Workflows"],
    presenterContent: "Action Plan Phase 3 & 4. Rehearse and Execute. Mock interviews, networking.",
    icon: Zap,
    color: "bg-orange-50"
  },
  {
    title: "Conclusion: The Hybrid Advantage",
    subtitle: "Collaborate, Don't Compete",
    content: "The future belongs to the 'Human in the Loop'. Use AI tools to amplify your capability, not as a shortcut. Be the architect of intelligent systems.",
    list: ["Master Agentic IDEs", "Think Socratically", "Prioritize Ethical Implementation"],
    presenterContent: "Conclusion. Collaborate, don't compete. Be the architect.",
    icon: Trophy,
    color: "bg-yellow-50"
  },
  {
    title: "Thank You",
    subtitle: "Questions?",
    content: "",
    presenterContent: "Thank everyone. Open floor for questions.",
    isThankYou: true,
    icon: Trophy,
    color: "bg-slate-100"
  }
];
