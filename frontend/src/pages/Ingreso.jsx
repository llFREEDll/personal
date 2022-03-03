import NavBar from "../components/NavBar"
import { Container, Form } from "react-bootstrap"
import { useState } from "react"
import { PostPersona } from "../utility/APIConn"
import { VerifiacarInputs } from "../utility/VerificarInputs"

const Ingreso = () => {

    const [itemSeleccionado, setitemSeleccionado] = useState({
        name: "",last_name_1: "",last_name_2: "",
        sexo:"", born_date :"",curp:"", domicilio:"",
        no_interior:"",no_exterior :"",colonia:"",
        pais:"",estado:"", telefono1:"",tipo1:"",
        telefono2:"", tipo2:"", trabajo1:"",fecha_inicio1:"",
        fecha_fin1:"",actividades1:"", trabajo2:"",fecha_inicio2:"",
        fecha_fin2:"",actividades2:"", trabajo3:"",fecha_inicio3:"",
        fecha_fin3:"",actividades3:""
    })
    const HandleChange = e => {
        const { name, value } = e.target
        setitemSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))
        //console.log(itemSeleccionado)
    }
    const PostData = () => {

        const userInputData = VerifiacarInputs(itemSeleccionado)

        if (userInputData === "") {
            
            PostPersona(itemSeleccionado)

        }else {
            // ObtenerCostoDeEnvio()
            alert("Verifica los siguientes campos:\n" + userInputData)
        }


    }

    const [pais, setPais] = useState(false)
    const ChangePais = () => {

        if (!pais) {
            console.log("mexico");
            setitemSeleccionado((prevState) => ({
                ...prevState,
                pais: "México",
                estado:""
            }))
        }
        else
            setitemSeleccionado((prevState) => ({
                ...prevState,
                pais: "",
                estado:""
            }))

        setPais(!pais)
    }
    return (
        <>
            <NavBar />
            <Container className="bg-dark text-white shadow my-5 rounded-3">
                <div className="form-group py-3">
                    <label className="form-label">Nombre</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="name" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Apellido Paterno</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="last_name_1" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Apellido Materno</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="last_name_2" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Sexo</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="sexo" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha de Nacimiento</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="born_date" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Curp</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="curp" onChange={HandleChange}></input>
                    <br />
                    <h3 className="text-center">Datos de Ubicación</h3>
                    <br />
                    <label className="form-label">Domicilio</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="domicilio" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">No. Interior</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="no_interior" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">No. Exterior</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="no_exterior" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Colonia</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="colonia" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">País</label>
                    <Form.Check
                        type="switch" id="custom-switch" label="México" onClick={() => ChangePais()}
                    />
                    <br />

                    {pais ?
                        <>
                            <label className="form-label">Estado</label>
                            <br />
                            <input className="form-control mb-3" type="text" name="estado" onChange={HandleChange}></input>
                            <br />
                        </>
                        :
                        <>
                            <label className="form-label">Otro País</label>
                            <input className="form-control mb-3" type="text" name="pais" onChange={HandleChange}></input>
                            <br />
                        </>
                    }
                    <br />
                    <h3 className="text-center">Datos de Contacto</h3>
                    <br />
                    <label className="form-label">Teléfono 1</label>
                    <br />
                    <input className="form-control mb-3" type="number" name="telefono1" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Tipo</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="tipo1" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Teléfono 2</label>
                    <br />
                    <input className="form-control mb-3" type="number" name="telefono2" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Tipo</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="tipo2" onChange={HandleChange}></input>
                    <br />
                    <h3 className="text-center">Historial Laboral</h3>
                    <br />
                    <label className="form-label">¿Dónde Trabajo?</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="trabajo1" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha Inicio</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="fecha_inicio1" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha Fin</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="fecha_fin1" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Descripción de actividades</label>
                    <br />
                    <textarea className="form-control mb-3" rows={5} type="text" name="actividades1" onChange={HandleChange}></textarea>
                    <br />
                    <label className="form-label">¿Dónde Trabajo?</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="trabajo2" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha Inicio</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="fecha_inicio2" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha Fin</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="fecha_fin2" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Descripción de actividades</label>
                    <br />
                    <textarea className="form-control mb-3" rows={5} type="text" name="actividades2" onChange={HandleChange}></textarea>
                    <br />
                    <label className="form-label">¿Dónde Trabajo?</label>
                    <br />
                    <input className="form-control mb-3" type="text" name="trabajo3" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha Inicio</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="fecha_inicio3" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Fecha Fin</label>
                    <br />
                    <input className="form-control mb-3" type="date" name="fecha_fin3" onChange={HandleChange}></input>
                    <br />
                    <label className="form-label">Descripción de actividades</label>
                    <br />
                    <textarea className="form-control mb-3" rows={5} type="text" name="actividades3" onChange={HandleChange}></textarea>
                    <br />

                    <div className="text-center">
                        <button onClick={() => PostData()} className="btn btn-outline-light">Guardar</button>
                    </div>

                    <br />
                </div>
            </Container>
        </>
    )
}

export default Ingreso