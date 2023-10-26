export default class Vehicle {
    constructor(color, model, type) {
    this.color = color;
    this.model = model;
    this.type = type;
    }

    display() {
        return `${this.type}: ${this.color} ${this.model}`;
    }
}