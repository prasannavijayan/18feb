import { MonitorCloud } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';
import {
  Cpu,
  Briefcase,
  Zap,
  ShieldCheck,
  Code2,
  GraduationCap,
  Trophy,
  BrainCircuit,
  Terminal,
  Search,
  Users,
  MessageSquare,
  Clock10,
} from 'lucide-react';
import aiBeforeAfter from './assets/aibeforeafter.png';
import aiBuzzWords from './assets/aibuzzwords.png';

/** Example deck only — fictional copy, no real people or organizations. */
export const slides = [
  {
    title: 'Sample deck: Widget workflows',
    subtitle: 'Demo presenter notes & layout',
    content:
      'This slide exists to show typography and spacing.<br><br>Replace every string with your own material before a real talk.',
    presenterContent: `<ol>
      <li>Open with a one-line hook; avoid biographical detail in public demos.</li>
      <li>Mention that this file is placeholder content for UI testing.</li>
      </ol>`,
    icon: Users,
    color: 'bg-pink-50',
  },
  {
    title: 'What might this session cover?',
    subtitle: 'Audience poll — answers can all be playful',
    content: `<div class="flex justify-center"><img width="540px" id="zoomin" src="${aiBuzzWords}" alt="Decorative diagram placeholder" class="max-w-full max-h-[60vh] object-contain" /></div>`,
    presenterContent: `<ol>
      <li>Invite guesses; keep tone light.</li>
      <li>Transition: buzzwords vs. concrete outcomes.</li>
      </ol>`,
    icon: CircleQuestionMark,
    color: 'bg-white',
  },
  {
    title: 'Before / after (illustrative)',
    subtitle: '',
    content: `<div class="flex justify-center h-full items-center"><img id="zoomin" src="${aiBeforeAfter}" alt="Before and after comparison placeholder" class="max-w-full max-h-[60vh] object-contain" /></div>`,
    presenterContent: `<ol>
      <li>Walk through the image at a high level only.</li>
      <li>Pause for questions before the next section.</li>
    </ol>`,
    icon: MonitorCloud,
    color: 'bg-teal-100',
  },
  {
    title: 'Lorem process alpha',
    subtitle: 'Hand-written steps, one typo on purpose',
    content:
      "<b>Process:</b> Jumbled latin filler — arcu dictum, integer vel, nullam quis.<br><br><b>Friction:</b> Semicolons vanish; builds fail; forums echo with duplicate threads.<br><br><b>Mood:</b> Deliberate, slow, and heavy on memorization for this fake example.",
    presenterContent: 'Emphasize contrast with the next slide.',
    icon: Cpu,
    color: 'bg-blue-50',
  },
  {
    title: 'Lorem process beta',
    subtitle: 'Plain-language prompts as a toy story',
    content:
      "<b>Process:</b> Describe a blue button in plain English; pretend output appears instantly.<br><br><b>Friction:</b> Editing beats authoring; stitch fragments into a whole.<br><br><b>Mood:</b> Fast, playful, big-picture framing for the deck preview.",
    presenterContent: 'Mirror structure of previous slide for layout check.',
    icon: Cpu,
    color: 'bg-blue-50',
  },
  {
    title: 'Fictional roadmap year',
    subtitle: 'Chat-shaped tools vs. action-shaped tools',
    content:
      'Nonsense stat: 37% of routine tasks become automated in this pretend timeline. Orchestrator-style roles grow in the same paragraph for symmetry.',
    list: ['Multi-step automations', 'Sandbox integrations', 'Workflow sketches'],
    presenterContent: 'Use a movie or book reference only if licensing fits your event.',
    icon: Zap,
    color: 'bg-yellow-50',
  },
  {
    title: 'Hybrid skills (example only)',
    subtitle: 'No real compensation data',
    content:
      'Placeholder claim: blending technical fluency with judgment yields better outcomes in our fake study. Skills change faster than footnotes in this demo.',
    list: ['Critical thinking', 'Ethical reasoning', 'Prioritization'],
    presenterContent: 'Keep discussion abstract; do not cite real surveys here.',
    icon: Trophy,
    color: 'bg-purple-50',
  },
  {
    title: 'Regional hub — fictional',
    subtitle: 'Generic “tech corridor” wording',
    content:
      'Imagine a metro area where product teams ship experiments weekly. Names of streets and employers are omitted on purpose.',
    list: [
      'North district: vision labs (fictional)',
      'South campus: productivity suites (fictional)',
      'Entry bands: redacted in example decks',
    ],
    presenterContent: 'Swap in vetted, public facts for a real talk.',
    icon: Search,
    color: 'bg-orange-50',
  },
  {
    title: 'Reverse-engineering practice',
    subtitle: 'Learning from finished artifacts',
    content:
      'Start from a completed snippet and peel layers until patterns emerge. This slide is filler text for spacing tests.',
    list: ['Spot recurring patterns', 'Map dependencies', 'Note tradeoffs'],
    presenterContent: 'Demo one tiny code walk-through if time allows.',
    icon: BrainCircuit,
    color: 'bg-indigo-50',
  },
  {
    title: 'Dialogue-first prompts',
    subtitle: 'Questions before answers',
    content:
      'Use assistants to surface assumptions instead of dumping conclusions. All product names in your live deck should be yours to verify.',
    list: ['Ask the model to interrogate you', 'Step through logic', 'Prefer intuition over cramming'],
    presenterContent: 'Optional live prompt; keep transcripts off-screen.',
    icon: Users,
    color: 'bg-pink-50',
  },
  {
    title: 'Study habits (placeholder)',
    subtitle: 'Frameworks as mnemonics',
    content:
      'Explain-like-I’m-twelve, eighty-twenty focus, and debate-with-a-skeptic are listed here only to exercise bullet styling.',
    list: ['Simple explanations', 'High-yield topics', 'Adversarial review'],
    presenterContent: 'Translate jargon for the room if needed.',
    icon: GraduationCap,
    color: 'bg-blue-50',
  },
  {
    title: 'Example IDE headline',
    subtitle: 'Agent-style editing (generic)',
    content:
      'Any AI-aware editor can illustrate context, plans, and edits across files. Swap in the tool you actually use.',
    list: ['Context layer', 'Plan layer', 'Apply layer'],
    presenterContent: 'Screen-share a sandbox repo, not production.',
    icon: Terminal,
    color: 'bg-gray-100',
  },
  {
    title: 'Second tool slot',
    subtitle: 'Cascade-style flows (fictional)',
    content:
      'Pretend automation covers most boilerplate while you steer architecture. Numbers are decorative.',
    list: ['Multi-file touch', 'Inline suggestions', 'Browser labs'],
    presenterContent: 'Compare two tools abstractly; avoid endorsement wars.',
    icon: Code2,
    color: 'bg-cyan-50',
  },
  {
    title: 'Short break',
    subtitle: '',
    content:
      '<b>Ten minutes</b> of silence in this template. After the break, resume with resume/portfolio slides replaced by your agenda.',
    presenterContent: '',
    icon: Clock10,
    color: 'bg-gray-50',
  },
  {
    title: 'Matching algorithms (vague)',
    subtitle: 'No platform specifics required',
    content:
      'Hypothetical recruiters weigh profiles, skills, and narrative fit. Replace with your hiring context later.',
    list: ['Value alignment (fake)', 'Gap summaries (fake)', 'Bio-to-role toy examples'],
    presenterContent: 'Stress authenticity over keyword stuffing.',
    icon: Briefcase,
    color: 'bg-emerald-50',
  },
  {
    title: 'Screening systems (abstract)',
    subtitle: 'Keywords vs. voice',
    content:
      'Automated filters exist; balance tuning with a human-readable story. This sentence is long on purpose to test wrapping.',
    list: ['Score vs. job text', 'Coverage ideas', 'Avoid robotic tone'],
    presenterContent: 'One cautionary anecdote — make it fictional.',
    icon: ShieldCheck,
    color: 'bg-red-50',
  },
  {
    title: 'Practice interviews',
    subtitle: 'Agents as sparring partners',
    content:
      'Role-play tools can probe follow-ups. Name no vendor you have not cleared for the audience.',
    list: ['Dynamic follow-ups', 'Campus-style drills', 'Speech feedback toys'],
    presenterContent: 'Run a 60-second demo or skip entirely.',
    icon: MessageSquare,
    color: 'bg-teal-50',
  },
  {
    title: 'Portfolio themes (sample)',
    subtitle: 'Utility over glitter',
    content:
      'Show systems with clear boundaries, observability, and privacy posture. These bullets are thematic placeholders.',
    list: ['Document helpers', 'Explainable tutors', 'Local-first experiments'],
    presenterContent: 'RAG analogy: textbook vs. library sprint — keep it short.',
    icon: Trophy,
    color: 'bg-amber-50',
  },
  {
    title: 'Project ideas (fictional)',
    subtitle: 'Differentiation examples',
    content:
      'Robotics, industrial sensors, and multimodal classifiers appear here to stress-test list height.',
    list: ['Autonomous toy robots', 'Predictive maintenance story', 'Emotion classifiers (synthetic data only)'],
    presenterContent: 'Warn about sensitive biometric data in real projects.',
    icon: Cpu,
    color: 'bg-rose-50',
  },
  {
    title: 'Certification slots',
    subtitle: 'Verify before you claim',
    content:
      'Cloud and AI foundations are common checklist items. Replace with credentials you personally hold.',
    list: ['Vendor A — intro track', 'Vendor B — fundamentals', 'Vendor C — engineering path'],
    presenterContent: 'Certs are optional; skills still need proof.',
    icon: GraduationCap,
    color: 'bg-blue-50',
  },
  {
    title: 'Ethics & governance',
    subtitle: 'Regulation as background',
    content:
      'Jurisdictions differ; treat this as a reminder to read primary sources. No legal advice in a slide deck.',
    list: ['Trust patterns', 'Edge deployment', 'Policy templates'],
    presenterContent: 'Invite compliance friends for Q&A if needed.',
    icon: ShieldCheck,
    color: 'bg-slate-100',
  },
  {
    title: 'Eight-week plan (phase one)',
    subtitle: 'Mapping and polish',
    content:
      'Weeks one through four: inventory skills, tighten materials, and rehearse elevator lines. Numbers are arbitrary.',
    list: ['Gap chat with a mentor', 'Readable resume layout', 'Market scan (public sources)'],
    presenterContent: 'Adjust timeline to your cohort.',
    icon: Zap,
    color: 'bg-yellow-50',
  },
  {
    title: 'Eight-week plan (phase two)',
    subtitle: 'Rehearsal and outreach',
    content:
      'Weeks five through eight: mock rounds, ship demos, and polite automation for follow-ups.',
    list: ['Timed practice', 'Deploy artifacts', 'Lightweight CRM habits'],
    presenterContent: 'End with energy, not exhaustion.',
    icon: Zap,
    color: 'bg-orange-50',
  },
  {
    title: 'Closing theme',
    subtitle: 'Collaborate with tools',
    content:
      'Humans remain accountable for outcomes. Tools amplify; they do not replace judgment in this narrative.',
    list: ['Know your stack', 'Ask better questions', 'Ship responsibly'],
    presenterContent: 'One sentence recap, then invite discussion.',
    icon: Trophy,
    color: 'bg-yellow-50',
  },
  {
    title: 'Thank you',
    subtitle: 'Q&A',
    content: '',
    presenterContent:
      'Thank the audience; mention this build is a UI sample; open the floor for questions without personal timelines.',
    isThankYou: true,
    icon: Trophy,
    color: 'bg-slate-100',
  },
];
