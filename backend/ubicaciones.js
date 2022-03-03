const express = require("express")
const ubicaciones = express.Router()
const mysql = require("mysql")
//const bodyParser = require("body-parser")

//ubicaciones.use(bodyParser.urlencoded({ extended: false }))

//ubicaciones.use(bodyParser.json())

//mysql conn
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
});

// is connected? 
connection.connect(error => {
    if (error) throw error;
    // console.log("database server running!");
})

ubicaciones.get("/ubicaciones", (req, res) => {

    const sql = "SELECT * FROM ubicaciones"

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

ubicaciones.get("/ubicaciones/:id", (req, res) => {

    let { id } = req.params
    id = connection.escape(id)
    const sql = `SELECT * FROM ubicaciones WHERE id_persona = ${id} `

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

ubicaciones.post("/ubicaciones", (req, res) => {
    const sql = "INSERT INTO ubicaciones SET ?"
    //console.log(req.body);
    const ubicacionData = {
        direccion: req.body.direccion,
        no_interno: req.body.no_interno,
        no_externo: req.body.no_externo,
        colonia: req.body.colonia,
        pais: req.body.pais,
        estado: req.body.estado,
        id_persona:req.body.id_persona 
    };

    connection.query(sql, ubicacionData, (error) => {
        if (error) throw error
        res.send("ubicacion creada!")
    })
})

ubicaciones.put("/ubicaciones/:id", (req, res) => {
    const { id } = req.params
    const { direccion, no_interno, no_externo,
        colonia, pais, estado } = req.body

    const sql = `UPDATE ubicaciones SET direccion = '${direccion}',
    no_interno = '${no_interno}',
    no_externo = '${no_externo}',
    colonia = '${colonia}',
      pais = '${pais}',
      estado = '${estado}' where id_ubicacion = '${id}'`

    connection.query(sql, (error) => {
        if (error) throw error
        res.send("ubicacion editada!")
    })
})

ubicaciones.delete("/ubicaciones/:id", (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM ubicaciones WHERE id_ubicacion = '${id}'`
    connection.query(sql, (error) => {
        if (error) throw error
        res.send("ubicacion eliminada!")
    })
})
module.exports = ubicaciones