import { useEffect, useState } from "react"
import { Container, Spinner, Table } from "react-bootstrap"
import NavBar from "../components/NavBar"
import { GetContacto, GetHistorial, GetPersonal, GetUbicacion } from "../utility/APIConn"
import Modal from 'react-bootstrap/Modal'

const Vista = () => {

    const [data, setData] = useState(undefined)

    const [historialData, setHistorialData] = useState(undefined)
    const [contactoData, setContactoData] = useState(undefined)
    const [ubicacionData, setUbicacionlData] = useState(undefined)

    const [itemSeleccionado, setitemSeleccionado] = useState(undefined)

    const SeleccionarUsuario = (item) => {
        setitemSeleccionado(item);

        GetUbicacion(setUbicacionlData, item.id_persona)
        GetContacto(setContactoData, item.id_persona)
        GetHistorial(setHistorialData, item.id_persona)

        OpenCLoseModalVer()
    }

    const [modalVer, setModalVer] = useState(false)
    const OpenCLoseModalVer = () => {
        setModalVer(!modalVer)
    }

    useEffect(() => {
        GetPersonal(setData)
    }, [])

    return (
        <>
            <NavBar />
            {data !== undefined ?
                <>
                    <Container className="my-5">
                        <Table bordered striped hover responsive variant="dark">
                            <thead>
                                <tr className="align-middle">
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Opciones</th>

                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {data.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.id_persona}</td>
                                        <td>{item.nombre + " " + item.apellido_paterno + " " + item.apellido_materno}</td>
                                        <td>
                                            <button className="btn btn-primary m-1" onClick={() => SeleccionarUsuario(item)}>Ver</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Container>
                    <Modal
                        show={modalVer}
                        onHide={() => OpenCLoseModalVer()}>
                        <Modal.Header closeButton>Personal</Modal.Header>
                        <Modal.Body>
                            <div className="form-group">
                                <h3 className="text-center">Datos personales</h3>
                                {itemSeleccionado !== undefined ?
                                    <>
                                        <label className="form-label"><strong>Nombre</strong></label>
                                        <br />
                                        <p>{itemSeleccionado.nombre}</p>
                                        <br />
                                        <label className="form-label"><strong>Apellido Paterno</strong></label>
                                        <br />
                                        <p>{itemSeleccionado.apellido_paterno}</p>
                                        <br />
                                        <label className="form-label"><strong>Apellido Materno</strong></label>
                                        <br />
                                        <p>{itemSeleccionado.apellido_materno}</p>
                                        <br />
                                        <label className="form-label"><strong>Sexo</strong></label>
                                        <br />
                                        <p>{itemSeleccionado.sexo}</p>
                                        <br />
                                        <label className="form-label"><strong>Fecha de Nacimiento</strong></label>
                                        <br />
                                        <p>{itemSeleccionado.fecha_nacimiento.slice(0, 10)}</p>
                                        <br />
                                        <label className="form-label"><strong>Curp</strong></label>
                                        <br />
                                        <p>{itemSeleccionado.curp}</p>
                                        <br />
                                    </>
                                    :
                                    <label className="form-label"><strong>Error al obtener Personal</strong></label>
                                }
                                <h3 className="text-center">Datos de Ubicación</h3>
                                {ubicacionData !== undefined ?
                                    <>
                                        {ubicacionData.map((item, idx) => (
                                            <div key={"ubi" + idx}>
                                                <label className="form-label"><strong>Domicilio</strong></label>
                                                <br />
                                                <p>{item.direccion}</p>
                                                <br />
                                                <label className="form-label"><strong>No. Interior</strong></label>
                                                <br />
                                                <p>{item.no_interno}</p>
                                                <br />
                                                <label className="form-label"><strong>No. Exterior</strong></label>
                                                <br />
                                                <p>{item.no_externo}</p>
                                                <br />
                                                <label className="form-label"><strong>Colonia</strong></label>
                                                <br />
                                                <p>{item.colonia}</p>
                                                <br />
                                                <label className="form-label"><strong>País</strong></label>
                                                <br />
                                                <p>{item.pais}</p>
                                                <br />
                                                <label className="form-label"><strong>Estado</strong></label>
                                                <br />
                                                <p>{item.estado}</p>
                                                <br />
                                            </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        <label className="form-label"><strong>Error al obtener ubicación</strong></label>
                                    </>
                                }

                                <h3 className="text-center">Datos de Contacto</h3>
                                {contactoData !== undefined ?
                                    <>
                                        {contactoData.map((item, idx) => (
                                            <div key={"ubi" + idx}>
                                                <label className="form-label"><strong>Teléfono</strong></label>
                                                <br />
                                                <p>{item.telefono}</p>
                                                <br />
                                                <label className="form-label"><strong>Tipo</strong></label>
                                                <br />
                                                <p>{item.tipo}</p>
                                                <br />
                                            </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        <label className="form-label"><strong>Error al obtener ubicación</strong></label>
                                    </>
                                }
                                <h3 className="text-center">Historial Laboral</h3>
                                {historialData !== undefined ?
                                    <>
                                        {historialData.map((item, idx) => (
                                            <div key={"ubi" + idx}>
                                                <label className="form-label"><strong>¿Dónde Trabajo?</strong></label>
                                                <br />
                                                <p>{item.trabajo}</p>
                                                <br />
                                                <label className="form-label"><strong>Fecha Inicio</strong></label>
                                                <br />
                                                <p>{item.fecha_inicio.slice(0, 10)}</p>
                                                <br />
                                                <label className="form-label"><strong>Fecha Fin</strong></label>
                                                <br />
                                                <p>{item.fecha_fin.slice(0, 10)}</p>
                                                <br />
                                                <label className="form-label"><strong>Descripción de actividades</strong></label>
                                                <br />
                                                <p>{item.actividades}</p>
                                                <br />
                                                
                                            </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        <label className="form-label"><strong>Error al obtener ubicación</strong></label>
                                    </>
                                }


                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={() => OpenCLoseModalVer()} className="btn btn-danger">Cerrar</button>
                        </Modal.Footer>
                    </Modal>
                </>
                :
                <>
                    <div className="text-center mt-4">
                        <Spinner animation="grow" variant="danger" />
                    </div>
                </>
            }
        </>
    )
}

export default Vista