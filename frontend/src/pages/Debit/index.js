import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Debit(){
    const [account, setAccount] = useState('');
    const [debit, setDebit] = useState('');
    
    async function handleRegister(e){
      e.preventDefault();
      const data = {
        account,
        debit,
      };

      try{
        const response = await api.post('debit', data);
        alert(`Debito realizado com sucesso, o saldo atual da conta é ${response.data.newBalance}`);
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
                placeholder="Valor do debito"
                value={debit}
                onChange={e => setDebit(e.target.value)}
              />
              <button className="button" type="submit">Fazer debito</button>
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
