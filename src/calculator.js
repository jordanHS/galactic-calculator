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
    let expectancy = 72.6;
    let userExpectancy = expectancy - age;
    if (age < expectancy) {
    return Math.ceil(userExpectancy);
    } else {
      return age - expectancy;
    }
  }

  MercuryYears() {
    const age = this.currentYear - this.birthYear;
    const mercuryAge = age / .24;
    return Math.floor(mercuryAge);
  }

  MercuryExpectancy() {
    const age = this.currentYear - this.birthYear;
    const mercuryAge = age / .24;
    let expectancy = 304.17;
    let userExpectancy = expectancy - mercuryAge;
    if (mercuryAge < expectancy) {
      return Math.floor(userExpectancy);
    } else {
      return mercuryAge - expectancy;
    }
  }
};