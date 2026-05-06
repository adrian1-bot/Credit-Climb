const SCORE_TRACK = [
  { label: "Below 580", description: "Denied often, high fees, risky offers." },
  { label: "580 - 669", description: "Basic approvals, but borrowing stays expensive." },
  { label: "670 - 739", description: "Decent options, normal rates, common milestones." },
  { label: "740 - 799", description: "Strong options, lower rates, easier recovery." },
  { label: "800+", description: "Premium approvals, best prices, bonus protection." },
];

const PLAYER_COLORS = ["#d7644a", "#1f6ba5", "#5f8f3d", "#b94d65"];
const AI_NAMES = ["Ava", "Marcus", "Nia", "Leo", "Sage", "Jordan", "Mila", "Theo"];

const BACKGROUNDS = [
  {
    id: "family-support",
    name: "Strong Family Support",
    description: "Extra savings and a softer landing while you learn the ropes.",
    cash: 1350,
    emergencyFund: 260,
    creditScore: 650,
    loanBalance: 0,
    cardBalance: 80,
    knowledge: 0,
    shields: 0,
    wellbeing: 70,
  },
  {
    id: "no-safety-net",
    name: "No Financial Safety Net",
    description: "Less room for mistakes, but more urgency to build smart habits.",
    cash: 860,
    emergencyFund: 0,
    creditScore: 590,
    loanBalance: 120,
    cardBalance: 170,
    knowledge: 1,
    shields: 1,
    wellbeing: 45,
  },
  {
    id: "scholarship",
    name: "Scholarship Student",
    description: "Lower debt pressure with strong upside if you stay disciplined.",
    cash: 1020,
    emergencyFund: 120,
    creditScore: 630,
    loanBalance: 90,
    cardBalance: 120,
    knowledge: 1,
    shields: 0,
    wellbeing: 55,
  },
  {
    id: "medical-burden",
    name: "Medical Expense Burden",
    description: "A rough first chapter with more debt and more risk.",
    cash: 920,
    emergencyFund: 40,
    creditScore: 575,
    loanBalance: 430,
    cardBalance: 180,
    knowledge: 0,
    shields: 1,
    wellbeing: 40,
  },
  {
    id: "mentor-network",
    name: "Community Mentor Network",
    description: "Guidance helps you avoid traps and recover quickly.",
    cash: 980,
    emergencyFund: 180,
    creditScore: 640,
    loanBalance: 110,
    cardBalance: 80,
    knowledge: 2,
    shields: 0,
    wellbeing: 65,
  },
];

const CREDIT_HISTORY_SEEDS = {
  "family-support": {
    creditLimit: 340,
    missedPaymentCount: 3,
    lateCardMarks: 1,
    lateLoanMarks: 0,
    housingDefaultMarks: 0,
    transportDefaultMarks: 0,
    badLoanMarks: 0,
    unresolvedBillingMarks: 1,
    cleanTurnStreak: 1,
  },
  "no-safety-net": {
    creditLimit: 300,
    missedPaymentCount: 3,
    lateCardMarks: 1,
    lateLoanMarks: 1,
    housingDefaultMarks: 0,
    transportDefaultMarks: 0,
    badLoanMarks: 0,
    unresolvedBillingMarks: 1,
    cleanTurnStreak: 0,
  },
  scholarship: {
    creditLimit: 320,
    missedPaymentCount: 3,
    lateCardMarks: 1,
    lateLoanMarks: 0,
    housingDefaultMarks: 0,
    transportDefaultMarks: 0,
    badLoanMarks: 0,
    unresolvedBillingMarks: 1,
    cleanTurnStreak: 0,
  },
  "medical-burden": {
    creditLimit: 280,
    missedPaymentCount: 3,
    lateCardMarks: 1,
    lateLoanMarks: 1,
    housingDefaultMarks: 0,
    transportDefaultMarks: 1,
    badLoanMarks: 0,
    unresolvedBillingMarks: 1,
    cleanTurnStreak: 0,
  },
  "mentor-network": {
    creditLimit: 330,
    missedPaymentCount: 3,
    lateCardMarks: 1,
    lateLoanMarks: 1,
    housingDefaultMarks: 0,
    transportDefaultMarks: 0,
    badLoanMarks: 0,
    unresolvedBillingMarks: 1,
    cleanTurnStreak: 1,
  },
};

const CAREERS = [
  { id: "apprentice", name: "Apprenticeship", income: 1160, description: "Steady pay, strong growth." },
  { id: "retail-lead", name: "Retail Team Lead", income: 1240, description: "Solid pay with room to save." },
  { id: "health-trainee", name: "Healthcare Trainee", income: 1210, description: "Reliable income and stability." },
  { id: "it-support", name: "IT Support", income: 1320, description: "Strong paycheck and future upside." },
  { id: "freelance-creative", name: "Freelance Creative", income: 1080, description: "Flexible, but income swings." },
  { id: "warehouse-supervisor", name: "Warehouse Supervisor", income: 1280, description: "Dependable money, heavier workload." },
];

const BOARD_SPACES = [
  { id: "fresh-start", name: "Fresh Start", kind: "start", badge: "Start", blurb: "Collect a yearly bump when you pass." },
  { id: "money-mission", name: "Money Mission", kind: "mission", badge: "Mission", blurb: "Draw a mini-goal for a reward." },
  { id: "credit-choices", name: "Credit Choices", kind: "credit", badge: "Credit", blurb: "Shape how you manage utilization and payments." },
  { id: "life-happens-1", name: "Life Happens", kind: "life", badge: "Event", blurb: "Everyday choices can help or hurt." },
  { id: "approval-avenue", name: "Approval Avenue", kind: "opportunity", badge: "Unlock", blurb: "Higher scores open better doors." },
  { id: "savings-sprint", name: "Savings Sprint", kind: "savings", badge: "Save", blurb: "Bank cash or reduce debt." },
  { id: "home-base", name: "Home Base", kind: "housing", badge: "Housing", blurb: "Work toward stable housing." },
  { id: "credit-bureau", name: "Credit Bureau", kind: "knowledge", badge: "Learn", blurb: "Gain protection and smart habits." },
  { id: "shopping-spree", name: "Shopping Spree", kind: "lifestyle", badge: "Spend", blurb: "Temptation is always nearby." },
  { id: "wheel-deal", name: "Wheel Deal", kind: "transport", badge: "Mobility", blurb: "Choose your ride wisely." },
  { id: "rainy-day", name: "Rainy Day", kind: "crisis", badge: "Crisis", blurb: "An emergency tests your plan." },
  { id: "next-level", name: "Next Level", kind: "opportunity", badge: "Unlock", blurb: "See what your score can reach." },
  { id: "tax-refund", name: "Tax Refund", kind: "refund", badge: "Bonus", blurb: "A little breathing room." },
  { id: "milestone-move", name: "Milestone Move", kind: "mission", badge: "Mission", blurb: "Advance your long game." },
  { id: "utilization-check", name: "Utilization Check", kind: "credit", badge: "Credit", blurb: "Pay down balances or tighten habits." },
  { id: "life-happens-2", name: "Life Twist", kind: "life", badge: "Event", blurb: "Unexpected situations keep coming." },
  { id: "loan-shop", name: "Loan Shop", kind: "loan", badge: "Borrow", blurb: "Compare good and bad borrowing." },
  { id: "emergency-fund", name: "Safety Net", kind: "savings", badge: "Save", blurb: "Protect future-you before trouble hits." },
  { id: "neighborhood-upgrade", name: "Upgrade Home", kind: "housing", badge: "Housing", blurb: "Upgrade or stabilize where you live." },
  { id: "money-class", name: "Money Class", kind: "knowledge", badge: "Learn", blurb: "Turn knowledge into leverage." },
  { id: "future-bet", name: "Future Bet", kind: "growth", badge: "Growth", blurb: "Start investing or launch a side hustle." },
  { id: "hard-luck", name: "Hard Luck", kind: "setback", badge: "Setback", blurb: "No choices here. A random setback leaves lasting damage on your credit profile." },
  { id: "second-chance", name: "Second Chance", kind: "repair", badge: "Repair", blurb: "Patch damage and rebuild momentum." },
  { id: "freedom-check", name: "Freedom Check", kind: "freedom", badge: "Goal", blurb: "See how close you are to winning." },
];

const BOARD_COORDINATES = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [2, 7],
  [3, 7],
  [4, 7],
  [5, 7],
  [6, 7],
  [7, 7],
  [7, 6],
  [7, 5],
  [7, 4],
  [7, 3],
  [7, 2],
  [7, 1],
  [6, 1],
  [5, 1],
  [4, 1],
  [3, 1],
  [2, 1],
];

const SPACE_ACCENTS = {
  start: "#d7a73d",
  mission: "#5f8f3d",
  credit: "#1f6ba5",
  life: "#d7644a",
  opportunity: "#2d7d7d",
  savings: "#7c9a42",
  housing: "#b94d65",
  knowledge: "#7ec7de",
  lifestyle: "#ef9b4f",
  transport: "#34706f",
  crisis: "#c85a40",
  setback: "#9f4133",
  refund: "#d7a73d",
  loan: "#8f5e3b",
  growth: "#5d7db5",
  repair: "#6f5ba8",
  freedom: "#23374f",
};

const DECISION_ART_LIBRARY = {
  generic: {
    label: "Table Moment",
    start: "#37526d",
    end: "#1f3448",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="28" y="32" width="184" height="104" rx="22" fill="rgba(255,249,236,0.16)" stroke="rgba(255,249,236,0.45)" stroke-width="4" />
        <circle cx="76" cy="80" r="24" fill="#7ec7de" opacity="0.9" />
        <circle cx="164" cy="70" r="18" fill="#d7a73d" opacity="0.95" />
        <path d="M58 116 C88 84 132 84 182 48" fill="none" stroke="#fff9ec" stroke-width="8" stroke-linecap="round" />
      </svg>
    `,
  },
  credit: {
    label: "Credit Move",
    start: "#315d85",
    end: "#21415d",
    panel: "rgba(255, 255, 255, 0.14)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="28" y="48" width="126" height="76" rx="16" fill="#1f2b3a" />
        <rect x="28" y="68" width="126" height="16" fill="#7ec7de" opacity="0.75" />
        <circle cx="185" cy="55" r="23" fill="#d7a73d" />
        <path d="M174 55 l9 9 18 -22" fill="none" stroke="#1f2b3a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M52 122 C92 104 126 112 186 78" fill="none" stroke="#fff9ec" stroke-width="8" stroke-linecap="round" />
      </svg>
    `,
  },
  shopping: {
    label: "Shopping Trip",
    start: "#d98948",
    end: "#bb6245",
    panel: "rgba(255, 249, 236, 0.18)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M66 50 h42 l-6 74 h-30 z" fill="#fff9ec" />
        <path d="M134 44 h40 l8 80 h-52 z" fill="#f7d57f" />
        <path d="M78 50 C78 34 96 30 104 42" fill="none" stroke="#315d85" stroke-width="6" stroke-linecap="round" />
        <path d="M144 44 C144 26 170 24 174 42" fill="none" stroke="#315d85" stroke-width="6" stroke-linecap="round" />
        <path d="M52 122 C82 118 106 112 132 122 C156 132 172 132 192 122" fill="#315d85" />
        <path d="M48 120 C76 108 110 104 134 114 C154 122 171 122 198 112" fill="none" stroke="#fff9ec" stroke-width="6" stroke-linecap="round" />
      </svg>
    `,
  },
  phone: {
    label: "Phone Upgrade",
    start: "#5684b0",
    end: "#34536e",
    panel: "rgba(255, 255, 255, 0.12)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="84" y="16" width="72" height="128" rx="16" fill="#1f2b3a" />
        <rect x="92" y="28" width="56" height="96" rx="10" fill="#7ec7de" />
        <circle cx="120" cy="134" r="6" fill="#fff9ec" />
        <circle cx="174" cy="58" r="22" fill="#d7a73d" opacity="0.95" />
        <path d="M165 58 h18" stroke="#1f2b3a" stroke-width="6" stroke-linecap="round" />
        <path d="M174 49 v18" stroke="#1f2b3a" stroke-width="6" stroke-linecap="round" />
        <path d="M105 56 h30" stroke="#fff9ec" stroke-width="6" stroke-linecap="round" />
        <path d="M105 74 h22" stroke="#fff9ec" stroke-width="6" stroke-linecap="round" />
      </svg>
    `,
  },
  savings: {
    label: "Savings Move",
    start: "#698947",
    end: "#496130",
    panel: "rgba(255, 249, 236, 0.18)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M70 48 h100 a16 16 0 0 1 16 16 v42 a26 26 0 0 1 -26 26 h-80 a26 26 0 0 1 -26 -26 v-42 a16 16 0 0 1 16 -16 z" fill="#fff9ec" />
        <path d="M92 48 c4 -18 20 -28 42 -28 c20 0 34 8 42 22" fill="none" stroke="#d7a73d" stroke-width="8" stroke-linecap="round" />
        <circle cx="120" cy="92" r="20" fill="#d7a73d" />
        <path d="M120 78 v28" stroke="#496130" stroke-width="6" stroke-linecap="round" />
        <path d="M109 86 c4 -4 18 -4 22 0 c4 4 0 10 -11 12 c-11 2 -15 8 -10 13 c5 5 18 5 24 0" fill="none" stroke="#496130" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
  },
  housing: {
    label: "Housing Move",
    start: "#bd6374",
    end: "#8e4259",
    panel: "rgba(255, 249, 236, 0.18)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M42 78 l78 -48 l78 48" fill="none" stroke="#fff9ec" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="60" y="74" width="120" height="64" rx="10" fill="#fff9ec" />
        <rect x="109" y="94" width="22" height="44" rx="6" fill="#8e4259" />
        <rect x="78" y="90" width="18" height="18" rx="4" fill="#d7a73d" />
        <rect x="144" y="90" width="18" height="18" rx="4" fill="#d7a73d" />
      </svg>
    `,
  },
  transport: {
    label: "Mobility Move",
    start: "#377770",
    end: "#214f57",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M44 112 h150 c8 0 14 -6 14 -14 v-14 c0 -8 -6 -14 -14 -14 h-12 l-16 -24 h-52 l-26 24 h-44 z" fill="#fff9ec" />
        <circle cx="94" cy="114" r="18" fill="#1f2b3a" />
        <circle cx="176" cy="114" r="18" fill="#1f2b3a" />
        <circle cx="94" cy="114" r="8" fill="#d7a73d" />
        <circle cx="176" cy="114" r="8" fill="#d7a73d" />
        <rect x="110" y="54" width="42" height="16" rx="6" fill="#7ec7de" />
      </svg>
    `,
  },
  growth: {
    label: "Growth Move",
    start: "#5a79b0",
    end: "#32496f",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="54" y="86" width="24" height="42" rx="6" fill="#fff9ec" />
        <rect x="92" y="68" width="24" height="60" rx="6" fill="#d7a73d" />
        <rect x="130" y="50" width="24" height="78" rx="6" fill="#7ec7de" />
        <path d="M52 118 C88 92 116 88 184 42" fill="none" stroke="#fff9ec" stroke-width="8" stroke-linecap="round" />
        <path d="M170 40 h18 v18" fill="none" stroke="#fff9ec" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
  },
  loan: {
    label: "Loan Choice",
    start: "#98653d",
    end: "#6b4527",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="54" y="28" width="90" height="104" rx="14" fill="#fff9ec" />
        <path d="M118 28 h26 v26" fill="#f4d8a1" />
        <path d="M76 62 h48" stroke="#6b4527" stroke-width="8" stroke-linecap="round" />
        <path d="M76 84 h34" stroke="#6b4527" stroke-width="8" stroke-linecap="round" />
        <path d="M162 100 l20 -38 l20 38 z" fill="#d7644a" />
        <path d="M182 80 v14" stroke="#fff9ec" stroke-width="6" stroke-linecap="round" />
        <circle cx="182" cy="100" r="3.5" fill="#fff9ec" />
      </svg>
    `,
  },
  repair: {
    label: "Repair Move",
    start: "#7561ab",
    end: "#50417a",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M120 30 l52 18 v34 c0 28 -18 46 -52 58 c-34 -12 -52 -30 -52 -58 v-34 z" fill="#fff9ec" />
        <path d="M96 88 l16 16 l34 -38" fill="none" stroke="#7561ab" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="176" cy="50" r="18" fill="#d7a73d" />
        <path d="M168 50 h16" stroke="#50417a" stroke-width="6" stroke-linecap="round" />
      </svg>
    `,
  },
  unlock: {
    label: "Strong Credit",
    start: "#2c7d7d",
    end: "#21555a",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M66 128 v-86 h48 v86 z" fill="#fff9ec" />
        <path d="M114 42 l46 24 v62 l-46 -24 z" fill="#d7a73d" />
        <circle cx="100" cy="84" r="5" fill="#2c7d7d" />
        <path d="M168 42 l18 18 l-18 18" fill="none" stroke="#fff9ec" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
  },
  billing: {
    label: "Statement Alert",
    start: "#b56253",
    end: "#80453c",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="66" y="22" width="90" height="114" rx="14" fill="#fff9ec" />
        <path d="M86 56 h50" stroke="#80453c" stroke-width="8" stroke-linecap="round" />
        <path d="M86 80 h36" stroke="#80453c" stroke-width="8" stroke-linecap="round" />
        <circle cx="178" cy="96" r="24" fill="#d7a73d" />
        <path d="M178 84 v18" stroke="#80453c" stroke-width="7" stroke-linecap="round" />
        <circle cx="178" cy="108" r="4" fill="#80453c" />
      </svg>
    `,
  },
  support: {
    label: "Support Arrives",
    start: "#4f8666",
    end: "#365b46",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <path d="M44 104 c18 -12 38 -10 52 8 h32 c10 0 18 8 18 18 h-70 c-12 0 -24 -4 -32 -12 z" fill="#fff9ec" />
        <path d="M196 104 c-18 -12 -38 -10 -52 8 h-32 c-10 0 -18 8 -18 18 h70 c12 0 24 -4 32 -12 z" fill="#fff9ec" />
        <circle cx="120" cy="74" r="24" fill="#d7a73d" />
        <path d="M120 60 v28" stroke="#365b46" stroke-width="7" stroke-linecap="round" />
        <path d="M108 68 c4 -4 18 -4 22 0 c4 4 0 10 -11 12 c-11 2 -15 8 -10 13 c5 5 18 5 24 0" fill="none" stroke="#365b46" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
  },
  training: {
    label: "Skill Upgrade",
    start: "#5e8aac",
    end: "#3d5d7b",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="48" y="38" width="110" height="74" rx="12" fill="#fff9ec" />
        <rect x="88" y="112" width="34" height="10" rx="5" fill="#fff9ec" />
        <rect x="80" y="122" width="50" height="8" rx="4" fill="#d7a73d" />
        <path d="M176 48 l18 10 v20 l-18 10 l-18 -10 v-20 z" fill="#d7a73d" />
        <path d="M176 88 v18" stroke="#fff9ec" stroke-width="6" stroke-linecap="round" />
      </svg>
    `,
  },
  medical: {
    label: "Emergency Bill",
    start: "#bc6050",
    end: "#863f35",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="58" y="34" width="56" height="92" rx="18" fill="#fff9ec" />
        <path d="M86 52 v56" stroke="#d7644a" stroke-width="14" stroke-linecap="round" />
        <path d="M58 80 h56" stroke="#d7644a" stroke-width="14" stroke-linecap="round" />
        <rect x="136" y="42" width="46" height="74" rx="12" fill="#f4d8a1" />
        <path d="M148 62 h22" stroke="#863f35" stroke-width="8" stroke-linecap="round" />
        <path d="M148 82 h16" stroke="#863f35" stroke-width="8" stroke-linecap="round" />
      </svg>
    `,
  },
  paycheck: {
    label: "Income Shock",
    start: "#916447",
    end: "#63432e",
    panel: "rgba(255, 249, 236, 0.16)",
    svg: `
      <svg viewBox="0 0 240 160" aria-hidden="true">
        <rect x="42" y="42" width="122" height="72" rx="14" fill="#fff9ec" />
        <path d="M64 64 h48" stroke="#63432e" stroke-width="8" stroke-linecap="round" />
        <path d="M64 88 h34" stroke="#63432e" stroke-width="8" stroke-linecap="round" />
        <path d="M182 46 v48" stroke="#d7644a" stroke-width="10" stroke-linecap="round" />
        <path d="M166 78 l16 18 l16 -18" fill="none" stroke="#d7644a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
  },
};

const MISSION_LIBRARY = [
  {
    id: "on-time",
    title: "Pay on Time",
    description: "Make every payment on time for 3 turns.",
    isComplete: (player) => player.onTimeStreak >= 3,
    rewardText: "$220 cash, 1 shield, and one cleared late-payment mark",
    applyReward: (player) => {
      player.cash += 220;
      player.shields += 1;
      clearDerogatoryMark(player, ["lateCardMarks", "lateLoanMarks", "transportDefaultMarks", "housingDefaultMarks"]);
    },
  },
  {
    id: "utilization",
    title: "Keep Utilization Low",
    description: "Stay under 30% utilization for 2 turns.",
    isComplete: (player) => player.lowUtilizationStreak >= 2,
    rewardText: "$80 cash, 1 knowledge, and $120 of debt relief",
    applyReward: (player) => {
      player.cash += 80;
      player.knowledge += 1;
      payHighestInterestDebt(player, 120);
    },
  },
  {
    id: "emergency-buffer",
    title: "Build a Buffer",
    description: "Reach a $500 emergency fund.",
    isComplete: (player) => player.emergencyFund >= 500,
    rewardText: "$120 cash and 1 shield",
    applyReward: (player) => {
      player.cash += 120;
      player.shields += 1;
    },
  },
  {
    id: "loan-cleanup",
    title: "Crush a Small Loan",
    description: "Bring installment debt down to zero.",
    isComplete: (player) => player.loanBalance <= 0,
    rewardText: "$200 cash and one cleared loan-related mark",
    applyReward: (player) => {
      player.cash += 200;
      clearBadLoanStatus(player);
      clearDerogatoryMark(player, ["lateLoanMarks", "badLoanMarks"]);
    },
  },
  {
    id: "crisis-proof",
    title: "Crisis Proof",
    description: "Survive 1 crisis without missing a payment.",
    isComplete: (player) => player.crisesSurvived >= 1,
    rewardText: "$180 cash, 1 shield, and one cleared default mark",
    applyReward: (player) => {
      player.cash += 180;
      player.shields += 1;
      clearDerogatoryMark(player, ["housingDefaultMarks", "transportDefaultMarks", "lateLoanMarks", "lateCardMarks"]);
    },
  },
  {
    id: "steady-spending",
    title: "Steady Spending",
    description: "Avoid splurges for 2 turns.",
    isComplete: (player) => player.stableSpendingStreak >= 2,
    rewardText: "$240 cash and one cleared card mark",
    applyReward: (player) => {
      player.cash += 240;
      clearDerogatoryMark(player, ["lateCardMarks", "unresolvedBillingMarks"]);
    },
  },
  {
    id: "billing-error",
    title: "Dispute the Error",
    description: "Resolve a billing error instead of eating the charge.",
    isComplete: (player) => player.billingErrorsResolved >= 1,
    rewardText: "$100 cash, 1 knowledge, and another cleared billing mark",
    applyReward: (player) => {
      player.cash += 100;
      player.knowledge += 1;
      resolveBillingIssue(player, 40);
    },
  },
  {
    id: "refinance",
    title: "Refinance Rescue",
    description: "Refinance a bad loan once you qualify.",
    isComplete: (player) => player.refinanced,
    rewardText: "$180 cash, 1 shield, and one cleared bad-loan mark",
    applyReward: (player) => {
      player.cash += 180;
      player.shields += 1;
      clearBadLoanStatus(player, 1);
    },
  },
];

const REFLECTION_SCORE = 550;
const DOUBLE_ROLL_UNLOCK_SCORE = 775;
const BACKGROUND_MUSIC_PATH = "./background-music.mp3";
const MAX_CREDIT_GAIN_PER_TURN = 5;
const MAX_CREDIT_DROP_PER_TURN = 60;

const state = {
  players: [],
  currentPlayerIndex: 0,
  round: 1,
  lastDie: null,
  lastRollNote: null,
  phase: "setup",
  log: [],
  modal: null,
  pendingNotices: [],
  busy: false,
  winnerId: null,
  endingType: null,
  creditFlash: null,
  recoveringError: false,
};

let uiAudioContext = null;

const musicState = {
  audio: null,
  enabled: true,
  available: null,
  started: false,
  starting: false,
};

const liveSession = {
  socket: null,
  roomCode: "",
  memberId: null,
  isHost: false,
  hostMemberId: null,
  members: [],
  gameStarted: false,
  localPlayerId: null,
  statusText: "",
  lastSnapshotKey: "",
  pendingRemoteAction: false,
  intentionalDisconnect: false,
  suspendBroadcast: false,
  connectPromise: null,
};

const elements = {
  board: document.getElementById("board"),
  eventSpotlight: document.getElementById("event-spotlight"),
  eventFeed: document.getElementById("event-feed"),
  heroStats: document.getElementById("hero-stats"),
  setupForm: document.getElementById("setup-form"),
  playerName: document.getElementById("player-name"),
  humanCount: document.getElementById("human-count"),
  extraHumanFields: document.getElementById("extra-human-fields"),
  aiCount: document.getElementById("ai-count"),
  roomCode: document.getElementById("room-code"),
  createRoomButton: document.getElementById("create-room-button"),
  joinRoomButton: document.getElementById("join-room-button"),
  leaveRoomButton: document.getElementById("leave-room-button"),
  liveConnectionPill: document.getElementById("live-connection-pill"),
  liveStatus: document.getElementById("live-status"),
  liveRoomMeta: document.getElementById("live-room-meta"),
  liveRoomMembers: document.getElementById("live-room-members"),
  musicButton: document.getElementById("music-button"),
  musicNote: document.getElementById("music-note"),
  newGameButton: document.getElementById("new-game-button"),
  turnPanel: document.getElementById("turn-panel"),
  goalPanel: document.getElementById("goal-panel"),
  playersPanel: document.getElementById("players-panel"),
  modalShell: document.getElementById("modal-shell"),
  modalCard: document.getElementById("modal-card"),
  creditFlash: document.getElementById("credit-flash"),
  onboardingShell: document.getElementById("onboarding-shell"),
  onboardingClose: document.getElementById("onboarding-close"),
  onboardingConfirm: document.getElementById("onboarding-confirm"),
  toolbarHelp: document.getElementById("toolbar-help"),
};

// Onboarding overlay — fires once per device on first round, can be reopened
// via the ? button in the toolbar. Storage key is namespaced so it doesn't
// collide with any other browser state we might add later.
const ONBOARDING_STORAGE_KEY = "credit-climb-onboarding-seen-v1";

function hasSeenOnboarding() {
  try {
    return window.localStorage.getItem(ONBOARDING_STORAGE_KEY) === "1";
  } catch (err) {
    // Storage may be blocked (private browsing, etc.) — treat as unseen so
    // the modal shows. It won't be persisted, but it'll behave consistently
    // for the duration of the session.
    return false;
  }
}

function markOnboardingSeen() {
  try {
    window.localStorage.setItem(ONBOARDING_STORAGE_KEY, "1");
  } catch (err) {
    // Same fallback as above — silently ignore.
  }
}

function showOnboardingModal() {
  if (!elements.onboardingShell) return;
  elements.onboardingShell.classList.remove("hidden");
  elements.onboardingShell.setAttribute("aria-hidden", "false");
}

function hideOnboardingModal({ persist = true } = {}) {
  if (!elements.onboardingShell) return;
  elements.onboardingShell.classList.add("hidden");
  elements.onboardingShell.setAttribute("aria-hidden", "true");
  if (persist) markOnboardingSeen();
  // Drop the help-pulse animation on the ? button after first dismissal so
  // it doesn't keep drawing the eye on every reopen.
  if (elements.toolbarHelp) {
    elements.toolbarHelp.classList.remove("help-pulse");
  }
}

function maybeShowFirstRunOnboarding() {
  if (hasSeenOnboarding()) {
    // Subtle nudge for repeat players — pulse the ? once so they remember
    // it exists. No modal, just a hint.
    if (elements.toolbarHelp) {
      elements.toolbarHelp.classList.add("help-pulse");
      setTimeout(() => elements.toolbarHelp && elements.toolbarHelp.classList.remove("help-pulse"), 4000);
    }
    return;
  }
  showOnboardingModal();
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clamp01(value) {
  return clamp(value, 0, 1);
}

function formatMoney(value) {
  return currencyFormatter.format(Math.round(value));
}

function formatSignedNumber(value) {
  if (value > 0) {
    return `+${value}`;
  }
  return String(value);
}

function truncateText(text, limit = 150) {
  if (text.length <= limit) {
    return text;
  }
  return `${text.slice(0, limit - 1).trim()}...`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRoomCodeFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return (params.get("room") || "").trim().toUpperCase();
}

function updateRoomCodeInUrl(roomCode = "") {
  const url = new URL(window.location.href);
  if (roomCode) {
    url.searchParams.set("room", roomCode);
  } else {
    url.searchParams.delete("room");
  }
  window.history.replaceState({}, "", url);
}

function getShareLink(roomCode) {
  const url = new URL(window.location.href);
  url.searchParams.set("room", roomCode);
  return url.toString();
}

function isInLiveRoom() {
  return Boolean(liveSession.roomCode);
}

function isLiveMirrorClient() {
  return isInLiveRoom() && !liveSession.isHost;
}

function getLiveHumanMembers() {
  return liveSession.members.filter((member) => !member.isSpectator);
}

function getLocalMember() {
  return liveSession.members.find((member) => member.memberId === liveSession.memberId) || null;
}

function updateLocalPlayerId() {
  const localMember = getLocalMember();
  liveSession.localPlayerId = localMember ? localMember.playerId || null : null;
}

function getPlayerById(playerId) {
  return state.players.find((player) => player.id === playerId) || null;
}

function getPlayerNameById(playerId) {
  const player = getPlayerById(playerId);
  return player ? player.name : "the active player";
}

function canLocalClientControlPlayer(playerId) {
  if (!isInLiveRoom() || !liveSession.gameStarted) {
    return true;
  }
  if (liveSession.isHost) {
    return true;
  }
  return Boolean(playerId && liveSession.localPlayerId === playerId);
}

function setLiveStatus(message) {
  liveSession.statusText = message;
  renderLiveRoomPanel();
}

function isRemoteActionPending() {
  return isLiveMirrorClient() && liveSession.pendingRemoteAction;
}

function canLocalClientActOnCurrentTurn(player = getCurrentPlayer()) {
  if (!player) {
    return false;
  }
  return canLocalClientControlPlayer(player.id) && !isRemoteActionPending();
}

function canLocalClientActOnModal() {
  if (!state.modal) {
    return false;
  }
  return canLocalClientControlPlayer(state.modal.playerId) && !isRemoteActionPending();
}

function clearGameState() {
  state.players = [];
  state.currentPlayerIndex = 0;
  state.round = 1;
  state.lastDie = null;
  state.lastRollNote = null;
  state.phase = "setup";
  state.log = [];
  state.modal = null;
  state.pendingNotices = [];
  state.busy = false;
  state.winnerId = null;
  state.endingType = null;
  clearCreditFlash();
  resetDiceTheater();
  resetUiFeedbackState();
}

function serializeMissionForNetwork(mission) {
  return {
    id: mission.id,
    title: mission.title,
    description: mission.description || "",
  };
}

function sanitizePlayerForNetwork(player) {
  return {
    ...player,
    missions: (player.missions || []).map(serializeMissionForNetwork),
  };
}

function sanitizeModalForNetwork(modal) {
  if (!modal) {
    return null;
  }

  if (modal.mode === "notice") {
    return {
      mode: "notice",
      playerId: modal.playerId || null,
      notice: {
        title: modal.notice.title,
        body: modal.notice.body,
        buttonLabel: modal.notice.buttonLabel,
        artId: modal.notice.artId,
        artLabel: modal.notice.artLabel,
      },
    };
  }

  return {
    mode: "decision",
    playerId: modal.playerId || null,
    pendingOption: Boolean(modal.pendingOption),
    decision: {
      title: modal.decision.title,
      body: modal.decision.body,
      artId: modal.decision.artId,
      artLabel: modal.decision.artLabel,
      profileVariant: modal.decision.profileVariant || null,
      options: modal.decision.options.map((option) => ({
        label: option.label,
        description: option.description,
      })),
    },
  };
}

function buildNetworkSnapshot() {
  return {
    players: state.players.map(sanitizePlayerForNetwork),
    currentPlayerIndex: state.currentPlayerIndex,
    round: state.round,
    lastDie: state.lastDie,
    lastRollNote: state.lastRollNote,
    phase: state.phase,
    log: state.log,
    modal: sanitizeModalForNetwork(state.modal),
    busy: state.busy,
    winnerId: state.winnerId,
    endingType: state.endingType,
    creditFlash: state.creditFlash,
  };
}

function applyNetworkSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }

  state.players = snapshot.players || [];
  state.currentPlayerIndex = snapshot.currentPlayerIndex || 0;
  state.round = snapshot.round || 1;
  state.lastDie = snapshot.lastDie ?? null;
  state.lastRollNote = snapshot.lastRollNote ?? null;
  state.phase = snapshot.phase || "setup";
  state.log = snapshot.log || [];
  state.modal = snapshot.modal || null;
  state.pendingNotices = [];
  state.busy = Boolean(snapshot.busy);
  state.winnerId = snapshot.winnerId || null;
  state.endingType = snapshot.endingType || null;
  state.creditFlash = snapshot.creditFlash || null;
  liveSession.pendingRemoteAction = false;
  renderAll();
}

function sendLiveMessage(payload) {
  if (!liveSession.socket || liveSession.socket.readyState !== window.WebSocket.OPEN) {
    return false;
  }

  liveSession.socket.send(JSON.stringify(payload));
  return true;
}

function broadcastLiveSnapshot(force = false) {
  if (!isInLiveRoom() || !liveSession.isHost || !liveSession.gameStarted || liveSession.suspendBroadcast) {
    return;
  }

  const snapshot = buildNetworkSnapshot();
  const snapshotKey = JSON.stringify(snapshot);
  if (!force && snapshotKey === liveSession.lastSnapshotKey) {
    return;
  }

  liveSession.lastSnapshotKey = snapshotKey;
  sendLiveMessage({
    type: "host-snapshot",
    snapshot,
  });
}

function applyRoomState(room) {
  if (!room) {
    return;
  }

  liveSession.roomCode = room.code;
  liveSession.hostMemberId = room.hostMemberId || null;
  liveSession.members = room.members || [];
  liveSession.gameStarted = Boolean(room.started);
  updateLocalPlayerId();
  renderLiveRoomPanel();
}

function syncSetupFormState() {
  const inLiveRoom = isInLiveRoom();
  const canHostConfigure = !inLiveRoom || liveSession.isHost;
  const submitButton = elements.setupForm.querySelector('button[type="submit"]');
  const humanLabel = document.querySelector(".human-count-label");
  const aiLabel = document.querySelector(".ai-count-label");

  elements.setupForm.classList.toggle("live-room-active", inLiveRoom);
  if (humanLabel) {
    humanLabel.hidden = inLiveRoom;
  }
  if (aiLabel) {
    aiLabel.hidden = false;
  }
  elements.extraHumanFields.hidden = inLiveRoom;
  elements.playerName.disabled = inLiveRoom;
  elements.humanCount.disabled = inLiveRoom;
  elements.aiCount.disabled = inLiveRoom && !liveSession.isHost;
  elements.roomCode.disabled = inLiveRoom;
  elements.createRoomButton.disabled = inLiveRoom;
  elements.joinRoomButton.disabled = inLiveRoom;
  elements.leaveRoomButton.disabled = !inLiveRoom;
  elements.newGameButton.disabled = inLiveRoom && !liveSession.isHost;
  if (submitButton) {
    submitButton.disabled = inLiveRoom && !liveSession.isHost;
    submitButton.textContent = inLiveRoom
      ? liveSession.gameStarted
        ? "Restart Live Game"
        : "Start Live Game"
      : "Deal the Board";
  }
  elements.newGameButton.textContent = inLiveRoom ? "Restart Room" : "Restart";
  if (!canHostConfigure && !liveSession.gameStarted) {
    elements.newGameButton.disabled = true;
  }
}

function renderLiveRoomPanel() {
  if (!elements.liveConnectionPill) {
    return;
  }

  const inLiveRoom = isInLiveRoom();
  const humanMembers = getLiveHumanMembers();
  const pillText = !inLiveRoom
    ? "Local Mode"
    : liveSession.gameStarted
      ? liveSession.isHost
        ? "Host Live"
        : "Live Game"
      : liveSession.isHost
        ? "Hosting Lobby"
        : "Joined Lobby";
  const defaultStatus = !inLiveRoom
    ? "Create a live room or join one with a code. The host keeps the shared session running."
    : liveSession.gameStarted
      ? `Room ${liveSession.roomCode} is live. ${liveSession.isHost ? "You are the host." : "Wait for your turn or watch the board update live."}`
      : liveSession.isHost
        ? `Room ${liveSession.roomCode} is ready. Start when everyone has joined.`
        : `Room ${liveSession.roomCode} is waiting for the host to start.`;

  elements.liveConnectionPill.textContent = pillText;
  elements.liveStatus.textContent = liveSession.statusText || defaultStatus;

  if (!inLiveRoom) {
    elements.liveRoomMeta.innerHTML = "";
    elements.liveRoomMembers.innerHTML = '<p class="live-room-empty">No live room yet. Local hot-seat mode is still available below.</p>';
    syncSetupFormState();
    return;
  }

  const shareLink = getShareLink(liveSession.roomCode);
  const spectatorCount = liveSession.members.filter((member) => member.isSpectator).length;
  elements.liveRoomMeta.innerHTML = `
    <p class="live-room-copy"><strong>Room code:</strong> ${escapeHtml(liveSession.roomCode)}</p>
    <p class="live-room-copy"><strong>Invite link:</strong> <a href="${escapeHtml(shareLink)}">${escapeHtml(shareLink)}</a></p>
    <p class="live-room-copy">${humanMembers.length} player${humanMembers.length === 1 ? "" : "s"} in the room${spectatorCount ? ` and ${spectatorCount} spectator${spectatorCount === 1 ? "" : "s"}` : ""}.</p>
  `;

  elements.liveRoomMembers.innerHTML = liveSession.members.length
    ? `
        <div class="live-room-roster">
          ${liveSession.members
            .map((member) => {
              const badges = [];
              if (member.memberId === liveSession.memberId) {
                badges.push('<span class="live-room-badge">You</span>');
              }
              if (member.memberId === liveSession.hostMemberId) {
                badges.push('<span class="live-room-badge">Host</span>');
              }
              if (member.isSpectator) {
                badges.push('<span class="live-room-badge">Spectator</span>');
              } else if (member.playerId) {
                badges.push('<span class="live-room-badge">Seat Locked</span>');
              }
              if (!member.connected) {
                badges.push('<span class="live-room-badge offline">Offline</span>');
              }

              return `
                <div class="live-room-member">
                  <span class="live-room-member-name">${escapeHtml(member.name)}</span>
                  <div class="live-room-badges">
                    ${badges.filter(Boolean).join("")}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `
    : '<p class="live-room-empty">Waiting for players to connect.</p>';

  syncSetupFormState();
}

function getLiveSocketUrl() {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${protocol}//${window.location.host}`;
}

function resetLiveSessionState(message = "") {
  liveSession.roomCode = "";
  liveSession.memberId = null;
  liveSession.isHost = false;
  liveSession.hostMemberId = null;
  liveSession.members = [];
  liveSession.gameStarted = false;
  liveSession.localPlayerId = null;
  liveSession.pendingRemoteAction = false;
  liveSession.lastSnapshotKey = "";
  liveSession.suspendBroadcast = false;
  liveSession.connectPromise = null;
  liveSession.statusText = message;
  updateRoomCodeInUrl("");
  if (elements.roomCode) {
    elements.roomCode.value = "";
  }
  renderLiveRoomPanel();
}

function returnToLocalMode(message = "") {
  resetLiveSessionState(message);
  clearGameState();
  renderAll();
  renderExtraHumanFields();
  startGame(getHumanNamesFromForm(), getConfiguredAiCount());
}

function closeLiveSocket() {
  if (!liveSession.socket) {
    return;
  }

  liveSession.intentionalDisconnect = true;
  liveSession.socket.close();
  liveSession.socket = null;
  liveSession.connectPromise = null;
}

function handleRoomJoined(room, memberId, isHost) {
  liveSession.memberId = memberId;
  liveSession.isHost = isHost;
  liveSession.pendingRemoteAction = false;
  liveSession.lastSnapshotKey = "";
  applyRoomState(room);
  updateRoomCodeInUrl(room.code);
  elements.roomCode.value = room.code;
  clearGameState();
  renderAll();

  if (room.started) {
    const localMember = getLocalMember();
    setLiveStatus(
      localMember && localMember.isSpectator
        ? `Joined room ${room.code} as a spectator.`
        : `Joined room ${room.code}. The board will sync in a moment.`
    );
    return;
  }

  setLiveStatus(
    isHost
      ? `Room ${room.code} is ready. Share the invite link and start when everyone is here.`
      : `Joined room ${room.code}. Wait for the host to start the game.`
  );
}

function getPlayerIdForMember(memberId) {
  const member = liveSession.members.find((candidate) => candidate.memberId === memberId);
  return member ? member.playerId || null : null;
}

function handleRemotePlayerAction(memberId, action) {
  if (!liveSession.isHost || !action) {
    return;
  }

  const actingPlayerId = getPlayerIdForMember(memberId);
  const currentPlayer = getCurrentPlayer();

  switch (action.type) {
    case "roll":
      if (currentPlayer && currentPlayer.id === actingPlayerId && !state.busy && state.phase === "ready") {
        void runTurn(currentPlayer);
      }
      break;
    case "end-reflection":
      if (currentPlayer && currentPlayer.id === actingPlayerId && !state.busy && state.phase === "reflection") {
        advanceTurn();
      }
      break;
    case "hint":
      if (currentPlayer && currentPlayer.id === actingPlayerId && !state.busy) {
        performHintAction();
      }
      break;
    case "dismiss-notice":
      if (state.modal && state.modal.mode === "notice" && state.modal.playerId === actingPlayerId) {
        dismissCurrentNotice();
      }
      break;
    case "decision-choice":
      if (state.modal && state.modal.mode === "decision" && state.modal.playerId === actingPlayerId && !state.creditFlash) {
        selectDecisionOptionByIndex(Number(action.optionIndex));
      }
      break;
    case "decision-flash-dismiss":
      if (state.modal && state.modal.mode === "decision" && state.modal.playerId === actingPlayerId && state.creditFlash) {
        completeModalDecisionAfterFlash();
      }
      break;
    default:
      break;
  }
}

function handleLiveServerMessage(message) {
  switch (message.type) {
    case "room-joined":
      handleRoomJoined(message.room, message.memberId, message.isHost);
      break;
    case "room-state":
      applyRoomState(message.room);
      if (!message.room.started && !state.players.length) {
        renderAll();
      }
      break;
    case "room-closed":
      closeLiveSocket();
      returnToLocalMode(message.reason || "The live room closed.");
      break;
    case "state-snapshot":
      if (!liveSession.isHost) {
        applyNetworkSnapshot(message.snapshot);
      }
      break;
    case "player-action":
      handleRemotePlayerAction(message.memberId, message.action);
      break;
    case "server-error":
      setLiveStatus(message.message || "The server rejected that request.");
      break;
    default:
      break;
  }
}

async function connectLiveSocket() {
  if (window.location.protocol === "file:") {
    throw new Error("Live rooms need the Node server. Open the game through npm start instead of a file path.");
  }

  if (liveSession.socket && liveSession.socket.readyState === window.WebSocket.OPEN) {
    return liveSession.socket;
  }

  if (liveSession.connectPromise) {
    await liveSession.connectPromise;
    return liveSession.socket;
  }

  liveSession.intentionalDisconnect = false;

  const socket = new window.WebSocket(getLiveSocketUrl());
  liveSession.socket = socket;

  liveSession.connectPromise = new Promise((resolve, reject) => {
    const handleOpen = () => {
      socket.removeEventListener("error", handleError);
      resolve();
    };
    const handleError = () => {
      socket.removeEventListener("open", handleOpen);
      reject(new Error("Could not connect to the live room server."));
    };
    socket.addEventListener("open", handleOpen, { once: true });
    socket.addEventListener("error", handleError, { once: true });
  });
  await liveSession.connectPromise;
  liveSession.connectPromise = null;

  socket.addEventListener("message", (event) => {
    try {
      const message = JSON.parse(event.data);
      handleLiveServerMessage(message);
    } catch (error) {
      console.error("Credit Climb could not parse a live-room message:", error);
    }
  });

  socket.addEventListener("close", () => {
    const wasIntentional = liveSession.intentionalDisconnect;
    liveSession.socket = null;
    liveSession.intentionalDisconnect = false;
     liveSession.connectPromise = null;
    if (!wasIntentional && isInLiveRoom()) {
      returnToLocalMode("Connection lost. Rejoin the room to keep playing live.");
    }
  });

  return socket;
}

async function createLiveRoom() {
  const name = elements.playerName.value.trim() || "You";

  try {
    setLiveStatus("Connecting to the live room server...");
    clearGameState();
    renderAll();
    await connectLiveSocket();
    sendLiveMessage({
      type: "create-room",
      name,
    });
  } catch (error) {
    returnToLocalMode(error.message);
  }
}

async function joinLiveRoom() {
  const roomCode = (elements.roomCode.value || getRoomCodeFromQuery()).trim().toUpperCase();
  const name = elements.playerName.value.trim() || "You";

  if (!roomCode) {
    setLiveStatus("Enter a room code first.");
    return;
  }

  try {
    setLiveStatus(`Joining room ${roomCode}...`);
    clearGameState();
    renderAll();
    await connectLiveSocket();
    sendLiveMessage({
      type: "join-room",
      roomCode,
      name,
    });
  } catch (error) {
    returnToLocalMode(error.message);
  }
}

function leaveLiveRoom() {
  if (isInLiveRoom()) {
    sendLiveMessage({ type: "leave-room" });
  }
  closeLiveSocket();
  returnToLocalMode("Returned to local mode.");
}

function sendLivePlayerAction(action) {
  if (!isLiveMirrorClient() || !sendLiveMessage({ type: "player-action", action })) {
    return false;
  }

  liveSession.pendingRemoteAction = true;
  renderAll();
  return true;
}

function startLiveRoomGame() {
  if (!isInLiveRoom() || !liveSession.isHost) {
    return;
  }

  const humanNames = getLiveHumanMembers().map((member) => member.name);
  if (!humanNames.length) {
    setLiveStatus("At least one player needs to be in the room before you can start.");
    return;
  }

  liveSession.suspendBroadcast = true;
  startGame(humanNames, getConfiguredAiCount());

  const humanPlayers = state.players.filter((player) => !player.isAI);
  const assignments = getLiveHumanMembers().map((member, index) => ({
    memberId: member.memberId,
    playerId: humanPlayers[index] ? humanPlayers[index].id : null,
  }));

  liveSession.members = liveSession.members.map((member) => {
    const assignment = assignments.find((candidate) => candidate.memberId === member.memberId);
    return {
      ...member,
      playerId: assignment ? assignment.playerId : member.playerId || null,
    };
  });
  liveSession.gameStarted = true;
  updateLocalPlayerId();
  sendLiveMessage({
    type: "start-game",
    assignments,
  });
  liveSession.suspendBroadcast = false;
  renderAll();
  broadcastLiveSnapshot(true);
  setLiveStatus(`Room ${liveSession.roomCode} is live. Share the link and play from your own browsers.`);
}

function getUtilizationBandScore(utilization) {
  if (utilization <= 0.1) {
    return 1;
  }
  if (utilization <= 0.3) {
    return 0.92;
  }
  if (utilization <= 0.5) {
    return 0.78;
  }
  if (utilization <= 0.75) {
    return 0.56;
  }
  if (utilization <= 1) {
    return 0.3;
  }
  return 0.12;
}

function getEssentialBills(player) {
  const bills = [];
  if (player.housing) {
    bills.push({
      label: `${player.housing.name} rent`,
      amount: player.housing.recurringCost,
      type: "housing",
    });
  }
  if (player.transport) {
    bills.push({
      label: `${player.transport.name} transport`,
      amount: player.transport.recurringCost,
      type: "transport",
    });
  }
  if (player.loanBalance > 0) {
    bills.push({
      label: "Loan payment",
      amount: getLoanPayment(player),
      type: "loan",
    });
  }
  return bills;
}

function getMusicButtonLabel() {
  if (musicState.available === false) {
    return "Music Missing";
  }
  if (musicState.started) {
    return "Music On";
  }
  if (!musicState.enabled) {
    return "Music Off";
  }
  return "Start Music";
}

function getMusicStatusText() {
  if (musicState.available === false) {
    return 'Add a file named "background-music.mp3" to this folder to enable looping music.';
  }
  if (musicState.started) {
    return "Background music is looping. Click the button to mute it.";
  }
  if (!musicState.enabled) {
    return "Background music is muted. Click the button to turn it back on.";
  }
  return "Music will begin after your next click in the game.";
}

function refreshMusicControls() {
  const musicButton = elements.musicButton;
  if (musicButton) {
    musicButton.textContent = getMusicButtonLabel();
    musicButton.disabled = musicState.available === false;
    musicButton.setAttribute("aria-pressed", musicState.started ? "true" : "false");
  }

  const musicNote = elements.musicNote;
  if (musicNote) {
    musicNote.textContent = getMusicStatusText();
  }

  const toolbarMusic = document.getElementById("toolbar-music");
  if (toolbarMusic) {
    toolbarMusic.disabled = musicState.available === false;
    toolbarMusic.setAttribute("aria-pressed", musicState.started ? "true" : "false");
    toolbarMusic.classList.toggle("active", Boolean(musicState.started));
    toolbarMusic.setAttribute("title", musicState.started ? "Mute music" : "Play music");
    toolbarMusic.setAttribute("aria-label", musicState.started ? "Mute music" : "Play music");
  }
}

function ensureBackgroundMusic() {
  if (musicState.audio) {
    return musicState.audio;
  }

  const audio = new Audio(BACKGROUND_MUSIC_PATH);
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = 0.34;

  audio.addEventListener("loadeddata", () => {
    musicState.available = true;
    refreshMusicControls();
  });

  audio.addEventListener("play", () => {
    musicState.available = true;
    musicState.started = true;
    refreshMusicControls();
  });

  audio.addEventListener("pause", () => {
    musicState.started = false;
    refreshMusicControls();
  });

  audio.addEventListener("error", () => {
    musicState.available = false;
    musicState.started = false;
    refreshMusicControls();
  });

  audio.load();
  musicState.audio = audio;
  return audio;
}

async function startBackgroundMusic() {
  if (!musicState.enabled || musicState.available === false || musicState.starting) {
    return;
  }

  musicState.starting = true;
  const audio = ensureBackgroundMusic();

  try {
    const playAttempt = audio.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      await playAttempt;
    }
    musicState.available = true;
    musicState.started = true;
  } catch (error) {
    if (error && (error.name === "NotAllowedError" || error.name === "AbortError")) {
      musicState.started = false;
    } else {
      musicState.available = false;
      musicState.started = false;
    }
  } finally {
    musicState.starting = false;
    refreshMusicControls();
  }
}

function pauseBackgroundMusic() {
  if (musicState.audio) {
    musicState.audio.pause();
  }
  musicState.started = false;
  refreshMusicControls();
}

function handleMusicToggle() {
  if (musicState.available === false) {
    return;
  }

  if (musicState.started) {
    musicState.enabled = false;
    pauseBackgroundMusic();
    return;
  }

  musicState.enabled = true;
  void startBackgroundMusic();
}

function primeBackgroundMusic() {
  if (!musicState.enabled || musicState.started || musicState.available === false) {
    return;
  }
  void startBackgroundMusic();
}

function getUiAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!uiAudioContext) {
    uiAudioContext = new AudioContextClass();
  }

  if (uiAudioContext.state === "suspended") {
    void uiAudioContext.resume().catch(() => {});
  }

  return uiAudioContext;
}

function playUiTone(context, frequency, start, duration, type, peakGain) {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);

  gainNode.gain.setValueAtTime(0.0001, start);
  gainNode.gain.exponentialRampToValueAtTime(peakGain, start + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
}

function playCreditFlashSound(direction) {
  const context = getUiAudioContext();
  if (!context) {
    return;
  }

  const start = context.currentTime + 0.01;
  if (direction === "up") {
    playUiTone(context, 720, start, 0.08, "triangle", 0.035);
    playUiTone(context, 980, start + 0.08, 0.14, "sine", 0.045);
    return;
  }

  if (direction === "steady") {
    playUiTone(context, 560, start, 0.1, "triangle", 0.02);
    return;
  }

  playUiTone(context, 390, start, 0.08, "triangle", 0.03);
  playUiTone(context, 280, start + 0.07, 0.14, "sawtooth", 0.028);
}

function getDecisionArt(decision) {
  const art = DECISION_ART_LIBRARY[decision.artId] || DECISION_ART_LIBRARY.generic;
  return {
    ...art,
    label: decision.artLabel || art.label,
  };
}

function queuePlayerNotice(player, notice) {
  if (!player || player.isAI) {
    return;
  }

  state.pendingNotices.push({
    playerId: player.id,
    buttonLabel: "Continue",
    ...notice,
  });
}

function showNotice(player, notice) {
  if (!player || player.isAI) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    state.modal = {
      mode: "notice",
      playerId: player.id,
      notice: {
        buttonLabel: "Continue",
        ...notice,
      },
      resolve,
    };
    renderAll();
  });
}

async function flushPlayerNotices(player) {
  if (!player || !state.pendingNotices.length) {
    return;
  }

  const notices = state.pendingNotices.filter((notice) => notice.playerId === player.id);
  state.pendingNotices = state.pendingNotices.filter((notice) => notice.playerId !== player.id);

  for (const notice of notices) {
    await showNotice(player, notice);
  }
}

function shuffle(list) {
  const clone = [...list];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

// --------------------------------------------------------------------------
// Dice animation (Phase B / Commit 3).
//
// The cube in the center of the board is a 3D CSS object whose <transform>
// we drive via inline style. Each face has a known "face-forward" base
// rotation (e.g. face 2 faces forward when the cube is at rotateX(-90)).
// To land on value V with a pleasing 3D pose (not flat-on), we apply a
// small consistent tilt offset to the base rotation.
//
// Between rolls we accumulate a large multi-turn spin so the cube visibly
// tumbles every time, regardless of what value came before. Without the
// accumulator, rolling the same number twice would show almost no motion.
// --------------------------------------------------------------------------

// Base face-forward + tilt for each rolled value. Tilt is a uniform
// (-12deg X, -18deg Y) offset applied after the face-forward rotation, so
// every landing shows the rolled face dominantly plus small peeks at
// neighbors — never a flat pancake view.
const DICE_FACE_TARGETS = {
  1: { x: -12, y: -18 },
  2: { x: -102, y: -18 },
  3: { x: -12, y: -108 },
  4: { x: -12, y: 72 },
  5: { x: 78, y: -18 },
  6: { x: -12, y: 162 },
};

const diceSpinAccumulator = { x: 0, y: 0 };

async function playDiceRoll(value) {
  const theater = document.getElementById("dice-theater");
  const cube = document.getElementById("dice-cube");
  if (!theater || !cube) {
    return;
  }
  const safeValue = Number.isInteger(value) && value >= 1 && value <= 6 ? value : 1;
  const target = DICE_FACE_TARGETS[safeValue];

  // Add 3 or 4 FULL turns per axis (multiples of 360°) so the accumulator
  // never drifts off a clean face-forward rotation. If this added a random
  // partial amount (e.g. 720 + 0..179), the cube would land at
  // faceTarget + drift and rest on a corner/edge instead of flush. Random
  // choice between 3 or 4 full turns per axis keeps consecutive rolls from
  // feeling identical without introducing drift, and paired with the ~1.4s
  // tumble duration the extra rotation reads as a real roll.
  const extraSpinsX = 3 + Math.floor(Math.random() * 2);
  const extraSpinsY = 3 + Math.floor(Math.random() * 2);
  diceSpinAccumulator.x += extraSpinsX * 360;
  diceSpinAccumulator.y += extraSpinsY * 360;
  const finalX = target.x + diceSpinAccumulator.x;
  const finalY = target.y + diceSpinAccumulator.y;

  // Apply the final transform and reveal the theater simultaneously. The
  // cube's CSS transition (1s bezier with overshoot) does the tumble; the
  // theater's opacity transition (~220ms) fades the dim backdrop in. Net
  // effect: the cube appears to "drop into view" already mid-spin.
  cube.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
  theater.classList.add("visible");
  theater.setAttribute("aria-hidden", "false");

  // Wait for the CSS transition (1400ms) plus a small cushion for the
  // overshoot/bounce at the tail.
  await delay(1440);

  // Hold the landed face so players can actually read the result before
  // the overlay clears. 800ms is long enough for a glance to register
  // the number without feeling sluggish. Together with the tumble this
  // puts the full dice sequence at ~2.1s — weighty and decisive per the
  // brief, still short enough that 15 rounds × N players fits the
  // playtest window.
  await delay(800);

  // Fade the theater out. The cube's inline transform persists — the
  // next roll will accumulate more spin from this rotation, so the
  // animation always continues forward and never jumps.
  theater.classList.remove("visible");
  theater.setAttribute("aria-hidden", "true");

  // Await fade-out so the caller returns only after the overlay is
  // fully gone and Table Talk is unobstructed again.
  await delay(230);
}

// Hard-reset the dice theater on game restart so a partial roll can't
// strand the overlay in a visible state. Called from clearGameState.
function resetDiceTheater() {
  const theater = document.getElementById("dice-theater");
  const cube = document.getElementById("dice-cube");
  if (theater) {
    theater.classList.remove("visible");
    theater.setAttribute("aria-hidden", "true");
  }
  if (cube) {
    // Clear inline transform so the cube falls back to the CSS resting
    // pose on the next game's first roll.
    cube.style.transform = "";
  }
  diceSpinAccumulator.x = 0;
  diceSpinAccumulator.y = 0;
}

function stepPlayerBack(player, steps = 1) {
  player.position = (player.position - steps + BOARD_SPACES.length) % BOARD_SPACES.length;
}

function getRollOutcome(player) {
  const firstRoll = Math.floor(Math.random() * 6) + 1;
  if (!player.doubleRollUnlocked) {
    return {
      value: firstRoll,
      note: null,
      message: `${player.name} rolled a ${firstRoll}.`,
    };
  }

  const secondRoll = Math.floor(Math.random() * 6) + 1;
  const chosenRoll = Math.max(firstRoll, secondRoll);
  return {
    value: chosenRoll,
    note: `Double roll: ${firstRoll} and ${secondRoll}, taking ${chosenRoll}`,
    message: `${player.name} rolled ${firstRoll} and ${secondRoll}, keeping ${chosenRoll} thanks to premium credit.`,
  };
}

function getCurrentPlayer() {
  return state.players[state.currentPlayerIndex];
}

function getTotalDebt(player) {
  return Math.round(player.cardBalance + player.loanBalance);
}

function getSavings(player) {
  return Math.round(player.cash + player.emergencyFund);
}

function getNetWorth(player) {
  return Math.round(player.cash + player.emergencyFund - getTotalDebt(player));
}

function getDebtCeilingForFreedom(player) {
  // Project spec: ≤ $500, OR ≤ 25% of starting debt — use the more lenient threshold
  // so profiles with high starting debt aren't locked out of Financial Freedom.
  const starting = player.startingDebt || 0;
  const twentyFivePercent = Math.floor(starting * 0.25);
  return Math.max(500, twentyFivePercent);
}

function reachedFinancialFreedom(player) {
  if (!player) {
    return false;
  }
  const debtCeiling = getDebtCeilingForFreedom(player);
  return (
    player.creditScore >= 720 &&
    Boolean(player.housing) &&
    player.emergencyFund >= 1500 &&
    getTotalDebt(player) <= debtCeiling
  );
}

const TURN_CAP = 15;

function getCompositeScore(player) {
  if (!player) {
    return { total: 0, credit: 0, netWorth: 0, milestones: 0, emergency: 0, wellbeingBonus: 0 };
  }
  const creditComponent = clamp((player.creditScore - 300) / 5.5, 0, 100);

  const netDelta = getNetWorth(player) - (player.startingNetWorth || 0);
  // Progress-anchored: -$3k delta → 0, +$10k delta → 100.
  const netWorthComponent = clamp((netDelta + 3000) / 130, 0, 100);

  const completedGoals = countCompletedGoals(player);
  const milestonesComponent = clamp((completedGoals / 6) * 100, 0, 100);

  const emergencyComponent = clamp((player.emergencyFund / 1500) * 100, 0, 100);

  const tier = getWellbeingTier(player.wellbeing).key;
  const wellbeingBonus = tier === "flowing" ? 10 : tier === "stressed" ? -10 : 0;

  const weighted =
    creditComponent * 0.35 +
    netWorthComponent * 0.25 +
    milestonesComponent * 0.2 +
    emergencyComponent * 0.1 +
    wellbeingBonus;

  return {
    total: Math.round(weighted),
    totalDisplay: Math.max(0, Math.min(100, Math.round(weighted))),
    credit: Math.round(creditComponent),
    netWorth: Math.round(netWorthComponent),
    netDelta: Math.round(netDelta),
    milestones: Math.round(milestonesComponent),
    milestonesCount: completedGoals,
    emergency: Math.round(emergencyComponent),
    wellbeingBonus,
  };
}

function getFreedomCriteria(player) {
  const debtCeiling = getDebtCeilingForFreedom(player);
  return [
    {
      key: "credit",
      label: "Credit 720+",
      met: player.creditScore >= 720,
      detail: `${player.creditScore}`,
    },
    {
      key: "housing",
      label: "Stable Housing",
      met: Boolean(player.housing),
      detail: player.housing ? player.housing.name : "Not yet",
    },
    {
      key: "emergency",
      label: "$1,500 Emergency",
      met: player.emergencyFund >= 1500,
      detail: formatMoney(player.emergencyFund),
    },
    {
      key: "debt",
      label: `Debt ≤ ${formatMoney(debtCeiling)}`,
      met: getTotalDebt(player) <= debtCeiling,
      detail: formatMoney(getTotalDebt(player)),
    },
  ];
}

function getUtilization(player) {
  if (player.creditLimit <= 0) {
    return 0;
  }
  return player.cardBalance / player.creditLimit;
}

function getLifeStage(player) {
  if (player.age <= 20) {
    return "Launch";
  }
  if (player.age <= 23) {
    return "Foundation";
  }
  if (player.age <= 27) {
    return "Growth";
  }
  return "Freedom Run";
}

function getScoreBand(player) {
  const score = player.creditScore;
  if (score < 580) {
    return { label: "Locked Out", color: "#c85a40" };
  }
  if (score < 670) {
    return { label: "Building", color: "#d7a73d" };
  }
  if (score < 740) {
    return { label: "Steady", color: "#5f8f3d" };
  }
  if (score < 800) {
    return { label: "Strong", color: "#1f6ba5" };
  }
  return { label: "Premium", color: "#2d7d7d" };
}

function createTurnFlags() {
  return {
    missedPayment: false,
    splurged: false,
    paidFull: false,
    paidMinimum: false,
    facedCrisis: false,
    crisisHandled: false,
  };
}

// One-shot UI feedback snapshots for delta-driven animations (credit
// pulse, wellbeing pulse, newly-met chips, Table Talk just-arrived
// highlight). Not part of `state` because these are ephemeral rendering
// concerns, not game logic, and shouldn't be serialized across live
// sessions. Snapshot maps are keyed by player.id so each player tracks
// their own last-seen values.
let logEventIdCounter = 0;
const uiFeedback = {
  lastCreditByPlayer: new Map(),
  lastWellbeingByPlayer: new Map(),
  lastMetChipsByPlayer: new Map(),
  lastTopLogId: 0,
};

function resetUiFeedbackState() {
  uiFeedback.lastCreditByPlayer.clear();
  uiFeedback.lastWellbeingByPlayer.clear();
  uiFeedback.lastMetChipsByPlayer.clear();
  uiFeedback.lastTopLogId = 0;
}

function logEvent(title, body, kind = "play") {
  state.log.unshift({ id: ++logEventIdCounter, title, body, kind });
  state.log = state.log.slice(0, 40);
}

function makePlayer(name, color, background, career, isAI) {
  const historySeed = CREDIT_HISTORY_SEEDS[background.id] || {};
  return {
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    color,
    isAI,
    position: 0,
    laps: 0,
    age: 18,
    background,
    career,
    cash: background.cash,
    emergencyFund: background.emergencyFund,
    creditScore: background.creditScore,
    creditLimit: historySeed.creditLimit || 320,
    cardBalance: background.cardBalance,
    loanBalance: background.loanBalance,
    housing: null,
    housingRisk: 0,
    transport: null,
    transportRisk: 0,
    transportTrap: false,
    growthAsset: null,
    autopayMode: "full",
    shields: background.shields,
    knowledge: background.knowledge,
    missions: [],
    completedMissionIds: [],
    onTimeStreak: 0,
    cleanTurnStreak: historySeed.cleanTurnStreak || 0,
    missedPaymentCount: historySeed.missedPaymentCount || 0,
    recentMissedPayment: false,
    lateCardMarks: historySeed.lateCardMarks || 0,
    lateLoanMarks: historySeed.lateLoanMarks || 0,
    housingDefaultMarks: historySeed.housingDefaultMarks || 0,
    transportDefaultMarks: historySeed.transportDefaultMarks || 0,
    badLoanMarks: historySeed.badLoanMarks || 0,
    unresolvedBillingMarks: historySeed.unresolvedBillingMarks || 0,
    lowUtilizationStreak: 0,
    stableSpendingStreak: 0,
    crisesSurvived: 0,
    billingErrorsResolved: 0,
    unresolvedBillingError: Boolean(historySeed.unresolvedBillingMarks),
    securedCardUsed: false,
    badLoan: false,
    refinanced: false,
    limitUpgradeOne: false,
    limitUpgradeTwo: false,
    limitUpgradeThree: false,
    doubleRollUnlocked: false,
    reflectionModeActive: false,
    skipNextActionTurn: false,
    totalTurnsTaken: 0,
    lastUpkeepCreditDelta: null,
    lastUpkeepCreditLabel: "0",
    lastUpkeepCreditFeedback: null,
    creditRawTargetScore: background.creditScore,
    creditHistoryCeiling: 850,
    creditTargetScore: background.creditScore,
    wellbeing: typeof background.wellbeing === "number" ? background.wellbeing : 55,
    wellbeingFlowCounter: 0,
    burnoutPendingResolution: false,
    burnoutActiveSpell: false,
    lastWellbeingDelta: 0,
    lastWellbeingReason: null,
    startingDebt: Math.round(background.cardBalance + background.loanBalance),
    startingNetWorth: Math.round(
      background.cash + background.emergencyFund - (background.cardBalance + background.loanBalance)
    ),
    turnFlags: createTurnFlags(),
  };
}

function startGame(humanNames, aiCount) {
  const shuffledBackgrounds = shuffle(BACKGROUNDS);
  const shuffledCareers = shuffle(CAREERS);
  const players = [];

  humanNames.forEach((name, index) => {
    players.push(
      makePlayer(
        name || `Player ${index + 1}`,
        PLAYER_COLORS[index],
        shuffledBackgrounds[index],
        shuffledCareers[index],
        false
      )
    );
  });

  for (let index = 0; index < aiCount; index += 1) {
    const playerIndex = humanNames.length + index;
    players.push(
      makePlayer(
        AI_NAMES[index],
        PLAYER_COLORS[playerIndex],
        shuffledBackgrounds[playerIndex],
        shuffledCareers[playerIndex],
        true
      )
    );
  }

  state.players = players;
  state.currentPlayerIndex = 0;
  state.round = 1;
  state.lastDie = null;
  state.lastRollNote = null;
  state.phase = "setup";
  state.log = [];
  state.modal = null;
  state.pendingNotices = [];
  state.busy = false;
  state.winnerId = null;
  state.endingType = null;
  clearCreditFlash();

  players.forEach((player) => {
    logEvent(
      player.name,
      `${player.name} starts with ${formatMoney(player.cash)} cash, a ${player.creditScore} score, the "${player.background.name}" background, and a ${player.career.name} income path.`,
      "setup"
    );
  });

  renderAll();
  // Fire onboarding overlay on first-time players. Repeat players just see a
  // brief pulse on the ? button so they can re-open it on demand.
  maybeShowFirstRunOnboarding();
  void beginTurn();
}

function getWellbeingTier(wellbeing) {
  const value = Math.round(wellbeing);
  if (value <= 30) {
    return { key: "stressed", label: "Stressed", color: "#b04a2f" };
  }
  if (value <= 55) {
    return { key: "strained", label: "Strained", color: "#c47b2f" };
  }
  if (value <= 74) {
    return { key: "steady", label: "Steady", color: "#5f8f3d" };
  }
  return { key: "flowing", label: "Flowing", color: "#2d7d7d" };
}

function applyWellbeing(player, delta, reason) {
  if (!player || !delta) {
    return 0;
  }
  const previous = player.wellbeing;
  const nextValue = clamp(previous + delta, 0, 100);
  const actual = nextValue - previous;
  player.wellbeing = nextValue;
  player.lastWellbeingDelta = actual;
  player.lastWellbeingReason = reason || null;

  // Burnout trigger: once per "spell" under 15. Spell clears at 20+.
  if (previous >= 15 && nextValue < 15 && !player.burnoutActiveSpell) {
    player.burnoutActiveSpell = true;
    player.burnoutPendingResolution = true;
  }
  if (nextValue >= 20) {
    player.burnoutActiveSpell = false;
  }
  return actual;
}

function resolveStressedTax(player, options = {}) {
  const { silent = false } = options;
  if (player.wellbeing > 30) {
    return 0;
  }
  const taken = takeCash(player, 25);
  if (taken > 0 && !silent) {
    logEvent(
      "Stress Tax",
      `${player.name} paid ${formatMoney(taken)} this turn on small stress-coping costs (coffee runs, delivery, a missed deal).`
    );
  }
  return taken;
}

function maybeGrantFlowState(player, options = {}) {
  const { silent = false } = options;
  if (player.wellbeing >= 75) {
    player.wellbeingFlowCounter += 1;
    if (player.wellbeingFlowCounter >= 3) {
      player.wellbeingFlowCounter = 0;
      player.knowledge += 1;
      if (!silent) {
        logEvent(
          "Flow State",
          `${player.name} has been steady long enough to think clearly — picked up a Knowledge point.`
        );
      }
      queuePlayerNotice(player, {
        title: "Flow State",
        body: "Three steady turns in a row. You gained 1 Knowledge from finally having room to think.",
        artId: "repair",
        artLabel: "Steady Mind",
      });
    }
  } else {
    player.wellbeingFlowCounter = 0;
  }
}

function buildBurnoutDecision(player) {
  return ensureDecision({
    title: "You're Burning Out",
    body: "Your Wellbeing dropped into the red. Burnout recovery takes several turns — these choices are a step out of the pit, not an instant reset.",
    artId: "repair",
    artLabel: "Burnout Check",
    options: [
      createOption({
        label: "Treat Yourself",
        description: "Splurge $180 on a real break. Big Wellbeing lift, but you still won't fully reset this turn.",
        effect: (current) => {
          const payment = spendCashThenCard(current, 180);
          applyWellbeing(current, 13, "Burnout splurge");
          current.turnFlags.splurged = true;
          if (payment.shortfall > 0) {
            // ensure shortfall is reflected
          }
        },
        aiScore: (current) => (current.cash >= 180 ? 18 : 4),
        resultText: (current) => `${current.name} stepped back for a real break — recovery will take a couple more turns, but the worst is off.`,
      }),
      createOption({
        label: "Power Through",
        description: "Pick up an overtime shift for $40. Wellbeing barely moves; you stay in the Stressed tier.",
        effect: (current) => {
          current.cash += 40;
          applyWellbeing(current, 2, "Powered through burnout");
        },
        aiScore: (current) => (current.cash < 200 ? 10 : 2),
        resultText: (current) => `${current.name} powered through and kept the paycheck moving — still running on empty.`,
      }),
      createOption({
        label: "Lean on the Network",
        description: "$30 for a campus counselor or mentor call. Modest Wellbeing lift — recovery continues over the next few turns.",
        effect: (current) => {
          spendCashThenCard(current, 30);
          applyWellbeing(current, 5, "Leaned on network");
        },
        aiScore: (current) => 14 + (current.cash < 150 ? 4 : 0),
        resultText: (current) => `${current.name} reached out instead of collapsing — a small lift, and the start of a longer climb back.`,
      }),
    ],
  });
}

async function maybeResolveBurnout(player) {
  if (!player || !player.burnoutPendingResolution) {
    return;
  }
  player.burnoutPendingResolution = false;
  const decision = buildBurnoutDecision(player);
  await offerDecision(player, decision);
}

function recordMissedPayment(player, markField) {
  player.turnFlags.missedPayment = true;
  player.missedPaymentCount += 1;
  player.recentMissedPayment = true;
  player.onTimeStreak = 0;
  player.cleanTurnStreak = 0;
  if (markField) {
    player[markField] += 1;
  }
}

function addBadLoanMark(player, count = 1) {
  player.badLoan = true;
  player.badLoanMarks += count;
}

function clearBadLoanStatus(player, markRelief = 0) {
  player.badLoan = false;
  if (markRelief > 0) {
    player.badLoanMarks = Math.max(0, player.badLoanMarks - markRelief);
  }
}

function addUnresolvedBillingMark(player, count = 1) {
  player.unresolvedBillingError = true;
  player.unresolvedBillingMarks += count;
}

function resolveBillingIssue(player, balanceRelief = 0) {
  let resolved = false;
  if (player.unresolvedBillingMarks > 0) {
    player.unresolvedBillingMarks = Math.max(0, player.unresolvedBillingMarks - 1);
    resolved = true;
  } else if (player.unresolvedBillingError) {
    resolved = true;
  }
  if (!resolved) {
    return false;
  }

  player.unresolvedBillingError = player.unresolvedBillingMarks > 0;
  player.billingErrorsResolved += 1;
  if (balanceRelief > 0) {
    player.cardBalance = Math.max(0, player.cardBalance - balanceRelief);
  }
  return true;
}

function clearDerogatoryMark(player, fields) {
  for (const field of fields) {
    if (player[field] <= 0) {
      continue;
    }
    player[field] = Math.max(0, player[field] - 1);
    if (field === "unresolvedBillingMarks") {
      player.unresolvedBillingError = player.unresolvedBillingMarks > 0;
    }
    return field;
  }
  return null;
}

function getDerogatoryMarkWeight(player) {
  return (
    player.lateCardMarks * 1.1 +
    player.lateLoanMarks * 1 +
    player.housingDefaultMarks * 1.45 +
    player.transportDefaultMarks * 0.75 +
    player.badLoanMarks * 1 +
    player.unresolvedBillingMarks * 0.55
  );
}

function getCreditMixBonus(player) {
  const hasRevolving = player.creditLimit > 0;
  const hasInstallment = player.loanBalance > 0 || player.refinanced || player.badLoanMarks > 0;
  const lowUtilization = getUtilization(player) <= 0.3;

  if (hasRevolving && hasInstallment && lowUtilization && !player.recentMissedPayment) {
    return 8;
  }
  if ((hasRevolving || hasInstallment) && lowUtilization && player.cleanTurnStreak >= 3) {
    return 4;
  }
  return 0;
}

function getCreditHistoryCeiling(player) {
  const markPressure = getDerogatoryMarkWeight(player);
  const cleanBonus = Math.min(16, player.cleanTurnStreak * 1.35);
  const onTimeBonus = Math.min(12, player.onTimeStreak * 0.95);
  const mixBonus = getCreditMixBonus(player);
  const baseCeiling =
    620 +
    player.totalTurnsTaken * 1.95 +
    cleanBonus +
    onTimeBonus -
    Math.min(42, markPressure * 3.2) +
    mixBonus;

  return clamp(Math.round(baseCeiling), 620, 850);
}

function calculateCreditProfile(player) {
  const utilization = getUtilization(player);
  const cleanTurnBonus = Math.min(0.2, player.cleanTurnStreak * 0.04);
  const fullPaymentBonus = player.turnFlags.paidFull ? 0.02 : 0;
  const minimumOnlyPenalty = player.turnFlags.paidMinimum && !player.turnFlags.paidFull ? 0.03 : 0;
  const derogatoryWeight = getDerogatoryMarkWeight(player);
  const paymentScore = clamp01(
    1
      - Math.min(0.55, player.missedPaymentCount * 0.06)
      - (player.recentMissedPayment ? 0.07 : 0)
      - minimumOnlyPenalty
      + cleanTurnBonus
      + fullPaymentBonus
  );
  const utilizationScore = getUtilizationBandScore(utilization);
  const derogatoryScore = clamp01(
    1
      - derogatoryWeight * 0.09
      + Math.min(0.12, player.cleanTurnStreak * 0.02)
  );
  let debtScore = clamp01(1 - player.loanBalance / 5500);
  if (player.badLoan) {
    debtScore = clamp01(debtScore - 0.1);
  }
  const ageScore = clamp01(Math.min(1, 0.55 + player.totalTurnsTaken * 0.035));
  const profile =
    paymentScore * 0.45 +
    utilizationScore * 0.3 +
    derogatoryScore * 0.15 +
    debtScore * 0.05 +
    ageScore * 0.05;

  return {
    paymentScore,
    utilizationScore,
    derogatoryScore,
    debtScore,
    ageScore,
    profile: clamp01(profile),
  };
}

function getCreditPreview(player) {
  const components = calculateCreditProfile(player);
  const rawTargetScore = clamp(Math.round(300 + components.profile * 550), 300, 850);
  const historyCeiling = getCreditHistoryCeiling(player);
  return {
    ...components,
    rawTargetScore,
    historyCeiling,
    targetScore: Math.min(rawTargetScore, historyCeiling),
  };
}

function recalculateCreditScore(player) {
  const madeMinimumOnlyPayment = player.turnFlags.paidMinimum && !player.turnFlags.paidFull;
  if (player.recentMissedPayment) {
    player.cleanTurnStreak = 0;
    player.onTimeStreak = 0;
  } else {
    if (!madeMinimumOnlyPayment) {
      player.cleanTurnStreak += 1;
    }
    player.onTimeStreak += 1;
  }

  const { profile, rawTargetScore, historyCeiling, targetScore } = getCreditPreview(player);
  const delta = targetScore - player.creditScore;
  const boundedDelta = delta > 0 ? Math.min(delta, MAX_CREDIT_GAIN_PER_TURN) : Math.max(delta, -MAX_CREDIT_DROP_PER_TURN);
  player.creditScore = clamp(player.creditScore + boundedDelta, 300, 850);
  player.creditProfile = profile;
  player.creditRawTargetScore = rawTargetScore;
  player.creditHistoryCeiling = historyCeiling;
  player.creditTargetScore = targetScore;
  player.recentMissedPayment = false;
  return player.creditScore;
}

function getCreditImpactMessage(key, direction) {
  const messages = {
    paymentScore: {
      up: "Cleaner payment history should help next turn.",
      down: "Payment history damage should drag next turn.",
    },
    utilizationScore: {
      up: "Lower utilization should help next turn.",
      down: "Higher utilization should drag next turn.",
    },
    derogatoryScore: {
      up: "Cleaning up a bad mark should help next turn.",
      down: "A new bad mark should drag next turn.",
    },
    debtScore: {
      up: "Lower loan pressure should help next turn.",
      down: "More loan pressure should drag next turn.",
    },
    ageScore: {
      up: "Stability helps your score over time.",
      down: "This slows credit growth.",
    },
    default: {
      up: "This choice should help your score next turn.",
      down: "This choice should hurt your score next turn.",
    },
  };

  const copy = messages[key] || messages.default;
  return copy[direction];
}

function buildCreditFlashFeedback(beforeForecast, afterForecast) {
  const forecastedDelta = afterForecast.delta;
  const direction = forecastedDelta > 0 ? "up" : forecastedDelta < 0 ? "down" : "steady";
  const factorDiffs = [
    { key: "paymentScore", delta: afterForecast.preview.paymentScore - beforeForecast.preview.paymentScore },
    { key: "utilizationScore", delta: afterForecast.preview.utilizationScore - beforeForecast.preview.utilizationScore },
    { key: "derogatoryScore", delta: afterForecast.preview.derogatoryScore - beforeForecast.preview.derogatoryScore },
    { key: "debtScore", delta: afterForecast.preview.debtScore - beforeForecast.preview.debtScore },
    { key: "ageScore", delta: afterForecast.preview.ageScore - beforeForecast.preview.ageScore },
  ];
  const alignedDiffs = factorDiffs
    .filter((diff) => {
      if (direction === "up") {
        return diff.delta >= 0;
      }
      if (direction === "down") {
        return diff.delta <= 0;
      }
      return Math.abs(diff.delta) > 0;
    })
    .sort((left, right) => Math.abs(right.delta) - Math.abs(left.delta));
  const biggestShift = alignedDiffs[0];

  let title = "Next Credit Check";
  if (forecastedDelta >= 8) {
    title = "Credit Up Next Turn";
  } else if (forecastedDelta <= -8) {
    title = "Credit Down Next Turn";
  } else if (forecastedDelta === 0) {
    title = "No Credit Change Next Turn";
  }

  let body = "Projected after income, bills, and autopay.";
  if (direction !== "steady") {
    body = getCreditImpactMessage(biggestShift ? biggestShift.key : "default", direction);
  }
  if (Math.abs(forecastedDelta) <= 3) {
    if (direction === "up") {
      body = "Small lift projected at next turn start.";
    } else if (direction === "down") {
      body = "Small hit projected at next turn start.";
    } else {
      body = "No score move projected at next turn start.";
    }
  }
  if (
    forecastedDelta === 0 &&
    afterForecast.preview.rawTargetScore > afterForecast.preview.historyCeiling
  ) {
    body = "Good habits help, but your credit file is still too thin for a score jump yet.";
  }

  return {
    direction,
    title,
    body,
    points: forecastedDelta,
    pointsLabel: formatSignedNumber(forecastedDelta),
  };
}

function buildUpkeepCreditFeedback(player) {
  const delta = player.lastUpkeepCreditDelta ?? 0;
  const direction = delta > 0 ? "up" : delta < 0 ? "down" : "steady";
  let body = "This turn's credit check ran after income, bills, and autopay.";

  if (delta > 0) {
    body = "Your latest payment and balance behavior lifted your score this turn.";
  } else if (delta < 0) {
    body = "Balance pressure or negative marks pulled your score down this turn.";
  } else if (player.creditRawTargetScore > player.creditHistoryCeiling) {
    body = "Good habits are helping, but your credit file is still too thin for a bigger jump.";
  } else {
    body = "No score move this turn after income, bills, and autopay.";
  }

  return {
    direction,
    title: "Start-of-Turn Credit Check",
    body,
    points: delta,
    pointsLabel: formatSignedNumber(delta),
  };
}

function clearCreditFlash() {
  state.creditFlash = null;
}

function showCreditFlash(feedback) {
  if (!feedback || !elements.creditFlash) {
    return;
  }

  clearCreditFlash();
  state.creditFlash = feedback;
  playCreditFlashSound(feedback.direction);
  renderAll();
}

function addCardBalance(player, amount) {
  player.cardBalance = Math.max(0, Math.round(player.cardBalance + amount));
}

function clonePlayerState(player) {
  // Player state can contain mission objects with function properties, so
  // `structuredClone` will throw once the game has been running for a while.
  // A JSON clone keeps the numeric/profile fields we need for forecasting.
  return JSON.parse(JSON.stringify(player));
}

function addLoanBalance(player, amount) {
  player.loanBalance = Math.max(0, Math.round(player.loanBalance + amount));
}

function takeCash(player, amount) {
  const used = Math.min(player.cash, Math.max(0, amount));
  player.cash -= used;
  return used;
}

function takeEmergency(player, amount) {
  const used = Math.min(player.emergencyFund, Math.max(0, amount));
  player.emergencyFund -= used;
  return used;
}

function spendCashThenCard(player, amount) {
  const cashUsed = takeCash(player, amount);
  const shortfall = Math.max(0, amount - cashUsed);
  if (shortfall > 0) {
    addCardBalance(player, shortfall);
  }
  return { cashUsed, shortfall };
}

function depositToEmergencyFund(player, amount) {
  const moved = Math.min(player.cash, Math.max(0, amount));
  player.cash -= moved;
  player.emergencyFund += moved;
  return moved;
}

function payHighestInterestDebt(player, amount) {
  let remaining = Math.max(0, amount);
  const towardCard = Math.min(player.cardBalance, remaining);
  player.cardBalance -= towardCard;
  remaining -= towardCard;
  const towardLoan = Math.min(player.loanBalance, remaining);
  player.loanBalance -= towardLoan;
  remaining -= towardLoan;
  return { towardCard, towardLoan, remaining };
}

function useShield(player, reason, options = {}) {
  const { silent = false } = options;
  if (player.shields <= 0) {
    return false;
  }
  player.shields -= 1;
  if (!silent) {
    logEvent("Protection Token", `${player.name} used a protection token to absorb ${reason}.`);
  }
  return true;
}

function getLoanPayment(player) {
  if (player.loanBalance <= 0) {
    return 0;
  }
  return Math.max(90, Math.round(player.loanBalance * 0.08));
}

function getGoalProgress(player) {
  const savings = getSavings(player);
  const debt = getTotalDebt(player);
  return [
    {
      key: "stability",
      title: "Stability",
      complete: Boolean(player.housing) && player.emergencyFund >= 500,
      detail: `${player.housing ? player.housing.name : "No stable housing"} and ${formatMoney(player.emergencyFund)} emergency fund`,
    },
    {
      key: "mobility",
      title: "Mobility",
      complete: Boolean(player.transport) && !player.transportTrap,
      detail: player.transport ? player.transport.name : "No transport plan yet",
    },
    {
      key: "growth",
      title: "Growth",
      complete: Boolean(player.growthAsset),
      detail: player.growthAsset ? player.growthAsset.name : "No wealth-building asset yet",
    },
    {
      key: "security",
      title: "Security",
      complete: player.creditScore >= 750 && player.crisesSurvived >= 1,
      detail: `${player.creditScore} credit and ${player.crisesSurvived} crisis handled`,
    },
    {
      key: "savings",
      title: "Savings Goal",
      complete: savings >= 4000,
      detail: `${formatMoney(savings)} liquid savings`,
    },
    {
      key: "debt",
      title: "Debt Under Control",
      complete: debt <= 4000,
      detail: `${formatMoney(debt)} total debt`,
    },
  ];
}

function countCompletedGoals(player) {
  return getGoalProgress(player).filter((goal) => goal.complete).length;
}

function checkWinner(player) {
  if (state.winnerId) {
    return true;
  }
  if (reachedFinancialFreedom(player)) {
    state.winnerId = player.id;
    state.endingType = "freedom";
    state.phase = "game-over";
    logEvent(
      "Financial Freedom",
      `${player.name} reached Financial Freedom — 720+ credit, stable housing, $1,500 emergency, debt under control.`
    );
    renderAll();
    showEndGameModal();
    return true;
  }
  return false;
}

function endGameByTurnCap() {
  if (state.winnerId) {
    return;
  }
  const ranked = [...state.players]
    .map((player) => ({ player, score: getCompositeScore(player) }))
    .sort((a, b) => {
      if (b.score.total !== a.score.total) {
        return b.score.total - a.score.total;
      }
      if (b.player.creditScore !== a.player.creditScore) {
        return b.player.creditScore - a.player.creditScore;
      }
      return getSavings(b.player) - getSavings(a.player);
    });
  const winner = ranked[0];
  if (!winner) {
    return;
  }
  state.winnerId = winner.player.id;
  state.endingType = "turn-cap";
  state.phase = "game-over";
  logEvent(
    "Turn Cap Reached",
    `After ${TURN_CAP} rounds, ${winner.player.name} finished on top with a Freedom Score of ${winner.score.totalDisplay}.`
  );
  renderAll();
  showEndGameModal();
}

function getLeader() {
  if (!state.players.length) {
    return null;
  }
  const sorted = [...state.players].sort((left, right) => {
    const compositeGap = getCompositeScore(right).total - getCompositeScore(left).total;
    if (compositeGap !== 0) {
      return compositeGap;
    }
    const scoreGap = right.creditScore - left.creditScore;
    if (scoreGap !== 0) {
      return scoreGap;
    }
    return getSavings(right) - getSavings(left);
  });
  return sorted[0];
}

function getSafeReadyPhase(player) {
  if (!player) {
    return "setup";
  }
  if (player.reflectionModeActive && player.skipNextActionTurn) {
    return "reflection";
  }
  return player.isAI ? "ai-ready" : "ready";
}

function recoverFromTurnError(context, error) {
  if (state.recoveringError) {
    console.error(`Credit Climb hit a nested ${context}:`, error);
    return;
  }

  state.recoveringError = true;
  console.error(`Credit Climb recovered from ${context}:`, error);

  clearCreditFlash();
  state.busy = false;

  if (state.modal && typeof state.modal.resolve === "function") {
    const resolver = state.modal.resolve;
    state.modal = null;
    try {
      resolver(null);
    } catch (resolveError) {
      console.error("Credit Climb modal recovery failed:", resolveError);
    }
  } else {
    state.modal = null;
  }

  const player = getCurrentPlayer();
  if (!state.winnerId) {
    state.phase = getSafeReadyPhase(player);
  }

  logEvent(
    "Recovered Turn",
    `The game hit a snag during ${context}, but the table was reset so ${player ? player.name : "the current player"} can keep going.`
  );
  try {
    renderAll();
  } finally {
    state.recoveringError = false;
  }
}

async function beginTurn() {
  try {
    if (!state.players.length || state.winnerId) {
      return;
    }

    const player = getCurrentPlayer();
    player.turnFlags = createTurnFlags();
    performUpkeep(player);
    checkMissionCompletion(player);
    applyThresholdUnlocks(player);

    if (checkWinner(player)) {
      return;
    }

    if (player.reflectionModeActive && player.skipNextActionTurn) {
      player.skipNextActionTurn = false;
      state.phase = "reflection";
      logEvent(
        "Reflection Turn",
        `${player.name} is below ${REFLECTION_SCORE} credit, so this turn becomes reflection time. No roll this round. The financial advisor recommends using the Hint button before the next big choice.`
      );
      renderAll();
      await flushPlayerNotices(player);

      if (!player.isAI) {
        await showNotice(player, {
          title: "Reflection Turn",
          body: `Your score is still below ${REFLECTION_SCORE}, so this turn is for reflection only. Use the Hint button to check your financial advisor before your next active move.`,
          artId: "repair",
          artLabel: "Financial Advisor",
          buttonLabel: "Got It",
        });
        renderAll();
        return;
      }

      renderAll();
      await delay(850);
      advanceTurn();
      return;
    }

    state.phase = player.isAI ? "ai-ready" : "ready";
    renderAll();
    await flushPlayerNotices(player);
    logEvent("Turn Start", `${player.name} begins turn ${player.totalTurnsTaken} in the ${getLifeStage(player)} stage.`);
    renderAll();

    if (player.isAI) {
      window.setTimeout(() => {
        void runAiTurn();
      }, 850);
    }
  } catch (error) {
    recoverFromTurnError("beginTurn", error);
  }
}

function performUpkeep(player, options = {}) {
  const { silent = false } = options;
  const scoreBeforeUpkeep = player.creditScore;
  const passiveIncome = player.growthAsset ? player.growthAsset.passiveIncome : 0;
  const knowledgeBonus = player.knowledge * 20;
  const income = player.career.income + passiveIncome + knowledgeBonus;
  player.cash += income;

  if (!silent) {
    logEvent("Income", `${player.name} collected ${formatMoney(income)} from ${player.career.name}${passiveIncome ? ` plus ${player.growthAsset.name}` : ""}.`);
  }

  getEssentialBills(player).forEach((bill) => payBill(player, bill, { silent }));

  if (player.cardBalance > 0) {
    handleCardPayment(player, { silent });
  }

  resolveStressedTax(player, { silent });
  maybeGrantFlowState(player, { silent });

  const utilization = getUtilization(player);
  player.lowUtilizationStreak = utilization <= 0.3 ? player.lowUtilizationStreak + 1 : 0;

  player.totalTurnsTaken += 1;
  recalculateCreditScore(player);
  player.lastUpkeepCreditDelta = player.creditScore - scoreBeforeUpkeep;
  player.lastUpkeepCreditLabel = formatSignedNumber(player.lastUpkeepCreditDelta);
  player.lastUpkeepCreditFeedback = buildUpkeepCreditFeedback(player);
}

function payBill(player, bill, options = {}) {
  const { silent = false } = options;
  if (bill.amount <= 0) {
    return;
  }

  const cashCovered = takeCash(player, bill.amount);
  const shortfall = bill.amount - cashCovered;

  if (shortfall <= 0) {
    return;
  }

  if (useShield(player, `${bill.label}`, { silent })) {
    return;
  }

  if (bill.type === "housing") {
    recordMissedPayment(player, "housingDefaultMarks");
    player.housingRisk += 1;
    addLoanBalance(player, shortfall + 40);
    if (player.housingRisk >= 2) {
      if (!silent) {
        logEvent("Housing Trouble", `${player.name} lost stable housing after repeated missed payments.`);
      }
      player.housing = null;
      player.housingRisk = 0;
    }
    return;
  }

  if (bill.type === "transport") {
    recordMissedPayment(player, "transportDefaultMarks");
    player.transportRisk += 1;
    addLoanBalance(player, shortfall + 30);
    if (player.transportRisk >= 2) {
      if (!silent) {
        logEvent("Transport Trouble", `${player.name} lost their current transport plan and has to reset.`);
      }
      player.transport = null;
      player.transportTrap = false;
      player.transportRisk = 0;
    }
    return;
  }

  if (bill.type === "loan") {
    recordMissedPayment(player, "lateLoanMarks");
    addLoanBalance(player, shortfall + 35);
    return;
  }
}

function handleCardPayment(player, options = {}) {
  const { silent = false } = options;
  const minimum = Math.max(35, Math.round(player.cardBalance * 0.2));
  const canPayFull = player.cash >= player.cardBalance;

  if (player.autopayMode === "full" && canPayFull) {
    takeCash(player, player.cardBalance);
    player.cardBalance = 0;
    player.turnFlags.paidFull = true;
    return;
  }

  if (player.cash >= minimum) {
    takeCash(player, minimum);
    player.cardBalance = Math.max(0, player.cardBalance - minimum);
    player.turnFlags.paidMinimum = true;
  } else if (!useShield(player, "a missed card payment", { silent })) {
    recordMissedPayment(player, "lateCardMarks");
    addCardBalance(player, 55);
  }

  if (player.cardBalance > 0) {
    const interestRate = Math.max(0.03, 0.08 - player.knowledge * 0.01);
    player.cardBalance = Math.round(player.cardBalance * (1 + interestRate));
  }
}

function forecastNextCreditCheck(player) {
  const previewPlayer = clonePlayerState(player);
  const currentScore = previewPlayer.creditScore;
  previewPlayer.turnFlags = createTurnFlags();
  performUpkeep(previewPlayer, { silent: true });
  return {
    delta: previewPlayer.creditScore - currentScore,
    score: previewPlayer.creditScore,
    preview: getCreditPreview(previewPlayer),
  };
}

function applyThresholdUnlocks(player) {
  if (player.creditScore < REFLECTION_SCORE) {
    if (!player.reflectionModeActive) {
      player.reflectionModeActive = true;
      player.skipNextActionTurn = true;
      stepPlayerBack(player, 1);
      logEvent(
        "Reflection Time",
        `${player.name} fell below ${REFLECTION_SCORE} credit, stepped back to ${BOARD_SPACES[player.position].name}, and entered reflection time. While the score stays low, every other action turn is skipped.`
      );
      queuePlayerNotice(player, {
        title: "Reflection Time",
        body: `Your credit score fell below ${REFLECTION_SCORE}. You take one step back, and while you stay under ${REFLECTION_SCORE} you must sit out every other action turn. Your financial advisor recommends using the Hint button before risky choices.`,
        artId: "repair",
        artLabel: "Minimum Line",
      });
    }
  } else if (player.reflectionModeActive) {
    player.reflectionModeActive = false;
    player.skipNextActionTurn = false;
    logEvent(
      "Back on Track",
      `${player.name} climbed back above ${REFLECTION_SCORE} credit and cleared reflection time.`
    );
    queuePlayerNotice(player, {
      title: "Back on Track",
      body: `You climbed back above ${REFLECTION_SCORE} credit. Reflection time is over, and you can take every turn again.`,
      artId: "credit",
      artLabel: "Recovery",
    });
  }

  if (player.creditScore >= 670 && !player.limitUpgradeOne) {
    player.limitUpgradeOne = true;
    player.creditLimit += 300;
    logEvent("Credit Unlock", `${player.name} unlocked a higher credit limit and more breathing room.`);
  }

  if (player.creditScore >= 740 && !player.limitUpgradeTwo) {
    player.limitUpgradeTwo = true;
    player.creditLimit += 400;
    player.shields += 1;
    logEvent("Credit Unlock", `${player.name} reached strong credit and gained a protection token.`);
  }

  if (player.creditScore >= DOUBLE_ROLL_UNLOCK_SCORE && !player.doubleRollUnlocked) {
    player.doubleRollUnlocked = true;
    logEvent(
      "Premium Momentum",
      `${player.name} reached ${DOUBLE_ROLL_UNLOCK_SCORE}+ credit and can now roll twice each turn, keeping the better die.`
    );
    queuePlayerNotice(player, {
      title: "Premium Momentum",
      body: `You reached ${DOUBLE_ROLL_UNLOCK_SCORE} credit. From now on, premium credit lets you roll twice each turn and keep the higher result.`,
      artId: "unlock",
      artLabel: "Score Reward",
    });
  }

  if (player.creditScore >= 800 && !player.limitUpgradeThree) {
    player.limitUpgradeThree = true;
    player.shields += 1;
    player.knowledge += 1;
    logEvent("Credit Unlock", `${player.name} reached premium credit and gained bonus protection.`);
  }
}

function drawMission(player) {
  if (player.missions.length >= 2) {
    player.cash += 120;
    player.knowledge += 1;
    logEvent("Mission Bonus", `${player.name} already had enough missions, so they gained a bonus instead.`);
    return;
  }

  const activeMissionIds = player.missions.map((mission) => mission.id);
  const options = MISSION_LIBRARY.filter(
    (mission) =>
      !activeMissionIds.includes(mission.id) &&
      !player.completedMissionIds.includes(mission.id)
  );

  if (!options.length) {
    player.cash += 150;
    player.shields += 1;
    logEvent("Mission Bonus", `${player.name} already conquered every mission type and collected a bonus.`);
    return;
  }

  const mission = { ...randomFrom(options) };
  player.missions.push(mission);
  logEvent("New Mission", `${player.name} picked up "${mission.title}" to chase an extra reward.`);
}

function checkMissionCompletion(player) {
  const remaining = [];
  player.missions.forEach((mission) => {
    if (!mission.isComplete(player)) {
      remaining.push(mission);
      return;
    }

    player.completedMissionIds.push(mission.id);
    mission.applyReward(player);
    applyWellbeing(player, 2, "Mission complete");

    logEvent(
      "Mission Complete",
      `${player.name} completed "${mission.title}" and earned ${mission.rewardText}.`
    );
  });
  player.missions = remaining;
}

function createOption({
  label,
  description,
  effect,
  aiScore,
  resultText,
}) {
  return { label, description, effect, aiScore, resultText };
}

function ensureDecision(decision) {
  return {
    title: decision.title,
    body: decision.body,
    artId: decision.artId || "generic",
    artLabel: decision.artLabel,
    options: decision.options.slice(0, 3),
    // Optional metadata: when a body comes from a profile-specific variant
    // (selectByProfile picked the player's background instead of `default`),
    // we surface that in the modal as a small "Your profile shaped this
    // prompt" badge. This makes the equity claim of the design visible at
    // the moment a player is reading the prompt.
    profileVariant: decision.profileVariant || null,
  };
}

// Returns the profile-specific variant if one exists for this player's
// background, otherwise falls back to `default`. Used by prompt bodies that
// read with genuinely different emotional weight depending on who's playing.
function selectByProfile(player, variants) {
  const profileId = player && player.background && player.background.id;
  const profileName = player && player.background && player.background.name;
  if (profileId && Object.prototype.hasOwnProperty.call(variants, profileId)) {
    return {
      body: variants[profileId],
      fromProfile: true,
      profileName: profileName || null,
    };
  }
  return {
    body: variants.default,
    fromProfile: false,
    profileName: profileName || null,
  };
}

function buildCreditDecision(player) {
  const options = [];

  options.push(
    createOption({
      label: "Set Autopay to Full",
      description: "Prioritize paying the whole card balance whenever cash allows.",
      effect: (current) => {
        current.autopayMode = "full";
        if (current.cardBalance > 0) {
          const payment = Math.min(current.cash, 180);
          current.cash -= payment;
          current.cardBalance = Math.max(0, current.cardBalance - payment);
        }
        applyWellbeing(current, -1, "Tightened up payments");
      },
      aiScore: (current) => 14 + (current.creditScore < 750 ? 16 : 8) + getUtilization(current) * 18,
      resultText: (current) => `${current.name} switched to full autopay and tightened up their credit habits.`,
    })
  );

  options.push(
    createOption({
      label: "Pay Extra on Debt",
      description: "Throw $220 at your highest-interest balance right now.",
      effect: (current) => {
        const paid = takeCash(current, 220);
        const debtHit = payHighestInterestDebt(current, paid);
        if (paid < 220) {
          addCardBalance(current, 220 - paid);
        }
        if (debtHit.towardCard > 0 || debtHit.towardLoan > 0) {
          current.autopayMode = "full";
        }
        // Wellbeing: 0 — proactive debt reduction cancels the cash sting.
      },
      aiScore: (current) => 16 + getUtilization(current) * 34 + (getTotalDebt(current) > 4000 ? 18 : 0),
      resultText: (current) => `${current.name} made an extra debt payment to protect their score.`,
    })
  );

  if (!player.securedCardUsed && player.creditScore < 650) {
    options.push(
      createOption({
        label: "Open a Secured Card",
        description: "Put down $140, raise your limit, and create a safer rebuild path.",
        effect: (current) => {
          const payment = spendCashThenCard(current, 140);
          current.creditLimit += 350;
          current.securedCardUsed = true;
          if (payment.shortfall > 0) {
            addCardBalance(current, 20);
          }
          applyWellbeing(current, -1, "Tied up cash as collateral");
        },
        aiScore: (current) => 18 + (650 - current.creditScore),
        resultText: (current) => `${current.name} opened a secured card to rebuild credit the smart way.`,
      })
    );
  } else {
    options.push(
      createOption({
        label: "Set Autopay to Minimum",
        description: "Preserve cash now, but grow more slowly.",
        effect: (current) => {
          current.autopayMode = "minimum";
          current.cash += 60;
          applyWellbeing(current, 3, "Eased off payments");
        },
        aiScore: (current) => (current.cash < 500 ? 12 : -4) + (getTotalDebt(current) > 5000 ? 8 : 0),
        resultText: (current) => `${current.name} preserved a little extra cash by easing off to minimum autopay.`,
      })
    );
  }

  return ensureDecision({
    title: "Credit Choices",
    body: "Lower balances, protect payments, or create more breathing room.",
    artId: "credit",
    options,
  });
}

function buildLifestyleDecision(player) {
  const variant = selectByProfile(player, {
    default:
      "It's Sana's birthday dinner Thursday. The group chat already picked the place — the one everyone's been posting about. Entrees start at $38 and you've seen how their tables order.",
    scholarship:
      "It's Sana's birthday dinner Thursday. You haven't said yes to a group dinner since October. The place is the one everyone's been posting about — entrees start at $38.",
    "medical-burden":
      "It's Sana's birthday dinner Thursday. Last time the group went out, you were still making payments on the ER bill. Entrees start at $38.",
    "family-support":
      "It's Sana's birthday dinner Thursday. The group chat picked the place — entrees start at $38. You could text mom. You usually do.",
  });
  return ensureDecision({
    title: "Thursday Dinner",
    body: variant.body,
    profileVariant: variant.fromProfile ? variant.profileName : null,
    artId: "shopping",
    options: [
      createOption({
        label: "Stay in this time",
        description: "+$45 stayed in your account. You watch the stories tomorrow morning.",
        effect: (current) => {
          current.cash += 45;
          applyWellbeing(current, -4, "Sat this one out");
        },
        aiScore: (current) => 14 + (current.creditScore < 750 ? 8 : 0),
        resultText: (current) => `${current.name} stayed in for Sana's birthday and kept the cash.`,
      }),
      createOption({
        label: "Go, order carefully",
        description: "Split an app, water, skip dessert. You're there.",
        effect: (current) => {
          spendCashThenCard(current, 120);
          current.turnFlags.splurged = true;
          applyWellbeing(current, 3, "Showed up without going overboard");
        },
        aiScore: (current) => (current.cash > 3500 ? 6 : -8),
        resultText: (current) => `${current.name} made it to dinner and kept the bill small.`,
      }),
      createOption({
        label: "Match the table",
        description: "Order what they're ordering. Cover a round. On the card.",
        effect: (current) => {
          addCardBalance(current, 340);
          current.turnFlags.splurged = true;
          applyWellbeing(current, 10, "Birthday-dinner energy");
        },
        aiScore: (current) => -26 - getUtilization(current) * 32,
        resultText: (current) => `${current.name} covered a round and put the night on the card.`,
      }),
    ],
  });
}

function buildSavingsDecision(player) {
  const variant = selectByProfile(player, {
    default:
      "Your paycheck came in $280 over expected — overtime from last weekend's shifts. Rent's not due for ten days.",
    scholarship:
      "Your paycheck came in $280 over expected — overtime from last weekend's shifts. Tuition's covered. Everything else isn't.",
    "no-safety-net":
      "Your paycheck came in $280 over expected. Last month rent was close. This kind of cushion doesn't come often.",
    "medical-burden":
      "Your paycheck came in $280 over expected — overtime from last weekend's shifts. The ER bill from February still has a balance on it.",
  });
  return ensureDecision({
    title: "Overtime Paycheck",
    body: variant.body,
    profileVariant: variant.fromProfile ? variant.profileName : null,
    artId: "savings",
    options: [
      createOption({
        label: "Park it in savings",
        description: "$220 into the emergency fund. You watch the balance tick up.",
        effect: (current) => {
          const moved = depositToEmergencyFund(current, 220);
          if (moved < 220) {
            addCardBalance(current, 220 - moved);
          }
          applyWellbeing(current, -2, "Locked the windfall away");
        },
        aiScore: (current) => 12 + (current.emergencyFund < 500 ? 18 : 4) + (current.shields === 0 ? 6 : 0),
        resultText: (current) => `${current.name} parked the overtime into emergency savings.`,
      }),
      createOption({
        label: "Throw it at the card",
        description: "$250 straight at your highest-interest balance.",
        effect: (current) => {
          const paid = takeCash(current, 250);
          payHighestInterestDebt(current, paid);
          applyWellbeing(current, -1, "Made the balance smaller");
        },
        aiScore: (current) => 10 + getUtilization(current) * 30 + (getTotalDebt(current) > 4000 ? 15 : 0),
        resultText: (current) => `${current.name} sent the overtime at their highest-interest balance.`,
      }),
      createOption({
        label: "Let the week breathe",
        description: "+$90 side-gig bonus stacks on top. Nothing goes to savings, nothing to debt.",
        effect: (current) => {
          current.cash += 90;
          applyWellbeing(current, 4, "Kept the paycheck liquid");
        },
        aiScore: (current) => (current.cash < 450 ? 18 : 2),
        resultText: (current) => `${current.name} kept the paycheck loose and let the week breathe.`,
      }),
    ],
  });
}

function buildHousingDecision(player) {
  const options = [];

  if (!player.housing) {
    options.push(
      createOption({
        label: "Rent a Shared Apartment",
        description: "Requires 580+ credit. Pay $360 now and $220 each turn.",
        effect: (current) => {
          spendCashThenCard(current, 360);
          current.housing = { name: "Shared Apartment", recurringCost: 220 };
          current.housingRisk = 0;
          applyWellbeing(current, 6, "Got stable housing");
        },
        aiScore: (current) => (!current.housing ? 28 : 4) + (current.creditScore >= 580 ? 12 : -12),
        resultText: (current) => `${current.name} locked in a shared apartment and gained housing stability.`,
      })
    );

    options.push(
      createOption({
        label: "Go for a Premium Apartment",
        description: "Requires 740+ credit. Pay $520 now and $260 each turn for a better lease.",
        effect: (current) => {
          spendCashThenCard(current, 520);
          current.housing = { name: "Premium Apartment", recurringCost: 260 };
          current.housingRisk = 0;
          applyWellbeing(current, 8, "Premium apartment");
        },
        aiScore: (current) => (!current.housing ? 20 : 2) + (current.creditScore >= 740 ? 18 : -18),
        resultText: (current) => `${current.name} used stronger credit to land a premium apartment.`,
      })
    );

    options.push(
      createOption({
        label: "Keep Couch Surfing",
        description: "Pay nothing now, but housing stays unstable and progress slows.",
        effect: (current) => {
          current.cash += 70;
          applyWellbeing(current, -9, "Chronic housing instability");
        },
        aiScore: (current) => (current.cash < 300 ? 12 : -10),
        resultText: (current) => `${current.name} delayed stable housing to preserve cash.`,
      })
    );
  } else {
    options.push(
      createOption({
        label: "Keep the Current Place",
        description: "Save $90 by staying steady and avoiding moving costs.",
        effect: (current) => {
          current.cash += 90;
          current.housingRisk = 0;
          applyWellbeing(current, 1, "Stayed put");
        },
        aiScore: () => 10,
        resultText: (current) => `${current.name} stayed put and kept housing steady.`,
      })
    );

    options.push(
      createOption({
        label: "Negotiate Better Terms",
        description: "Pay $120 to lower rent by $25 per turn going forward.",
        effect: (current) => {
          spendCashThenCard(current, 120);
          current.housing.recurringCost = Math.max(180, current.housing.recurringCost - 25);
          applyWellbeing(current, -1, "Negotiation stress");
        },
        aiScore: (current) => 12 + (current.housing.recurringCost > 220 ? 8 : 0),
        resultText: (current) => `${current.name} negotiated a better lease and lowered future bills.`,
      })
    );

    options.push(
      createOption({
        label: "Upgrade Neighborhood",
        description: "Spend $260 now, raise rent by $20, and improve your living setup.",
        effect: (current) => {
          spendCashThenCard(current, 260);
          current.housing = {
            name: "Upgraded Apartment",
            recurringCost: current.housing.recurringCost + 20,
          };
          applyWellbeing(current, 5, "Upgraded neighborhood");
        },
        aiScore: (current) => (current.creditScore >= 740 && current.cash > 2200 ? 8 : -6),
        resultText: (current) => `${current.name} upgraded their place for a smoother living situation.`,
      })
    );
  }

  return ensureDecision({
    title: "Housing Move",
    body: "Stable housing helps you win, but your credit changes what is available.",
    artId: "housing",
    options,
  });
}

function buildTransportDecision(player) {
  const options = [];

  if (!player.transport) {
    options.push(
      createOption({
        label: "Grab a City Transit Pass",
        description: "Pay $90 now and $60 each turn for safe, low-cost mobility.",
        effect: (current) => {
          spendCashThenCard(current, 90);
          current.transport = { name: "Transit Pass", recurringCost: 60 };
          current.transportTrap = false;
          current.transportRisk = 0;
          applyWellbeing(current, 2, "Reliable mobility");
        },
        aiScore: (current) => (!current.transport ? 18 : 6) + (current.creditScore < 670 ? 8 : 0),
        resultText: (current) => `${current.name} chose affordable transit and protected monthly cash flow.`,
      })
    );

    options.push(
      createOption({
        label: "Finance a Reliable Used Car",
        description: "Requires 670+ credit. Pay $260 now, add $720 loan debt, and $150 per turn.",
        effect: (current) => {
          spendCashThenCard(current, 260);
          addLoanBalance(current, 720);
          current.transport = { name: "Reliable Used Car", recurringCost: 150 };
          current.transportTrap = current.creditScore < 670;
          current.transportRisk = 0;
          applyWellbeing(current, 4, "Got your own ride");
        },
        aiScore: (current) => (!current.transport ? 22 : 6) + (current.creditScore >= 670 ? 14 : -16),
        resultText: (current) => `${current.name} financed a reliable used car to unlock better mobility.`,
      })
    );

    options.push(
      createOption({
        label: "Take a Buy-Here Pay-Here Deal",
        description: "Easy approval, but it adds $1,150 debt and a painful $230 bill each turn.",
        effect: (current) => {
          spendCashThenCard(current, 120);
          addLoanBalance(current, 1150);
          current.transport = { name: "Debt Trap Ride", recurringCost: 230 };
          current.transportTrap = true;
          current.transportRisk = 0;
          addBadLoanMark(current, 1);
          applyWellbeing(current, 3, "Fast-approval relief");
        },
        aiScore: () => -28,
        resultText: (current) => `${current.name} got approved fast, but the transport deal is a debt trap.`,
      })
    );
  } else {
    options.push(
      createOption({
        label: "Maintain Your Current Ride",
        description: "Spend $90 on maintenance and reduce future risk.",
        effect: (current) => {
          spendCashThenCard(current, 90);
          current.transportRisk = 0;
          applyWellbeing(current, -1, "Chore maintenance");
        },
        aiScore: () => 12,
        resultText: (current) => `${current.name} kept their transportation reliable with routine upkeep.`,
      })
    );

    options.push(
      createOption({
        label: "Trade Down to Transit",
        description: "Cut costs by switching to a lower monthly transit plan.",
        effect: (current) => {
          current.transport = { name: "Transit Pass", recurringCost: 60 };
          current.transportTrap = false;
          current.transportRisk = 0;
          applyWellbeing(current, -2, "Downgrade sting");
        },
        aiScore: (current) => (current.transport.recurringCost > 150 ? 14 : 4),
        resultText: (current) => `${current.name} traded down to transit and lowered monthly costs.`,
      })
    );

    options.push(
      createOption({
        label: "Upgrade the Ride",
        description: "Spend $240, add $320 debt, and improve your flexibility.",
        effect: (current) => {
          spendCashThenCard(current, 240);
          addLoanBalance(current, 320);
          current.transport = { name: "Upgraded Car", recurringCost: 170 };
          current.transportTrap = false;
          current.transportRisk = 0;
          applyWellbeing(current, 5, "Upgraded ride");
        },
        aiScore: (current) => (current.creditScore >= 740 && current.cash > 2400 ? 7 : -4),
        resultText: (current) => `${current.name} upgraded transportation and kept it under control.`,
      })
    );
  }

  return ensureDecision({
    title: "Mobility Decision",
    body: "A good ride opens doors. A bad deal can follow you for years.",
    artId: "transport",
    options,
  });
}

function buildGrowthDecision(player) {
  const options = [];

  if (!player.growthAsset) {
    options.push(
      createOption({
        label: "Start a Side Hustle",
        description: "Invest $220 now and earn $150 passive income each turn.",
        effect: (current) => {
          spendCashThenCard(current, 220);
          current.growthAsset = { name: "Side Hustle", passiveIncome: 150, value: 850 };
          applyWellbeing(current, -2, "Side hustle grind");
        },
        aiScore: (current) => (!current.growthAsset ? 24 : 6) + (current.cash > 500 ? 8 : -8),
        resultText: (current) => `${current.name} launched a side hustle and opened a growth lane.`,
      })
    );

    options.push(
      createOption({
        label: "Start Investing",
        description: "Requires 740+ credit. Put $340 to work and earn $130 each turn.",
        effect: (current) => {
          spendCashThenCard(current, 340);
          current.growthAsset = { name: "Index Fund", passiveIncome: 130, value: 980 };
          applyWellbeing(current, -1, "Delayed gratification");
        },
        aiScore: (current) => (!current.growthAsset ? 18 : 4) + (current.creditScore >= 740 ? 14 : -10),
        resultText: (current) => `${current.name} started investing for a steadier future.`,
      })
    );

    options.push(
      createOption({
        label: "Wait and Save",
        description: "Bank $110 instead of investing right now.",
        effect: (current) => {
          current.cash += 110;
          applyWellbeing(current, 1, "No pressure to act");
        },
        aiScore: (current) => (current.cash < 450 ? 16 : 1),
        resultText: (current) => `${current.name} passed on growth for now and held onto more cash.`,
      })
    );
  } else {
    options.push(
      createOption({
        label: "Reinvest the Profits",
        description: "Spend $190 to increase passive income by $45 each turn.",
        effect: (current) => {
          spendCashThenCard(current, 190);
          current.growthAsset.passiveIncome += 45;
          current.growthAsset.value += 220;
          applyWellbeing(current, -1, "Reinvested instead of spending");
        },
        aiScore: (current) => 14 + (getSavings(current) > 2000 ? 8 : 0),
        resultText: (current) => `${current.name} reinvested and grew their wealth-building engine.`,
      })
    );

    options.push(
      createOption({
        label: "Take Profits to Savings",
        description: "Move $180 into your emergency fund.",
        effect: (current) => {
          current.cash += 180;
          depositToEmergencyFund(current, 180);
          applyWellbeing(current, 1, "Padded the buffer");
        },
        aiScore: (current) => (current.emergencyFund < 500 ? 18 : 6),
        resultText: (current) => `${current.name} skimmed profits into cash reserves.`,
      })
    );

    options.push(
      createOption({
        label: "Hold Steady",
        description: "No extra cost. Keep current passive income rolling.",
        effect: (current) => {
          applyWellbeing(current, 1, "Let things run");
        },
        aiScore: () => 7,
        resultText: (current) => `${current.name} let the current growth plan keep compounding.`,
      })
    );
  }

  return ensureDecision({
    title: "Growth Move",
    body: "Pick the move that helps future-you, not just current-you.",
    artId: "growth",
    options,
  });
}

function buildLoanShopDecision(player) {
  const options = [
    createOption({
      label: "Take the Credit-Builder Loan",
      description: "Borrow $320, owe $350 total, and avoid the worst predatory terms.",
      effect: (current) => {
        current.cash += 320;
        addLoanBalance(current, 350);
        clearBadLoanStatus(current, 1);
        applyWellbeing(current, 2, "Cash relief without predatory terms");
      },
      aiScore: (current) => (current.cash < 300 ? 12 : 2) + (current.creditScore < 670 ? 8 : 0),
      resultText: (current) => `${current.name} chose the safer loan option and avoided a trap.`,
    }),
    createOption({
      label: "Take the Payday Trap",
      description: "Borrow $540 now, but owe $860 and add a lasting bad-loan mark.",
      effect: (current) => {
        current.cash += 540;
        addLoanBalance(current, 860);
        addBadLoanMark(current, 1);
        applyWellbeing(current, 4, "Fast-cash thrill");
      },
      aiScore: (current) => (current.cash < 120 ? 4 : -28),
      resultText: (current) => `${current.name} grabbed quick cash and stepped into a predatory loan.`,
    }),
    createOption({
      label: "Walk Away",
      description: "Take no new debt and gain 1 knowledge instead.",
      effect: (current) => {
        current.knowledge += 1;
        applyWellbeing(current, -1, "Willpower fatigue");
      },
      aiScore: (current) => 18 + (current.badLoan ? 8 : 0),
      resultText: (current) => `${current.name} walked away from risky borrowing and got smarter instead.`,
    }),
  ];

  if (player.badLoan && player.creditScore >= 670) {
    options.unshift(
      createOption({
        label: "Refinance the Bad Loan",
        description: "Requires 670+ credit. Cut loan debt by 30% and repair some damage.",
        effect: (current) => {
          current.loanBalance = Math.round(current.loanBalance * 0.7);
          clearBadLoanStatus(current, 1);
          current.refinanced = true;
          applyWellbeing(current, 3, "Cleaned up a bad loan");
        },
        aiScore: () => 40,
        resultText: (current) => `${current.name} refinanced a bad loan and finally got room to breathe.`,
      })
    );
  }

  return ensureDecision({
    title: "Loan Shop",
    body: "Fast approval is not the same as a good deal.",
    artId: "loan",
    options,
  });
}

function buildRepairDecision(player) {
  return ensureDecision({
    title: "Second Chance",
    body: "You found a chance to clean up damage before it gets worse.",
    artId: "repair",
    options: [
      createOption({
        label: "Check Your Credit Report",
        description: "Clear a billing or late-payment mark and clean up statement damage.",
        effect: (current) => {
          if (!resolveBillingIssue(current, 90)) {
            clearDerogatoryMark(current, ["lateCardMarks", "lateLoanMarks", "transportDefaultMarks"]);
          }
          applyWellbeing(current, -1, "Tedious admin cleanup");
        },
        aiScore: (current) => 18 + (current.creditScore < 750 ? 14 : 0),
        resultText: (current) => `${current.name} reviewed their report and tightened their profile.`,
      }),
      createOption({
        label: "Pay Off a Damaging Balance",
        description: "Throw $260 at debt and reduce utilization fast.",
        effect: (current) => {
          const paid = takeCash(current, 260);
          payHighestInterestDebt(current, paid);
          applyWellbeing(current, -2, "Attacked a damaging balance");
        },
        aiScore: (current) => 14 + getUtilization(current) * 36,
        resultText: (current) => `${current.name} attacked a damaging balance and improved their profile.`,
      }),
      createOption({
        label: "Build Consumer Protections",
        description: "Gain 1 shield and 1 knowledge for the next crisis.",
        effect: (current) => {
          current.shields += 1;
          current.knowledge += 1;
          applyWellbeing(current, 1, "Feeling a little safer");
        },
        aiScore: (current) => (current.shields === 0 ? 18 : 9),
        resultText: (current) => `${current.name} built more protection before the next curveball hit.`,
      }),
    ],
  });
}

function buildOpportunityDecision(player) {
  if (!player.housing) {
    return buildHousingDecision(player);
  }
  if (!player.transport || player.transportTrap) {
    return buildTransportDecision(player);
  }
  if (!player.growthAsset) {
    return buildGrowthDecision(player);
  }
  if (player.creditScore < 740 || getUtilization(player) > 0.3) {
    return buildRepairDecision(player);
  }

  return ensureDecision({
    title: "Strong Credit Unlock",
    body: "Your score opened a door. Use it to save, repay, or grow.",
    artId: "unlock",
    options: [
      createOption({
        label: "Waive Security Deposits",
        description: "Collect $260 back thanks to strong credit and lower fees.",
        effect: (current) => {
          current.cash += 260;
          applyWellbeing(current, 3, "Cash back relief");
        },
        aiScore: () => 14,
        resultText: (current) => `${current.name} used strong credit to avoid costly deposits and fees.`,
      }),
      createOption({
        label: "Prepay a Big Chunk of Debt",
        description: "Pay $320 now and cut down future drag.",
        effect: (current) => {
          const paid = takeCash(current, 320);
          payHighestInterestDebt(current, paid);
          applyWellbeing(current, -2, "Heavy debt discipline");
        },
        aiScore: (current) => 12 + (getTotalDebt(current) > 2500 ? 8 : 0),
        resultText: (current) => `${current.name} turned strong credit into cleaner finances.`,
      }),
      createOption({
        label: "Expand Your Growth Asset",
        description: "Invest $260 to add $55 passive income each turn.",
        effect: (current) => {
          spendCashThenCard(current, 260);
          if (!current.growthAsset) {
            current.growthAsset = { name: "Side Hustle", passiveIncome: 150, value: 850 };
          } else {
            current.growthAsset.passiveIncome += 55;
            current.growthAsset.value += 280;
          }
          applyWellbeing(current, -1, "Reinvested energy");
        },
        aiScore: (current) => (current.cash > 1200 ? 16 : 3),
        resultText: (current) => `${current.name} doubled down on growth and future income.`,
      }),
    ],
  });
}

function buildFreedomDecision(player) {
  const goals = getGoalProgress(player);
  const unmet = goals.filter((goal) => !goal.complete);

  if (!unmet.length) {
    return null;
  }

  const firstGap = unmet[0];
  if (firstGap.key === "stability") {
    player.cash += 140;
    depositToEmergencyFund(player, 140);
    logEvent("Freedom Check", `${player.name} saw the gap in stability and banked more emergency money.`);
    return null;
  }

  if (firstGap.key === "mobility") {
    player.cash += 120;
    logEvent("Freedom Check", `${player.name} got a helpful push toward better transportation.`);
    return null;
  }

  if (firstGap.key === "growth") {
    player.cash += 180;
    logEvent("Freedom Check", `${player.name} got seed money to help start a growth asset.`);
    return null;
  }

  if (firstGap.key === "security") {
    player.shields += 1;
    clearDerogatoryMark(player, ["lateCardMarks", "lateLoanMarks", "unresolvedBillingMarks", "transportDefaultMarks"]);
    logEvent("Freedom Check", `${player.name} cleaned up one credit issue and gained protection for the next emergency.`);
    return null;
  }

  if (firstGap.key === "savings") {
    player.cash += 220;
    logEvent("Freedom Check", `${player.name} found a boost that moved them closer to the savings goal.`);
    return null;
  }

  if (firstGap.key === "debt") {
    const paid = takeCash(player, Math.min(player.cash, 240));
    payHighestInterestDebt(player, paid);
    logEvent("Freedom Check", `${player.name} used the checkpoint to attack debt before the finish line.`);
  }
  return null;
}

const LIFE_EVENT_FACTORIES = [
  (player) => {
    const variant = selectByProfile(player, {
      default:
        "Your screen cracked again last week — the hairline from September finally spread. Three people in your group chat have the new model. It drops Friday.",
      scholarship:
        "Your screen cracked again last week. Three people in your group chat have the new model. Your phone is also your laptop.",
      "no-safety-net":
        "Your screen cracked again last week. Three people in your group chat have the new model. If this one dies completely, there's no backup.",
      "family-support":
        "Your screen cracked again last week. Three people in your group chat have the new model. Dad already offered to send his old one.",
    });
    return ensureDecision({
      title: "Screen Cracked",
      body: variant.body,
      profileVariant: variant.fromProfile ? variant.profileName : null,
      artId: "phone",
      options: [
        createOption({
          label: "Tape the cracks",
          description: "+$35 cash. Tap around the broken corner like you've been doing.",
          effect: (current) => {
            current.cash += 35;
            applyWellbeing(current, -4, "Cracked-glass daily reminder");
          },
          aiScore: () => 16,
          resultText: (current) => `${current.name} lived with the cracks and kept the cash.`,
        }),
        createOption({
          label: "Buy a refurb",
          description: "-$220 cash. A mid-tier refurb works, but it isn't the one everyone else has.",
          effect: (current) => {
            spendCashThenCard(current, 220);
            current.turnFlags.splurged = true;
            applyWellbeing(current, 4, "Got a phone that works");
          },
          aiScore: (current) => (current.cash > 2500 ? 6 : -8),
          resultText: (current) => `${current.name} grabbed a refurb and quieted the problem.`,
        }),
        createOption({
          label: "Finance the new one",
          description: "+$340 card balance. In the group photo tomorrow.",
          effect: (current) => {
            addCardBalance(current, 340);
            current.turnFlags.splurged = true;
            applyWellbeing(current, 9, "New phone, back in the group");
          },
          aiScore: () => -24,
          resultText: (current) => `${current.name} financed the new phone and joined the group photo.`,
        }),
      ],
    });
  },
  (player) =>
    ensureDecision({
      title: "Billing Error",
      body: "A mystery charge just appeared on your statement.",
      artId: "billing",
      options: [
        createOption({
          label: "Dispute It Immediately",
          description: "Remove the charge, gain 1 knowledge, and keep a billing mark off your report.",
          effect: (current) => {
            if (!resolveBillingIssue(current, 90)) {
              current.billingErrorsResolved += 1;
            }
            current.knowledge += 1;
            applyWellbeing(current, -1, "Call-queue hold music");
          },
          aiScore: () => 28,
          resultText: (current) => `${current.name} disputed the billing error and protected their credit.`,
        }),
        createOption({
          label: "Pay It and Move On",
          description: "Lose $90 now, but keep the problem small.",
          effect: (current) => {
            spendCashThenCard(current, 90);
            applyWellbeing(current, -2, "Feeling ripped off");
          },
          aiScore: () => 8,
          resultText: (current) => `${current.name} paid the charge just to move on.`,
        }),
        createOption({
          label: "Ignore It",
          description: "The charge sticks, utilization rises, and the error stays unresolved.",
          effect: (current) => {
            addUnresolvedBillingMark(current, 1);
            addCardBalance(current, 90);
            applyWellbeing(current, 2, "Avoidance relief");
          },
          aiScore: () => -20,
          resultText: (current) => `${current.name} ignored the billing error and let it hurt their finances.`,
        }),
      ],
    }),
  (player) => {
    const variant = selectByProfile(player, {
      default:
        "An envelope came from your uncle — $220 in cash and a note that says 'Saw your last text. This might help. No strings.'",
      "family-support":
        "An envelope came from your aunt — $220 and a note that says 'for whatever.' She sends these sometimes. You haven't told her things are tight.",
      "no-safety-net":
        "An envelope came from your uncle — $220 and a note: 'Saw your last text. This might help.' You didn't tell him things were bad.",
      "medical-burden":
        "An envelope came from your cousin — $220 and a note: 'Heard about the bill. Not a loan.' You'd written it off a month ago.",
    });
    return ensureDecision({
      title: "Envelope From Family",
      body: variant.body,
      profileVariant: variant.fromProfile ? variant.profileName : null,
      artId: "support",
      options: [
        createOption({
          label: "All of it into savings",
          description: "$220 to the emergency fund. The money isn't yours to touch anymore.",
          effect: (current) => {
            current.cash += 220;
            depositToEmergencyFund(current, 220);
            applyWellbeing(current, -2, "Locked it away fast");
          },
          aiScore: (current) => (current.emergencyFund < 500 ? 22 : 10),
          resultText: (current) => `${current.name} moved the gift straight into emergency savings.`,
        }),
        createOption({
          label: "Hit the card with it",
          description: "$220 straight at your highest-interest balance.",
          effect: (current) => {
            current.cash += 220;
            const paid = takeCash(current, 220);
            payHighestInterestDebt(current, paid);
            applyWellbeing(current, -1, "Used the help to shrink debt");
          },
          aiScore: (current) => 14 + (getTotalDebt(current) > 3500 ? 8 : 0),
          resultText: (current) => `${current.name} put the envelope toward their highest-interest balance.`,
        }),
        createOption({
          label: "Let it be money",
          description: "+$220 cash. You already know what for.",
          effect: (current) => {
            current.cash += 220;
            current.turnFlags.splurged = true;
            applyWellbeing(current, 9, "Windfall stayed in your wallet");
          },
          aiScore: () => -6,
          resultText: (current) => `${current.name} kept the envelope in their wallet.`,
        }),
      ],
    });
  },
  (player) => {
    const variant = selectByProfile(player, {
      default:
        "The certification prep course starts next weekend. Six Saturdays, $180, and the exam is in January. Half your cohort already signed up.",
      scholarship:
        "The certification prep course starts next weekend. Six Saturdays, $180, exam in January. Your scholarship covers tuition — not this.",
      "no-safety-net":
        "The certification prep course starts next weekend. Six Saturdays, $180, exam in January. $180 is the cushion between you and rent.",
      "mentor-network":
        "The certification prep course starts next weekend. Your mentor mentioned it at your last check-in — 'this is the one, if you can swing it.' Six Saturdays, $180, exam in January.",
    });
    return ensureDecision({
      title: "Certification Course",
      body: variant.body,
      profileVariant: variant.fromProfile ? variant.profileName : null,
      artId: "training",
      options: [
        createOption({
          label: "Sign up tonight",
          description: "$180 tuition. Weekends gone until December. Passing the exam bumps your paycheck.",
          effect: (current) => {
            spendCashThenCard(current, 180);
            current.career = {
              ...current.career,
              income: current.career.income + 70,
            };
            applyWellbeing(current, -4, "Saturdays gone");
          },
          aiScore: (current) => 18 + (current.cash > 250 ? 6 : -4),
          resultText: (current) => `${current.name} signed up for the certification and handed over their Saturdays.`,
        }),
        createOption({
          label: "Ask your manager first",
          description: "Company covers $100 of it, +1 knowledge. Your income stays flat.",
          effect: (current) => {
            current.cash += 100;
            current.knowledge += 1;
            applyWellbeing(current, -1, "Dignity cost of asking");
          },
          aiScore: () => 10,
          resultText: (current) => `${current.name} asked the company to chip in and took the safer path.`,
        }),
        createOption({
          label: "Sit this cycle out",
          description: "No cost. No income bump. Three classmates pass the exam in January.",
          effect: (current) => {
            applyWellbeing(current, -3, "Watched from the sidelines");
          },
          aiScore: () => 2,
          resultText: (current) => `${current.name} sat this certification cycle out.`,
        }),
      ],
    });
  },
];

const CRISIS_FACTORIES = [
  (player) =>
    ensureDecision({
      title: "Medical Emergency",
      body: "A sudden medical bill lands hard. How do you cover it?",
      artId: "medical",
      options: [
        createOption({
          label: "Use the Emergency Fund",
          description: "Spend $320 from savings and stay on track.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            const used = takeEmergency(current, 320);
            const shortfall = 320 - used;
            if (shortfall > 0) {
              spendCashThenCard(current, shortfall);
            }
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -3, "Emergency, even handled cleanly");
          },
          aiScore: (current) => 26 + (current.emergencyFund >= 320 ? 10 : -4),
          resultText: (current) => `${current.name} used the emergency fund to survive the medical bill.`,
        }),
        createOption({
          label: "Swipe the Card",
          description: "Add $360 to your card balance and raise utilization.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            addCardBalance(current, 360);
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -5, "Swiped the card under pressure");
          },
          aiScore: (current) => (current.emergencyFund < 150 ? 8 : -8),
          resultText: (current) => `${current.name} leaned on the credit card to absorb the medical emergency.`,
        }),
        createOption({
          label: "Miss a Payment Elsewhere",
          description: "Protect cash now, but add a real missed-payment mark to your history.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            recordMissedPayment(current, "lateLoanMarks");
            addLoanBalance(current, 120);
            applyWellbeing(current, -8, "Cascade of guilt and stress");
          },
          aiScore: () => -30,
          resultText: (current) => `${current.name} took the hit and missed a payment to survive the crisis.`,
        }),
      ],
    }),
  (player) =>
    ensureDecision({
      title: "Hours Cut at Work",
      body: "Your paycheck just shrank. How do you cover the gap?",
      artId: "paycheck",
      options: [
        createOption({
          label: "Tap Cash and Savings",
          description: "Lose $260 now, but keep all obligations current.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            const fromEmergency = takeEmergency(current, 140);
            const remainder = 260 - fromEmergency;
            spendCashThenCard(current, remainder);
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -3, "Income shock, covered");
          },
          aiScore: (current) => 20 + (getSavings(current) > 300 ? 8 : 0),
          resultText: (current) => `${current.name} covered the income drop without falling behind.`,
        }),
        createOption({
          label: "Use a Protection Token",
          description: "Spend a shield instead of taking on new damage.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            if (!useShield(current, "an income shock")) {
              addCardBalance(current, 180);
            }
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -2, "Shield absorbed the worst");
          },
          aiScore: (current) => (current.shields > 0 ? 24 : 2),
          resultText: (current) => `${current.name} used protection to keep the setback from snowballing.`,
        }),
        createOption({
          label: "Take a Bad Short-Term Loan",
          description: "Get through the month, but add $320 debt and another bad-loan mark.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            addLoanBalance(current, 320);
            addBadLoanMark(current, 1);
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -6, "Predatory-loan dread");
          },
          aiScore: (current) => (current.cash < 150 ? 6 : -20),
          resultText: (current) => `${current.name} survived the income shock, but at the cost of new bad debt.`,
        }),
      ],
    }),
  (player) =>
    ensureDecision({
      title: "Housing Crisis",
      body: "A repair or move-out surprise just hit your housing plan.",
      artId: "housing",
      artLabel: "Housing Pressure",
      options: [
        createOption({
          label: "Pay the Cost and Stay Stable",
          description: "Cover $280 now and keep housing secure.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            const emergencyUse = takeEmergency(current, 160);
            const remainder = 280 - emergencyUse;
            spendCashThenCard(current, remainder);
            current.housingRisk = 0;
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -3, "Housing surprise handled");
          },
          aiScore: (current) => 20 + (current.housing ? 8 : 0),
          resultText: (current) => `${current.name} paid the housing surprise and kept stability intact.`,
        }),
        createOption({
          label: "Use a Shield Token",
          description: "Burn protection to keep your lease from wobbling.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            if (!useShield(current, "a housing emergency")) {
              addCardBalance(current, 190);
            }
            current.housingRisk = 0;
            current.turnFlags.crisisHandled = true;
            applyWellbeing(current, -2, "Shield softened the blow");
          },
          aiScore: (current) => (current.shields > 0 ? 22 : 4),
          resultText: (current) => `${current.name} used protection to keep the housing crisis from spreading.`,
        }),
        createOption({
          label: "Delay It",
          description: "Miss the fix, add a housing default mark, and increase housing risk.",
          effect: (current) => {
            current.turnFlags.facedCrisis = true;
            recordMissedPayment(current, "housingDefaultMarks");
            current.housingRisk += 1;
            addLoanBalance(current, 100);
            applyWellbeing(current, -7, "Housing instability dread");
          },
          aiScore: () => -26,
          resultText: (current) => `${current.name} delayed the fix and let the housing crisis hurt their credit.`,
        }),
      ],
    }),
];

const SETBACK_FACTORIES = [
  () => ({
    title: "Unexpected Medical Expense",
    artId: "medical",
    artLabel: "Hard Luck",
    apply: (current) => {
      addCardBalance(current, 340);
      applyWellbeing(current, -5, "Unexpected medical bill");
    },
    getBody: () =>
      `An unexpected medical bill landed on your card. Utilization jumped and your balance rose by ${formatMoney(340)}. That damage will pull against your score on the next credit recalculation.`,
    getLog: (current) =>
      `${current.name} got hit with an unexpected medical bill and added ${formatMoney(340)} to card balances.`,
  }),
  () => ({
    title: "Missed Credit Card Payment",
    artId: "billing",
    artLabel: "Hard Luck",
    requires: (current) => current.cardBalance > 0,
    apply: (current) => {
      recordMissedPayment(current, "lateCardMarks");
      addCardBalance(current, 85);
      applyWellbeing(current, -3, "Missed card payment");
    },
    getBody: () =>
      `You accidentally missed your credit card payment. Late fees added ${formatMoney(85)} to the balance and a real late-payment mark hit your history.`,
    getLog: (current) =>
      `${current.name} missed a credit card payment and picked up ${formatMoney(85)} in extra balance plus a late-payment mark.`,
  }),
  () => ({
    title: "Missed Loan Payment",
    artId: "paycheck",
    artLabel: "Hard Luck",
    requires: (current) => current.loanBalance > 0,
    apply: (current) => {
      recordMissedPayment(current, "lateLoanMarks");
      addLoanBalance(current, 125);
      applyWellbeing(current, -4, "Missed loan payment dread");
    },
    getBody: () =>
      `You were stretched thin and missed a loan payment. Fees added ${formatMoney(125)} to what you owe and a late-loan mark was added to your history.`,
    getLog: (current) =>
      `${current.name} missed a loan payment, added ${formatMoney(125)} to loan debt, and took a late-loan mark.`,
  }),
  () => ({
    title: "Utility Bill Sent Late",
    artId: "billing",
    artLabel: "Hard Luck",
    apply: (current) => {
      recordMissedPayment(current);
      addUnresolvedBillingMark(current, 1);
      addCardBalance(current, 140);
      applyWellbeing(current, -3, "Admin failure stress");
    },
    getBody: () =>
      `A utility bill slipped through the cracks and reported late. Another ${formatMoney(140)} hit your balances, and the late report added new derogatory damage.`,
    getLog: (current) =>
      `${current.name} had a utility bill report late, added ${formatMoney(140)} to balances, and took new derogatory damage.`,
  }),
];

function buildKnowledgeEffect(player) {
  const cards = [
    {
      title: "Check Your Report",
      body: `${player.name} reviewed their report and found small fixes.`,
      apply: (current) => {
        current.knowledge += 1;
        if (!resolveBillingIssue(current, 90)) {
          clearDerogatoryMark(current, ["lateCardMarks", "lateLoanMarks", "unresolvedBillingMarks"]);
        }
        applyWellbeing(current, 1, "Feeling informed");
      },
    },
    {
      title: "Know Your Rights",
      body: `${player.name} learned consumer protections and gained a shield.`,
      apply: (current) => {
        current.knowledge += 1;
        current.shields += 1;
        applyWellbeing(current, 2, "Empowerment");
      },
    },
    {
      title: "Utilization Lesson",
      body: `${player.name} learned how low balances improve borrowing power.`,
      apply: (current) => {
        const paid = takeCash(current, Math.min(120, current.cash));
        payHighestInterestDebt(current, paid);
        applyWellbeing(current, -1, "Should-be-doing-more guilt");
      },
    },
    {
      title: "Comparison Shopping",
      body: `${player.name} learned to compare offers and saved money.`,
      apply: (current) => {
        current.cash += 140;
        current.knowledge += 1;
        applyWellbeing(current, 2, "Got a good deal");
      },
    },
  ];

  const card = randomFrom(cards);
  card.apply(player);
  logEvent(card.title, card.body);
}

function triggerRandomSetback(player) {
  const availableSetbacks = SETBACK_FACTORIES
    .map((factory) => factory())
    .filter((setback) => !setback.requires || setback.requires(player));
  const setback = randomFrom(availableSetbacks);

  setback.apply(player);

  logEvent(setback.title, setback.getLog(player));
  queuePlayerNotice(player, {
    title: setback.title,
    body: setback.getBody(player),
    artId: setback.artId,
    artLabel: setback.artLabel,
    buttonLabel: "Keep Climbing",
  });
}

async function offerDecision(player, decision) {
  if (!decision || !decision.options.length) {
    return null;
  }

  if (player.isAI) {
    await delay(700);
    const picked = chooseAiOption(player, decision);
    applyDecisionChoice(player, decision, picked);
    renderAll();
    return picked;
  }

  return new Promise((resolve) => {
    state.modal = { mode: "decision", playerId: player.id, decision, resolve };
    renderAll();
  });
}

function chooseAiOption(player, decision) {
  return decision.options.reduce((best, option) => {
    const baseScore = option.aiScore ? option.aiScore(player) : 0;
    let wellbeingAdjustment = 0;

    try {
      const clone = clonePlayerState(player);
      option.effect(clone);
      const projectedWellbeing = clone.wellbeing;
      const wellbeingDelta = projectedWellbeing - player.wellbeing;

      // Mild lift for options that recover when already below 40.
      if (player.wellbeing < 40 && wellbeingDelta > 0) {
        wellbeingAdjustment += wellbeingDelta * 0.6;
      }
      // Graduated penalty for pushing below 35.
      if (projectedWellbeing < 35) {
        wellbeingAdjustment -= (35 - projectedWellbeing) * 0.7;
      }
      // Hard avoidance — don't voluntarily crash into burnout.
      if (projectedWellbeing < 15 && player.wellbeing >= 15) {
        wellbeingAdjustment -= 12;
      }
    } catch (err) {
      // Effect couldn't be simulated cleanly — fall back to base score.
    }

    const score = baseScore + wellbeingAdjustment;
    if (!best || score > best.score) {
      return { option, score };
    }
    return best;
  }, null).option;
}

function applyDecisionChoice(player, decision, option) {
  const beforeCreditForecast = forecastNextCreditCheck(player);
  option.effect(player);
  if (option.resultText) {
    logEvent(decision.title, option.resultText(player));
  } else {
    logEvent(decision.title, `${player.name} chose ${option.label}.`);
  }

  if (player.turnFlags.facedCrisis && !player.turnFlags.missedPayment) {
    player.turnFlags.crisisHandled = true;
  }

  checkMissionCompletion(player);
  applyThresholdUnlocks(player);
  checkWinner(player);
  return buildCreditFlashFeedback(beforeCreditForecast, forecastNextCreditCheck(player));
}

async function handleSpace(player, space) {
  if (state.winnerId) {
    return;
  }

  switch (space.kind) {
    case "start":
      player.cash += 120;
      logEvent("Fresh Start", `${player.name} landed on Fresh Start and grabbed a small bonus.`);
      break;
    case "mission":
      drawMission(player);
      break;
    case "credit":
      await offerDecision(player, buildCreditDecision(player));
      break;
    case "life":
      await offerDecision(player, randomFrom(LIFE_EVENT_FACTORIES)(player));
      break;
    case "opportunity":
      await offerDecision(player, buildOpportunityDecision(player));
      break;
    case "savings":
      await offerDecision(player, buildSavingsDecision(player));
      break;
    case "housing":
      await offerDecision(player, buildHousingDecision(player));
      break;
    case "knowledge":
      buildKnowledgeEffect(player);
      break;
    case "lifestyle":
      await offerDecision(player, buildLifestyleDecision(player));
      break;
    case "transport":
      await offerDecision(player, buildTransportDecision(player));
      break;
    case "crisis":
      await offerDecision(player, randomFrom(CRISIS_FACTORIES)(player));
      break;
    case "setback":
      triggerRandomSetback(player);
      break;
    case "refund": {
      const refund = 180 + player.knowledge * 40 + (player.creditScore >= 740 ? 80 : 0);
      player.cash += refund;
      logEvent("Tax Refund", `${player.name} picked up ${formatMoney(refund)} and got room to breathe.`);
      break;
    }
    case "loan":
      await offerDecision(player, buildLoanShopDecision(player));
      break;
    case "growth":
      await offerDecision(player, buildGrowthDecision(player));
      break;
    case "repair":
      await offerDecision(player, buildRepairDecision(player));
      break;
    case "freedom":
      buildFreedomDecision(player);
      break;
    default:
      break;
  }

  if (!player.turnFlags.splurged) {
    player.stableSpendingStreak += 1;
  } else {
    player.stableSpendingStreak = 0;
  }

  if (player.turnFlags.facedCrisis && player.turnFlags.crisisHandled && !player.turnFlags.missedPayment) {
    player.crisesSurvived += 1;
    player.turnFlags.crisisHandled = false;
    logEvent("Crisis Survived", `${player.name} handled the emergency without missing a payment.`);
  }

  checkMissionCompletion(player);
  applyThresholdUnlocks(player);
  checkWinner(player);
  if (state.winnerId) {
    return;
  }
  await maybeResolveBurnout(player);
  await flushPlayerNotices(player);
}

async function movePlayer(player, steps) {
  for (let count = 0; count < steps; count += 1) {
    player.position = (player.position + 1) % BOARD_SPACES.length;
    if (player.position === 0) {
      player.laps += 1;
      player.age += 1;
      player.cash += 320;
      logEvent(
        "Birthday Lap",
        `${player.name} passed Fresh Start, collected ${formatMoney(320)}, and moved into the ${getLifeStage(player)} stage at age ${player.age}.`
      );
    }
    renderAll();
    await delay(190);
  }
}

async function runTurn(player) {
  try {
    state.busy = true;
    state.phase = "rolling";
    const roll = getRollOutcome(player);
    state.lastDie = roll.value;
    state.lastRollNote = roll.note;
    renderAll();
    await playDiceRoll(roll.value);
    logEvent("Dice Roll", roll.message);
    renderAll();
    await movePlayer(player, roll.value);
    const space = BOARD_SPACES[player.position];
    logEvent("Landing", `${player.name} landed on ${space.name}. ${space.blurb}`);
    renderAll();
    await handleSpace(player, space);

    if (player.reflectionModeActive) {
      player.skipNextActionTurn = true;
    }

    if (!state.winnerId) {
      advanceTurn();
    } else {
      renderAll();
    }
  } catch (error) {
    recoverFromTurnError("runTurn", error);
  } finally {
    state.busy = false;
    renderAll();
  }
}

async function runAiTurn() {
  const player = getCurrentPlayer();
  if (!player || !player.isAI || state.busy || state.phase !== "ai-ready") {
    return;
  }
  await runTurn(player);
}

function advanceTurn() {
  const wasLastPlayerInRound = state.currentPlayerIndex === state.players.length - 1;
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  if (state.currentPlayerIndex === 0) {
    state.round += 1;
  }
  state.lastDie = null;
  state.lastRollNote = null;

  // Turn cap: once the final player in round TURN_CAP has acted, state.round rolls to TURN_CAP + 1.
  // End the game before starting another round.
  if (wasLastPlayerInRound && state.round > TURN_CAP && !state.winnerId) {
    endGameByTurnCap();
    return;
  }

  renderAll();
  void beginTurn();
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderHeroStats() {
  const leader = getLeader();
  const leaderScore = leader ? getCompositeScore(leader).totalDisplay : null;

  elements.heroStats.innerHTML = `
    <div class="hero-stat-card hero-stat-round">
      <span class="hero-stat-label">Round</span>
      <span class="hero-stat-value">${Math.min(state.round, TURN_CAP)} / ${TURN_CAP}</span>
    </div>
    <div class="hero-stat-card">
      <span class="hero-stat-label">Leader</span>
      <span class="hero-stat-value">${leader ? leader.name : "None"}${leader ? ` · ${leaderScore}` : ""}</span>
    </div>
  `;
}

function renderBoard() {
  const currentPlayer = getCurrentPlayer();

  elements.board.innerHTML = BOARD_SPACES.map((space, index) => {
    const [row, column] = BOARD_COORDINATES[index];
    const onSpace = state.players.filter((player) => player.position === index);
    const active = currentPlayer && currentPlayer.position === index;
    return `
      <div
        class="board-space ${space.id === "fresh-start" ? "start-space" : ""} ${active ? "active" : ""}"
        style="grid-row:${row};grid-column:${column};--space-accent:${SPACE_ACCENTS[space.kind]};"
      >
        <div>
          <span class="space-badge">${space.badge}</span>
          <h3 class="space-name">${space.name}</h3>
        </div>
        <div class="space-footer">
          <span class="space-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="token-stack">
            ${onSpace
              .map(
                (player) => `
                  <span class="token ${currentPlayer && player.id === currentPlayer.id ? "current-token" : ""}" style="background:${player.color};">${getInitials(player.name)}</span>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderWellbeingBar(player, pulseClass = "") {
  const value = Math.round(player.wellbeing);
  const tier = getWellbeingTier(value);
  const fillPercent = Math.max(0, Math.min(100, value));
  const delta = player.lastWellbeingDelta || 0;
  const reason = player.lastWellbeingReason;
  let deltaMarkup = "";
  if (delta !== 0 && reason) {
    const sign = delta > 0 ? "+" : "";
    const deltaDir = delta > 0 ? "up" : "down";
    deltaMarkup = `<span class="wellbeing-delta ${deltaDir}">${sign}${delta} · ${reason}</span>`;
  }
  const tierCopy = {
    stressed: "Stressed — you're paying a $25 stress tax each turn and will hit burnout below 15.",
    strained: "Strained — one more bad turn could drop you into Stressed.",
    steady: "Steady — no penalty, no bonus.",
    flowing: "Flowing — three turns at 75+ grants a Knowledge point.",
  };
  return `
    <div class="wellbeing-bar wellbeing-tier-${tier.key} ${pulseClass}" title="${tierCopy[tier.key]}">
      <div class="wellbeing-bar-head">
        <span class="wellbeing-bar-label">Wellbeing</span>
        <span class="wellbeing-bar-tier">${value} · ${tier.label}</span>
      </div>
      <div class="wellbeing-bar-track">
        <div class="wellbeing-bar-fill" style="width:${fillPercent}%;"></div>
      </div>
      ${deltaMarkup ? `<div class="wellbeing-bar-foot">${deltaMarkup}</div>` : ""}
    </div>
  `;
}

function renderFreedomProgress(player, newlyMet = new Set()) {
  const score = getCompositeScore(player);
  const criteria = getFreedomCriteria(player);
  const metCount = criteria.filter((c) => c.met).length;
  const display = score.totalDisplay;
  const tierClass =
    display >= 75 ? "freedom-tier-high" : display >= 45 ? "freedom-tier-mid" : "freedom-tier-low";
  const ffState = metCount === 4 ? "freedom-ready" : "";
  return `
    <div class="freedom-progress ${tierClass} ${ffState}">
      <div class="freedom-progress-head">
        <span class="freedom-progress-label">Freedom Progress</span>
        <span class="freedom-progress-score"><strong>${display}</strong><span>/100</span></span>
      </div>
      <div class="freedom-progress-track">
        <div class="freedom-progress-fill" style="width:${display}%;"></div>
      </div>
      <div class="freedom-progress-chips">
        ${criteria
          .map((c) => {
            // Phase C: chip that JUST flipped ✗→✓ this render gets the
            // gold glow + scale bump. Reading the set built in
            // renderTurnPanel keeps the logic in one place.
            const justMet = newlyMet.has(c.key) ? "chip-just-met" : "";
            return `
              <span class="freedom-chip ${c.met ? "met" : "unmet"} ${justMet}" title="${c.label} — currently ${c.detail}">
                <span class="freedom-chip-mark">${c.met ? "✓" : "○"}</span>
                ${c.label}
              </span>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderTurnPanel() {
  if (!state.players.length) {
    elements.turnPanel.innerHTML = `
      <div class="panel-heading"><h2>Current Turn</h2></div>
      <p class="turn-status">${isInLiveRoom() && !liveSession.gameStarted ? "Join the lobby and wait for the host to start." : "Start a game to begin the climb."}</p>
    `;
    return;
  }

  const player = getCurrentPlayer();
  const canAct = canLocalClientActOnCurrentTurn(player);
  const scoreBand = getScoreBand(player);
  const winner = state.winnerId && state.winnerId === player.id;
  const creditCheckBadgeClass =
    player.lastUpkeepCreditDelta > 0 ? "up" : player.lastUpkeepCreditDelta < 0 ? "down" : "steady";
  const thinFileNote =
    player.lastUpkeepCreditDelta === 0 && player.creditRawTargetScore > player.creditHistoryCeiling
      ? "Positive habits are building, but your credit file is still too thin for a bigger jump yet."
      : "";
  const creditCheckNote =
    player.lastUpkeepCreditDelta === null
      ? ""
      : `Start-of-turn credit check: ${player.lastUpkeepCreditLabel} after income, bills, and autopay.`;

  let status = "Choose the next move.";
  if (state.phase === "ready") {
    status = "Your turn — ready to roll.";
  } else if (state.phase === "reflection") {
    status = "Reflection turn. Ask the advisor, then continue.";
  } else if (state.phase === "ai-ready") {
    status = "Thinking through the board.";
  } else if (state.phase === "rolling") {
    status = "On the move.";
  } else if (state.phase === "game-over" && winner) {
    status = "Reached Financial Freedom and won.";
  }
  if (!canAct && isInLiveRoom() && !player.isAI && state.phase !== "game-over") {
    status = `Waiting for ${player.name}${liveSession.isHost ? "" : " or the host"} to act.`;
  }

  // --- Phase C: delta-driven feedback classes ---
  // Compute changes vs the last time we rendered this same player. The
  // first time we see a player (snapshot undefined), treat delta as 0 so
  // we don't pulse every stat on initial render. Snapshots are updated
  // BEFORE building innerHTML so subsequent renders with identical data
  // don't re-trigger the animations.
  const prevCredit = uiFeedback.lastCreditByPlayer.get(player.id);
  const creditDelta = prevCredit == null ? 0 : player.creditScore - prevCredit;
  const prevWellbeing = uiFeedback.lastWellbeingByPlayer.get(player.id);
  const wellbeingDelta = prevWellbeing == null ? 0 : Math.round(player.wellbeing) - Math.round(prevWellbeing);

  // Magnitude buckets for credit pulse: small (≥1), med (≥10), huge (≥25).
  // A +3 nudge from on-time payment is subtle; a -40 missed-payment drop
  // gets the dramatic ring + scale bump.
  let creditPulseClass = "";
  const absCredit = Math.abs(creditDelta);
  if (absCredit >= 1) {
    const dir = creditDelta > 0 ? "up" : "down";
    const size = absCredit >= 25 ? "huge" : absCredit >= 10 ? "med" : "small";
    creditPulseClass = `credit-pulse-${dir}-${size}`;
  }

  // Wellbeing pulse only on larger swings (±8), per the brief. Small
  // changes still animate via the width transition on the fill bar.
  const wellbeingPulseClass =
    Math.abs(wellbeingDelta) >= 8
      ? `wellbeing-pulse-${wellbeingDelta > 0 ? "up" : "down"}`
      : "";

  // Setback shake — a credit drop ≥10 OR a wellbeing drop ≥10 is the
  // signal for missed payment / housing default / crisis landings. The
  // panel itself gets a restrained red-tinged shake (see CSS), not the
  // children, because the shake/wash should read as "hit on the whole
  // player" rather than any single stat.
  const shouldShake = creditDelta <= -10 || wellbeingDelta <= -10;

  // Newly-met freedom chips — diff current met-set vs last snapshot so
  // only the chip that just flipped ✗→✓ gets the gold celebration.
  // First-seen players: seed prevMet = currentMet so criteria that were
  // already met at game start don't falsely trigger the celebration.
  const currentCriteria = getFreedomCriteria(player);
  const currentMet = new Set(currentCriteria.filter((c) => c.met).map((c) => c.key));
  const firstSeenChips = !uiFeedback.lastMetChipsByPlayer.has(player.id);
  const prevMet = firstSeenChips ? currentMet : uiFeedback.lastMetChipsByPlayer.get(player.id);
  const newlyMet = new Set([...currentMet].filter((k) => !prevMet.has(k)));

  // Save snapshots BEFORE rendering (see note above).
  uiFeedback.lastCreditByPlayer.set(player.id, player.creditScore);
  uiFeedback.lastWellbeingByPlayer.set(player.id, Math.round(player.wellbeing));
  uiFeedback.lastMetChipsByPlayer.set(player.id, currentMet);

  elements.turnPanel.innerHTML = `
    <div class="turn-header">
      <div>
        <h2>${player.name}</h2>
        <p class="turn-status">${status}</p>
        ${winner ? '<span class="winner-ribbon">Financial Freedom</span>' : ""}
      </div>
    </div>

    <!-- Credit Hero Card — credit is THE stat this game teaches, so it gets
         visual dominance over all other personal stats. Score reads at ~3rem,
         tier pill right-aligned, card border tinted by tier color. Phase C:
         a pulse class (credit-pulse-{up|down}-{small|med|huge}) animates the
         card on score change, magnitude-proportional. -->
    <div class="credit-hero-card ${creditPulseClass}" style="--tier-color:${scoreBand.color};">
      <span class="credit-hero-label">Credit Score</span>
      <div class="credit-hero-row">
        <span class="credit-hero-score">${player.creditScore}</span>
        <span class="credit-hero-tier">${scoreBand.label}</span>
      </div>
    </div>

    <!-- Secondary stats — four equal pills in a 2x2 grid. Credit was
         promoted to the hero card above, so it's not repeated here. -->
    <div class="turn-summary-strip">
      <div class="turn-stat-pill">
        <span>Saved</span>
        <strong>${formatMoney(getSavings(player))}</strong>
      </div>
      <div class="turn-stat-pill">
        <span>Debt</span>
        <strong>${formatMoney(getTotalDebt(player))}</strong>
      </div>
      <div class="turn-stat-pill wellbeing-pill wellbeing-tier-${getWellbeingTier(player.wellbeing).key}">
        <span>Wellbeing</span>
        <strong>${Math.round(player.wellbeing)} · ${getWellbeingTier(player.wellbeing).label}</strong>
      </div>
      <div class="turn-stat-pill">
        <span>Stage</span>
        <strong>${getLifeStage(player)}</strong>
      </div>
    </div>
    ${renderWellbeingBar(player, wellbeingPulseClass)}
    ${renderFreedomProgress(player, newlyMet)}
    ${state.lastRollNote ? `<p class="turn-inline-note">${state.lastRollNote}</p>` : ""}
    ${creditCheckNote ? `<div class="credit-check-banner ${creditCheckBadgeClass}">${creditCheckNote}</div>` : ""}
    ${thinFileNote ? `<p class="turn-inline-note">${thinFileNote}</p>` : ""}

    <div class="perk-row">
      ${player.doubleRollUnlocked ? `<span class="status-chip bonus">Premium momentum: roll twice and keep the better die.</span>` : ""}
      ${player.reflectionModeActive ? `<span class="status-chip warning">Reflection zone: below ${REFLECTION_SCORE}, every other action turn is skipped. Ask the advisor for help.</span>` : ""}
    </div>

    <div class="action-row turn-action-row">
      <button class="primary-button roll-hero" id="roll-button" type="button" ${player.isAI || state.busy || !["ready", "reflection"].includes(state.phase) || !canAct ? "disabled" : ""}>
        ${state.phase === "reflection" ? "End Reflection" : "Roll Dice"}
      </button>
      <button class="secondary-button hint-satellite" id="hint-button" type="button" ${player.isAI || !canAct ? "disabled" : ""}>
        ${player.reflectionModeActive ? "Ask Advisor" : "Get Hint"}
      </button>
    </div>
  `;

  // Phase C: setback shake + red wash on the turn panel itself. Applied
  // AFTER innerHTML because the turn-panel wrapper element persists across
  // renders (only its children swap). Classic CSS-animation restart trick:
  // remove → force reflow → re-add so the keyframes replay even if the
  // class was already there. Clear it after the animation duration so
  // subsequent renders start from a clean slate.
  if (shouldShake && elements.turnPanel) {
    elements.turnPanel.classList.remove("panel-setback");
    void elements.turnPanel.offsetWidth;
    elements.turnPanel.classList.add("panel-setback");
    setTimeout(() => {
      if (elements.turnPanel) {
        elements.turnPanel.classList.remove("panel-setback");
      }
    }, 520);
  }

  const rollButton = document.getElementById("roll-button");
  if (rollButton) {
    rollButton.addEventListener("click", () => {
      if (!canLocalClientActOnCurrentTurn(player)) {
        return;
      }
      if (isLiveMirrorClient() && !liveSession.isHost) {
        if (state.phase === "ready") {
          sendLivePlayerAction({ type: "roll" });
        } else if (state.phase === "reflection") {
          sendLivePlayerAction({ type: "end-reflection" });
        }
        return;
      }
      if (!state.busy && state.phase === "ready") {
        void runTurn(getCurrentPlayer());
      } else if (!state.busy && state.phase === "reflection") {
        advanceTurn();
      }
    });
  }

  const hintButton = document.getElementById("hint-button");
  if (hintButton) {
    hintButton.addEventListener("click", () => {
      if (!canLocalClientActOnCurrentTurn(player)) {
        return;
      }
      if (isLiveMirrorClient() && !liveSession.isHost) {
        sendLivePlayerAction({ type: "hint" });
        return;
      }
      performHintAction();
    });
  }

}

function renderGoalPanel() {
  if (!state.players.length) {
    elements.goalPanel.innerHTML = `
      <div class="panel-heading"><h2>Roadmap</h2></div>
      <p class="turn-status">The game tracks credit, savings, housing, mobility, growth, and debt control.</p>
    `;
    return;
  }

  const player = getCurrentPlayer();
  const goals = getGoalProgress(player);

  elements.goalPanel.innerHTML = `
    <div class="panel-heading">
      <h2>${player.name}'s Roadmap</h2>
      <span class="turn-pill">${countCompletedGoals(player)} / ${goals.length}</span>
    </div>
    <div class="roadmap-line">
      ${goals
        .map(
          (goal, index) => `
            <div class="roadmap-step ${goal.complete ? "complete" : ""}">
              <div class="roadmap-track">
                <span class="roadmap-marker">${index + 1}</span>
              </div>
              <div class="roadmap-copy">
                <strong>${goal.title}</strong>
                <span>${goal.complete ? "Complete" : truncateText(goal.detail, 62)}</span>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPlayersPanel() {
  if (!state.players.length) {
    elements.playersPanel.innerHTML = `
      <div class="panel-heading"><h2>Players</h2></div>
      <p class="turn-status">Each rival gets a different starting background and income path.</p>
    `;
    return;
  }

  const opponents = state.players
    .map((player, index) => ({ player, index }))
    .filter(({ index }) => index !== state.currentPlayerIndex);

  if (!opponents.length) {
    elements.playersPanel.innerHTML = `
      <div class="panel-heading"><h2>Opponents</h2></div>
      <p class="turn-status">Solo run — the board is yours.</p>
    `;
    return;
  }

  elements.playersPanel.innerHTML = `
    <div class="panel-heading">
      <h2>Opponents</h2>
    </div>
    <div class="player-grid">
      ${opponents
        .map(({ player }) => {
          const scoreBand = getScoreBand(player);
          const tier = getWellbeingTier(player.wellbeing);
          const composite = getCompositeScore(player).totalDisplay;
          return `
            <div class="player-card compact">
              <div class="player-card-header">
                <div class="player-name-row">
                  <span class="player-swatch" style="background:${player.color};"></span>
                  <div>
                    <h3>${player.name}${player.isAI ? '<span class="ai-chip">AI</span>' : ""}</h3>
                  </div>
                </div>
                <span class="player-credit-big" style="color:${scoreBand.color};">
                  ${player.creditScore}
                </span>
              </div>

              <div class="player-summary compact-summary">
                <span class="player-summary-wellbeing wellbeing-tier-${tier.key}"><strong>${Math.round(player.wellbeing)}</strong> ${tier.label}</span>
                <span><strong>${composite}</strong> freedom</span>
                <span><strong>${countCompletedGoals(player)}&nbsp;/&nbsp;6</strong> goals</span>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderBoardFeed() {
  // Segregate one-time setup events (profile intros) from live play-by-play.
  // Setup events clutter the main feed at equal weight with actual decisions,
  // so they get a collapsed banner and the main feed shows only play events.
  const playLog = state.log.filter((entry) => entry.kind !== "setup");
  const setupLog = state.log.filter((entry) => entry.kind === "setup");
  const latest = playLog[0];
  const currentPlayer = getCurrentPlayer();
  const currentSpace =
    currentPlayer && typeof currentPlayer.position === "number"
      ? BOARD_SPACES[currentPlayer.position]
      : null;

  // Active-space banner — shows where the current player just landed.
  // This replaces the per-tile .space-brief that was getting clipped by
  // the narrow perimeter card width.
  const activeSpaceMarkup =
    currentPlayer && currentSpace
      ? `
        <div class="active-space-banner" style="--space-accent:${SPACE_ACCENTS[currentSpace.kind] || "var(--gold)"};">
          <span class="active-space-label">Where ${currentPlayer.name} landed</span>
          <div class="active-space-headline">
            <span class="active-space-badge">${currentSpace.badge}</span>
            <h3 class="active-space-name">${currentSpace.name}</h3>
          </div>
          <p class="active-space-blurb">${currentSpace.blurb}</p>
        </div>
      `
      : "";

  // Collapsed banner for game-start profile intros. Closed by default so it
  // doesn't dominate the feed once play has begun.
  const setupMarkup = setupLog.length
    ? `
        <details class="setup-banner">
          <summary>Game started — ${setupLog.length} ${setupLog.length === 1 ? "player" : "players"} at the table</summary>
          <div class="setup-banner-list">
            ${setupLog
              .map(
                (entry) => `
                  <div class="setup-banner-entry">
                    <strong>${entry.title}</strong>
                    <span>${entry.body}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </details>
      `
    : "";

  // Phase C: new entries since last render get a "just-arrived" class
  // that triggers a brief warm tint fade-out. We track the top log id
  // we've already rendered; anything with a higher id is new.
  const prevTopLogId = uiFeedback.lastTopLogId;
  const latestIsNew = latest && typeof latest.id === "number" && latest.id > prevTopLogId;
  const spotlightCardMarkup = latest
    ? `
        <div class="event-spotlight-card ${latestIsNew ? "just-arrived" : ""}">
          <h3>${latest.title}</h3>
          <p>${truncateText(latest.body, 175)}</p>
        </div>
      `
    : `
        <div class="event-spotlight-card event-spotlight-empty">
          <h3>Welcome to the table</h3>
          <p>Roll the dice to begin. Play-by-play updates will land here.</p>
        </div>
      `;

  elements.eventSpotlight.innerHTML = `
    ${activeSpaceMarkup}
    ${setupMarkup}
    ${spotlightCardMarkup}
  `;

  elements.eventFeed.innerHTML = playLog
    .slice(1, 4)
    .map((entry) => {
      const isNew = typeof entry.id === "number" && entry.id > prevTopLogId;
      return `
        <div class="event-entry ${isNew ? "just-arrived" : ""}">
          <strong>${entry.title}</strong>
          <span>${truncateText(entry.body, 120)}</span>
        </div>
      `;
    })
    .join("");

  // Record the highest log id we rendered so subsequent renders don't
  // re-trigger the just-arrived animation on entries that were already
  // visible. Using latest.id (top of the play log) is sufficient since
  // new entries always unshift to the top.
  if (latest && typeof latest.id === "number") {
    uiFeedback.lastTopLogId = latest.id;
  }
}

function getCreditFlashMarkup(feedback, wrapperClass = "", dismissible = false, helperText = "") {
  if (!feedback) {
    return "";
  }

  const icon =
    feedback.direction === "up"
      ? "↑"
      : feedback.direction === "down"
        ? "↓"
        : "•";
  const wrapperClasses = [wrapperClass, feedback.direction].filter(Boolean).join(" ");
  const cardTag = dismissible ? "button" : "div";
  const dismissAttributes = dismissible ? ' type="button" data-credit-flash-dismiss="true"' : "";
  const helperCopy = helperText ? `<span class="credit-flash-hint">${helperText}</span>` : "";
  return `
    <div class="${wrapperClasses}">
      <${cardTag} class="credit-flash-card"${dismissAttributes}>
        <div class="credit-flash-icon-wrap">
          <div class="credit-flash-icon" aria-hidden="true">${icon}</div>
          <strong class="credit-flash-points">${feedback.pointsLabel}</strong>
        </div>
        <div class="credit-flash-copy">
          <strong>${feedback.title}</strong>
          <span>${feedback.body}</span>
          ${helperCopy}
        </div>
      </${cardTag}>
    </div>
  `;
}

function completeModalDecisionAfterFlash() {
  if (!state.modal || state.modal.mode !== "decision") {
    clearCreditFlash();
    renderAll();
    return;
  }

  if (!state.modal.pendingOption) {
    clearCreditFlash();
    renderAll();
    return;
  }

  const { resolve, pendingOption } = state.modal;
  clearCreditFlash();
  state.modal.pendingOption = null;
  state.modal = null;
  renderAll();
  resolve(pendingOption);
}

function dismissCurrentNotice() {
  if (!state.modal || state.modal.mode !== "notice") {
    return;
  }

  const resolver = state.modal.resolve;
  state.modal = null;
  renderAll();
  if (typeof resolver === "function") {
    resolver();
  }
}

function selectDecisionOptionByIndex(optionIndex) {
  if (!state.modal || state.modal.mode !== "decision" || state.creditFlash) {
    return;
  }

  const option = state.modal.decision.options[optionIndex];
  if (!option) {
    return;
  }

  const player = state.players.find((candidate) => candidate.id === state.modal.playerId);
  const creditFeedback = applyDecisionChoice(player, state.modal.decision, option);
  if (player && !player.isAI) {
    state.modal.pendingOption = option;
    showCreditFlash(creditFeedback);
    return;
  }

  const resolver = state.modal.resolve;
  state.modal = null;
  renderAll();
  if (typeof resolver === "function") {
    resolver(option);
  }
}

function performHintAction() {
  const player = getCurrentPlayer();
  if (!player) {
    return;
  }

  const goals = getGoalProgress(player);
  const firstGap = goals.find((goal) => !goal.complete);
  if (firstGap) {
    logEvent(
      player.reflectionModeActive ? "Financial Advisor" : "Hint",
      `${player.name}'s best next step is ${firstGap.title.toLowerCase()}: ${firstGap.detail}.${player.reflectionModeActive ? " The advisor recommends choosing the safer option that protects score, savings, or payment history." : ""}`
    );
  } else {
    logEvent("Hint", `${player.name} has every requirement lined up for Financial Freedom.`);
  }
  renderAll();
}

function showEndGameModal() {
  state.modal = { mode: "endgame", playerId: null };
  renderModal();
}

function renderEndGameModal() {
  const ranked = [...state.players]
    .map((player) => ({ player, score: getCompositeScore(player) }))
    .sort((a, b) => {
      if (b.score.total !== a.score.total) {
        return b.score.total - a.score.total;
      }
      if (b.player.creditScore !== a.player.creditScore) {
        return b.player.creditScore - a.player.creditScore;
      }
      return getSavings(b.player) - getSavings(a.player);
    });

  const winner = ranked[0] && ranked[0].player;
  const endingType = state.endingType || "turn-cap";
  const kicker = endingType === "freedom" ? "Financial Freedom" : `Final Tally · Round ${TURN_CAP}`;
  const headline =
    endingType === "freedom"
      ? `${winner.name} reached Financial Freedom`
      : `${winner ? winner.name : "No one"} finished on top`;
  const subhead =
    endingType === "freedom"
      ? "Credit 720+, stable housing, $1,500 emergency, and debt under control — all in the same turn."
      : `After ${TURN_CAP} rounds, the highest Freedom Score wins. Composite weights: Credit 35 · Net Worth progress 25 · Milestones 20 · Emergency 10 · Wellbeing ±10.`;

  const rows = ranked
    .map((entry, index) => {
      const p = entry.player;
      const s = entry.score;
      const isWinner = winner && p.id === winner.id;
      return `
        <tr class="${isWinner ? "winner-row" : ""}">
          <td class="endgame-rank">${index + 1}</td>
          <td>
            <div class="endgame-player-name">
              <span class="player-swatch" style="background:${p.color};"></span>
              <div>
                <strong>${p.name}${p.isAI ? " (AI)" : ""}</strong>
                <div style="font-size:0.72rem;color:var(--muted);">${p.background.name}</div>
              </div>
            </div>
          </td>
          <td class="num endgame-score">${s.totalDisplay}</td>
          <td class="num">${p.creditScore}</td>
          <td class="num">${formatMoney(getNetWorth(p))}</td>
          <td class="num">${s.milestonesCount}/6</td>
          <td class="num">${formatMoney(p.emergencyFund)}</td>
          <td class="num">${Math.round(p.wellbeing)}</td>
        </tr>
      `;
    })
    .join("");

  elements.modalShell.classList.remove("hidden");
  elements.modalShell.classList.add("endgame-modal");
  elements.modalShell.setAttribute("aria-hidden", "false");
  elements.modalCard.innerHTML = `
    <div class="endgame-header">
      <span class="endgame-header-kicker">${kicker}</span>
      <h2>${headline}</h2>
      <p>${subhead}</p>
    </div>
    <table class="endgame-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th class="num">Score</th>
          <th class="num">Credit</th>
          <th class="num">Net Worth</th>
          <th class="num">Miles</th>
          <th class="num">Emerg.</th>
          <th class="num">Well</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="endgame-footer">
      <button class="primary-button" type="button" data-endgame-restart="true">Play Again</button>
    </div>
  `;

  const restartButton = elements.modalCard.querySelector("[data-endgame-restart]");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      elements.modalShell.classList.remove("endgame-modal");
      state.modal = null;
      if (isInLiveRoom()) {
        if (liveSession.isHost) {
          startLiveRoomGame();
        } else {
          renderAll();
        }
        return;
      }
      startGame(getHumanNamesFromForm(), getConfiguredAiCount());
    });
  }
}

function renderModal() {
  if (state.modal && state.modal.mode === "endgame") {
    renderEndGameModal();
    return;
  }
  // Clear endgame-modal class if set from a prior game
  elements.modalShell.classList.remove("endgame-modal");
  if (!state.modal) {
    elements.modalShell.classList.add("hidden");
    elements.modalShell.setAttribute("aria-hidden", "true");
    elements.modalCard.innerHTML = "";
    return;
  }

  const modalPlayerName = getPlayerNameById(state.modal.playerId);
  const canActOnModal = canLocalClientActOnModal();
  const waitingCopy =
    isInLiveRoom() && !canActOnModal
      ? `<p class="turn-inline-note">Waiting for ${modalPlayerName}${liveSession.isHost ? "" : " or the host"} to respond.</p>`
      : "";

  if (state.modal.mode === "notice") {
    const { notice } = state.modal;
    const art = getDecisionArt(notice);
    elements.modalShell.classList.remove("hidden");
    elements.modalShell.setAttribute("aria-hidden", "false");
    elements.modalCard.innerHTML = `
      <div
        class="modal-hero"
        style="--modal-art-start:${art.start};--modal-art-end:${art.end};--modal-art-panel:${art.panel};"
      >
        <div class="modal-copy">
          <p class="modal-kicker">${art.label}</p>
          <h2>${notice.title}</h2>
          <p>${notice.body}</p>
        </div>
        <div class="modal-art">
          ${art.svg}
        </div>
      </div>
      ${waitingCopy}
      <div class="option-grid modal-actions">
        <button class="option-button notice-button" type="button" data-notice-dismiss="true" ${canActOnModal ? "" : "disabled"}>
          <strong>${notice.buttonLabel || "Continue"}</strong>
          <span>${canActOnModal ? "Keep the climb moving." : "Another player is handling this moment."}</span>
        </button>
      </div>
    `;

    const dismissButton = elements.modalCard.querySelector("[data-notice-dismiss]");
    if (dismissButton) {
      dismissButton.addEventListener("click", () => {
        if (!state.modal || !canLocalClientActOnModal()) {
          return;
        }
        if (isLiveMirrorClient()) {
          sendLivePlayerAction({ type: "dismiss-notice" });
          return;
        }
        dismissCurrentNotice();
      });
    }
    return;
  }

  const { decision } = state.modal;
  const art = getDecisionArt(decision);
  const inlineCreditFlash = state.creditFlash
    ? getCreditFlashMarkup(state.creditFlash, "modal-credit-flash", true, "Click to continue")
    : "";
  elements.modalShell.classList.remove("hidden");
  elements.modalShell.setAttribute("aria-hidden", "false");
  // Profile-aware badge: when the prompt copy was selected by the player's
  // background (not the default copy), surface that fact so the equity
  // claim of the design is visible in the moment a choice is being made.
  const profileBadge = decision.profileVariant
    ? `<span class="profile-variant-badge" title="The wording you're seeing was written for the ${decision.profileVariant} profile.">Your profile shaped this prompt · ${decision.profileVariant}</span>`
    : "";
  elements.modalCard.innerHTML = `
    <div
      class="modal-hero"
      style="--modal-art-start:${art.start};--modal-art-end:${art.end};--modal-art-panel:${art.panel};"
    >
      <div class="modal-copy">
        <p class="modal-kicker">${art.label}</p>
        <h2>${decision.title}</h2>
        ${profileBadge}
        <p>${decision.body}</p>
      </div>
      <div class="modal-art">
        ${art.svg}
      </div>
    </div>
    ${waitingCopy}
    ${inlineCreditFlash}
    <div class="option-grid ${state.creditFlash ? "flash-lock" : ""}">
      ${decision.options
        .map(
          (option, index) => `
            <button class="option-button" type="button" data-option-index="${index}" ${state.creditFlash || !canActOnModal ? "disabled" : ""}>
              <strong>${option.label}</strong>
              <span>${option.description}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;

  elements.modalCard.querySelectorAll("[data-option-index]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.modal || state.creditFlash || !canLocalClientActOnModal()) {
        return;
      }
      const optionIndex = Number(button.getAttribute("data-option-index"));
      if (isLiveMirrorClient()) {
        sendLivePlayerAction({ type: "decision-choice", optionIndex });
        return;
      }
      selectDecisionOptionByIndex(optionIndex);
    });
  });

  const dismissFlashButton = elements.modalCard.querySelector("[data-credit-flash-dismiss]");
  if (dismissFlashButton) {
    dismissFlashButton.addEventListener("click", () => {
      if (!canLocalClientActOnModal()) {
        return;
      }
      if (isLiveMirrorClient()) {
        sendLivePlayerAction({ type: "decision-flash-dismiss" });
        return;
      }
      completeModalDecisionAfterFlash();
    });
  }
}

function renderCreditFlash() {
  if (!elements.creditFlash) {
    return;
  }

  if (!state.creditFlash || state.modal) {
    elements.creditFlash.className = "credit-flash";
    elements.creditFlash.innerHTML = "";
    return;
  }
  elements.creditFlash.className = `credit-flash show ${state.creditFlash.direction}`;
  elements.creditFlash.innerHTML = getCreditFlashMarkup(state.creditFlash, "", false);
}

function renderAll() {
  renderBodyPhaseClass();
  renderLiveRoomPanel();
  renderHeroStats();
  renderBoard();
  renderBoardFeed();
  renderTurnPanel();
  renderGoalPanel();
  renderPlayersPanel();
  renderInGameToolbar();
  renderModal();
  renderCreditFlash();
  broadcastLiveSnapshot();
}

function renderBodyPhaseClass() {
  const body = document.body;
  if (!body) return;
  // In-game only when the game has actually started — both conditions must hold:
  //   (1) state.players has been populated (startGame / applyNetworkSnapshot ran)
  //   (2) state.phase is past "setup" (the lobby / pre-deal state)
  // A live-room lobby sets liveSession.* but leaves state.players empty and
  // state.phase === "setup", so the setup panel stays visible during Create/Join.
  const inLiveGamePhase =
    state.phase === "ready" ||
    state.phase === "ai-ready" ||
    state.phase === "rolling" ||
    state.phase === "reflection" ||
    state.phase === "game-over";
  const inGame = state.players.length > 0 && inLiveGamePhase;
  body.classList.toggle("in-game", inGame);
  body.classList.toggle("pre-game", !inGame);
}

function returnToSetup() {
  clearGameState();
  renderAll();
  if (elements.setupForm && typeof elements.setupForm.scrollIntoView === "function") {
    elements.setupForm.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderInGameToolbar() {
  const strip = document.getElementById("toolbar-live-strip");
  const leaveBtn = document.getElementById("toolbar-leave-room");
  if (strip && leaveBtn) {
    if (isInLiveRoom()) {
      const code = liveSession.roomCode || "";
      const count = Array.isArray(liveSession.members) ? liveSession.members.length : state.players.length;
      strip.hidden = false;
      strip.textContent = `Room ${code} · ${count} player${count === 1 ? "" : "s"}`;
      leaveBtn.hidden = false;
    } else {
      strip.hidden = true;
      strip.textContent = "";
      leaveBtn.hidden = true;
    }
  }
  const musicBtn = document.getElementById("toolbar-music");
  if (musicBtn && elements.musicButton) {
    const pressed = elements.musicButton.getAttribute("aria-pressed") === "true";
    musicBtn.setAttribute("aria-pressed", pressed ? "true" : "false");
    musicBtn.classList.toggle("active", pressed);
  }
}

function handleSetupSubmit(event) {
  event.preventDefault();
  if (isInLiveRoom()) {
    if (liveSession.isHost) {
      startLiveRoomGame();
    }
    return;
  }
  startGame(getHumanNamesFromForm(), getConfiguredAiCount());
}

function renderExtraHumanFields() {
  if (isInLiveRoom()) {
    elements.extraHumanFields.innerHTML = "";
    return;
  }
  const humanCount = Number(elements.humanCount.value);
  elements.extraHumanFields.innerHTML = Array.from(
    { length: Math.max(0, humanCount - 1) },
    (_, index) => {
      const playerNumber = index + 2;
      return `
        <label>
          Player ${playerNumber} name
          <input id="player-name-${playerNumber}" type="text" maxlength="18" value="Player ${playerNumber}" />
        </label>
      `;
    }
  ).join("");
}

function getConfiguredAiCount() {
  const humanCount = isInLiveRoom() ? getLiveHumanMembers().length : Number(elements.humanCount.value);
  const requestedAiCount = Number(elements.aiCount.value);
  const maxAiCount = Math.max(0, 4 - humanCount);
  const aiCount = Math.min(requestedAiCount, maxAiCount);
  elements.aiCount.value = String(aiCount);
  return aiCount;
}

function getHumanNamesFromForm() {
  if (isInLiveRoom()) {
    return getLiveHumanMembers().map((member) => member.name);
  }

  const humanCount = Number(elements.humanCount.value);
  const names = [elements.playerName.value.trim() || "You"];

  for (let index = 2; index <= humanCount; index += 1) {
    const input = document.getElementById(`player-name-${index}`);
    names.push(input && input.value.trim() ? input.value.trim() : `Player ${index}`);
  }

  return names;
}

function initialize() {
  ensureBackgroundMusic();
  window.addEventListener("error", (event) => {
    if (!event.error) {
      return;
    }
    recoverFromTurnError("runtime error", event.error);
  });
  window.addEventListener("unhandledrejection", (event) => {
    recoverFromTurnError("unhandled promise", event.reason);
  });
  document.addEventListener("pointerdown", primeBackgroundMusic);
  document.addEventListener("keydown", primeBackgroundMusic);
  renderExtraHumanFields();
  refreshMusicControls();
  elements.setupForm.addEventListener("submit", handleSetupSubmit);
  elements.createRoomButton.addEventListener("click", () => {
    void createLiveRoom();
  });
  elements.joinRoomButton.addEventListener("click", () => {
    void joinLiveRoom();
  });
  elements.leaveRoomButton.addEventListener("click", () => {
    leaveLiveRoom();
  });
  elements.roomCode.addEventListener("input", () => {
    elements.roomCode.value = elements.roomCode.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 5);
  });
  elements.humanCount.addEventListener("change", () => {
    renderExtraHumanFields();
    getConfiguredAiCount();
  });
  elements.aiCount.addEventListener("change", () => {
    getConfiguredAiCount();
  });
  elements.newGameButton.addEventListener("click", () => {
    // Live-room host: "Restart Room" still means "start a fresh live game from the lobby".
    if (isInLiveRoom()) {
      if (liveSession.isHost) {
        startLiveRoomGame();
      }
      return;
    }
    // Hot-seat: return to the setup screen so the player can change settings or profiles.
    returnToSetup();
  });
  elements.musicButton.addEventListener("click", () => {
    handleMusicToggle();
  });

  const toolbarRestart = document.getElementById("toolbar-restart");
  if (toolbarRestart) {
    toolbarRestart.addEventListener("click", () => {
      // In-game Restart: always return to setup so the player sees the full
      // pre-game screen (profile picker, rules, etc.) — mirrors what they'd
      // see on a fresh page load.
      if (isInLiveRoom() && !liveSession.isHost) {
        // Non-host live clients can't unilaterally end the game; just refresh locally.
        renderAll();
        return;
      }
      returnToSetup();
    });
  }
  const toolbarMusic = document.getElementById("toolbar-music");
  if (toolbarMusic) {
    toolbarMusic.addEventListener("click", () => {
      handleMusicToggle();
    });
  }
  const toolbarLeave = document.getElementById("toolbar-leave-room");
  if (toolbarLeave) {
    toolbarLeave.addEventListener("click", () => {
      leaveLiveRoom();
    });
  }

  // Onboarding wiring — ? button reopens, close + confirm dismiss + persist
  if (elements.toolbarHelp) {
    elements.toolbarHelp.addEventListener("click", () => {
      showOnboardingModal();
    });
  }
  if (elements.onboardingClose) {
    elements.onboardingClose.addEventListener("click", () => hideOnboardingModal({ persist: true }));
  }
  if (elements.onboardingConfirm) {
    elements.onboardingConfirm.addEventListener("click", () => hideOnboardingModal({ persist: true }));
  }
  if (elements.onboardingShell) {
    // Click on the dim backdrop (not the card itself) closes the modal.
    elements.onboardingShell.addEventListener("click", (event) => {
      if (event.target === elements.onboardingShell) {
        hideOnboardingModal({ persist: true });
      }
    });
  }

  const queryRoomCode = getRoomCodeFromQuery();
  if (queryRoomCode) {
    elements.roomCode.value = queryRoomCode;
    setLiveStatus(`Invite link detected for room ${queryRoomCode}. Enter your name, then join the room.`);
    clearGameState();
    renderAll();
    return;
  }

  // Show setup screen on fresh load. The user starts the game via "Deal the Board".
  clearGameState();
  renderLiveRoomPanel();
  renderAll();
}

initialize();
