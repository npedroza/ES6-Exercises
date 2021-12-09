function randomLCG(min,max){
  var X,a,c,m;
  m = max-min+1
  let auxMod = m
  if (auxMod%10 == 0) {
    auxMod = 6
  } else if (auxMod%3 === 0) {
    auxMod = 7
  } else {
    auxMod = 5
  }
  c = Math.abs(m - auxMod)
  a = 1
  X = 0
  for(let j=0; j<m; j++){
    X = (a * X + c) % m;  
    console.log(X+min)
  }
}
randomLCG(8,30)
/* 
26
21
16
11
29
24
19
14
9
27
22
17
12
30
25
20
15
10
28
23
18
13
8
*/
