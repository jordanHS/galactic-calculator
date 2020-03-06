import { AgeCalculator } from './../src/calculator.js'

describe('AgeCalculator', () => {

    test('should correctly create a calculator with current year & birth year properties', () => {
        var calculator = new AgeCalculator(2020,1995);
        expect(calculator.currentYear).toEqual(2020);
        expect(calculator.birthYear).toEqual(1995);
    });
    
   
});
