import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Choice(){
  
  return(
     <div className="register-container">
       <div className="content">
        <form>
          <Link to="/Credit">
            <button className="button" type="submit">Credito</button>
          </Link>
          <Link to="/">
            <button className="button" type="submit">Debito</button>
          </Link> 
            <button className="button" type="submit">Transferência</button>
            <button className="button" type="submit">Ver saldo</button>
        </form>
       </div>
     </div> 
  );
}
