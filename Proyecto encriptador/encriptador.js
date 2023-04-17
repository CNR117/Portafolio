function encrypt() {
    var inputText = document.getElementById("input").value;
    var outputText = "";
    var shift = 3; // Número de posiciones a desplazar en el alfabeto
  
    for (var i = 0; i < inputText.length; i++) {
      var c = inputText.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        // Mayúsculas
        outputText += String.fromCharCode(((c - 65 + shift) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        // Minúsculas
        outputText += String.fromCharCode(((c - 97 + shift) % 26) + 97);
      } else {
        // Otros caracteres (números, espacios, signos de puntuación, etc.)
        outputText += inputText.charAt(i);
      }
    }
  
    document.getElementById("output").value = outputText;
  }
  
  function decrypt() {
    var inputText = document.getElementById("input2").value;
    var outputText = "";
    var shift = 3; // Número de posiciones a desplazar en el alfabeto
  
    for (var i = 0; i < inputText.length; i++) {
      var c = inputText.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        // Mayúsculas
        outputText += String.fromCharCode(((c - 65 - shift + 26) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        // Minúsculas
        outputText += String.fromCharCode(((c - 97 - shift + 26) % 26) + 97);
      } else {
        // Otros caracteres (números, espacios, signos de puntuación, etc.)
        outputText += inputText.charAt(i);
      }
    }
  
    document.getElementById("output2").value = outputText;
  }
  