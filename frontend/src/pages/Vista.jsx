import { useState } from "react"
import { Container, Spinner, Table } from "react-bootstrap"
import NavBar from "../components/NavBar"

const Vista = () => {

    const [data, setData] = useState(undefined)
    const [itemSeleccionado, setitemSeleccionado] = useState({
        id: "",
        name: ""
    })
    const SeleccionarUsuario = (item) => {
        setitemSeleccionado(item.data());
        OpenCLoseModalVer()
    }

    const [modalVer, setModalVer] = useState(false)
    const OpenCLoseModalVer = () => {
        setModalVer(!modalVer)
    }


    return (
        <>
            <NavBar />
            {data !== undefined ?

                <Container>
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
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>
                                        <button className="btn btn-primary m-1" onClick={() => SeleccionarUsuario(item)}>Ver</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Container>
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