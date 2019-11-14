

function isThereACat(animals) {
    animals = animals.toLowerCase().indexOf("cat");
    if (animals !== -1) {
        console.log('true')
    } else {
        console.log('false')
    }
}
isThereACat('dog,zebra,Cat,frog');
isThereACat('dog,zebra,frog');



 function isPythagoreanTheorem(a, b, c) {
     var result;
     a = parseInt(a);
     b = parseInt(b);
     result = Math.sqrt(a*a + b*b);
     if (c == result) {
        console.log ('true')
    } else {
        console.log('false')
    }
 }
 isPythagoreanTheorem(6, 8, 10);
 isPythagoreanTheorem(2, 8, 6);
