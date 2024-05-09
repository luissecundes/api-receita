const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var documento = req.query.cnpj;

  axios
    .get("https://www.receitaws.com.br/v1/cnpj/" + documento)
    .then(function (response) {
      // manipula o sucesso da requisição
      res.send(response.data);
    })
    .catch(function (error) {
      // manipula erros da requisição
      res.send(error);
    })
    .finally(function () {
      // sempre será executado
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
