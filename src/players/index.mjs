import Bower from "./Bower.js";
import DonkeyKong from "./DonkeyKong.js";
import Luigi from "./Luigi.js";
import Mario from "./Mario.js";
import Peach from "./Peach.js";
import Yoshi from "./Yoshi.js";

const players = {
    "Bower": new Bower,
    "DonkeyKong": new DonkeyKong,
    "Luigi": new Luigi,
    "Mario": new Mario,
    "Peach": new Peach,
    "Yoshi": new Yoshi
};

export default players;
