export const getChallengeInput = (input: string[]): number[] =>
  input[0].split(',').map(Number);

export const fuelConsumptionPart1 = (crab: number, pos: number) =>
  Math.abs(crab - pos);

export const fuelConsumptionPart2 = (crab: number, pos: number) =>
  (Math.abs(crab - pos) * (Math.abs(crab - pos) + 1)) / 2;

const run = (
  crabsPositions: number[],
  fnCalcFuelConsumption: (crab: number, pos: number) => number
): number => {
  const min = Math.min(...crabsPositions);
  const max = Math.max(...crabsPositions);

  let alignPosition = -1;
  let alignFuelNeeded = 0;
  for (let i = min; i <= max; i++) {
    const fuelNeeded = crabsPositions.reduce(
      (sum, pos) => sum + fnCalcFuelConsumption(pos, i),
      0
    );

    if (alignPosition === -1 || fuelNeeded < alignFuelNeeded) {
      alignPosition = i;
      alignFuelNeeded = fuelNeeded;
    }
  }

  return alignFuelNeeded;
};

export default run;
