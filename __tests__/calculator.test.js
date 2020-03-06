import { AgeCalculator } from './../src/calculator.js'

describe('AgeCalculator', () => {
  var newCalculator;

  beforeEach(() => {
    newCalculator = new AgeCalculator(2020, 1995);
  });
    
  test('should correctly create a calculator with current year & birth year properties', () => {
        expect(newCalculator.currentYear).toEqual(2020);
        expect(newCalculator.birthYear).toEqual(1995);
    });
    
   test('should correctly calculate the users age in earth years', () => {
          expect(newCalculator.EarthYears()).toEqual(25);
   });

   test('should determine how many years the user has left on earth', () => {
          expect(newCalculator.EarthExpectancy()).toEqual(48);
   });

   test('should calculate users age in mercury years', () => {
          expect(newCalculator.MercuryYears()).toEqual(104.2);
   });
});
