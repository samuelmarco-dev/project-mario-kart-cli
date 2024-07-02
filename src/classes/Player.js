export default class Player {
    constructor(speed, maneuverability, power) {
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power;
    }

    getSpeed() {
        return this.speed;
    }

    getManeuverability() {
        return this.maneuverability;
    }

    getPower() {
        return this.power;
    }
}
