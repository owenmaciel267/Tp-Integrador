const hambur = document.getElementById("hambur")
const navBar = document.getElementById("navBar")

hambur.addEventListener("click", ()=>{
    navBar.classList.toggle("active")
    console.log("click");
})


// validar
const form = document.querySelector('form'); // Selecciona el formulario
const nameInput = document.querySelector('#name'); // Selecciona el campo de nombre
const phoneInput = document.querySelector('#phone'); // Selecciona el campo de teléfono
const emailInput = document.querySelector('#email'); // Selecciona el campo de correo electrónico
const messageInput = document.querySelector('#message'); // Selecciona el campo de mensaje

form.addEventListener('submit', (e) => { // Agrega un evento al enviar el formulario
  e.preventDefault(); // Evita que se envíe el formulario si hay errores

  let errors = []; // Almacena los errores

  if (nameInput.value.trim() === '') { // Verifica si el campo de nombre está vacío
    errors.push('El campo de nombre es obligatorio.'); // Agrega un mensaje de error
  }

  if (phoneInput.value.trim() === '') { // Verifica si el campo de teléfono está vacío
    errors.push('El campo de teléfono es obligatorio.'); // Agrega un mensaje de error
  } else if (!/^\d+$/.test(phoneInput.value)) { // Verifica si el campo de teléfono tiene solo números
    errors.push('El campo de teléfono debe contener solo números.'); // Agrega un mensaje de error
  }

  if (emailInput.value.trim() === '') { // Verifica si el campo de correo electrónico está vacío
    errors.push('El campo de correo electrónico es obligatorio.'); // Agrega un mensaje de error
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // Verifica si el campo de correo electrónico tiene un formato válido
    errors.push('El campo de correo electrónico debe tener un formato válido.'); // Agrega un mensaje de error
  }

  if (messageInput.value.trim() === '') { // Verifica si el campo de mensaje está vacío
    errors.push('El campo de mensaje es obligatorio.'); // Agrega un mensaje de error
  }

  if (errors.length > 0) { // Si hay errores
    alert(errors.join('\n')); // Muestra los mensajes de error
  } else { // Si no hay errores
  



    // Object

  
    // Crear un objeto con arrays
    const datosFormulario = {
      nombre: [nameInput.value],
      telefono: [phoneInput.value],
      email: [emailInput.value],
      mensaje: [messageInput.value]
    };
  
    // Mostrar los datos por consola
    console.log(datosFormulario);



  const pdf = new jsPDF();
  const pdfContent = `
    <h1>Formulario de contacto</h1>
    <p>Nombre: ${nameInput.value}</p>
    <p>Teléfono: ${phoneInput.value}</p>
    <p>Correo electrónico: ${emailInput.value}</p>
    <p>Mensaje: ${messageInput.value}</p>
  `;
  pdf.fromHTML(pdfContent);
  pdf.save('formulario.pdf'); // Descarga el PDF con el nombre "formulario.pdf"
  
  form.submit(); // Envía el formulario
}

});


// // Agregar un evento submit al formulario
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
//     // Obtener los valores de los campos del formulario
//     const nombre = document.querySelector('#name').value;
//     const telefono = document.querySelector('#phone').value;
//     const email = document.querySelector('#email').value;
//     const mensaje = document.querySelector('#message').value;
  
//     // Crear un objeto con arrays
//     const datosFormulario = {
//       nombre: [nombre],
//       telefono: [telefono],
//       email: [email],
//       mensaje: [mensaje]
//     };
  
//     // Mostrar los datos por consola
//     console.log(datosFormulario);
//   });
  

