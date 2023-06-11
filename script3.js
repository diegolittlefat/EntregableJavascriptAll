let formulario = document.getElementById("registro-medicos-form")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById ("apellido")
let cedula =  document.getElementById ("cedula")
let consultorio = document.getElementById ("consultorio")
let correo = document.getElementById ("correo")
let especialidad = document.getElementById ("especialidad")


formulario.addEventListener("submit", function (event){
        
    event.preventDefault();

    const medico = { 
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: consultorio.value,
        correo: correo.value,
        especialidad: especialidad.value,
    }

    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos = JSON.parse(localMedicos) 
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formulario.reset()
    alert ("Medico registrado con exito")
})