Array.prototype.max = function() {
    let max;

    this.forEach(number => {
        if (typeof max == "undefined") {
            max = number;
        }

        if (number > max) {
            max = number;
        }
    })
    return max;
}

// console.log([0, 1, 2, 3, 50, 100].max());
let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};

function askPassword(ok, fail) {
    let password = prompt("Password?", 'rockstar');

    if (password == "rockstar") {
        return ok();
    } else {
        return fail();
    }
}

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

class Animal {
    constructor(name) {
        this.name = name
    }

    greeting() {
        console.log(`Hello, I am ${this.name} and I am an animal`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super()
        this.name = name
    }

    sayMeow() {
        console.log("I have 4 paws");
    }
}

class Dog extends Animal {
    constructor(name) {
        super()
        this.name = name
    }

    voice() {
        console.log('Bark');
    }
}

let animal = new Animal('Zebra');
// animal.name // ‘Zebra’
animal.greeting() // ‘Hello, I am Zebra and I am an animal’;

let cat = new Cat('Hacker');
cat.sayMeow(); // ‘I have 4 paws’;
// cat.name // ‘Hacker’
cat.greeting() // ‘Hello, I am Hacker and I am an animal’;

let dog= new Dog('Rax');
dog.voice(); // ‘Bark!’;
// dog.name // ‘Rax’
dog.greeting() // ‘Hello, I am Rax and I am an animal’;
