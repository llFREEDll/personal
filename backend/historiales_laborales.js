const express = require("express")
const historiales_laborales = express.Router()
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

historiales_laborales.get("/historiales_laborales", (req, res) => {

    const sql = "SELECT * FROM historiales_laborales"

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

historiales_laborales.get("/historiales_laborales/:id", (req, res) => {

    let { id } = req.params
    id = connection.escape(id)
    const sql = `SELECT * FROM historiales_laborales WHERE id_hl = ${id} `

    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length > 0)

            res.json(result)

        else

            res.send("no results")
    })
})

historiales_laborales.post("/historiales_laborales", (req, res) => {
    const sql = "INSERT INTO historiales_laborales SET ?"
    //console.log(req.body);
    const historialData = {
        trabajo: req.body.trabajo,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        actividades: req.body.actividades,
        id_persona:req.body.id_persona 
    };

    connection.query(sql, historialData, (error) => {
        if (error) throw error
        res.send("historial creada!")
    })
})

historiales_laborales.put("/historiales_laborales/:id", (req, res) => {
    const { id } = req.params
    const { trabajo,fecha_inicio,
        fecha_fin, actividades } = req.body

    const sql = `UPDATE historiales_laborales SET trabajo = '${trabajo}',
    fecha_inicio = '${fecha_inicio}',
    fecha_fin = '${fecha_fin}',
    actividades = '${actividades}' where id_hl = '${id}'`

    connection.query(sql, (error) => {
        if (error) throw error
        res.send("historial editada!")
    })
})

historiales_laborales.delete("/historiales_laborales/:id", (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM historiales_laborales WHERE id_hl = '${id}'`
    connection.query(sql, (error) => {
        if (error) throw error
        res.send("historial eliminada!")
    })
})
module.exports = historiales_laborales