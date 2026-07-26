import {
  ScenarioStep,
  ProblemCard,
  SolutionPillar,
  PilotPhaseData,
  BudgetItemData,
  ImpactMetricData,
  SourceCitation
} from '../types';

export const SCENARIO_STEPS: ScenarioStep[] = [
  {
    id: 1,
    title: "1. The Campus Commute",
    subtitle: "Riding from Campus Recreation Center (CRC)",
    location: "Ferst Drive & CRC Approach",
    iconName: "Bike",
    description: "A Georgia Tech student unlocks a shared rental scooter at the CRC to head across campus toward Tech Green for class.",
    consequences: [
      {
        target: "Rider Experience",
        impact: "Fast, efficient transit across designated campus cycle tracks.",
        badgeText: "Active Ride"
      }
    ]
  },
  {
    id: 2,
    title: "2. The Dismount Zone Boundary",
    subtitle: "Reaching Tech Green's Perimeter",
    location: "Tech Green West Approach",
    iconName: "Clock",
    description: "Dismount signs appear as the rider approaches Tech Green. However, the rental app meter continues ticking on a per-minute basis.",
    consequences: [
      {
        target: "Financial Dilemma",
        impact: "The rider must either keep paying while walking the scooter, or end the rental immediately.",
        badgeText: "Meter Ticking"
      }
    ]
  },
  {
    id: 3,
    title: "3. The Infrastructure Gap",
    subtitle: "Stopping without a Parking Destination",
    location: "Walkway Entrance & Ramps",
    iconName: "AlertTriangle",
    description: "With no designated corrals or clear parking guidance nearby, the rider ends the trip at the entrance where other devices have already accumulated.",
    consequences: [
      {
        target: "Infrastructure Failure",
        impact: "Riders respond rationally to a system that tells them where to stop riding, but not where to park.",
        badgeText: "Rational Decision under Pressure"
      }
    ]
  },
  {
    id: 4,
    title: "4. The Cascading Consequences",
    subtitle: "Impact on the Tech Green Community",
    location: "Tech Green Ramps & Racks",
    iconName: "ShieldAlert",
    description: "Unstructured parking creates chain-reaction bottlenecks for pedestrians, wheelchair users, and personal bike owners.",
    consequences: [
      {
        target: "Pedestrians",
        impact: "A student walking to class must step off the pavement into the grass to bypass clutter.",
        badgeText: "Pedestrian Detour"
      },
      {
        target: "Students with Disabilities",
        impact: "A wheelchair user encounters a partially obstructed curb cut and access ramp.",
        badgeText: "ADA Accessibility Barrier"
      },
      {
        target: "Personal Bike Owners",
        impact: "A student owning a personal bike finds standard racks occupied by rental devices.",
        badgeText: "Overcrowded Racks"
      }
    ]
  }
];

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    id: "meter-pressure",
    title: "Per-Minute Rental Pricing Pressure",
    icon: "Coins",
    summary: "Riders face active per-minute charges while searching for nonexistent parking.",
    detail: "Because rental pricing accrues by the minute, riders are financially incentivized to end their trip as soon as they reach the dismount boundary rather than walking long distances to search for acceptable parking.",
    stat: "$/Min",
    statLabel: "Financial Incentive to End Trips Quickly"
  },
  {
    id: "missing-corrals",
    title: "Missing End-of-Trip Facilities",
    icon: "MapPinOff",
    summary: "Campus cycle tracks end abruptly without designated scooter parking corrals.",
    detail: "Georgia Tech invested in cycle tracks and dismount enforcement zones, but did not construct dedicated parking corrals at major approach points to absorb ending trips.",
    stat: "0",
    statLabel: "Designated Corrals at Tech Green West Approaches"
  },
  {
    id: "ada-access",
    title: "Accessibility Pathway Bottlenecks",
    icon: "Accessibility",
    summary: "Accumulated devices encroach on ADA ramps, curb cuts, and walkway widths.",
    detail: "Devices left near building entrances and handrails frequently narrow path clearances below the required 4-foot ADA standard, creating severe barriers for students with mobility needs.",
    stat: "< 4 ft",
    statLabel: "Pathway Clearance in Problem Areas"
  }
];

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    id: "corrals",
    number: "01",
    title: "Designated Parking Corrals",
    subtitle: "Two to Three High-Capacity Corrals Near Tech Green Approaches",
    description: "Positioned where rides naturally end, using low-cost durable pavement striping, wheel stops, and high-visibility signs.",
    bullets: [
      "Targeted at the 2–3 busiest dismount approaches",
      "Primarily designed for shared rental scooters and e-bikes",
      "Frees up standard bike racks for personal bike and scooter owners",
      "Keeps ADA ramps and primary footpaths 100% clear"
    ],
    statusBadge: "Pilot Phase 2 Core Feature"
  },
  {
    id: "wayfinding",
    number: "02",
    title: "Pre-Boundary Wayfinding & Markings",
    subtitle: "Guiding Riders Before They Reach the Dismount Zone",
    description: "Signs and pavement decals placed 50 feet prior to the dismount line show riders where to park and highlight perimeter routes around Tech Green.",
    bullets: [
      "Clear distance indicators to nearest corral",
      "High-visibility pavement decals for down-looking riders",
      "Perimeter-route guidance around Tech Green walking zones",
      "Positive framing: Tells riders what TO DO, not just what is forbidden"
    ],
    statusBadge: "Pilot Phase 2 Core Feature"
  },
  {
    id: "operator",
    number: "03",
    title: "Shared-Mobility Operator Coordination",
    subtitle: "In-App Guidance & Future Geofencing",
    description: "Working with shared-mobility providers (such as Lime) for future in-app parking zone displays, end-of-trip verification photos, and refined geofencing.",
    bullets: [
      "Coordinate approved parking corral coordinates with providers",
      "Explore potential in-app parking incentives or discounts",
      "Evaluate geofenced trip completion boundaries"
    ],
    statusBadge: "Proposed Future Phase",
    isProposedOnly: true
  }
];

export const PILOT_PHASES: PilotPhaseData[] = [
  {
    phase: 1,
    weeks: "Weeks 1 – 3",
    title: "Phase 1: Baseline Audit & Site Selection",
    subtitle: "Data Collection & Location Finalization",
    tasks: [
      "Audit all 5 Tech Green entrance approaches during peak hours",
      "Count improperly parked devices and photograph recurring bottlenecks",
      "Finalize 2–3 optimal corral footprints based on trip heatmaps",
      "Begin administrative and mobility operator outreach"
    ],
    highlight: "Establishing empirical baseline data before physical changes."
  },
  {
    phase: 2,
    weeks: "Weeks 4 – 6",
    title: "Phase 2: Corral & Signage Installation",
    subtitle: "Physical Deployment & Initial Rollout",
    tasks: [
      "Install durable pavement striping, wheel stops, and visual signs",
      "Apply high-visibility pavement wayfinding decals 50ft before dismount boundary",
      "Deploy campus informational signage detailing corral usage",
      "Begin post-installation device counts and monitor initial adoption"
    ],
    highlight: "Low-impact, low-cost physical installation within $5k budget."
  },
  {
    phase: 3,
    weeks: "Weeks 7 – 12",
    title: "Phase 3: Operations & Evaluation",
    subtitle: "Accessibility Audits & Performance Reporting",
    tasks: [
      "Conduct bi-weekly accessibility and ramp clear-width measurements",
      "Track corral utilization rates versus improper walkway parking",
      "Collect anonymous GT student and community feedback",
      "Publish final pilot report with recommendations for permanent campus adoption"
    ],
    highlight: "Rigorous 6-week evaluation phase to measure impact."
  }
];

export const BUDGET_ITEMS: BudgetItemData[] = [
  {
    id: "corrals",
    category: "Parking Corrals Materials",
    amount: 2100,
    description: "Wheel stops, heavy-duty outdoor pavement striping paint, surface primers, and physical corral boundary markers for 2-3 locations.",
    percentage: 42
  },
  {
    id: "signage",
    category: "Wayfinding Signage & Decals",
    amount: 1300,
    description: "Pre-dismount aluminum directional signs, post mounts, and durable slip-resistant pavement decals for perimeter guidance.",
    percentage: 26
  },
  {
    id: "geofencing",
    category: "Operator Coordination & Data",
    amount: 500,
    description: "Technical mapping tools and GIS coordination for sharing corral geofence coordinates with rental operators.",
    percentage: 10
  },
  {
    id: "labor",
    category: "Installation Materials & Labor",
    amount: 400,
    description: "Mounting hardware, stencil kits, safety equipment, and ground surface prep labor.",
    percentage: 8
  },
  {
    id: "contingency",
    category: "Contingency Fund",
    amount: 700,
    description: "Buffer for replacement signage, weather touch-ups, or unexpected installation site adjustments.",
    percentage: 14
  }
];

export const TARGET_OUTCOMES: ImpactMetricData[] = [
  {
    id: "reduction",
    value: "≥ 50%",
    label: "Reduction in Improper Parking",
    subtitle: "At Treated Approaches",
    description: "Targeting at least a 50% decrease in devices parked directly blocking walkways or railings near treated Tech Green entrances."
  },
  {
    id: "clearance",
    value: "4 Feet",
    label: "Unobstructed Pathway Width",
    subtitle: "100% ADA Accessibility Compliance",
    description: "Maintaining a minimum 4-foot clear passage on audited ramps, curb cuts, and primary pedestrian paths at all times."
  },
  {
    id: "rack-capacity",
    value: "100%",
    label: "Personal Rack Capacity Returned",
    subtitle: "Dedicated Bike & Scooter Space",
    description: "Redirecting rental devices into corrals to restore standard bike rack availability for personal bike and scooter owners."
  },
  {
    id: "route-awareness",
    value: "Clear",
    label: "Perimeter Route Guidance",
    subtitle: "Positive Wayfinding",
    description: "Shifting campus communication from purely restrictive signs to clear, actionable guidance on where to ride and park."
  }
];

export const SOURCE_CITATIONS: SourceCitation[] = [
  {
    id: "src-1",
    authorOrOrg: "Georgia Tech Student Proposal",
    title: "Where the Ride Ends: An End-of-Trip Parking and Wayfinding Pilot for the Tech Green Dismount Zone",
    context: "Primary proposal document introducing the 1-semester pilot, budget breakdown, and 3-phase methodology.",
    type: "proposal_spec"
  },
  {
    id: "src-2",
    authorOrOrg: "Georgia Tech Infrastructure Data",
    title: "Tech Green Dismount Zone & Campus Cycle Track Network Specifications",
    context: "Background information regarding GT's investment in cycle routes, perimeter dismount zones, and campus pedestrian flow.",
    type: "gt_fact"
  },
  {
    id: "src-3",
    authorOrOrg: "Micromobility Planning Research",
    title: "Evaluating End-of-Trip Parking Solutions & Geofencing for Campus Shared Micromobility Systems",
    context: "Industry studies demonstrating that designated parking corrals and pre-dismount signage significantly reduce walkway clutter.",
    type: "external_research"
  }
];
