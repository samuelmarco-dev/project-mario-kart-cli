import randomPlayers from "./services/randomPlayers.js";
import playRace from "./services/playRace.js";
import showWinner from "./services/showWinner.js";

const amountRace = 5;

(async function main() {
    const { playerOne, playerTwo } = randomPlayers();
    const currentTime = new Date().getMilliseconds();

    console.log(
        `\n🏁 Race between ${playerOne.name} and ${playerTwo.name} starting...`
    );
    console.log("============================================");

    for (let index = 0; index < amountRace; index++) {
        console.log(`🏁 Race ${index + 1} starting...`);

        await playRace({ playerOne, playerTwo });
    }

    showWinner({ playerOne, playerTwo }, currentTime);
})();
