import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function Register(){
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');

  async function handleRegister(e){
    e.preventDefault();
    const data = {
      account,
      name,
      balance,
    };

    try{
      const response = await api.post('addclient', data);
      alert(`${response.data.name} cadastrado com sucesso:`);
    }catch(err){
      alert('Erro no cadastro');
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
              type="text" 
              placeholder="Nome do cliente"
              value={name}
              onChange={e => setName(e.target.value)}/>
            <input 
              placeholder="Saldo"
              value={balance}
              onChange={e => setBalance(e.target.value)}
            />
            <button className="button" type="submit">Registrar</button>
         </form>
       </div>
     </div> 
  );
}
