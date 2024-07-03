import Bower from "../players/Bower.js";
import DonkeyKong from "../players/DonkeyKong.js";
import Luigi from "../players/Luigi.js";
import Mario from "../players/Mario.js";
import Peach from "../players/Peach.js";
import Yoshi from "../players/Yoshi.js";

/**
 * @param {{
 * playerOne: Bower | DonkeyKong | Luigi | Mario | Peach | Yoshi,
 * playerTwo: Bower | DonkeyKong | Luigi | Mario | Peach | Yoshi }} params
 */

const showWinner = ({ playerOne, playerTwo }, currentTime) => {
    console.log(
        playerOne.getPoints() === playerTwo.getPoints()
            ? "🏁 Tie"
            : `🥇 Winner: ${
                  playerOne.getPoints() > playerTwo.getPoints()
                      ? playerOne.name
                      : playerTwo.name
              }`
    );

    console.log(
        `⏳ Time race: ${new Date().getMilliseconds() - currentTime} ms`
    );
    console.log("============================================");
};

export default showWinner;
