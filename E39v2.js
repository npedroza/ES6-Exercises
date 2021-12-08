let dictionary = { 
  1:'1234567890',
  2:'qwertyuiop',
  3: 'asdfghjkl',
  4: 'zxcvbnm',
  5: '0987654321',
  6: 'poiuytrewq',
  7: 'lkjhgfdsa',
  8: 'mnbvcxz'
};


function validate(originalStr){
    if (originalStr.length < 4) {
      return 'Valid string';
    }
    else if (securityFilter(originalStr)) {
      return 'Not a valid string';
    }
    else {
      return 'Valid string';
    }
    function securityFilter(str){
      for (let i = 0; i <= str.length -4; i++){
        let string = str.substring(i,i+4);
        let reverse = string.split("").reverse().join("");
        for (let key in dictionary){
          if (dictionary[key].includes(string) ||
              dictionary[key].includes(reverse)) return true; 
        }
      }
      return false;
    }
  }
  
  validate('1234')//'Not a valid string'
  validate('qwert')//'Not a valid string'
  validate('asdf')//'Not a valid string'
  validate('yuio')//'Not a valid string'
  validate('ertj')//'Valid string'
