const INPUT = {
    n: 5,
    arr1: [46, 33, 33 ,22, 31, 50],
    arr2: [27 ,56, 19, 14, 14, 10]
};

const toBinary = num => num.toString(2);

const attachZero = num => {
    let zeros = '';
    if (INPUT.n - num.length) {
        for (let i = 0; i < INPUT.n - num.length; i++) {
            zeros += '0';
        }
    }
    return zeros + num;
};

const compare = (row1, row2) => {
    let result = '';
    for (let i = 0; i < INPUT.n; i++) {
        // console.log(+row1[i], +row2[i]);
        // console.log((+row1[i] + +row2[i]));
        result += (+row1[i] + +row2[i]) ? '#' : ' ';
    }
    return result;
};




let map1 = INPUT.arr1.map(toBinary);
let map2 = INPUT.arr2.map(toBinary);

// console.log(map1, map2);
for (let i = 0; i < INPUT.n; i++) {
    map1[i] = attachZero(map1[i]);
    map2[i] = attachZero(map2[i]);
    // console.log(map1[i], map2[i]);
    let result = compare(map1[i], map2[i]);
    console.log(result);
}