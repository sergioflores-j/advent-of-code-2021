import { getInput, getMockInput } from 'utils';
import run, {
  fuelConsumptionPart1,
  fuelConsumptionPart2,
  getChallengeInput,
} from '.';

const PATH = `${__dirname}/`;

describe('day7', () => {
  console.log(`\n  🔎  Running ${PATH}`);

  describe('using test input', () => {
    const crabs = getChallengeInput(getMockInput(PATH));
    const testPart1Expected = 37;
    const testPart2Expected = 168;

    it('part1', () => {
      const testPart1 = run(crabs, fuelConsumptionPart1);
      expect(testPart1).toBe(testPart1Expected);
    });

    it('part2', () => {
      const testPart2 = run(crabs, fuelConsumptionPart2);
      expect(testPart2).toBe(testPart2Expected);
    });
  });

  describe('using real input', () => {
    const crabs = getChallengeInput(getInput({ path: PATH }));

    it('part1', () => {
      const testPart1 = run(crabs, fuelConsumptionPart1);
      console.log('Result - Part 1:', testPart1);

      expect(testPart1).not.toBeUndefined();
    });

    it('part2', () => {
      const testPart2 = run(crabs, fuelConsumptionPart2);
      console.log('Result - Part 2:', testPart2);

      expect(testPart2).not.toBeUndefined();
    });
  });
});
