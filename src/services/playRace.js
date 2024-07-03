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

    // if (typeof block === "string") {
    //     switch (block) {
    //         case "straight":
                
    //             break;
    //         case "curve":
                
    //             break;
    //         case "confrontation":
                
    //             break;
    //         default:
    //             break;
    //     }
    // }

    console.log(`🎰 Track block: ${block.toUpperCase()}`);
    console.log(`🎲 The Dice sort by ${playerOne.name} is ${diceOne}`);
    console.log(`🎲 The Dice sort by ${playerTwo.name} is ${diceTwo}`);
    console.log("======================================");
};

export default playRace;
