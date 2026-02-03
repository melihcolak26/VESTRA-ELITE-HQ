/**
 * VESTRA ELITE Intelligent Templates
 * Curated datasets for strategic high-stakes decisions
 */

export const DECISION_TEMPLATES = {
  VEHICLE_FLEET: {
    id: 'VEHICLE_FLEET',
    name: 'Strategic Fleet Acquisition',
    description: 'Optimize corporate mobility by analyzing cost, efficiency, and safety metrics.',
    icon: '🚗',
    criteria: [
      { name: 'Acquisition Cost ($)', beneficial: false, weightHint: 0.3 },
      { name: 'Operational Efficiency (L/100km)', beneficial: false, weightHint: 0.2 },
      { name: 'Performance Index (HP)', beneficial: true, weightHint: 0.15 },
      { name: 'Cargo Capacity (L)', beneficial: true, weightHint: 0.1 },
      { name: 'Safety Rating (Euro NCAP)', beneficial: true, weightHint: 0.25 }
    ],
    alternatives: ['Model S (Performance)', 'Series 7 (Executive)', 'Air (Efficiency)'],
    defaultMatrix: [
      [95000, 5.2, 530, 480, 5],
      [110000, 6.8, 450, 510, 5],
      [87000, 4.5, 480, 456, 5]
    ]
  },
  INFRASTRUCTURE_STACK: {
    id: 'INFRASTRUCTURE_STACK',
    name: 'Infrastructure & Tech Stack',
    description: 'Analyze enterprise-grade hardware and software configurations.',
    icon: '💻',
    criteria: [
      { name: 'Total Cost of Ownership', beneficial: false, weightHint: 0.3 },
      { name: 'Performance Throughput', beneficial: true, weightHint: 0.25 },
      { name: 'Reliability (Uptime %)', beneficial: true, weightHint: 0.15 },
      { name: 'Scalability Index', beneficial: true, weightHint: 0.1 },
      { name: 'Security Compliance', beneficial: true, weightHint: 0.2 }
    ],
    alternatives: ['Obsidian Cloud', 'Emerald Edge', 'Indigo On-Prem'],
    defaultMatrix: [
      [75000, 98, 99.99, 10, 10],
      [68000, 85, 99.9, 8, 9],
      [95000, 99, 99.999, 5, 10]
    ]
  },
  EXECUTIVE_HIRING: {
    id: 'EXECUTIVE_HIRING',
    name: 'Executive Talent Acquisition',
    description: 'Scientific assessment of high-level leadership candidates.',
    icon: '💼',
    criteria: [
      { name: 'Base Compensation', beneficial: false, weightHint: 0.3 },
      { name: 'Experience Index (Years)', beneficial: true, weightHint: 0.2 },
      { name: 'Leadership Score (EQ)', beneficial: true, weightHint: 0.2 },
      { name: 'Technical Depth', beneficial: true, weightHint: 0.15 },
      { name: 'Cultural Alignment', beneficial: true, weightHint: 0.15 }
    ],
    alternatives: ['Candidate Alpha', 'Candidate Beta', 'Candidate Gamma'],
    defaultMatrix: [
      [250000, 15, 9, 8, 9],
      [220000, 12, 8, 10, 7],
      [280000, 20, 10, 7, 8]
    ]
  },
  CAPITAL_INVESTMENT: {
    id: 'CAPITAL_INVESTMENT',
    name: 'Capital Investment Portfolio',
    description: 'Risk-adjusted analysis of major investment opportunities.',
    icon: '📈',
    criteria: [
      { name: 'Initial Capital Outlay', beneficial: false, weightHint: 0.35 },
      { name: 'Projected ROI (%)', beneficial: true, weightHint: 0.25 },
      { name: 'Risk Volatility', beneficial: false, weightHint: 0.15 },
      { name: 'Liquidity Score', beneficial: true, weightHint: 0.15 },
      { name: 'Market Synergy', beneficial: true, weightHint: 0.1 }
    ],
    alternatives: ['Venture Fund A', 'Real Estate REIT', 'High-Yield Bonds'],
    defaultMatrix: [
      [500000, 18, 12, 4, 9],
      [350000, 12, 5, 7, 6],
      [250000, 8, 2, 9, 3]
    ]
  }
};
