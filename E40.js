function sumZero(array){
    let sum = [];
    for (let i = 0; i < array.length; i++){
        for (let j= i+1; j < array.length; j++){
            for (let k = j+1; k<array.length; k++){
                if(array[i] + array[j] + array[k] === 0){
                    sum.push([array[i], array[j], array[k]]);
                }
            }
        }
    }
    return sum;
}

sumZero([3,2,1,0,-3,2,2,-2])