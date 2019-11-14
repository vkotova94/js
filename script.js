

function isThereACat(animals) {
    animals = animals.toLowerCase().indexOf("cat");
    if (animals !== -1) {
        console.log('false')
    } else {
        console.log('true')
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
        console.log('true')
    } else {
        console.log('false')
    }
 }
 isPythagoreanTheorem(6, 8, 10);
 isPythagoreanTheorem(2, 8, 6);


function gentleSum(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (isFinite(a) && isFinite(b)) {
        console.log(a + b);
    } else {
        console.log('Please enter valid data');
    }
}

gentleSum('123asd3asd3asd', 5);
gentleSum('Hello Wold', 5);
gentleSum('222as', '1dasd');
