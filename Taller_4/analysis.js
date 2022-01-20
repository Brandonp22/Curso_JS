const salariesGt = guatemala.map(
    function(person){
        return person.salary;
    }
);

//Sort
const salariesGtSorted = sortList(salariesGt);

//Mean
const generalMeanGt = calculateMedian(salariesGtSorted);

// Top 10%
const spliceStart = (salariesGtSorted.length * 90) /100;
const spliceCount = (salariesGtSorted.length) - spliceStart;
console.log(spliceStart);
console.log(spliceCount);
const salariesGtTop10 = salariesGtSorted.splice(spliceStart,spliceCount);

const meanTop10Gt = calculateMedian(salariesGtTop10);


console.log(
    "General " + generalMeanGt +
    " / Top 10: " + meanTop10Gt
);




/* const salariesGtSorted = salariesGt.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
);

function even(number){
    return (number % 2 === 0);
}

function medianSalaries(list){
    const middle = parseInt(list.length / 2);
    if(even(list.length)){
        const personMiddle1 = list[middle] - 1;
        const personMiddle2 = list[middle];

        const mean = calculateMean([personMiddle1, personMiddle2]);
        return mean;
    }else{
        const personMiddle = list[middle];
        return personMiddle;
    }
} */

/* console.log(
    medianSalaries(salariesGtSorted)
); */


