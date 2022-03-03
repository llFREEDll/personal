import axios from 'axios'
import { FormatDatosContacto1, FormatDatosContacto2, FormatHistorial1, FormatHistorial2, FormatHistorial3, FormatPersona, FormatUbicacion } from './FormatData';

const personasURL = "http://localhost:3050/personas/";
const ubicacionesURL = "http://localhost:3050/ubicaciones/";
const datosContactoURL = "http://localhost:3050/datos_de_contacto/";
const historialURL = "http://localhost:3050/historiales_laborales/";


const PostPersona = (data) =>{

    const formatedData = FormatPersona(data)

    axios({
        method: 'post',
        url: personasURL,
        data: formatedData
      }).then((response)=>{
          PostUbicacion(data,response.data.id)
          PostDatosContacto1(data,response.data.id)
          PostDatosContacto2(data,response.data.id)
          PostHistorial1(data,response.data.id)
          PostHistorial2(data,response.data.id)
          PostHistorial3(data,response.data.id)
        //   alert()
      }).catch(err =>{
          alert(err)
      });
}

const PostUbicacion = (data, id) =>{

    const formatedData = FormatUbicacion(data, id)

    axios({
        method: 'post',
        url: ubicacionesURL,
        data: formatedData
      }).then((response)=>{
          console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const PostDatosContacto1 = (data, id) =>{

    const formatedData = FormatDatosContacto1(data, id)

    axios({
        method: 'post',
        url: datosContactoURL,
        data: formatedData
      }).then((response)=>{
          console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const PostDatosContacto2 = (data, id) =>{

    const formatedData = FormatDatosContacto2(data, id)

    axios({
        method: 'post',
        url: datosContactoURL,
        data: formatedData
      }).then((response)=>{
          console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const PostHistorial1 = (data, id) =>{

    const formatedData = FormatHistorial1(data, id)

    axios({
        method: 'post',
        url: historialURL,
        data: formatedData
      }).then((response)=>{
          console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const PostHistorial2 = (data, id) =>{

    const formatedData = FormatHistorial2(data, id)

    axios({
        method: 'post',
        url: historialURL,
        data: formatedData
      }).then((response)=>{
          console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}
const PostHistorial3 = (data, id) =>{

    const formatedData = FormatHistorial3(data, id)

    axios({
        method: 'post',
        url: historialURL,
        data: formatedData
      }).then((response)=>{
          console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}


///////////////////////////GET//////////////////////////////////////

const GetPersonal = (setData , url) =>{

    axios({
        method: 'get',
        url: personasURL
      }).then((response)=>{
          setData(response.data)
          //console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const GetHistorial = (setData , id) =>{

    axios({
        method: 'get',
        url: historialURL + id
      }).then((response)=>{
          setData(response.data)
          //console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const GetContacto = (setData , id) =>{

    axios({
        method: 'get',
        url: datosContactoURL + id
      }).then((response)=>{
          setData(response.data)
          //console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

const GetUbicacion = (setData , id) =>{

    axios({
        method: 'get',
        url: ubicacionesURL + id
      }).then((response)=>{
          setData(response.data)
          //console.log(response.data)
      }).catch(err =>{
          alert(err)
      });

}

export {PostPersona, GetPersonal, GetHistorial, GetContacto, GetUbicacion}