import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Transfer() {
	const[accountDebit, setAccountDebit] = useState('');
	const[accountCredit, setAccountCredit] = useState('');
	const[value, setValue] = useState('');

	async function handleRegister(e) {
		e.preventDefault();
		const data = {
			accountDebit,
			accountCredit,
			value
		};

		try {
			await api.post('transfer', data);
			alert(`Transferência realizada com sucesso!`);
		} catch (err) {
			alert('Erro na transferência.');
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<form onSubmit={handleRegister}>
					<input
						placeholder="Número da conta de débito"
						value={accountDebit}
						onChange={e => setAccountDebit(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Nome do conta de depósito"
						value={accountCredit}
						onChange={e => setAccountCredit(e.target.value)} />
					<input
						placeholder="Valor"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button className="button" type="submit">Transferir</button>
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