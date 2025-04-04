// interface ClassAbility {
//   name: string;
// }

interface CharacterClass {
  name: string;
  description: string;
  vitalityDie: number;
  nerveDie: number;
}

export const characterClasses: CharacterClass[] = [
  {
    name: 'Expert',
    description:
      'Choose this Class if you want to use your wits to defeat your opponent or avoid combat altogether.\nExperts are those that focus on real-world non-combat skills, as opposed to relying on the Divines, magic, or their sword arm as a source of strength. They tend to rely on Intellect and Willpower, primarily, though there are Experts that focus on Strength, Dexterity, and Constitution for more physical skills.',
    vitalityDie: 6,
    nerveDie: 6,
  },
  {
    name: 'Fighter',
    description:
      'Choose this Class if you want to kill monsters and worthy foes in mortal combat and like thinking on your feet.\nWar is a ladder by which capable people are able to climb the ranks of society. Fighters focus on combat and battle, either by training and discipline or by out maneuvering their opponent. Unsurprisingly, this Class focuses on Constitution, but how you approach combat may decide whether you favor Strength, Dexterity, or even Intellect or Willpower.',
    vitalityDie: 8,
    nerveDie: 4,
  },
  {
    name: 'Servant',
    description:
      'Choose this Class if you want to be a servant or a servant of the Divine.\nServants are those that have been chosen by the Divine to serve them. They are not divine themselves, but they are blessed with powers and abilities that allow them to serve their Divine. Servants focus on Willpower, but how you approach your service may decide whether you favor Strength, Dexterity, or even Intellect or Constitution.',
    vitalityDie: 6,
    nerveDie: 4,
  },
  {
    name: 'Socialite',
    description:
      'Choose this Class if you want to be a socialite or a servant of the Divine.\nSocialites are those that have been chosen by the Divine to serve them. They are not divine themselves, but they are blessed with powers and abilities that allow them to serve their Divine. Socialites focus on Willpower, but how you approach your service may decide whether you favor Strength, Dexterity, or even Intellect or Constitution.',
    vitalityDie: 4,
    nerveDie: 6,
  },
  {
    name: 'Weird-Adept',
    description:
      'Choose this Class if you want to be a weird adept or a servant of the Divine.\nWeird adepts are those that have been chosen by the Divine to serve them. They are not divine themselves, but they are blessed with powers and abilities that allow them to serve their Divine. Weird adepts focus on Willpower, but how you approach your service may decide whether you favor Strength, Dexterity, or even Intellect or Constitution.',
    vitalityDie: 4,
    nerveDie: 8,
  },
];
