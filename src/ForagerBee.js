class ForagerBee extends Bee {
  constructor(age, food, color, job) {
    super(food, color);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}
