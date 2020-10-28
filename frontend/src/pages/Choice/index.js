import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Choice(){
  
  return(
     <div className="register-container">
       <div className="content">
        <form>
          <Link to="/register">
            <button className="button" type="submit">Criar Conta</button>
          </Link>
          <Link to="/credit">
            <button className="button" type="submit">Depósito</button>
          </Link>
          <Link to="/debit">
            <button className="button" type="submit">Debito</button>
          </Link>
          <Link to="/transfer">
            <button className="button" type="submit">Transferência</button>
          </Link>
          <Link to="/balance">
            <button className="button" type="submit">Ver saldo</button>
          </Link>
        </form>
       </div>
     </div> 
  );
}
