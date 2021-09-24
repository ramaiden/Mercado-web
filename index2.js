// Paso 1
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
app.set("view engine", "handlebars");
// Paso 2
app.engine(
  "handlebars",
  exphbs({
    layoutsDir: __dirname + "/views2",
    partialsDir: __dirname + "/views2/componentes/",
  })
);
// Paso 3
app.use('/bootstrap', express.static(__dirname +
  '/node_modules/bootstrap/dist/css'))
// Paso 3
app.use('/jquery', express.static(__dirname +
  '/node_modules/jquery/dist'))

  app.use('/assets/img', express.static(__dirname +
    '/assets/img'))

app.get("/", function (req, res) {
  res.render("main", { layout: "main", fruta: ["banana", "cebollas", "pimenton", "papas", "lechuga", "tomate"] });
});

// Paso 4
app.get("/Contactos", function (req, res) {
  res.render("Contactos", { layout: "Contactos" });
});
// Paso 5
app.get("/Galeria", function (req, res) {
  res.render("Galeria", { layout: "Galeria" });
});

app.get("/Ventas", function (req, res) {
  // Paso 2
  res.render("Ventas", {
    layout: "Ventas",
    usuario: "Maria José",
    ventas: [14990, 42490, 22500],
  });
});


app.get("/Formulario", function (req, res) {
  res.render("Formulario", { layout: "Formulario" });
});