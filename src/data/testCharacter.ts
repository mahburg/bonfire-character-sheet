import { Character } from '../types/character';

export const testCharacter: Character = {
  player: 'Lloyd',
  name: 'Valrik',
  ancestry: 'Human',
  class: 'Fighter',
  subclass: 'Socialite',
  level: 1,
  crpUnspent: 42,
  crpSpent: 0,

  integrity: 17,
  gritDice: 1,

  favorMax: 0,
  anointed: false,

  vitality: 25,
  vitalityDie: 8,
  vitalityMinDie: 6,
  traumaThreshold: 7,
  wounds: [
    {
      name: 'stab',
      location: 'arm',
      damage: 5,
      originalDamage: 5,
      daysResting: 4,
    },
    {
      name: 'heat stroke',
      damage: 3,
      originalDamage: 3,
    },
    {
      name: 'heat stroke',
      damage: 3,
      originalDamage: 3,
    },
  ],

  nerve: 32,
  nerveDie: 4,
  nerveMinDie: 6,

  stress: 15,
  relaxation: 5,

  // stats
  strength: 10,
  dexterity: 12,
  constitution: 8,
  intellect: 8,
  willpower: 7,
  presence: 14,
  baseMovement: 2.5,

  goals: [
    'Prove Dueling Superiority',
    'Gear level up',
    'Investigate our deaths',
  ],
  relationships: [
    { name: 'Competitive w/ Rival', rank: 8 },
    { name: 'Strained w/ Father', rank: 2 },
  ],
  flaws: ['Hot Headed', 'Competitive'],
  convictions: [
    { name: 'Honor', description: 'Do right and keep your word', rank: 3 },
    { name: 'Pursue prestige in dueling circuits', rank: 1 },
    { name: 'Self Determination', rank: 1 },
    { name: 'Competence', rank: 1 },
  ],
  descriptions: [
    { name: 'Patient with friends', rank: 3 },
    { name: 'Outspoken', rank: 2 },
  ],
  reputations: [],
  culturalStrength: 'Dueling',
  contactPoints: 8,
  allies: [
    { name: 'Jer', description: 'Mentor in dueling, ranger of the wilds' },
  ],
  classAncestralAbilitiesAndTrainings: [
    { name: 'Martial Focus: Melee', rank: 1 },
    { name: 'Martial Focus: Armor', rank: 1 },
    { name: 'Martial Focus: Generic', rank: 1 },
    { name: 'Identity Focus: Relationships', rank: 1 },
    { name: 'Identity Focus: Convictions', rank: 1 },
    { name: 'Resilient Spirit', rank: 1 },
    { name: 'Personality Adept', rank: 1 },
    { name: 'Martial Adept', rank: 1 },
    { name: 'Skill Focus: Intuition', rank: 2 },
  ],
  burdensInjuriesAndDrawbacks: [{ name: 'Idiot Savant', rank: 1 }],

  copperCoins: 0,
  silverCoins: 3,
  goldCoins: 0,
  platinumCoins: 0,
  inventory: [
    {
      name: 'Leather Armor',
      size: 'S',
      cost: 10,
      description: 'Light armor made of leather.',
      type: 'armor',
      equipped: true,
      wear: 1,
      category: 'armor',
    },
    {
      name: 'Sheathe',
      size: null,
      type: 'container',
      equipped: false,
      count: 2,
      category: 'containers',
    },
    {
      name: 'Rapier',
      size: 'M',
      type: 'weapon',
      equipped: true,
      damage: '2d6!',
      damageType: 'piercing',
      recovery: 7,
      initiative: 0,
      defense: 0,
      flanks: 0,
      parry: 6,
      cover: 0,
      parryDamageReduction: 0,
      damageReduction: 0,
      measure: 4,
      bonus: 'Keen 2',
      traits: [],
      wear: 0,
      category: 'weapons',
      subCategory: 'swords',
    },
    {
      name: 'Saber',
      size: 'M',
      type: 'weapon',
      equipped: true,
      damage: '2d3!+3d2!',
      damageType: 'slashing',
      recovery: 12,
      initiative: 0,
      defense: 0,
      flanks: 0,
      parry: 0,
      cover: 0,
      parryDamageReduction: 0,
      damageReduction: 0,
      measure: 3,
      traits: [],
      wear: 0,
      category: 'weapons',
      subCategory: 'swords',
    },
    {
      name: 'Belt - Leather',
      size: null,
      equipped: false,
      category: 'clothing',
    },
    {
      name: 'Breaches',
      size: null,
      equipped: false,
      category: 'clothing',
    },
    {
      name: 'Shirt',
      size: null,
      equipped: false,
      category: 'clothing',
    },
    {
      name: 'Sandals',
      size: null,
      equipped: false,
      category: 'clothing',
    },
    {
      name: 'Cloth Mask',
      size: null,
      type: 'item',
      equipped: false,
      category: 'clothing',
    },
    {
      name: 'Day Rations',
      size: 'S',
      count: 3,
      type: 'consumable',
      equipped: false,
      category: 'tools',
      subCategory: 'adventuring',
    },
    {
      name: 'Rope - 50ft',
      size: 'M',
      type: 'tool',
      equipped: false,
      category: 'tools',
      subCategory: 'rope & fabrics',
    },
    {
      name: 'Backpack, Leather, Large',
      size: 'S',
      type: 'container',
      equipped: true,
      expandedCarry: 9,
      category: 'containers',
      subCategory: 'personal',
    },
    {
      name: 'Four person tent',
      size: 'L',
      type: 'item',
      equipped: false,
      category: 'tools',
      subCategory: 'adventuring',
    },
    {
      name: 'Lock picking Talisman',
      size: null,
      type: 'item',
      equipped: false,
      category: 'magic items',
      subCategory: 'talisman',
    },
    {
      name: 'Hand-axe',
      size: 'S',
      type: 'weapon',
      damage: '1d6!',
      damageType: 'slashing',
      measure: 1,
      equipped: false,
      category: 'weapons',
      subCategory: 'axes',
      wear: 0,
    },
    {
      name: 'Club',
      size: 'M',
      type: 'weapon',
      damage: '1d10!',
      damageType: 'crushing',
      measure: 1.5,
      equipped: false,
      category: 'weapons',
      subCategory: 'trauma',
      wear: 0,
    },
  ],

  // skill suites
  athletics: {
    name: 'athletics',
    rank: 0,
    mod: -1,
    stats: ['Str', 'Con'],
    suite: 'athletics',
  },
  lore: { name: 'lore', rank: 0, mod: -1, stats: ['Int'], suite: 'lore' },
  streetwise: {
    name: 'streetwise',
    rank: 3,
    mod: -2,
    stats: ['Will', 'Pre'],
    suite: 'streetwise',
  },
  strategy: {
    name: 'strategy',
    rank: 4,
    mod: -2,
    stats: ['Will', 'Pre'],
    suite: 'strategy',
  },
  survival: {
    name: 'survival',
    rank: 0,
    mod: -2,
    stats: ['Con', 'Will'],
    suite: 'survival',
  },
  trades: {
    name: 'trades',
    rank: 2,
    mod: -1,
    stats: ['Dex', 'Int'],
    suite: 'trades',
  },
  weirdCraft: {
    name: 'weirdCraft',
    rank: 0,
    mod: -2,
    stats: ['Int', 'Will'],
    suite: 'weirdCraft',
  },
  advancedSkills: [
    {
      name: 'Intuition',
      rank: 5,
      mod: -2,
      suite: 'streetwise',
      stats: ['Will'],
    },
    {
      name: 'Initiative',
      rank: 5,
      mod: 1,
      suite: 'streetwise',
      stats: ['Pre'],
    },
  ],

  // combat skills
  armor: { rank: 1 },
  meleeWeapons: { rank: 4 },
  rangedWeapons: { rank: 0 },
  shields: { rank: 0 },
  unarmed: { rank: 0 },

  attackMod: 0,
  defenseMod: 0,
  damageMod: 0,
  recoveryMod: 0,

  combatSkills: [
    { name: 'Armor Fatigue', rank: 2, suite: 'armor' },
    { name: 'Sword Attack', rank: 5, suite: 'melee' },
    { name: 'Sword Damage', rank: 5, suite: 'melee' },
    { name: 'Sword Recovery', rank: 5, suite: 'melee' },
    { name: 'Sword Parry', rank: 5, suite: 'melee' },
  ],
};
