const connection = require('../database/connection');

module.exports = {

  async credit(request, response){
    const {account, deposit} = request.body;
    if( deposit <= 0 ){
        return response.status(401).json({ error: 'Operação não permitida' });
    }
    try{
      const {balance:oldBalance} = await connection('clients').where('account', account).select('balance').first();     
      const credit = oldBalance + deposit;
      
      await connection('clients').where('account', account).update({
         balance: credit
      })
        return response.json({credit});
    }catch(err){
        return response.status(400).json({ error: err.message });
    }    
  }
};