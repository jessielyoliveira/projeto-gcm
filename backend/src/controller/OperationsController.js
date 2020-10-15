const connection = require('../database/connection');

module.exports = {

	async credit(request, response) {
		const { account, deposit } = request.body;
		if (deposit <= 0) {
			return response.status(401).json({ error: 'Operação não permitida' });
		}
		try {
			const { balance: oldBalance } = await connection('clients').where('account', account).select('balance').first();
			const credit = oldBalance + deposit;

			await connection('clients').where('account', account).update({
				balance: credit
			})
			return response.json({ credit });
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	},

	async debit(request, response) {
		const { account, debit } = request.body;
		const { balance: oldBalance } = await connection('clients').where('account', account).select('balance').first();

		if (debit > oldBalance) {
			return response.status(401).json({ error: 'Você não possui saldo suficiente' });
		}
		try {
			const balance = oldBalance - debit;
			await connection('clients').where('account', account).update({
				balance: balance
			})
			return response.json(balance);
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
		
		const newBalanceAccountDebit = balanceAccountDebit - value;
		const newBalanceAccountCredit = balanceAccountCredit + value;

		await connection('clients').where('account', accountDebit).update({ balance: newBalanceAccountDebit })
		await connection('clients').where('account', accountCredit).update({ balance: newBalanceAccountCredit })

		return response.json({ newBalanceAccountDebit, newBalanceAccountCredit });
	},

	async getBalance(request, response) {
		const { account } = request.body;
		const client = await connection('clients').where('account', account).select('*').first();

		if(client == undefined) { return response.status(401).json({ error: 'Conta inexistente' }) }

		return response.json({ client });
	}
};