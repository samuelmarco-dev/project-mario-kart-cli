export default class Player {
    constructor(speed, maneuverability, power, points) {
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power;
        this.points = 0;
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

    getPoints() {
        return this.points >= 0 ? this.points : 0;
    }

    sumPoints(points) {
        this.points += points;
    }

    subtractPoints(points) {
        this.points -= points;
    }
}
