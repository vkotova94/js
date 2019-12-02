// class Animal {
//     greeting() {
//
//     }
// }
//
// class Dog {
//     name() {
//         console.log('Dog');
//     }
// }
//
// class Cat extends Animal {
//     name() {
//         console.log('Cat');
//     }
// }
//
// let cat = new Cat()
//
// cat.name()

// class CoffeeMachine {
//     constructor(type) {
//         this.coffee = type
//     }
//
//     makeCoffee(delay) {
//         setTimeout(() => { console.log('Your ' + this.coffee + ' is ready') }, delay)
//     }
//
//     changeCoffee(coffeeType) {
//         this.coffee = coffeeType
//         console.log('You selected ' + coffeeType);
//     }
// }
//
// let cf = new CoffeeMachine('latte')
// cf.makeCoffee(3000)

Boolean.prototype.isTrue = function () {
    if (this == true) {
        console.log('true');
    } else {
        console.log('false');
    }
}

false.isTrue();
