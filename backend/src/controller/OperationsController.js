const connection = require('../database/connection');

module.exports = {

	async credit(request, response) {
		const { account, deposit } = request.body;
		console.log(deposit);
		if (deposit <= 0) {
			return response.status(401).json({ error: 'Operação não permitida' });
		}
		try {
			const { balance: currentBalance } = await connection('clients').where('account', account).select('balance').first();
			const newBalance = parseFloat(currentBalance) + parseFloat(deposit);
			console.log(newBalance);

			await connection('clients').where('account', account).update({
				balance: newBalance
			})
			return response.json({ newBalance });
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	},

	async debit(request, response) {
		const { account, debit } = request.body;
		const { balance: currentBalance } = await connection('clients').where('account', account).select('balance').first();

		if (parseFloat(debit) > currentBalance || debit == 0) {
			return response.status(401).json({ error: 'Você não possui saldo suficiente' });
		}
		try {
			const newBalance = parseFloat(currentBalance) - parseFloat(debit);
			await connection('clients').where('account', account).update({
				balance: newBalance
			})
			return response.json({ newBalance });
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	},

	async transfer(request, response) {
		const { accountDebit, accountCredit, value } = request.body;

		if(value <= 0) { return response.status(401).json({ error: 'Operação não permitida' }) }
		
		const { account: accountDebit_ } = await connection('clients').where('account', accountDebit).select('account').first() || {};
		const { account: accountCredit_ } = await connection('clients').where('account', accountCredit).select('account').first() || {};

		if((accountDebit_ == undefined) || (accountCredit_ == undefined)) { 
			return response.status(401).json({ error: 'Conta inexistente' }) 
		}

		const { balance: balanceAccountDebit } = await connection('clients').where('account', accountDebit).select('balance').first();
		if(value > balanceAccountDebit) { return response.status(401).json({ error: 'Não possui saldo suficiente para transferência' }) }
	
		const { balance: balanceAccountCredit } = await connection('clients').where('account', accountCredit).select('balance').first();
		
		const newBalanceAccountDebit = parseFloat(balanceAccountDebit) - parseFloat(value);
		const newBalanceAccountCredit = parseFloat(balanceAccountCredit) + parseFloat(value);

		await connection('clients').where('account', accountDebit).update({ balance: newBalanceAccountDebit })
		await connection('clients').where('account', accountCredit).update({ balance: newBalanceAccountCredit })

		return response.json({ newBalanceAccountDebit, newBalanceAccountCredit });
	},

	async getBalance(request, response) {
		const { account } = request.body;
		const { balance: balance }= await connection('clients').where('account', account).select('balance').first() || {};

		if(balance == undefined) { return response.status(401).json({ error: 'Conta inexistente' }) }

		return response.json({ balance });
	}
};