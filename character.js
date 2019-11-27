class Character {
  constructor(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.atk} damage.`);
    console.log(`${this.name} has ${this.hp} hit points remaining!`);
    console.log("------------");
  }
  hpCheck() {
    console.log(`${this.name} has ${this.hp} hit points remaining!`);
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hp <= 0) {
      console.log(`${this.name} was killed!`)
      stopGame()
      return true
    } else {
      return false
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${this.name} attacked ${opponent.name} for ${this.atk} damage!`)
    // console.log which character was attacked and how much damage was dealt
    opponent.hp = opponent.hp - this.atk
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
let Lakshdeep = new Character("Lakshdeep", 10, 2)
let Chris = new Character("Chris", 20, 1)
// Create an interval that alternates attacks every 2000 milliseconds
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

