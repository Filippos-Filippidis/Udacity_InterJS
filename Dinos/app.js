// Create Dino Constructor

class Dino {
  constructor(species, weight, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
}

// Create Dino Objects

const triceratops = new Dino(
  "Triceratops",
  13000,
  114,
  "herbavor",
  "North America",
  "Late Cretaceous",
  "First discovered in 1889 by Othniel Charles Marsh"
);
const tyrannosaurusRex = new Dino(
  "Tyrannosaurus Rex",
  11905,
  144,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "The largest known skull measures in at 5 feet long."
);
const Anklyosaurus = new Dino(
  "Anklyosaurus",
  10500,
  55,
  "herbavor",
  "North America",
  "Late Cretaceous",
  "Anklyosaurus survived for approximately 135 million years."
);
const Brachiosaurus = new Dino(
  "Brachiosaurus",
  70000,
  "372",
  "herbavor",
  "North America",
  "Late Jurasic",
  "An asteroid was named 9954 Brachiosaurus in 1991."
);
const Stegosaurus = new Dino(
  "Stegosaurus",
  11600,
  79,
  "herbavor",
  "North America, Europe, Asia",
  "Late Jurasic to Early Cretaceous",
  "The Stegosaurus had between 17 and 22 seperate places and flat spines."
);
const Elasmosaurus = new Dino(
  "Elasmosaurus",
  16000,
  59,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Elasmosaurus was a marine reptile first discovered in Kansas."
);
const pteranodon = new Dino(
  "Pteranodon",
  44,
  20,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Actually a flying reptile, the Pteranodon is not a dinosaur."
);
const pigeon = new Dino(
  "Pigeon",
  0.5,
  9,
  "herbavor",
  "World Wide",
  "Holocene",
  "All birds are living dinosaurs."
);

let dinos = [
  triceratops,
  tyrannosaurusRex,
  Anklyosaurus,
  Brachiosaurus,
  Stegosaurus,
  Elasmosaurus,
  pteranodon,
  pigeon,
];

// Create Human Object

function Human(hisName, height, weight, diet) {
  this.hisName = hisName;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
}

// Use IIFE to get human data from form
// Question: Why cant i add a height object to my inner return function??
// height = {Feet:formFeet.value, Inches: formInches.value}

const button = document.getElementById("btn");
const person = button.addEventListener(
  "click",
  (function () {
    const form = document.getElementById("dino-compare");
    const formName = form.elements["name"];

    const formFeet = document.getElementById("feet");
    const formInches = document.getElementById("inches");

    const formWeight = document.getElementById("weight");
    const formDiet = document.getElementById("diet");

    return function () {
      const newHuman = new Human(
        formName.value,
        { Feet: formFeet.value, Inches: formInches.value },
        formWeight.value,
        formDiet.value
      );
    };
  })()
);

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.compareWeight = (person) => {
  let fact;

  // skip the Pigeon dino from updating
  for (let i = 0; i < dinos.length - 1; i++) {
    const dino = dinos[i];
    if (dino.weight > human.weight) {
      fact = `${dino.species} is heavier than you by ${
        dino.weight - human.weight
      } lbs`;
      dino.fact.push(fact);
    } else {
      fact = `You are heavier than ${dino.species} by ${
        person.weight - dino.weight
      } lbs`;
      dino.fact.push(fact);
    }
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
