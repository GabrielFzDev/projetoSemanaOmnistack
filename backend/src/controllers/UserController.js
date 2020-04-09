connection = require('../database/connection')

//Criar um controller para a criação de usuario

module.exports = {
    async index(request,response){
        const users = connection('users').select('*');

        return response.json(users)
    },

    async create(resquest,reponse){
        const {name,email,senha} = request.body();

        const[id] = await connection("users").insert({
            name,
            email,
            senha
        })
        
        return response({id});
    }
}