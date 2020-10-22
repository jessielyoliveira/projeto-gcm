import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Balance() {
	const[account, setAccount] = useState('');

	async function handleRegister(e) {
		e.preventDefault();
		const data = {
			account
		};

		try {
			const response = await api.post('balance', data);
			alert(`Saldo = ${response.data.balance}`);
		} catch (err) {
			alert('Conta inexistente.');
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<form onSubmit={handleRegister}>
					<input
						placeholder="Número da conta"
						value={account}
						onChange={e => setAccount(e.target.value)}
					/>
					<button className="button" type="submit">Ver saldo</button>
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