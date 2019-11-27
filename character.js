class Character {
  constructor(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    if (!name) {
      throw new Error("You are missing the Name.");
    }
    if (!atk) {
      throw new Error("You are missing the Attack.");
    }
    if (!hp) {
      throw new Error("You are missing the Hitpoints.");
    }

  }

  printStats() {
    console.log("------------");
    console.log(`${this.name} has ${this.hp} hitpoints.`);
    console.log(`Each attack will do ${this.atk} damage.`);
    console.log("------------");
  }

  hpCheck() {
    console.log(`${this.name} has ${this.hp} hit points remaining!`);
  }

  isAlive() {
    if (this.hp <= 0) {
      console.log(`${this.name} was killed!`)
      stopGame()
      return true
    } else {
      return false
    }
  }

  attack(opponent) {
    console.log(`${this.name} attacked ${opponent.name} for ${this.atk} damage!`)
    opponent.hp = opponent.hp - this.atk
  }
}

let Lakshdeep = new Character("Lakshdeep", 10, 2)
let Chris = new Character("Chris", 20, 1)

function playGame() {
  Lakshdeep.attack(Chris)
  Chris.hpCheck()
  Chris.isAlive()
  Chris.attack(Lakshdeep)
  Lakshdeep.hpCheck()
  Lakshdeep.isAlive()
} 

const interval = setInterval(playGame, 250)

function stopGame() {
  clearInterval(interval)
}

playGame()

