function shiftZeros(array){
  count = 0;
  for(var i=0;i<array.length;i++){
    if(array[i] !== 0){
      array[count] = array[i]
      count++;
    }
  }
  while(count<array.length){
    array[count] = 0
    count++
  }
  return array
}
var array = [2,0,4,5,0,2,0,0,3]
shiftZeros(array) //[ 2, 4, 5, 2, 3, 0, 0, 0, 0 ]
