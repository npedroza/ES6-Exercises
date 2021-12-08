function sumZero(arr, sorting=false){
  if(sorting) {
    arr = arr.sort() //If we use sorting we can get non-repeated combinations of numbers
  }
  let newArr = []
  for (let i=0; i<arr.length-1; i++){
    let sum=arr[i]
    for (let j=i+1; j<arr.length;j++){
      sum = arr[i]+arr[j]
      if (arr.includes(-sum,j+1)){
        newArr.push([arr[i],arr[j],-sum])
      }
    }
  }
  return newArr
}


//Without sorting
sumZero([3,2,1,0,-3,2,2,-2])
/* [
  [ 3, 0, -3 ],
  [ 2, 1, -3 ],
  [ 2, 0, -2 ],
  [ 1, -3, 2 ],
  [ 0, 2, -2 ],
  [ 0, 2, -2 ]
] */

//With sorting
sumZero([3,2,1,0,-3,2,2,-2],true) // [ [ -2, 0, 2 ], [ -3, 0, 3 ], [ -3, 1, 2 ] ]
