import Player from "../classes/Player.js";

const characteristics = {
    speed: 2,
    maneuverability: 4,
    power: 3,
};

export default class Yoshi extends Player {
    constructor() {
        super(
            characteristics.speed,
            characteristics.maneuverability,
            characteristics.power
        );
        this.name = "Yoshi";
    }
}
