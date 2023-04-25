// // al hacer scroll que cambie de color


// // menu
// const hambur = document.getElementById("hambur")
// const navBar = document.getElementById("navBar")

// hambur.addEventListener("click", ()=>{
//     navBar.classList.toggle("active")
//     console.log("click");
// })



// array
const boton = document.getElementById("mandandoDatos");

boton.addEventListener("click", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const formaPago = document.getElementById("formaPago").value;
  const modelo = document.getElementById("modelo").value;

  const datosFormulario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    direccion: direccion,
    formaPago: formaPago,
    modelo: modelo
  };

  const arrayDatos = [];
  arrayDatos.push(datosFormulario);

   console.log(arrayDatos);


  //  pdf
  const pdf = new jsPDF();
  const pdfContent = `
    <h1>Formulario de contacto</h1>
    <p>Nombre: ${nombre}</p>
    <p>apellido: ${nombre}</p>
    <p>Teléfono: ${telefono}</p>
    <p>Correo electrónico: ${email}</p>
    <p>Direccion: ${direccion}</p>
    <p>Forma de pago: ${formaPago}</p>
    <p>Modelo: ${modelo}</p>
  `;
  pdf.fromHTML(pdfContent);
  pdf.save('formulario.pdf'); // Descarga el PDF con el nombre "formulario.pdf"
  



  
 
});
// Obtener referencias a los elementos del formulario
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const direccionInput = document.getElementById('direccion');
const telefonoInput = document.getElementById('telefono');
const formaPagoInput = document.getElementById('formaPago');
const modeloInput = document.getElementById('modelo');

const form = document.querySelector('form');
const mandandoDatosBtn = document.getElementById('mandandoDatos');



// Agregar un controlador de eventos para el botón de envío
mandandoDatosBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevenir el envío del formulario

  // Validar los campos obligatorios
  if (nombreInput.value.trim() === '') {
    alert('Por favor, ingrese su nombre.');
    nombreInput.focus();
    return false;
  }
  if (apellidoInput.value.trim() == ""){
    alert("Por favor complete su apellido")
    return false
  }
  

  if (emailInput.value.trim() === '') {
    alert('Por favor, ingrese su dirección de correo electrónico.');
    emailInput.focus();
    return false;
  }

  if (telefonoInput.value.trim() === '') {
    alert('Por favor, ingrese su número de teléfono.');
    telefonoInput.focus();
    return false;
  }

  if(direccionInput.value.trim() == ""){
    alert("Por favor comple con su direccion")
    return false
  }

  // Validar el formato del campo de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    emailInput.focus();
    return false;
  }

  // Validar el modelo seleccionado
  if (modeloInput.value === 'modelo') {
    alert('Por favor, seleccione un modelo.');
    modeloInput.focus();
    return false;
  }

  // Si se llega hasta aquí, el formulario es válido y puede ser enviado
  // form.submit();
});
