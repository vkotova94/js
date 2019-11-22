

let arr = [100, 5, -2, -10000, 0, 53];

arr.sort(function (a, b) {
    return b - a;
});

console.log(arr);


let oldArray = ["HTML", "Javascrip", "CSS"];
let newArray = oldArray.slice();
function independentSort() {
    oldArray.sort();
    newArray.reverse();
}
independentSort()
alert(oldArray);
alert(newArray);
