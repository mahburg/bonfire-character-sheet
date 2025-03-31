const weaponBonuses = {
  Ahlspiess:
    'This weapon deals d6! damage on a successful jab.\n\nThis weapon can be Braced for a Charge: see sidebar.',
  'Bracing for a Charge':
    "If you the correct type of polearm and see someone coming, you can Brace for a Charge. This takes 2 seconds and can only be used against people running or sprinting at you from the front and front-side flanks but, if your attack hits, you deal an extra 1d12! damage for every 5 ft above 10 ft / second your target is traveling. This doesn't increase the effective number of dice.\n\nThis special Tactic is compatible with Bracing Yourself and Fending Off.",
  'Arming Sword': "Add this weapon's Parry to your Shield's Parry.",
  Bellybow:
    'This weapon must be loaded two-handed regardless of size.\n\nWhen steading the bellybow against a stand, ground, wall or something similar gain +1d10! to damage.',
  Bill: 'Damage with this weapon is effectively doubled for Knock-Backs vs mounted defenders.',
  Bludgeon: 'Damage with this weapon is effectively doubled for Trauma checks.',
  'Brass Knuckles':
    "Brass Knuckles use the Unarmed Skill Suite.\n\nWhile using Brass Knuckles you can't Grab or Throw but can Push, Tackle, and Strike. Strikes gain +5 to Effectiveness.\n\nThis weapon's damage isn't modified by Strength's damage modifier.",
  'Composite Bow': 'This weapon requires two hands regardless of size.',
  Crossbow:
    'This weapon must be loaded two-handed regardless of size.\n\nWhen steading the crossbow against a stand, ground, wall or something similar gain +1d10! to damage.',
  Dusack: 'Parrying with this weapon gives you 3/D DR instead of 2/D.',
  Dagger:
    'This weapon can be used as either a Slashing or Piercing weapon. You can only switch after each attack.',
  Estoc:
    'Damage dice for this weapon are effectively halved, rounded up, vs /DR.',
  Falchion: 'When used two-handedly, you gain a +6 damage instead.',
  'Fire Lance':
    "This weapon causes flinching equal to the highest damage dice rolled within it's range. See the Flinching Sidebar for more info.\n\nThis weapon always gains 1 Wear on use.",
  Flinching:
    'This weapon\'s loud noise causes everyone to duck. Everyone within its flinching range flinches for a number of seconds as noted by the weapon, (see Terrain and Situational Factors section of Chapter 1.3: Combat). This includes the gunner as well.\n\nThis penalty is lowered by 1 for every Rank of the "Immune to being stunned by firearms" Description or every Rank they have in any Firearm-based Weapon Advanced Skill, which they can either invest or buy like a normal Description or get for free: they gain 1 Rank in it for each combat they have been in that involves firearms.\n\nIf several firearms have gone off on the same second, you take the highest delay rolled. Additionally, those already stunned by a firearm when another goes off are unaffected by that firearm\'s delay.',
  Guisarme:
    'Damage with this weapon is effectively doubled for Knock-Backs vs mounted defenders.\n\nThis weapon can be Braced for a Charge: see sidebar.',
  Halberd:
    'This weapon can be used as either a Slashing or Piercing weapon. You can only switch after each attack.\n\nThis weapon can be Braced for a Charge: see sidebar.',
  Hakenbuchse:
    'If you steady this weapon against the ground or a stand, you may double your Attack bonus from Skills with this weapon.\n\nThis weapon causes flinching equal to the d8! damage dice within its first 2 range categories. See the Flinching Sidebar for more info.\n\nThis weapon Backfires. See the Back Firing sidebar for more info.',
  'Back Firing':
    "On a roll of 1 on your attack dice, this weapon jams, making it unusable until repaired.\n\nOn top of this, you need to roll another d20. On the roll of 20, the gun still goes off but does half damage and the firing mechanism is broken so the firearm is unusable until repaired.\n\nOn the roll of a second 1, the gun backfires, dealing half damage to you. At least, it's not jammed?",
  Handaxe:
    'This can be used in melee or as a throwing axe. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.',
  Handgonne:
    'This weapon causes flinching equal to the d4! damage dice within its first 2 range categories. See the Flinching Sidebar for more info.\n\nThis weapon Backfires. See the Back Firing sidebar for more info.',
  'Horsemans Pick':
    "When Parried, the Horsemans Pick's damage isn't reduced to 0 like other Piercing weapons.",
  'Javelin, Melee':
    'This can be used in melee or as a thrown javelin. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.',
  'Javelin, Thrown':
    "This can be used at ranged or as a javelin in melee. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.\n\nOn a shield hit, roll damage anyway: if the damage is greater than the shield's DR, the javelin is lodged in the shield. Defender defends on 1 dice smaller until they drop the shield or spend 2d6! seconds pull it out. This doesn't actually inflict damage.\n\nAdd your Damage Modifier from Strength to this weapon.\n\nThis weapon can be drawn and readied on the move but the wielder needs to be standing still to aim without penalties.",
  Knife:
    'This can be used in melee or as a throwing knife. All applicable Adv. Weapon Skills apply to both, taking the highest of the two',
  Koncerz:
    'This weapon is designed for use on horseback; it gains a +d8! to damage.',
  Lance:
    'When mounted, this weapon can be wielded 1 handed without penalty.\n\nThis weapon is designed for use on horseback. When mounted, and moving above a walk, it gains +3d8! damage.\n\nThis weapon can be Braced for a Charge: see sidebar.',
  'Latchet Crossbow':
    'This weapon must be loaded two-handed regardless of size.\n\nWhen steading the latchet crossbow against a stand, ground, wall or something similar gain +1d6! to damage.',
  Longbow: 'This weapon requires two hands regardless of size.',
  'Military Fork':
    'While using this weapon, you can perform the Grab & Throw Unarmed moves as if 1 handed.\n\nThis weapon can be Braced for a Charge: see sidebar.',
  'Molotov Cocktail':
    "If the target is soft (a human, pillow, dirt, etc.), you need to roll max damage to break the bottle. If the target is hard (stone, brick, etc.), you need to roll above a 1 on damage to break the bottle.\n\nIf it breaks, the target is lit on fire. Fire damage is 1d6! unless you hit by more than 10, in which case it is 2d6!, every 10 seconds. If the damage explodes, you add the d6! to the damage and inflict 1 Wear to any clothing, Light and Medium armor, and wooden shields and weapons. If a damage dice rolls a ‘1', you remove it.\n\nOn an Attack roll of 1, you light yourself on fire, regardless of anything else.",
  "Peasant's Flail":
    'Attacks against shields or weapons with base Parry, +4 Atk vs weapons, +8 vs Shields.',
  Pike: 'This weapon can be Braced for a Charge: see sidebar.',
  Ranseur: 'This weapon can be Braced for a Charge: see sidebar.',
  Rapier: 'When in Long Guard, increase Measure by +2 ft instead.',
  Scourge:
    'Attacks against shields or weapons with base Parry, +4 Atk vs weapons, +8 vs Shields.',
  Sovnya:
    'This weapon is designed for use on horseback; it gains a +d8! to damage.',
  'Throwing Axe':
    "This can be used at ranged or as a handaxe in melee. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.\n\nOn a shield hit, if damage is greater than the shield's DR, the ax is lodged in the shield. The Defender defends on 1 dice smaller until they drop the shield or spend 2d6! seconds pull it out.\n\nAdd your Damage Modifier from Strength to this weapon.\n\nThis weapon can be drawn and readied on the move but the wielder needs to be standing still to aim without penalties.",
  'Throwing Knife':
    'This can be used at ranged or as a knife in melee. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.\n\nAdd your Damage Modifier from Strength to this weapon.\n\nThis weapon can be drawn and readied on the move but the wielder needs to be standing still to aim without penalties.',
  Unarmed:
    "On explosions, the additional dice are at a -1.\n\nUnarmed attacks aren't treated as Trauma weapons for the sake of the Melee Weapon Suite or its Advanced Skills.\n\nUnarmed damage isn't modified by Strength's damage modifier.",
  Voulge: 'This weapon can be Braced for a Charge: see sidebar.',
  'War Flail':
    'Attacks against shields or weapons with base Parry, +4 Atk vs weapons, +8 vs Shields.',
  'War-scythe':
    'Attacks also count against 2 adjacent targets, dealing an unmodified (no Str, Skills, Descriptions) 3d3! damage on hit instead.',
  Warbow:
    'This weapon must be fired from the prone position, regardless of size, bracing the body of the bow with your legs.\n\nBecause of the way it must be fired, aiming moving targets is extremely difficult. The attacker takes a -2 Attack penalty for every Movement Category above a stand still the target is moving at. This is in addition to the normal movement bonuses the defender gets.',
  Zweihander:
    'Attacks also count against 2 adjacent targets, dealing an unmodified (no Str, Skills, Descriptions) 3d3! damage on hit instead.\n\nThis weapon gives a +10 to Knock-backs (including adjacent targets effected by the previous ability).',
};

export default weaponBonuses;
