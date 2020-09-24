//optimized
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}


//unoptimized first solution - broken
function sumArray(array) {
    if (!array || array < 2) return 0
	const highest = Math.max(...array);
	const lowest = Math.min(...array);
	const filteredArr = array.filter(a => {
		return a !== highest && a !== lowest;
	});
	return filteredArr.reduce((a, b) => {
		return a + b;
	});
}
