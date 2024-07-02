import Player from "../classes/Player.js";

const characteristics = {
    speed: 2,
    maneuverability: 2,
    power: 5,
};

export default class DonkeyKong extends Player {
    constructor() {
        super(
            characteristics.speed,
            characteristics.maneuverability,
            characteristics.power
        );
        this.name = "DonkeyKong";
    }
}
