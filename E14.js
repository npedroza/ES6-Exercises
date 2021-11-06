function include2(...args){
    if (args.includes(2)){
      return true;
    }
    else{
      return false;
    }
  }
include2(1,3,2,4,5,6) //true
include2(10,20,30) //false