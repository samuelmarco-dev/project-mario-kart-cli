import Player from "../classes/Player.js";

const characteristics = {
    speed: 5,
    maneuverability: 2,
    power: 5,
};

export default class Bower extends Player {
    constructor() {
        super(
            characteristics.speed,
            characteristics.maneuverability,
            characteristics.power
        );
        this.name = "Bower";
    }
}
