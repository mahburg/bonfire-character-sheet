// conditionals: { [key: string]: boolean }

export const names = (
  conditionals: { [key: string]: boolean },
  defaults: string = ''
) => {
  const classNames = [defaults];
  for (const [key, value] of Object.entries(conditionals)) {
    if (value) {
      classNames.push(key);
    }
  }

  return classNames.join(' ');
};

export const initialCapitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const inRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export const inRangeArr = (value: number, arr: number[]): boolean => {
  return value >= arr[0] && value <= arr[1];
};
