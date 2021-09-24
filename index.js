// Paso 1
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  exphbs({
    layoutsDir: __dirname + "/views2",
    partialsDir: __dirname + "/views2/componentes/",
  })
);

app.use('/bootstrap', express.static(__dirname +
  '/node_modules/bootstrap/dist/css'))

app.use('/jquery', express.static(__dirname +
  '/node_modules/jquery/dist'))

app.use('/assets/img', express.static(__dirname +
  '/assets/img'))

app.get("/", function (req, res) {
  res.render("main", { layout: "main", fruta: ["banana", "cebollas", "pimenton", "papas", "lechuga", "tomate"] });
});