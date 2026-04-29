export const insights = [
  {
    id: "execution",
    topic: "Execution Architecture",
    title: "Why growth businesses stall between strategy and delivery",
    summary: "A look at how unclear ownership and weak cadence distort execution quality.",
    visual: "linear-gradient(140deg, rgba(255,255,255,0.1), rgba(47,47,47,0.1)), radial-gradient(circle at 20% 20%, #d9dad8, transparent 22%), linear-gradient(135deg, #595a5d 0%, #1f2122 100%)"
  },
  {
    id: "growth",
    topic: "Growth Systems",
    title: "When demand is real, but momentum still needs to be restarted",
    summary: "Why growth does not compound when the underlying system remains reactive.",
    visual: "linear-gradient(160deg, rgba(255,255,255,0.1), rgba(47,47,47,0.12)), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0 6px, transparent 6px 20px), linear-gradient(135deg, #8c8d8b 0%, #2f2f2f 100%)"
  },
  {
    id: "ai",
    topic: "AI & Intelligent Systems",
    title: "Technical capability is not the same thing as market readiness",
    summary: "How AI-led businesses can build stronger commercialization and execution logic.",
    visual: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(47,47,47,0.5)), radial-gradient(circle at 60% 30%, #ffffff, transparent 18%), linear-gradient(135deg, #b8c4c7 0%, #2d2f33 100%)"
  },
  {
    id: "operators",
    topic: "Operating Model",
    title: "Most businesses do not fail on direction. They fail in translation.",
    summary: "Execution architecture determines whether strategy becomes coordinated action or repeated friction.",
    visual: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(47,47,47,0.46)), linear-gradient(120deg, #d2d4d3 0%, #5f6261 42%, #2f2f2f 100%)"
  },
  {
    id: "scale",
    topic: "Scale Readiness",
    title: "What changes when a business moves from founder-led effort to scalable capacity",
    summary: "The capability shifts required before growth can become more resilient.",
    visual: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(47,47,47,0.44)), radial-gradient(circle at 80% 25%, #ededeb, transparent 20%), linear-gradient(135deg, #aaaaa6 0%, #313131 100%)"
  }
];

export const assistMatrix = {
  define: {
    title: "Define strategic direction and decision logic",
    description: "Best when the immediate challenge is clarity: where to focus, what to stop, and how leadership should frame the next stage.",
    engagement: "Foundation Sprint",
    sectors: {
      saas: "Use Define to sharpen product-market priorities, growth logic, and leadership alignment before adding more initiatives.",
      d2c: "Use Define to reset proposition clarity, channel priorities, and the commercial focus required for healthier growth.",
      fintech: "Use Define to create a clearer market and expansion thesis before complexity compounds further.",
      healthcare: "Use Define to align service, market, and operational priorities in a more disciplined way.",
      ai: "Use Define to translate technical ambition into a clearer commercialization path.",
      consumer: "Use Define to clarify portfolio focus, customer value, and the next growth bet."
    }
  },
  build: {
    title: "Build the execution architecture",
    description: "Best when strategy exists, but ownership, governance, process design, and cross-functional coordination are too weak to carry it.",
    engagement: "Build and Activate",
    sectors: {
      saas: "Use Build to align product, commercial, and leadership teams around a stronger operating model.",
      d2c: "Use Build to improve workflow discipline between offer, campaign, retention, and operations.",
      fintech: "Use Build to strengthen execution control in a higher-complexity operating environment.",
      healthcare: "Use Build to reduce coordination friction across service, operational, and commercial functions.",
      ai: "Use Build to structure commercialization, delivery, and go-to-market ownership.",
      consumer: "Use Build to connect brand, demand, and operational execution with clearer accountability."
    }
  },
  drive: {
    title: "Drive growth execution and market activation",
    description: "Best when the business needs stronger execution rhythm, better KPI visibility, and a more coordinated route to market.",
    engagement: "Build and Activate",
    sectors: {
      saas: "Use Drive to create stronger activation discipline across launches, growth priorities, and reporting.",
      d2c: "Use Drive to improve campaign-to-commerce coordination and make growth efforts more cumulative.",
      fintech: "Use Drive to structure growth execution without weakening governance and control.",
      healthcare: "Use Drive to activate growth with more consistency across service and market functions.",
      ai: "Use Drive to move from capability messaging into more disciplined market motion.",
      consumer: "Use Drive to coordinate commercial activation with clearer performance management."
    }
  },
  scale: {
    title: "Scale through stronger systems and expansion readiness",
    description: "Best when traction is real, but scale strain is visible across control, quality, operating resilience, or new-market readiness.",
    engagement: "Scale and Expand",
    sectors: {
      saas: "Use Scale to strengthen repeatability, resilience, and expansion capacity before complexity compounds.",
      d2c: "Use Scale to support growth without weakening consistency across channels and operations.",
      fintech: "Use Scale to improve readiness for larger growth while keeping operating control intact.",
      healthcare: "Use Scale to expand capacity sustainably across service, delivery, and commercial demands.",
      ai: "Use Scale to build the systems required for broader commercialization and expansion.",
      consumer: "Use Scale to strengthen the operating base beneath larger portfolio or market growth."
    }
  }
};

export const pathways = [
  {
    id: "clarity",
    label: "Priorities feel diffuse",
    stage: "Define",
    title: "When direction exists, but priorities are not sharp enough to govern execution.",
    summary: "This is usually a Define-stage problem. The business may have ambition, market movement, and multiple valid ideas, but not a clear decision hierarchy.",
    outcomes: ["Sharper strategic priorities", "Leadership alignment on the next growth path", "Clearer market and proposition logic"],
    workstreams: ["Strategic diagnosis", "Opportunity prioritization", "Decision architecture", "Executive alignment"],
    cta: "Best starting point: Foundation Sprint"
  },
  {
    id: "execution",
    label: "Execution is inconsistent",
    stage: "Build",
    title: "When teams are active, but coordinated execution remains unreliable.",
    summary: "This is usually a Build-stage problem. Strategy may be directionally sound, but the operating model, ownership logic, and working rhythm are too weak to support clean delivery.",
    outcomes: ["Clearer ownership and accountability", "Improved cross-functional operating rhythm", "More structured translation from strategy to delivery"],
    workstreams: ["Operating model design", "Governance cadence", "Execution blueprinting", "Product-growth alignment"],
    cta: "Best starting point: Build and Activate"
  },
  {
    id: "growth",
    label: "Growth is active but not compounding",
    stage: "Drive",
    title: "When the business is investing in growth, but momentum still needs to be restarted repeatedly.",
    summary: "This is usually a Drive-stage problem. Market activity is happening, but the business lacks the performance discipline and coordination needed to create repeatable progress.",
    outcomes: ["Stronger execution cadence", "Clearer KPI visibility", "Repeatable market activation discipline"],
    workstreams: ["Activation roadmap", "Performance management", "Initiative tracking", "Growth operating systems"],
    cta: "Best starting point: Build and Activate"
  },
  {
    id: "scale",
    label: "Growth is creating strain",
    stage: "Scale",
    title: "When traction is real, but the business is starting to feel operationally fragile.",
    summary: "This is usually a Scale-stage problem. The issue is no longer whether demand exists. It is whether the organization can expand without losing control, consistency, or quality.",
    outcomes: ["Greater scale-readiness", "Stronger system resilience", "Improved expansion capacity"],
    workstreams: ["Capability maturity planning", "System optimization", "Scale-readiness design", "Expansion operating framework"],
    cta: "Best starting point: Scale and Expand"
  }
];

export const maturityStages = [
  {
    id: "reactive",
    name: "Reactive",
    subtitle: "Urgency is doing too much of the work.",
    description: "Execution depends heavily on leadership intervention, priorities shift too easily, and systems are not yet strong enough to absorb complexity.",
    symptoms: ["Founder or senior team acts as the operating glue", "Initiatives compete without clear decision rules", "Performance visibility is fragmented"],
    intervention: ["Clarify the next strategic priorities", "Reduce execution noise", "Create a credible starting architecture"],
    engagement: "Foundation Sprint"
  },
  {
    id: "emerging",
    name: "Emerging",
    subtitle: "Direction exists, but execution discipline is uneven.",
    description: "The organization has more clarity than before, but ownership, process design, and cross-functional coordination remain inconsistent.",
    symptoms: ["Teams interpret strategy differently", "Handoffs create friction", "Growth depends on concentrated effort"],
    intervention: ["Design clearer operating structure", "Align ownership and cadence", "Build execution consistency"],
    engagement: "Foundation Sprint or Build and Activate"
  },
  {
    id: "structured",
    name: "Structured",
    subtitle: "The business has rhythm, but not full integration.",
    description: "Core systems are becoming more repeatable. The next challenge is making strategy, product, operations, and growth work as one coordinated system.",
    symptoms: ["Functions perform, but not always in sync", "Metrics exist, but decisions are not always tied to them", "The model works, but still strains under growth"],
    intervention: ["Strengthen cross-functional integration", "Refine KPI and governance discipline", "Improve execution quality under load"],
    engagement: "Build and Activate"
  },
  {
    id: "integrated",
    name: "Integrated",
    subtitle: "The operating model is coherent and becoming scalable.",
    description: "Strategy and delivery are increasingly aligned. The main requirement now is to optimize systems and prepare for larger expansion or more demanding growth conditions.",
    symptoms: ["Leadership has stronger visibility and control", "Execution is repeatable across functions", "New growth opportunities require stronger scale planning"],
    intervention: ["Optimize the model for resilience", "Increase capability maturity", "Prepare for broader expansion"],
    engagement: "Scale and Expand"
  },
  {
    id: "scalable",
    name: "Scalable",
    subtitle: "Growth capacity is built into the organization.",
    description: "The business has the foundations to expand with discipline. Zerologic's role becomes more focused on optimization, new-market readiness, and performance strengthening at scale.",
    symptoms: ["Decision-making is clearer and faster", "The business can scale without heavy improvisation", "Capability expansion becomes the next frontier"],
    intervention: ["Optimize performance drivers", "Expand capacity sustainably", "Support strategic expansion priorities"],
    engagement: "Scale and Expand"
  }
];

export const engagements = [
  {
    id: "sprint",
    name: "Foundation Sprint",
    who: "Businesses that need clarity before committing to a larger execution program.",
    situation: "Diffuse priorities, growth friction, unclear market direction, or leadership misalignment.",
    outcomes: ["Sharper strategic focus", "Defined starting priorities", "A clearer decision and action framework"],
    deliverables: ["Strategic diagnosis", "Priority map", "Leadership alignment outputs", "Recommended roadmap"],
    cadence: "Short-cycle, senior-led engagement with concentrated leadership involvement.",
    why: "It creates clarity before resources are spread across the wrong initiatives."
  },
  {
    id: "activate",
    name: "Build and Activate",
    who: "Teams ready to turn strategy into execution systems and coordinated market motion.",
    situation: "The business knows where it wants to go, but delivery, ownership, and operating structure are too weak to carry the strategy.",
    outcomes: ["Stronger coordination across teams", "Execution architecture that supports delivery", "A more disciplined activation model"],
    deliverables: ["Execution blueprint", "Governance design", "Activation roadmap", "KPI and accountability structure"],
    cadence: "Multi-phase engagement with recurring working sessions and structured leadership reviews.",
    why: "It turns intent into coordinated business motion."
  },
  {
    id: "expand",
    name: "Scale and Expand",
    who: "Organizations strengthening performance drivers and preparing for larger growth or expansion.",
    situation: "Traction is real, but scale strain is visible across operations, quality, market execution, or control.",
    outcomes: ["Greater organizational resilience", "Better scale-readiness", "Improved expansion capacity"],
    deliverables: ["Optimization roadmap", "Capability maturity plan", "Scale-readiness framework", "Expansion operating design"],
    cadence: "Longer-horizon partnership focused on strengthening systems over time.",
    why: "It helps growth continue without weakening the model underneath it."
  }
];

export const industries = [
  {
    id: "d2c",
    name: "D2C & Commerce",
    summary: "Focus on proposition clarity, channel coordination, growth systems, and operating readiness.",
    problems: ["Acquisition and retention efforts are fragmented", "Commercial growth is outpacing internal discipline", "Offer and operating structure are not fully aligned"]
  },
  {
    id: "consumer",
    name: "Consumer Brands",
    summary: "Apply the model to connect brand direction, commercial planning, and execution consistency.",
    problems: ["Growth depends too heavily on campaigns", "Brand and demand are not working from one operating logic", "Expansion priorities are not clearly sequenced"]
  },
  {
    id: "saas",
    name: "SaaS",
    summary: "Align product, commercial systems, and operating design for more repeatable growth.",
    problems: ["Product and growth teams are not fully aligned", "Prioritization is unclear under rising complexity", "The business is scaling without enough operating maturity"]
  },
  {
    id: "fintech",
    name: "Fintech",
    summary: "Support commercialization clarity, governance discipline, and expansion structure in regulated growth environments.",
    problems: ["Complexity is growing faster than operating systems", "Execution requires stronger coordination and control", "Go-to-market ambition needs clearer infrastructure"]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    summary: "Strengthen service design, operating coordination, and market activation where complexity is high.",
    problems: ["Growth opportunities are constrained by process friction", "Service, operations, and commercial teams are not fully synchronized", "Execution consistency is limiting scale"]
  },
  {
    id: "mobility",
    name: "Mobility",
    summary: "Use Zerologic's model to support rollout structure, operational consistency, and cross-market execution.",
    problems: ["Geographic expansion creates coordination strain", "Service delivery and growth teams move at different speeds", "Execution control weakens as scale increases"]
  },
  {
    id: "creator",
    name: "Creator Economy",
    summary: "Turn traction into a stronger monetization and operating model before complexity becomes drag.",
    problems: ["Monetization is growing without scalable infrastructure", "Founder dependency remains too high", "Revenue opportunities are not organized by operating logic"]
  },
  {
    id: "media",
    name: "Media",
    summary: "Connect audience strategy, commercial structure, and execution discipline into a more coherent model.",
    problems: ["Content, audience, and monetization are disconnected", "Growth efforts feel active but not cumulative", "Operational decisions are not consistently tied to performance"]
  },
  {
    id: "ai",
    name: "AI & Intelligent Systems",
    summary: "Bridge technical capability with commercialization structure, market clarity, and scalable execution design.",
    problems: ["Technical strength is ahead of market structure", "Go-to-market motion lacks operating clarity", "The business is building fast without enough translation discipline"]
  },
  {
    id: "hospitality",
    name: "Hospitality / Travel",
    summary: "Strengthen demand generation, service consistency, and operating coordination in experience-led businesses.",
    problems: ["Execution is fragmented across customer touchpoints", "Commercial and service systems are not fully aligned", "Growth introduces strain into consistency and quality"]
  }
];