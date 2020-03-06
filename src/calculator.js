export class AgeCalculator {
  constructor(currentYear, birthYear) {
    this.currentYear = currentYear;
    this.birthYear = birthYear;
  }

  EarthYears() {
    let age = this.currentYear - this.birthYear;
    return age
  }
};