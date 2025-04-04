export const getStartingIntegrity = (
  presence: number,
  bonus: number = 0
): number => {
  switch (presence) {
    case 7:
      return 7 + bonus;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return 8 + bonus;
    case 13:
    case 14:
    case 15:
      return 9 + bonus;
    case 16:
      return 10 + bonus;
    case 17:
      return 11 + bonus;
    case 18:
      return 13 + bonus;
    default:
      return presence + 1 + bonus;
  }
};

export const calculateStartingVitality = (
  vitalitySizeMod: number,
  conScore: number,
  classNerveRoll: number,
  subclassNerveRoll: number
): number => {
  return vitalitySizeMod + conScore + classNerveRoll + subclassNerveRoll;
};

export const calculateStartingNerve = (
  ancestryNerveMod: number,
  willScore: number,
  classNerveRoll: number,
  subclassNerveRoll: number
): number => {
  return ancestryNerveMod + willScore + classNerveRoll + subclassNerveRoll;
};

export const getNerveCategories = (nerve: number) => {
  const quarterRoundedUp = Math.ceil(nerve / 4);
  const quarterRoundedDown = Math.floor(nerve / 4);

  return {
    unsure: [1, quarterRoundedUp],
    tense: [quarterRoundedUp + 1, quarterRoundedDown * 2],
    shaken: [quarterRoundedDown * 2 + 1, quarterRoundedDown * 3],
    broken: [quarterRoundedDown * 3 + 1, nerve],
  };
};

export const getVitalityCategories = (vitality: number) => {
  const quarterRoundedUp = Math.ceil(vitality / 4);
  const quarterRoundedDown = Math.floor(vitality / 4);

  return {
    hurt: [1, quarterRoundedUp],
    bloodied: [quarterRoundedUp + 1, quarterRoundedDown * 2],
    wounded: [quarterRoundedDown * 2 + 1, quarterRoundedDown * 3],
    critical: [quarterRoundedDown * 3 + 1, vitality],
  };
};
