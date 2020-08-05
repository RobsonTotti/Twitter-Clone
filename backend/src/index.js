const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

//*Conexão com mongo DB em servidor externo
// https://mlab.com/
mongoose.connect(
  "mongodb+srv://root:root@cluster0.x0vnd.mongodb.net/oministack?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen("3000", () => {
  // função callback
  // retorno da função callback
  console.log("Server started at port 3000");
});
