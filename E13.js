Date.prototype.nextDay = nextDay;
function nextDay(){
    let actual = this.getDate();
    let newDate = new Date(this.setDate(actual));
    newDate.setDate(actual + 1);
    return newDate;
}

var date = new Date(); 
date //2021-10-02
date.nextDay() //2021-10-3