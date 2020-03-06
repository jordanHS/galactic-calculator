export class AgeCalculator {
  constructor(currentYear, birthYear) {
    this.currentYear = currentYear;
    this.birthYear = birthYear;
  }

  EarthYears() {
    const age = this.currentYear - this.birthYear;
    return age
  }

  EarthExpectancy() {
   const age = this.currentYear - this.birthYear;
    let expectancy = 73;
    if (age < expectancy) {
    return expectancy - age;
    } else {
      return age - expectancy;
    }
  }

  MercuryYears() {
    const age = this.currentYear - this.birthYear;
    const mercuryAge = age / .24;
    return Math.ceil(mercuryAge * 100)/ 100;
  }

  // MercuryExpectancy() {

  // }
};