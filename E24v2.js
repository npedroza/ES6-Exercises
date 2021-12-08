function rmElements(array,...elements){
  for (let e of elements){
    if(array.includes(e)){
      array.splice(array.indexOf(e),1)
    }
  }
  return array
}

rmElements([1,2,3],3)//[ 1, 2 ]
rmElements(['hello','world','Nain'],'Nain','world')//[ 'hello' ]
