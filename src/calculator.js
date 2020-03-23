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

  VenusYears() {
    const age = this.currentYear - this.birthYear;
    const venusAge = age / .62;
    return Math.floor(venusAge);
  }

  VenusExpectancy() {
    const age = this.currentYear - this.birthYear;
    const venusAge = age / .62;
    let expectancy = 117.1;
    let userExpectancy = expectancy - venusAge;
    if (venusAge < expectancy) {
      return Math.floor(userExpectancy);
    } else {
      return venusAge - expectancy;
    }
  }

 MarsYears() {
   const age = this.currentYear - this.birthYear;
   const marsAge = age / 1.88;
   return Math.floor(marsAge);
 }

 MarsExpectancy() {
   const age = this.currentYear - this.birthYear;
   const marsAge = age / 1.88;
   let expectancy = 38.6;
   let userExpectancy = expectancy - marsAge;
   if (marsAge < expectancy) {
     return Math.ceil(userExpectancy);
   } else {
     return marsAge - expectancy;
   }
 }

 JupiterYears() {
   const age = this.currentYear - this.birthYear;
   const jupiterAge = age / 11.86;
   return Math.floor(jupiterAge);
 }

 JupiterExpectancy() {
   const age = this.currentYear - this.birthYear;
   const jupiterAge = age / 11.86;
   let expectancy = 6.12;
   let userExpectancy = expectancy - jupiterAge;
   if (jupiterAge < expectancy) {
   return Math.floor(userExpectancy);
   } else {
    return jupiterAge - expectancy;
   }
 }

 KeithRichards() {
   const hypoYear = 2073;
   const keithYear = 1943;
   const keithAge = hypoYear - keithYear;
   let dogYears = keithAge * 5;
   let jupiterDogYears  = dogYears / 11.86;
   return Math.ceil(jupiterDogYears);
 }

}