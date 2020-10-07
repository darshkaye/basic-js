module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0,
        maxDepth = 1,
        currentDepth = maxDepth;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        currentDepth = this.calculateDepth(arr[i]) + 1;
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    depth += maxDepth;
    return depth;
  }
};