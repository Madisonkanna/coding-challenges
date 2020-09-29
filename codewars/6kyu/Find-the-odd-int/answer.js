//First attempt
function findOdd(A) {
  const map = {}
  for (num of A) {

    if (!map[num]) {
      map[num] = 1

    } else {
      map[num]++
    }
  }
  
  for (const num in map) {
    if (map[num] % 2 === 1) {
      return +num
    }
  }

}