// elves
// humans
// orcs

interface AncestryModifier {
  stat: string;
  mod: number;
}

interface AncestryCharacteristics {
  description: string;
  convictions: string;
}

interface ClassCosts {
  expert: number;
  fighter: number;
  servant: number;
  socialite: number;
  weirdAdept: number;
}

interface Ancestry {
  name: string;
  description: string;
  modifiers: AncestryModifier[];
  size: string;
  vitalitySizeMod: number;
  nerveMod: number;

  baseMovement: number;
  ancestralAbility: string[];
  characteristics: AncestryCharacteristics;
  relationships: string;
  strengths: string;
  flaws: string;
  classCosts: ClassCosts;

  appearance: string;
  personality: string;
}

export const ancestries: Ancestry[] = [
  {
    name: 'Elves',
    description:
      'We who were trapped in prisons of flesh look to our forebears. For as the Alwealda ascended to return to the Divines, we, their children, will also ascend when we too have perfected ourselves in their sight.\nThe Elves are the first born of the Divines. Originally, the inhabitants of the Painted World, the source of all magic, they now inhabit the Middle Realm as mentally ethereal beings.',
    modifiers: [
      { stat: 'strength', mod: -2 },
      { stat: 'constitution', mod: -4 },
      { stat: 'intelligence', mod: 4 },
      { stat: 'presence', mod: 2 },
    ],
    size: 'Medium',

    vitalitySizeMod: 10,
    nerveMod: 20,

    baseMovement: 2.5,
    ancestralAbility: [
      'Star Shield: when resisting a spell, you, and any ally within 5 ft, gain an automatic -1 to the Order. When Shaping a spell on yourself, or ally within 5 ft, gain an automatic +1 to the Order. Half Stress from Weirdcraft Skills.',
    ],
    characteristics: {
      description: 'Beautiful or Unattached',
      convictions: 'The best days are behind us',
    },
    relationships:
      'Elves have a strong bond with nature and other magical beings.',
    strengths: 'Elves are agile and have a natural affinity for magic.',
    flaws:
      'Elves can be aloof and distant, often struggling to connect with others.',
    classCosts: {
      expert: 3,
      fighter: 3,
      servant: 3,
      socialite: 0,
      weirdAdept: 0,
    },
    appearance:
      'Elves are tall and slender, with pointed ears and sharp features.',
    personality:
      'Elves are often seen as aloof and distant, but they are deeply connected to nature and magic.',
  },
  {
    name: 'Humans',
    description:
      'In the days of yore, the Divines and the Giants fought in a war unending. And from their struggles fell their blood and sweat to the earth. From that mixture arose the first man and women, born of blood, sweat, and earth; the prices we must pay for all things.\nHumans are the first natives of the Middle Realm. They are creatures born from strife, who’ve carved for themselves a place in the world through fire, steel, and grit.',
    modifiers: [],
    size: 'Medium',
    vitalitySizeMod: 15,
    nerveMod: 15,
    baseMovement: 2.5,
    ancestralAbility: [
      'True Grit: Increase the size of your Grit Die by 1.',
      'Naturally Adept: At first level, gain the Martial, Skill, or Personality Adept Ability.',
    ],
    characteristics: {
      description: 'Forgiving or Ambitious',
      convictions: 'There is power in one person',
    },
    relationships: 'Craves discovery',
    strengths: 'Loyalty',
    flaws: 'Curious',
    classCosts: {
      expert: 0,
      fighter: 0,
      servant: 0,
      socialite: 0,
      weirdAdept: 0,
    },
    appearance:
      'The Humans of the Middle Realm look like you and me. Their skin, eye, and hair color range widely, adapted to the region of that Human’s origin, with darker skins more common towards the equator.\nIf you don’t know what a Human looks like, I don’t know what to tell you.',
    personality:
      'The truth is Humans are odd and quirky individuals that seem to have the defining trait of their curiosity and ambition.\nTruthfully, you probably have your own opinion about how humans behave and why they behave the way they do and nothing I write in this little blurb is going to convince you otherwise.',
  },
  {
    name: 'Orcs',
    description:
      'Days of ashes and nights of fire; we were great warriors then. But our swords and shields were stolen from us and now we, the nomads, search for things that no hand can hold. Where must we go? We who search the wasteland for our better selves?\nHeirs to a great empire long since lost to the ages, the orcs cling to tradition in the wake of uncertain and dark times. Some say that they value only strength but to truly known an orc is to know the soul of honor.',
    modifiers: [
      { stat: 'strength', mod: 4 },
      { stat: 'constitution', mod: 3 },
      { stat: 'intellect', mod: -4 },
      { stat: 'presence', mod: -4 },
    ],
    size: 'Medium',
    vitalitySizeMod: 15,
    nerveMod: 15,
    baseMovement: 2.5,
    ancestralAbility: [
      'Destructive: When using equipment to gain a bonus, orcs may gain an extra +d4! to their Check in exchange for an additional 1 Wear on the item.',
      'Instigator: Orcs gain 1 Grit Die when they start a Combat, Challenge, or Confrontation.',
    ],
    characteristics: {
      description: 'Passionate or Brass-faced',
      convictions: 'Today is a good day to die',
    },
    relationships: 'Pities the warrior who has killed all his foes',
    strengths: 'Conquest',
    flaws: 'Aggressive',
    classCosts: {
      expert: 5,
      fighter: 0,
      servant: 7,
      socialite: 10,
      weirdAdept: 5,
    },
    appearance:
      'Orcs have dark green or grey skin with porcine nose and tusks that jut up from their lower jaw. They tend to be stocky, with thick muscles and hunched shoulders.\nTheir hair is wiry, closer to steel wool than anything else and their eyes are completely black, with no pupils or irises, giving them an indescribable inhumanness to it.\nNaturally, orcs are scavengers, able to survive on practically anything, no matter how rotten or foul.',
    personality:
      'An orc’s life is defined by struggle: from birth to death, they conceptualize the universe as having a vendetta against them. This can often give them a martyr complex and make them morose traveling companions at times because they feel the weight of the world.\nThey can also come across as aggressive, which some have pointed out is a defense mechanism, but orcs would simply scoff at that.\nThere’s nothing an orc values more than their honor and the chance to prove themselves against a worthy foe. This is often seen in their deities across orcish cultures, which are almost exclusively pantheons of their greatest foes. It is taken for granted that you are only as good as your enemies.',
  },
];
