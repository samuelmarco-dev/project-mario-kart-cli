import Bower from "../players/Bower.js";
import DonkeyKong from "../players/DonkeyKong.js";
import Luigi from "../players/Luigi.js";
import Mario from "../players/Mario.js";
import Peach from "../players/Peach.js";
import Yoshi from "../players/Yoshi.js";

import players from "../players/index.js";

/**
 * @returns {{
 * playerOne: Bower | DonkeyKong | Luigi | Mario | Peach | Yoshi,
 * playerTwo: Bower | DonkeyKong | Luigi | Mario | Peach | Yoshi }}
 */

const randomPlayers = () => {
    const keys = Object.keys(players);
    const randomFirst = Math.floor(Math.random() * keys.length);
    let randomSecond = Math.floor(Math.random() * keys.length);

    while (randomSecond === randomFirst) {
        randomSecond = Math.floor(Math.random() * keys.length);
    }

    return {
        playerOne: players[keys[randomFirst]],
        playerTwo: players[keys[randomSecond]],
    };
};

export default randomPlayers;
