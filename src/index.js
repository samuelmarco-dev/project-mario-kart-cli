import randomPlayers from "./services/randomPlayers.js";
import playRace from "./services/playRace.js";
import sortBlock from "./services/sortBlock.js";

const amountRace = 5;

(async function main() {
    const { playerOne, playerTwo } = randomPlayers();

    console.log(
        `🏁 Race between ${playerOne.name} and ${playerTwo.name} starting...\n`
    );

    for (let index = 0; index < amountRace; index++) {
        console.log(`🏁 Race ${index + 1} starting...`);

        await playRace({ playerOne, playerTwo });
    }
})();
