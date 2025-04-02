// format of diceStr: "2d6!+3"
const diceStrRgx = /^(\d+)d(\d+)(!)?$/;

export interface DiceData {
  count: number;
  sides: number;
  explode: boolean;
}

export const parseDiceString = (diceString: string) => {
  const diceCounts: Record<string, DiceData> = {};
  const dice = diceString.split('+');

  let totalMod = 0;

  dice.forEach((dice) => {
    if (!dice.includes('d')) {
      const modMatch = dice.match(/([+-]\d+)/);
      if (modMatch) {
        totalMod += parseInt(modMatch[1], 10);
        return;
      }
    }
    const match = dice.match(diceStrRgx);
    if (!match) {
      throw new Error(`Invalid dice string: ${diceString}`);
    }

    const count = parseInt(match[1], 10);
    const sides = parseInt(match[2], 10);
    const explode = match[3] === '!';

    diceCounts[`d${sides}${explode ? '!' : ''}`] = { count, sides, explode };
  });

  const output = { diceCounts, mod: totalMod };

  return output;
};

export const diceDataToString = (
  diceData: Record<string, DiceData>,
  mod?: number
) => {
  const diceStrings = Object.entries(diceData).map(([, data]) => {
    const { count, sides, explode } = data;
    return `${count}d${sides}${explode ? '!' : ''}`;
  });

  const diceString = diceStrings.join('+');
  if (mod) {
    return `${diceString}+${mod}`;
  }

  return diceStrings.join('+');
};

export const rollSingle = (sides: number, count: number, explode: boolean) => {
  const rolls = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    if (explode && roll === sides) {
      i--;
    }
  }

  const total = rolls.reduce((acc, cur) => acc + cur, 0);

  return { rolls, total };
};

export const rollMod = (
  sides: number,
  mod: number,
  explode: boolean = false
) => {
  const { rolls, total } = rollSingle(sides, 1, explode);

  return {
    rolls,
    total: total + mod,
  };
};

// TODO: return dice count
export const roll = (diceStr: string): number => {
  const dices = diceStr.split('+');

  let runningTotal = 0;

  for (const dice of dices) {
    if (!dice.includes('d')) {
      runningTotal += parseInt(dice, 10);
      continue;
    }
    const match = dice.match(diceStrRgx);
    if (!match) {
      throw new Error(`Invalid dice string: ${diceStr}`);
    }

    const count = parseInt(match[1], 10);
    const sides = parseInt(match[2], 10);
    const explode = match[3] === '!';

    const { total } = rollSingle(sides, count, explode);

    runningTotal += total;
  }

  console.log('Roll:', runningTotal);
  return runningTotal;
};

export const getAverage = (diceStr: string, samples: number): number => {
  let total = 0;
  for (let i = 0; i < samples; i++) {
    total += roll(diceStr);
  }

  return total / samples;
};

export interface DiceSet {
  diceCounts: { [key: string]: DiceData };
  mod?: number;
}

export const sumDiceCountsAndMods = (array: DiceSet[]): DiceSet => {
  const result: DiceSet = { diceCounts: {} };

  array.forEach((item) => {
    Object.entries(item.diceCounts).forEach(([key, value]) => {
      if (result.diceCounts[key]) {
        result.diceCounts[key].count += value.count;
      } else {
        result.diceCounts[key] = { ...value };
      }
    });

    if (item.mod) {
      result.mod = (result.mod || 0) + item.mod;
    }
  });

  return result;
};
