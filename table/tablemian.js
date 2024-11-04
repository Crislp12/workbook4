const spongebobCharacters = [
  {
    name: 'SpongeBob SquarePants',
    species: 'Sea Sponge',
    occupation: 'Fry Cook',
    favoriteActivity: 'Jellyfishing',
  },
  {
    name: 'Patrick Star',
    species: 'Starfish',
    occupation: 'Unemployed',
    favoriteActivity: 'Eating and sleeping',
  },
  {
    name: 'Squidward Tentacles',
    species: 'Octopus',
    occupation: 'Cashier',
    favoriteActivity: 'Playing the clarinet',
  },
  {
    name: 'Mr. Krabs',
    species: 'Crab',
    occupation: 'Restaurant Owner',
    favoriteActivity: 'Counting money',
  },
  {
    name: 'Sandy Cheeks',
    species: 'Squirrel',
    occupation: 'Scientist/Inventor',
    favoriteActivity: 'Karate and science experiments',
  },
  {
    name: 'Plankton',
    species: 'Plankton',
    occupation: 'Restaurant Owner',
    favoriteActivity: 'Stealing the Krabby Patty formula',
  },
  {
    name: 'Mrs. Puff',
    species: 'Pufferfish',
    occupation: 'Boating School Instructor',
    favoriteActivity: 'Teaching and avoiding SpongeBob',
  },
  {
    name: 'Gary the Snail',
    species: 'Snail',
    occupation: 'Pet',
    favoriteActivity: 'Meowing and eating',
  },
  {
    name: 'Larry the Lobster',
    species: 'Lobster',
    occupation: 'Lifeguard',
    favoriteActivity: 'Weightlifting and staying fit',
  },
  {
    name: 'Karen Plankton',
    species: 'Computer',
    occupation: "Plankton's Wife/Assistant",
    favoriteActivity: 'Calculating and assisting Plankton',
  },
  {
    name: 'Pearl Krabs',
    species: 'Whale',
    occupation: 'Student',
    favoriteActivity: 'Shopping and hanging out with friends',
  },
  {
    name: 'Mermaid Man',
    species: 'Human',
    occupation: 'Retired Superhero',
    favoriteActivity: 'Fighting crime',
  },
  {
    name: 'Barnacle Boy',
    species: 'Human',
    occupation: 'Retired Superhero Sidekick',
    favoriteActivity: 'Being grumpy',
  },
  {
    name: 'Flying Dutchman',
    species: 'Ghost',
    occupation: 'Ghostly Pirate',
    favoriteActivity: 'Scaring people and collecting souls',
  },
  {
    name: 'Bubble Buddy',
    species: 'Bubble',
  },
];

const select = document.querySelector('#species');

function getSpecies() {
  const array = [];

  for (let i = 0; i < spongebobCharacters.length; i++) {
    if (!array.includes(spongebobCharacters[i].species)) {
      array.push(spongebobCharacters[i].species);
      const option = document.createElement('option');
      option.innerText = spongebobCharacters[i].species;
      select.appendChild(option);
    }
  }
}

getSpecies();

const table = document.querySelector('#charactersTBody');

spongebobCharacters.map((character) => {
  const row = document.createElement('tr');

  for (const data in character) {
    const cell = document.createElement('td');
    const cellText = document.createTextNode(`${character[data]}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  table.appendChild(row);
});

select.addEventListener('change', () => {

});


const boxes  = document.querySelectorAll('.box')

