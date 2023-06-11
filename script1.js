function mostrarMedicos(){
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")

    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }

    const tablaMedicos = document.getElementById("tabla-medicos")
    const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0]


    
    medicos.forEach (medico => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombre = fila.insertCell()
        celdaNombre.textContent = medico.nombre
        const celdaApellido = fila.insertCell();
        celdaApellido.textContent = medico.apellido
        const celdaCedula= fila.insertCell();
        celdaCedula.textContent = medico.cedula
        const celdaConsultorio = fila.insertCell();
        celdaConsultorio.textContent = medico.consultorio
        const celdaCorreo = fila.insertCell();
        celdaCorreo.textContent = medico.correo
        const celdaEspecialidad= fila.insertCell();
        celdaEspecialidad.textContent = medico.especialidad
        });
}

mostrarMedicos()