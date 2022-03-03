const specialCharFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const VerifiacarInputs = (itemSeleccionado) => {
    var inputError = ""
    if (itemSeleccionado.name.length > 0) {

        if (specialCharFormat.test(itemSeleccionado.name)) {
            inputError += "Nombre no válido \n"
        }
    }
    else
        inputError += "Nombre\n"


    if (itemSeleccionado.last_name_1.length > 0) {

        if (specialCharFormat.test(itemSeleccionado.last_name_1)) {
            inputError += "Apellido paterno no válido \n"
        }
    }
    else
        inputError += "Apellido Paterno\n"


    if (itemSeleccionado.last_name_2.length > 0) {

        if (specialCharFormat.test(itemSeleccionado.last_name_2)) {
            inputError += "Apellido materno no válido \n"
        }
    }
    else
        inputError += "Apellido Materno\n"

    let año = "";
    if (itemSeleccionado.born_date.length > 0) {

        var d = new Date(itemSeleccionado.born_date);
        año = d.getFullYear()

        var now = new Date()
        var seconds = (d.getTime() - now.getTime()) / 1000;

        if (seconds > -31608249.71) {
            inputError += "Fecha de nacimiento no válido \n"
        }
    }
    else
        inputError += "Fecha de Nacimiento\n"

    if (itemSeleccionado.curp.length === 18) {

        if (año !== "") {

            let añoDosDigitos = año % 100

            let curpData = itemSeleccionado.curp.substring(4, 6);
            if (añoDosDigitos != curpData) {

                inputError += "CURP no válido \n"

            }
        }
    }
    else
        inputError += "CURP\n"
    let dateInicio1 = "", dateFin1 = "",
        dateInicio2 = "", dateFin2 = "",
        dateInicio3 = "", dateFin3 = ""
    if (itemSeleccionado.fecha_inicio1.length > 0 && itemSeleccionado.fecha_fin1.length > 0) {

        dateInicio1 = new Date(itemSeleccionado.fecha_inicio1);

        dateFin1 = new Date(itemSeleccionado.fecha_fin1)

        //console.log(dateInicio1.getFullYear() - año);
        if (dateInicio1.getFullYear() - año < 14) {
            inputError += "Fecha de nacimiento menor a 14 años \n"
        } else if (dateInicio1 > dateFin1)
            inputError += "Fecha de inicio mayor a fecha de fin 1\n"
    }
    else
        inputError += "Fecha Inicio o Fecha Fin 1\n"

    if (itemSeleccionado.fecha_inicio2.length > 0 && itemSeleccionado.fecha_fin2.length > 0) {

        dateInicio2 = new Date(itemSeleccionado.fecha_inicio2);

        dateFin2 = new Date(itemSeleccionado.fecha_fin2)

        //console.log(dateInicio2.getFullYear() - año);
        if (dateInicio2 < dateFin1) {
            inputError += "Fecha de inicio 2 menor a fecha fin 1 \n"
        } else if (dateInicio2 > dateFin2)
            inputError += "Fecha de inicio mayor a fecha de fin 2\n"
    }
    else
        inputError += "Fecha Inicio o Fecha Fin 2\n"


    if (itemSeleccionado.fecha_inicio3.length > 0 && itemSeleccionado.fecha_fin3.length > 0) {

        dateInicio3 = new Date(itemSeleccionado.fecha_inicio3);

        dateFin3 = new Date(itemSeleccionado.fecha_fin3)

        //console.log(dateInicio2.getFullYear() - año);
        if (dateInicio3 < dateFin2) {
            inputError += "Fecha de inicio 3 menor a fecha fin 2 \n"
        } else if (dateInicio3 > dateFin3)
            inputError += "Fecha de inicio mayor a fecha de fin 3\n"
    }
    else
        inputError += "Fecha Inicio o Fecha Fin 3\n"

    return inputError
}

export { VerifiacarInputs }