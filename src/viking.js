// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.damage = damage;

    this.health = this.health - this.damage;
  }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
