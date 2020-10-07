const chainMaker = {
  'chainArr': [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    value = value !== undefined ? (value !== null ? value : 'null') : ' ';
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chainArr[position - 1] === undefined) {
      this.chainArr = [];
      throw new Error('Wrong position');
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chainArr.join(' )~~( ');
    this.chainArr = [];
    return chain !== '' ? '( ' + chain + ' )' : chain;
  }
};

module.exports = chainMaker;
