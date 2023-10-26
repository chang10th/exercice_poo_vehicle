import Motorcycle from `./class/Motorcycle.js`;
import Car from `./class/Car.js`;

const myCar = new Car(`Black`, `Mercedes`);
const myMotorcycle = new Motorcycle(`Red`, `Ducati`);

console.log(`myCar :`, myCar.display());
console.log(`myMotorcycle :`, myMotorcycle.display());