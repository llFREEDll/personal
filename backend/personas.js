const express = require("express")
const personas = express.Router()
const mysql = require("mysql")
//const bodyParser = require("body-parser")

//personas.use(bodyParser.urlencoded({ extended: false }))

//personas.use(bodyParser.json())

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
    //console.log("database server running!");
})

personas.get("/personas", (req, res) => {

    const sql = "SELECT * FROM personas"

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

personas.get("/personas/:id", (req, res) => {

    let { id } = req.params
    id = connection.escape(id)
    const sql = `SELECT * FROM personas WHERE id_persona = ${id} `

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

personas.post("/personas", (req, res) => {
    const sql = "INSERT INTO personas SET ?"
    //console.log(req.body);
    const personaData = {
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        curp: req.body.curp
    };

    connection.query(sql, personaData, (error, results, fields) => {
        if (error) throw error
        res.send({id: results.insertId})
    })
})

personas.put("/personas/:id", (req, res) => {
    const { id } = req.params
    const { nombre, apellido_paterno,
        apellido_materno, sexo, fecha_nacimiento, curp } = req.body

    const sql = `UPDATE personas SET nombre = '${nombre}',
    apellido_paterno = '${apellido_paterno}',
     apellido_materno = '${apellido_materno}',
     sexo = '${sexo}',
      fecha_nacimiento = '${fecha_nacimiento}',
       curp = '${curp}' where id_persona = '${id}'`

    connection.query(sql, (error) => {
        if (error) throw error
        res.send("Persona editada!")
    })
})

personas.delete("/personas/:id", (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM personas WHERE id_persona = '${id}'`
    connection.query(sql, (error) => {
        if (error) throw error
        res.send("Persona eliminada!")
    })
})
module.exports = personas