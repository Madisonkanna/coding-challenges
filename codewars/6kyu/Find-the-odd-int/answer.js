//First attempt
//Feel free to make a PR with code comments on how you think this code could be better! Improvement suggestions always welcome.
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

function findMultiples