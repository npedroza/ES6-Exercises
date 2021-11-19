function myPowerFn(base){
    function power(exponent){
        return base**exponent;
    }
    return power;
}

let n = myPowerFn(3)
n(2); // 3^2 = 9