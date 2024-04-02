let currentState = "start";

let gameData = {
  start: {
    text: "Do you want to start",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://oldworldgods.com/wp-content/uploads/2023/11/romancreationmyth1.jpg",
  },
  start1: {
    text: "You find yourself in a world where myths and reality blur. Choose your path.",
    choices: ["Seek the Enchanted Forest", "Venture into the Cursed City"],
    consequences: ["enchantedForest", "cursedCity"],
    image: "https://clydebutcher.com/wp-content/uploads/2023/04/Mystical-Path.jpg",
},
enchantedForest: {
    text: "You enter the Enchanted Forest. What do you seek?",
    choices: ["The Lost Fairy Village", "The Ancient Tree of Wisdom"],
    consequences: ["fairyVillage", "treeOfWisdom"],
    image: "https://t4.ftcdn.net/jpg/05/41/66/35/360_F_541663564_TUSOQROrrPZPkSZvdbXd6Wil5yCezuI7.jpg",
},
cursedCity: {
    text: "You brave the Cursed City. What lies ahead?",
    choices: ["The Abandoned Palace", "The Hidden Underground Tunnels"],
    consequences: ["abandonedPalace", "undergroundTunnels"],
    image: "https://www.fauxhammer.com/wp-content/uploads/2021/04/Warhammer-Quest-Cursed-City-GW-Villains-alt.jpg",
},
fairyVillage: {
    text: "You discover the hidden Fairy Village. What's your next move?",
    choices: ["Help the Fairies", "Search for Enchanted Artifacts"],
    consequences: ["helpFairies", "findArtifacts"],
    image: "https://i.cbc.ca/1.5376763.1574958090!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/fairy-tale-garden.jpg",
},
treeOfWisdom: {
    text: "You reach the Ancient Tree of Wisdom. How will you use its knowledge?",
    choices: ["Heal the Forest", "Gain Eternal Wisdom"],
    consequences: ["healForest", "eternalWisdom"],
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/tree-of-wisdom-aaron-j-groen.jpg",
},
abandonedPalace: {
    text: "You explore the Abandoned Palace. What secrets do you uncover?",
    choices: ["Royal Ghost Encounter", "Hidden Treasure Chamber"],
    consequences: ["ghostEncounter", "treasureChamber"],
    image: "https://i.insider.com/5de93a1bfd9db25d96792c03?width=1136&format=jpeg",
},
undergroundTunnels: {
    text: "You navigate the Hidden Underground Tunnels. What awaits?",
    choices: ["Escape the Labyrinth", "Find the Underground City"],
    consequences: ["escapeLabyrinth", "undergroundCity"],
    image: "https://cdn.britannica.com/47/124947-004-316B84F7/Entrance-Simplon-Tunnel-Iselle-Italy.jpg",
},
helpFairies: {
    text: "You help the fairies and restore peace to the village. Congratulations!",
    choices: ["Ending 1"],
    image: "https://i.pinimg.com/originals/24/f3/85/24f385016741f6248c1b94a1826bb5b5.jpg",
},
findArtifacts: {
    text: "You find enchanted artifacts and become a legend. Congratulations!",
    choices: ["Ending 2"],
    image: "https://res.cloudinary.com/https-mirdota-ru/image/upload/v1469776832/Enchanted_Artifacts_Scourge_h62fwr.jpg",
},
healForest: {
    text: "You heal the forest, bringing it back to life. Congratulations!",
    choices: ["Ending 3"],
    image: "https://healingforestdotorg.files.wordpress.com/2020/05/forest-friends-cover.jpg",
},
eternalWisdom: {
    text: "You gain eternal wisdom and become a sage. Congratulations!",
    choices: ["Ending 4"],
    image: "https://www.ecatholic2000.com/montfort/eternal/wisdom_shtml_m55505a7d.jpg",
},
ghostEncounter: {
    text: "You encounter royal ghosts and uncover the city's history. Congratulations!",
    choices: ["Ending 5"],
    image: "https://scalebranding.com/wp-content/uploads/2021/08/King-Ghost-Logo.jpg",
},
treasureChamber: {
    text: "You discover a hidden treasure chamber and become rich. Congratulations!",
    choices: ["Ending 6"],
    image: "https://i.pinimg.com/originals/1c/1d/02/1c1d02c5aa04bafc2a547a60c63360ef.jpg",
},
escapeLabyrinth: {
    text: "You escape the labyrinth, emerging wiser. Congratulations!",
    choices: ["Ending 7"],
    image: "https://i.etsystatic.com/15062905/r/il/37d7a7/1536759863/il_fullxfull.1536759863_24f8.jpg",
},
undergroundCity: {
    text: "You find the Underground City and unlock its mysteries. Congratulations!",
    choices: ["Ending 8"],
    image: "https://heymondo.com/blog/wp-content/uploads/2023/05/Montreal-underground-City.jpg",
},

};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();