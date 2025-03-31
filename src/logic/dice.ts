// format of diceStr: "2d6!+3"

const diceStrRgx = /^(\d+)d(\d+)(!)?$/;

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

  return runningTotal;
};

export const getAverage = (diceStr: string, samples: number): number => {
  let total = 0;
  for (let i = 0; i < samples; i++) {
    total += roll(diceStr);
  }

  return total / samples;
};
