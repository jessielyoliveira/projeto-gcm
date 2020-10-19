import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Credit(){
    const [account, setAccount] = useState('');
    const [deposit, setDeposit] = useState('');
    
    async function handleRegister(e){
      e.preventDefault();
      const data = {
        account,
        deposit,
      };

      try{
        const response = await api.post('credit', data);
        alert(`Deposito realizado com sucesso, o saldo atual da conta é ${response.data.newBalance}`);
      }catch(err){
        alert('Erro na transferência');
      }  
  }
  return(
     <div className="register-container">
       <div className="content">
            <form onSubmit={handleRegister}>
              <input 
                placeholder="Número da conta"
                value={account}
                onChange={e => setAccount(e.target.value)}
              />
              <input 
                placeholder="Valor do deposito"
                value={deposit}
                onChange={e => setDeposit(e.target.value)}
              />
              <button className="button" type="submit">Fazer deposito</button>
            <div id="button">
              <Link to="/">
                <button className="return-button">Voltar ao Menu</button> 
              </Link>
            </div>  
          </form>
       </div>
     </div> 
  );
}
