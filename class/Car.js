import Vehicle from './Vehicle.js'

export default class Car extends Vehicle{
    constructor(color, model) {
        super(color, model, "Motorcycle");
    }

    display() {
        return `La méthode est display est écraser`;
    }
}