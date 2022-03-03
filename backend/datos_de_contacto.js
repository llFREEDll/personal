const express = require("express")
const datos_de_contacto = express.Router()
const mysql = require("mysql")

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

datos_de_contacto.get("/datos_de_contacto", (req, res) => {

    const sql = "SELECT * FROM datos_de_contacto"

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

datos_de_contacto.get("/datos_de_contacto/:id", (req, res) => {

    let { id } = req.params
    id = connection.escape(id)
    const sql = `SELECT * FROM datos_de_contacto WHERE id_datos = ${id} `

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

datos_de_contacto.post("/datos_de_contacto", (req, res) => {
    const sql = "INSERT INTO datos_de_contacto SET ?"
    //console.log(req.body);
    const contactoData = {
        telefono: req.body.telefono,
        tipo: req.body.tipo,
        id_persona:req.body.id_persona 
    };

    connection.query(sql, contactoData, (error) => {
        if (error) throw error
        res.send("contacto creada!")
    })
})

datos_de_contacto.put("/datos_de_contacto/:id", (req, res) => {
    const { id } = req.params
    const { telefono, tipo } = req.body

    const sql = `UPDATE datos_de_contacto SET telefono = '${telefono}',
    tipo = '${tipo}' where id_datos = '${id}'`

    connection.query(sql, (error) => {
        if (error) throw error
        res.send("contacto editada!")
    })
})

datos_de_contacto.delete("/datos_de_contacto/:id", (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM datos_de_contacto WHERE id_datos = '${id}'`
    connection.query(sql, (error) => {
        if (error) throw error
        res.send("contacto eliminada!")
    })
})
module.exports = datos_de_contacto