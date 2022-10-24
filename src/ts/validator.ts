// eslint-disable-next-line no-unused-vars
function onlyNumbers(str: string) {
  return /^[0-9+-]+$/.test(str);
}

export default class stringValidator {
  inputString: string;
  constructor(stringInput: string) {
    this.inputString = stringInput;
  }

  validatorScript() {
    if (onlyNumbers(this.inputString) == true) {
      const numberArray = [];
      for (let i = 0; i < this.inputString.length; i++) {
        if (this.inputString[i] === "+" || this.inputString[i] === "-") {
          numberArray.push(this.inputString[i - 1]);
        }
      }
      numberArray.push(this.inputString[this.inputString.length - 1]);
      let inputSum = 0,
        arrayLength = numberArray.length;

      while (arrayLength--) {
        inputSum += parseInt(numberArray[arrayLength], 10) || 0;
      }

      if (inputSum % 2 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return window.alert("Csak számokat '+' és '-' jelet tartalmazhat.");
    }
  }
}
