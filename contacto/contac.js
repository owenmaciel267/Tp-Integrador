const hambur = document.getElementById("hambur")
const navBar = document.getElementById("navBar")

hambur.addEventListener("click", ()=>{
    navBar.classList.toggle("active")
    console.log("click");
})
