import express from "express";
import path from "path";
import routes from "./routes/routes";

const app = express();

// Porta que o servidor vai escutar
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => 
  console.log(`Servidor rodando em http://localhost:${port}`)
);
