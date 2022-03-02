const express = require("express")
const bodyParser = require('body-parser');
const personasRoutes = require("./personas")
const ubicacionesRoutes = require("./ubicaciones")
const datosContactoRoutes = require("./datos_de_contacto")
const historialesRoutes = require("./historiales_laborales")

const PORT = process.env.PORT || 3050

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Route 
app.use("/", personasRoutes)
app.use("/", ubicacionesRoutes)
app.use("/", datosContactoRoutes)
app.use("/", historialesRoutes)

app.listen(PORT, () => console.log("server running on PORT " + PORT))