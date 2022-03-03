const FormatPersona = (itemSeleccionado) => {

    return {
        nombre: itemSeleccionado.name,
        apellido_paterno: itemSeleccionado.last_name_1,
        apellido_materno: itemSeleccionado.last_name_2,
        sexo: itemSeleccionado.sexo,
        fecha_nacimiento: itemSeleccionado.born_date,
        curp: itemSeleccionado.curp
    }
}

const FormatUbicacion = (itemSeleccionado, id) => {

    return {
        direccion: itemSeleccionado.domicilio,
        no_interno: itemSeleccionado.no_interior,
        no_externo: itemSeleccionado.no_exterior,
        colonia: itemSeleccionado.colonia,
        pais: itemSeleccionado.pais,
        estado: itemSeleccionado.estado,
        id_persona: id
    }
}

const FormatDatosContacto1 = (itemSeleccionado, id) => {

    return {
        telefono: itemSeleccionado.telefono1,
        tipo: itemSeleccionado.tipo1,
        id_persona: id
    }
}

const FormatDatosContacto2 = (itemSeleccionado, id) => {

    return {
        telefono: itemSeleccionado.telefono2,
        tipo: itemSeleccionado.tipo2,
        id_persona: id
    }
}

const FormatHistorial1 = (itemSeleccionado, id) => {

    return {
        trabajo: itemSeleccionado.trabajo1,
        fecha_inicio: itemSeleccionado.fecha_inicio1,
        fecha_fin: itemSeleccionado.fecha_fin1,
        actividades: itemSeleccionado.actividades1,
        id_persona: id
    }
}

const FormatHistorial2 = (itemSeleccionado, id) => {

    return {
        trabajo: itemSeleccionado.trabajo2,
        fecha_inicio: itemSeleccionado.fecha_inicio2,
        fecha_fin: itemSeleccionado.fecha_fin2,
        actividades: itemSeleccionado.actividades2,
        id_persona: id
    }
}

const FormatHistorial3 = (itemSeleccionado, id) => {

    return {
        trabajo: itemSeleccionado.trabajo3,
        fecha_inicio: itemSeleccionado.fecha_inicio3,
        fecha_fin: itemSeleccionado.fecha_fin3,
        actividades: itemSeleccionado.actividades3,
        id_persona: id
    }
}

export {FormatPersona, FormatUbicacion,
    FormatDatosContacto1, FormatDatosContacto2,
    FormatHistorial1, FormatHistorial2 , FormatHistorial3}