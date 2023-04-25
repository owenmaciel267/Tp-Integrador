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

form.addEventListener('submit', (e) => { 
  e.preventDefault(); 

  let errors = [];

  if (nameInput.value.trim() === '') {
    errors.push('El campo de nombre es obligatorio.'); 
  }

  if (phoneInput.value.trim() === '') { 
    errors.push('El campo de teléfono es obligatorio.'); 
  } else if (!/^\d+$/.test(phoneInput.value)) { 
    errors.push('El campo de teléfono debe contener solo números.'); 
  }

  if (emailInput.value.trim() === '') { 
    errors.push('El campo de correo electrónico es obligatorio.'); 
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { 
    errors.push('El campo de correo electrónico debe tener un formato válido.'); 
  }

  if (messageInput.value.trim() === '') {
    errors.push('El campo de mensaje es obligatorio.'); 
  }

  if (errors.length > 0) { 
    alert(errors.join('\n'));
  } else { 
   form.submit();




  const pdf = new jsPDF();
  const pdfContent = `
    <h1>Formulario de contacto</h1>
    <p>Nombre: ${nameInput.value}</p>
    <p>Teléfono: ${phoneInput.value}</p>
    <p>Correo electrónico: ${emailInput.value}</p>
    <p>Mensaje: ${messageInput.value}</p>
  `;
  pdf.fromHTML(pdfContent);
  pdf.save('formulario.pdf');
  

    
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    const datosFormulario = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      mendaje: mensaje,

    };
  
    const arrayDatos = [];
    arrayDatos.push(datosFormulario);
  
     console.log(arrayDatos);
  
  });

  // form.submit(); // Envía el formulario
 
}

});


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
  
    const datosFormulario = {
      nombre: [nombre],
      telefono: [telefono],
      email: [email],
      mensaje: [mensaje]
    };
  
    console.log(datosFormulario);
  });
  

