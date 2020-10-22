const connection = require('../database/connection');

module.exports = {

  async list(request, response){
    const clients = await connection('clients').select('*');
    return response.json(clients);
  },
  async delete(request, response){
    await connection('clients').select('*').delete();
    return response.json();
  },
  async create(request, response){
    try{
      const {account, name, balance} = request.body;
      await connection('clients').insert({
        account,
        name,
        balance
      })
      return response.json({account, name, balance});
    }catch(err){
      return response.status(400).json({ error: err.message });
    }  
  },
};