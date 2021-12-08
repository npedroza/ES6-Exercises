String.prototype.exclamation = function () {return `${this}!`;}
function add(...numbers){
  let sum = 0;
  for (let i of numbers){
    sum += i;
  }
  return sum
}
// alternative way using reduce
function add2(...numbers){
  return numbers.reduce((a,b) => a+b, 0);
}

add(2,3,3,10)//18
add2(2,3,3,10)//18
add2() //0
add2(0) //0

'hello world'.exclamation(); //'hello world!'
