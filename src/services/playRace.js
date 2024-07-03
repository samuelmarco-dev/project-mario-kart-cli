import Bower from "../players/Bower.js";
import DonkeyKong from "../players/DonkeyKong.js";
import Luigi from "../players/Luigi.js";
import Mario from "../players/Mario.js";
import Peach from "../players/Peach.js";
import Yoshi from "../players/Yoshi.js";

import rollDices from "./rollDices.js";
import sortBlock from "./sortBlock.js";

/**
 * @param {{
 * playerOne: Bower | DonkeyKong | Luigi | Mario | Peach | Yoshi,
 * playerTwo: Bower | DonkeyKong | Luigi | Mario | Peach | Yoshi }} params
 */

const playRace = async ({ playerOne, playerTwo }) => {
    const block = await sortBlock();
    const [diceOne, diceTwo] = await rollDices();

    console.log(`🎰 Track block: ${block.toUpperCase()}`);
    console.log(`🎲 The Dice sort by ${playerOne.name} is ${diceOne}`);
    console.log(`🎲 The Dice sort by ${playerTwo.name} is ${diceTwo}`);

    if (typeof block === "string") {
        switch (block) {
            case "straight":
                if (
                    diceOne + playerOne.getSpeed() ===
                    diceTwo + playerTwo.getSpeed()
                ) {
                    console.log(`❌ No player scored points`);
                } else {
                    diceOne + playerOne.getSpeed() >
                    diceTwo + playerTwo.getSpeed()
                        ? playerOne.sumPoints(1)
                        : playerTwo.sumPoints(1);

                    console.log(
                        `🏎️ ${playerOne.name} skill: ${
                            diceOne + playerOne.getSpeed()
                        }`
                    );
                    console.log(
                        `🏎️ ${playerTwo.name} skill: ${
                            diceTwo + playerTwo.getSpeed()
                        }`
                    );
                    console.log(
                        diceOne + playerOne.getSpeed() ===
                            diceTwo + playerTwo.getSpeed()
                            ? "🏁 Tie"
                            : `🏆 Winner Round: ${
                                  diceOne + playerOne.getSpeed() >
                                  diceTwo + playerTwo.getSpeed()
                                      ? playerOne.name
                                      : playerTwo.name
                              }`
                    );
                }
                break;

            case "curve":
                if (
                    diceOne + playerOne.getManeuverability() ===
                    diceTwo + playerTwo.getManeuverability()
                ) {
                    console.log(`❌ No player scored points`);
                } else {
                    diceOne + playerOne.getManeuverability() >
                    diceTwo + playerTwo.getManeuverability()
                        ? playerOne.sumPoints(1)
                        : playerTwo.sumPoints(1);

                    console.log(
                        `🏎️ ${playerOne.name} skill: ${
                            diceOne + playerOne.getManeuverability()
                        }`
                    );
                    console.log(
                        `🏎️ ${playerTwo.name} skill: ${
                            diceTwo + playerTwo.getManeuverability()
                        }`
                    );
                    console.log(
                        diceOne + playerOne.getManeuverability() ===
                            diceTwo + playerTwo.getManeuverability()
                            ? "🏁 Tie"
                            : `🏆 Winner Round: ${
                                  diceOne + playerOne.getManeuverability() >
                                  diceTwo + playerTwo.getManeuverability()
                                      ? playerOne.name
                                      : playerTwo.name
                              }`
                    );
                }
                break;

            case "confrontation":
                if (
                    diceOne + playerOne.getPower() ===
                    diceTwo + playerTwo.getPower()
                ) {
                    console.log(`❌ No player scored points`);
                } else {
                    diceOne + playerOne.getPower() >
                    diceTwo + playerTwo.getPower()
                        ? playerTwo.subtractPoints(1)
                        : playerOne.subtractPoints(1);

                    console.log(
                        `🏎️ ${playerOne.name} skill: ${
                            diceOne + playerOne.getPower()
                        }`
                    );
                    console.log(
                        `🏎️ ${playerTwo.name} skill: ${
                            diceTwo + playerTwo.getPower()
                        }`
                    );
                    console.log(
                        diceOne + playerOne.getPower() ===
                            diceTwo + playerTwo.getPower()
                            ? "🏁 Tie"
                            : `🏆 Winner Round: ${
                                  diceOne + playerOne.getPower() >
                                  diceTwo + playerTwo.getPower()
                                      ? playerOne.name
                                      : playerTwo.name
                              }`
                    );
                }
                break;

            default:
                break;
        }
    }
    console.log(`🧮 ${playerOne.name} points: ${playerOne.getPoints()}`);
    console.log(`🧮 ${playerTwo.name} points: ${playerTwo.getPoints()}`);
    console.log("============================================");
};

export default playRace;
