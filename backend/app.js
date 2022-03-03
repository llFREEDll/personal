const express = require("express")
const bodyParser = require('body-parser');
const personasRoutes = require("./personas")
const ubicacionesRoutes = require("./ubicaciones")
const datosContactoRoutes = require("./datos_de_contacto")
const historialesRoutes = require("./historiales_laborales")
const cors = require("cors")
const PORT = process.env.PORT || 3050

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Route 
app.use("/", personasRoutes)
app.use("/", ubicacionesRoutes)
app.use("/", datosContactoRoutes)
app.use("/", historialesRoutes)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(PORT, () => console.log("server running on PORT " + PORT))