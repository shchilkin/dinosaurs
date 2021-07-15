const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
    
    // Create creature constructor - parent class
    /**
     * @description represents a creature base object
     * @constructor
     * @param {string} species - The species of the creature. 
     * @param {number} height - The height of the creature in inches. 
     * @param {number} weight - The weight of the creature in lbs.  
     * @param {string} diet - The diet of the creature.
     */
    function Creature(species, height, weight, diet){
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
    }
    
    // Create Dino Constructor
    /**
     * @description represents a dinosaur object
     * @constructor
     * @param {string} where - The place where dinosaur lived.
     * @param {string} when - The time period in which dinosaur lived.
     * @param {string} fact - The fact about dinosaur.
     */
    function Dino(species, height, weight, diet, where, when, fact){
        Creature.call(this, species, height, weight, diet)

        this.where = where;
        this.when = when;
        this.fact = fact;
    };

    // Create Dino Objects
    /**
     * @description An array which stores Dino Objects
     */
    const dinosArray = [];
    dinos.forEach(element => {
        const {species, weight, height, diet, where, when, fact} = element;
        dinosArray.push(new Dino(species, weight, height, diet, where, when, fact));
    })

    // Create Human Object
    // Use IIFE to get human data from form
    const getHumanData = (function(){
        const name = document.getElementById('name');
        const feet = document.getElementById('feet');
        const inches = document.getElementById('inches');
        const weight = document.getElementById('weight');
        const diet = document.getElementById('diet');

        return function(){
            const human = new Creature(name.value, (Number.parseInt(feet.value)* 12)+ Number.parseInt(inches.value), weight.value, diet.value);
            return human;
        }
    })();
    const generateHumanTile = (human) => {

    }

    // TODO: Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // TODO: Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // TODO: Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    const generateTiles = () => {
        const grid = document.getElementById('grid');
        const fragment = document.createDocumentFragment();
        dinosArray.forEach(element => {
            //TODO: Refactor to generateTile Function function
            const card = document.createElement('div');
            const h3 = document.createElement('h3');
            const image = document.createElement('img');
            image.src = `images/${String(element.species).toLowerCase()}.png`;
            h3.textContent = element.species;
            card.appendChild(h3);
            card.appendChild(image);
            card.classList.add('grid-item');
            fragment.appendChild(card)
        })
        grid.appendChild(fragment);
    }
        // Add tiles to DOM

    // TODO: Remove form from screen

    //TODO: On button click, prepare and display infographic
    const button = document.getElementById("btn");

    const prepareInfographic = () => {
        const form = document.getElementById('dino-compare');
        form.style.display = 'none';
        generateTiles();
    }

    button.addEventListener('click', prepareInfographic);