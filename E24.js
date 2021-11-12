function rmElements(array,...elements){
    for (let e of elements){
      if(array.includes(e)){
        array = array.filter(element => element!== e);
      }
    }
    return array
  }
  
  rmElements([1,2,3],3,4,5)//[ 1, 2 ]
  rmElements(['hello','world','Nain'],'Nain','world')//[ 'hello' ]