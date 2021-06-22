require("dotenv").config(); // Variáveis de ambiente

const express = require("express");
const app = express();
const mongoose = require("mongoose"); // Modelar a base de dados
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => console.log(e));
const session = require("express-session"); // Identificar e salvar dados no navegador
const MongoStore = require("connect-mongo"); // seções salvas na base de dados
const flash = require("connect-flash"); // mensagens auto-destrutivas, assim que lê-las, elas apagam, são salvas na seção
const routes = require("./routes"); // Rotas da aplicação
const path = require("path"); // Caminho
const helmet = require("helmet"); // Segurança
const csrf = require("csurf"); // Segurança: faz com que nenhum site externo consiga salvar dados na aplicação
const {
  checkCSFRError,
  csfrMiddleware,
} = require("./src/middlewares/middleware"); // Funções executadas nas rotas

app.use(helmet());
app.use(express.urlencoded({ extended: true })); // Permite postar formulários na aplicação
app.use(express.json()); // Permite o parse de Json para a aplicação
app.use(express.static(path.resolve(__dirname, "public"))); // Arquivos que posem ser acessados diretamente na aplicação

const sessionOptions = session({
  secret: "123456789abc",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); // Arquivos que serão renderizados na tela
app.set("view engine", "ejs"); // A engine utilizada para renderizar os views na aplicação, existem vários
app.use(csrf());

app.use(checkCSFRError);
app.use(csfrMiddleware);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});

// O padrão de projeto utilizado é o MVC: Model, Views e Controllers
// Controller decide as coisas, qual View e qual Model vai ser utilizado naquela rota
// Model serão importados dentro do controller, trabalha com dados, modelagem de dados, tudo o que é referente a dados ou a base de dados
// View é o que o usuário vai ver
