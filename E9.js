function recursiveFib(){
    let memo = {0:0, 1:1, 2:1};
    function getNumber(idx){
        if(idx<0){
            return ("No negative numbers, try again with a positive number")
        }
        if (idx in memo){
            return memo[idx];
        }
        else{
            let addNumber = getNumber(idx-1) + getNumber(idx-2);
            memo[idx] = addNumber;
            return addNumber;
        }
    }
    return getNumber;
}
let fib = recursiveFib();
fib(9)//34