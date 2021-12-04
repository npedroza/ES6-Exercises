function reverse(){
    let l = this.length;
    let n = "";
    for (let v=l-1; v>=0; v--){
      n += this[v]
    }
    return n;
  }
  String.prototype.reverse = reverse;

function reverseWords(){
  let strings = this.split(" ");
  let words = strings.map((s) => {return s.reverse()}).join(" ")
  return words;
}
 String.prototype.reverseWords = reverseWords;


let str = "hello world"
str.reverse() //'dlrow olleh'
str.reverseWords() //'olleh dlrow'
