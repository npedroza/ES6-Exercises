function reverse(a){
    let l = a.length;
    let n = "";
    for (let v=l-1; v>=0; v--){
      n += a[v]
    }
    return n;
  }
  
  function reverseAll(b){
    let strings = b.split(" ");
    let words = strings.map((s) => {return reverse(s)}).join(" ")
    return words;
  }
  let str = "hello world"
  reverse(str) //'dlrow olleh'
  reverseAll(str) //'olleh dlrow'