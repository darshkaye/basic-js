module.exports = function repeater(str, options) {
  let result = [], addition = [];
  const defaultSeparator = '+',
        defaultAdditionSeparator = '|';

  if (options.addition === undefined) {
    options.addition = '';
    options.additionSeparator = '';
  }
  if (options.additionRepeatTimes === undefined || !Number.isInteger(options.additionRepeatTimes)) {
    options.additionSeparator = '';
    options.additionRepeatTimes = 1;
  }

  if (
    options.repeatTimes === undefined || 
    !Number.isInteger(options.repeatTimes)
  ) {
    options.repeatTimes = 1;
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = defaultAdditionSeparator;
  }
  options.addition = options.addition !== null ? options.addition.toString() : 'null';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition); 
  }
  addition = addition.join(options.additionSeparator);

  if(options.separator === undefined) {
    options.separator = defaultSeparator;
  }
  str = str !== null ? str.toString() : 'null';
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str + addition); 
  }
  result = result.join(options.separator);

  return result;
};
  