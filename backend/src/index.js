/*
Metodos HTTP:
Get:Buscar uma informação do backEnd
Post: Criar uma informação no backEnd
Put: Alterar uma informação no backEnd
DELETE: deletar alguma informação no backEnd


NodeMon
instalar usar o comando
*/

/* 
    Tipos de parametros

    query Params: Parametros enviados na rota após "?"
    Route Params: Parametros para identificar recursos
    request body: Corpo da requisição, utilizando para criar  ou utilizar recursos
*/
const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3333);