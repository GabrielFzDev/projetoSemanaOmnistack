connection = require('../database/connection')

//Criar um controller para a criação de usuario

module.exports = {
    async index(request,response){
        const users = await connection('users').select('*');

        return response.json(users)
    },

    async create(request,response){
        const {name,email,password} = request.body;

        const[id] = await connection("users").insert({
            name,
            email,
            password
        })
        
        return response.json({id});
    }
}