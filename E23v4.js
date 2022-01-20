
function primeOptions(num){
  var arr = []
  let x = num
  let product = 1
  let maxPrimeFactor
  for(let i=2;i<=num; i++){
    if(x%i === 0){
      product *= i
      arr.push(i)
      x = x/i
    }
  }
  maxPrimeFactor = Math.max(...arr)
  return {product, maxPrimeFactor}
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n%2 == 0 || n%3 == 0) return false;
    for (let i=5; i*i<=n; i=i+6)
        if (n%i == 0 || n%(i+2) == 0)
        return false;
    return true;
}
function nextPrime(N) {
    if (N <= 1)
        return 2;
    let prime = N;
    let found = false;
    while (!found) {
        prime++;
        if (isPrime(prime))
            found = true;
    }
    return prime;
}

function* randomLCG(min,max){
  var X,a,c,m;
  m = max-min+1
  var y = primeOptions(m).product
  if (m % 4 == 0){
    a = y*4 + 1
  }
  else {
    a = y + 1
  }
  X = 0
  c = nextPrime(primeOptions(m).maxPrimeFactor)
  for(let j=0; j<m; j++){
    X = (a * X + c) % m;  
    yield (X+min)
  }
}
let a = randomLCG(0,8)
a.next() //{ value: 5, done: false }
a.next() //{ value: 7, done: false }
a.next() //{ value: 6, done: false }
a.next() //{ value: 2, done: false }
a.next() //{ value: 4, done: false }
a.next() //{ value: 3, done: false }
a.next() //{ value: 8, done: false }
a.next() //{ value: 1, done: false }
a.next() //{ value: 0, done: false }
a.next() //{ value: undefined, done: true }
