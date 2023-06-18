import express from "express";
import path from "path";

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Porta que o servidor vai escutar
const port = 3000;

//Rota
app.get("/", (req, res) => {
  res.render("index", { message: "Hello, EJS!" });
});

app.listen(port, () => 
  console.log(`Servidor rodando em http://localhost:${port}`)
);
