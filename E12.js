function newDateTime(prop,modify){
    Date.prototype[prop] = modify;
}
function birthday(){
    return 'August 6th';
}
newDateTime('birthday', birthday);
let date = new Date();
result = date.birthday();//'August 6th'