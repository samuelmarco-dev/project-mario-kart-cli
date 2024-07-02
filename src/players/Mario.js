import Player from "../classes/Player.js";

const characteristics = {
    speed: 4,
    maneuverability: 3,
    power: 3,
};

export default class Mario extends Player {
    constructor() {
        super(
            characteristics.speed,
            characteristics.maneuverability,
            characteristics.power
        );
        this.name = "Mario";
    }
}
