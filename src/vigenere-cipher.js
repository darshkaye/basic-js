class VigenereCipheringMachine {
  constructor(isDirectDirection = true) {
    this.isDirectDirection = isDirectDirection ? true : false;
    this.alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.cryptoTable = [];
    for (let i = 0; i < this.alphabeth.length; i++) {
      this.cryptoTable[i] = this.alphabeth.slice(i).concat(this.alphabeth.slice(0, i));
    }
  }
  encrypt(string, key) {
    this.validateInputs(string, key);

    let result = "";

    string = string.toUpperCase();
    key = this.generateKey(string, key);

    for (var i = 0; i < string.length; i++) {
      let col = this.alphabeth.indexOf(string[i]),
          row = this.alphabeth.indexOf(key[i]);
      if (col !== -1) {
        result += this.cryptoTable[col][row];
      } else {
        result += string[i];
      }
    }
    
    return this.isDirectDirection ? result : result.split("").reverse().join("");
  }    
  decrypt(string, key) {
    this.validateInputs(string, key);

    let result = "";
    string = string.toUpperCase();
    key = this.generateKey(string, key);

    for (var i = 0; i < string.length; i++) {
        let row = this.alphabeth.indexOf(key[i]);
        if (row == -1) {
          result += string[i];
          continue;
        }
        let col = this.cryptoTable[row].indexOf(string[i]);
        if (col !== -1) {
          result += this.alphabeth[col];
        } else {
          result += string[i];
        }
    }

    return this.isDirectDirection ? result : result.split("").reverse().join("");
  }
  validateInputs(string, key) {
    if (string == undefined || key == undefined) {
      throw new Error('All input parameters are requiered');
    }
  }
  generateKey(string, key) {
    let newKey = "",
        currentKeyPosition = 0;

    for (let i = 0; i < string.length; i++) {
      if (this.alphabeth.indexOf(string[i]) !== -1) {
        if (currentKeyPosition >= key.length) {
          currentKeyPosition = 0
        }
        newKey += key[currentKeyPosition];
        currentKeyPosition++;
      } else {
        newKey += string[i];
      }
    }

    return newKey.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
