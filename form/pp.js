// al hacer scroll que cambie de color


// menu
const hambur = document.getElementById("hambur")
const navBar = document.getElementById("navBar")

hambur.addEventListener("click", ()=>{
    navBar.classList.toggle("active")
    console.log("click");
})

let mandandoDatos = document.getElementById("mandandoDatos")

mandandoDatos.addEventListener("click", (event) => {
  console.log("dobleclick");
  // event.preventDefault()

  const datos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    direccion: document.getElementById("direccion").value,
    formaPago: document.getElementById("formaPago").value,
    modelo: document.getElementById("modelo").value,
  }

  console.log(datos);
})
