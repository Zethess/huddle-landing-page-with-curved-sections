// Obtener referencia al botón de suscripción
var subscribeButton = document.querySelector('.second_input');

// Función para mostrar el mensaje
function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }
  //Función para validar el formato del email  "texto@texto.texto"
function validateEmail(email) {
    // Expresión regular para validar el formato del email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regex.test(email)) {
    return true; // El email es válido
    } else {
    return false; // El email no es válido
    }
}
function clearInputValue(inputSelector){
    document.querySelector(inputSelector).value= ''
} 
// Agregar evento de clic al botón
subscribeButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener el valor del campo de entrada
  var inputValue = document.querySelector('.first_input').value;

  // Realizar las validaciones
  if (inputValue.trim() === '') {
    showMessage('Empty field, type an email'); // Campo vacío
  } else if (!validateEmail(inputValue)) {
    showMessage('The email is not valid'); // Email no valido
  } else if (inputValue.length < 5) {
    showMessage('The email is not valid'); // Menos de 5 letras
  } else {
    showMessage('Check you email please'); // Mensaje vacío (sin errores)
  }
  clearInputValue('.first_input');
});

