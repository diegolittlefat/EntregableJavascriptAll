let formulario = document.getElementById("registro-pacientes-form")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById ("apellido")
let cedula =  document.getElementById ("cedula")
let edad = document.getElementById ("edad")
let telefono = document.getElementById ("telefono")
let especialidad = document.getElementById ("especialidad")


formulario.addEventListener("submit", function (event){
        
    event.preventDefault();

    const paciente = { 
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }

    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes){
        pacientes = JSON.parse(localPacientes) 
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert ("Paciente registrado con exito")
})