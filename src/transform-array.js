module.exports = function transform(arr) {
  if (arr === undefined || !(arr instanceof Array)) {
    throw new Error('Works only with arrays');
  }
  const discardNext = '--discard-next',
        discardPrev = '--discard-prev',
        doubleNext = '--double-next',
        doublePrev = '--double-prev';
  let transFormedArr = [...arr];
  arr.reduce(function(transFormedArr, el, index) {
    switch (el) {
      case discardNext:
        if (transFormedArr[index + 1] !== undefined) {
          transFormedArr[index + 1] = undefined;
        }
        transFormedArr[index] = undefined;
        break;
      case discardPrev:
        if (transFormedArr[index - 1] !== undefined) {
          transFormedArr[index - 1] = undefined;
        }
        transFormedArr[index] = undefined;
        break;
      case doubleNext:
        if (transFormedArr[index + 1] !== undefined) {
          transFormedArr[index] = transFormedArr[index + 1];
        } else {
          transFormedArr[index] = undefined;
        }
        break;
      case doublePrev:
        if (transFormedArr[index - 1] !== undefined) {
          transFormedArr[index] = transFormedArr[index - 1];
        } else {
          transFormedArr[index] = undefined;
        }
        break;
      default:
        break;
    }
    return transFormedArr;
  }, transFormedArr)
  return transFormedArr.filter(el => el !== undefined);
};
