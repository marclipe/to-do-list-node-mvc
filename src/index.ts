import express from "express";
import path from "path";

const app = express();

// Porta que o servidor vai escutar
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Rota
app.get("/home", (req, res) => {
  res.render("index", { message: "Hello, EJS!" });
});

app.listen(port, () => 
  console.log(`Servidor rodando em http://localhost:${port}`)
);
