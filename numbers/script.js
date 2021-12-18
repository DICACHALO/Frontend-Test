function listNumbers(number1, number2) {
  let primeNumbers = [];
  
  if (number1 > number2) {
    answer = "Tu primer número debe ser menor que tu segundo número.";
    return answer;
  } else {
    if (number1 == 1) { number1 = number1 + 1 }

    for (number1; number1 <= number2; number1++) {
      let prime = true;
      let maximDiv = Math.floor(Math.sqrt(number1));
      for (let div = 2; div <= maximDiv; div++) {
        if (number1 % div == 0) {
          prime = !prime;
          break;
        }
      }
      if (prime) primeNumbers.push(number1);
    }
    answer = primeNumbers;
    return "Los números primos de tu rango seleccionado son: " + answer;
  }
}

function onClickButton() {

  let InputNumber1 = document.getElementById("InputNumber1");
  let number1 = parseInt(InputNumber1.value);

  let inputNumber2 = document.getElementById("InputNumber2");
  let number2 = parseInt(inputNumber2.value);

  let answer = listNumbers(number1, number2);
  let result = document.getElementById("Result");
  result.innerText = answer;
}