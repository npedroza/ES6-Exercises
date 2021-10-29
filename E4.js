let obj = [1,2,3,[4,5,[6,7]], 8,9]

function flatMost(obj){
  function objectInArray(obj){
    for (let e of obj){
      if (typeof (e) == 'object'){
        return true
      }
    }
    return false
  }
  
  while (objectInArray(obj)){
    obj = obj.flat();
  }
  return obj;
}

flatMost(obj)//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
