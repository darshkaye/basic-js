module.exports = function countCats(matrix) {
  if (matrix == undefined || matrix.length == 0)  return 0;
  let catCounts = matrix.map((arr) => arr.filter(el => el == '^^').length);
  return catCounts.reduce((a,b) => a + b);
};
