import NavBar from "../components/NavBar"
import "../styles/Main.css"
const Main = () => {
    return (
        <>
            <NavBar />
            <div className="main-banner-image w-100  d-flex justify-content-center align-items-center">
                <div className='text-center'>
                    <h1 className="text-white text-bold">Manejador de Personal</h1>
                </div>
            </div>
        </>
    )
}

export default Main