let array1 = [2, 3, 5, 3];
let array2 = [3, 4, 3, 5, 3, 6, 8];
let intersection = array1.filter(value => array2.includes(value));
intersection; // [3,5,3]