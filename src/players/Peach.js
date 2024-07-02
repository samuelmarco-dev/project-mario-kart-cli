import Player from "../classes/Player.js";

const characteristics = {
    speed: 3,
    maneuverability: 4,
    power: 2,
};

export default class Peach extends Player {
    constructor() {
        super(
            characteristics.speed,
            characteristics.maneuverability,
            characteristics.power
        );
        this.name = "Peach";
    }
}
