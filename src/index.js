import randomPlayers from "./services/randomPlayers.js";
import sortDie from "./services/sortDie.js";

const { personOne, personTwo } = randomPlayers();
const roll = sortDie();

console.log("Personagens sorteados: \n");
console.log(personOne);
console.log(personTwo);
console.log(`Dado sorteado: ${roll}`);
console.log("\n");
