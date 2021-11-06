let obj1 = {
    prop1:1,
    prop2:2,
    prop3:3,
    prop4: '!',
    prop5: "X"
  }
  
  let obj2 = {
    prop1: 1,
    prop2: 'helloWorld',
    prop3:  3,
    prop4: '!',
    prop6: 10,
    prop7: 1
  }
  
  function printDiffProps(obj1,obj2){
    let dif = [];
    for(let key in obj1){
      if(key in obj2){
        if(obj2[key] !== obj1[key]){
          dif.push(key)  
        }
      }
      else{ 
        dif.push(key)
      }
    }
    for(let key in obj2){
      if (!(key in obj1)){
        dif.push(key) 
      }
    }
    return dif
  }
  
  printDiffProps(obj1,obj2) //[ 'prop2', 'prop5', 'prop6', 'prop7' ]