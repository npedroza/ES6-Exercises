let array1 = [2,0,4,5,0,2,0,0,3];
let na = array1.length;
let array2 = array1.filter(n => n !== 0);
let nb = array2.length;
for(let i=1; i<=na-nb; i++){
  array2.push(0);
}

array2; //[ 2, 4, 5, 2, 3, 0, 0, 0, 0 ]