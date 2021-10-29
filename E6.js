function insertMonth(str){
    let months = {  
                    January:'February', 
                    February:'March', 
                    March:'April', 
                    April:'May', 
                    May:'June', 
                    June:'July', 
                    July:'August', 
                    August:'September',
                    September:'October',
                    October:'November', 
                    November: 'December'};
  
    let strMonths = str.split(' ');
    let followingMonths = [];
    for (let i = 0; i<strMonths.length; i++){
      followingMonths.push(strMonths[i])
      if(strMonths[i+1] !== months[strMonths[i]] ){
        followingMonths.push(months[strMonths[i]])
      }
    }
  return followingMonths.join(" ")
}

insertMonth("January February March January February March") //'January February March April January February March April'