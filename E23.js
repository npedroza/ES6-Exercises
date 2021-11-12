function generateRandom(min,max){
    let numbers = [];
    for (let i = min; i<=max; i++){
      numbers.push(i);
    }
    function getRand(){
      let range = numbers.length;
      if (range <= 0){
        throw `No more numbers to generate in that range, modify the min and max values`;
      }
      let idx = Math.floor(Math.random()*range);
      let randResult = numbers[idx];
      numbers.splice(idx, 1);
      return randResult;
    }
    return getRand;
  }
  var o = generateRandom(10,14)
  
  o() //11
  o() //14
  o() //13
  o() //12
  o() //10
  o() //'No more numbers to generate in that range, modify the min and max values'

  