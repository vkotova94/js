let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
console.log(sumSalaries(salaries));

function topSalary(salaries) {
    let zp = 0,
        output

    for (let salary of Object.entries(salaries)) {
        if (zp < salary[1]) {
            zp = salary[1];
            output = salary
        }
    }

    return output;
}
console.log(topSalary(salaries));
