const axios = require('axios');
const crypto = require('crypto');

const BLOCKCHAIN_API_URL = 'https://api.blockchain.com/v3/exchange/tickers';

const verifyTransaction = async (transactionId) => {
    try {
        const response = await axios.get(`${BLOCKCHAIN_API_URL}/${transactionId}`);
        return response.data;
    } catch (error) {
        console.error('Error verifying transaction:', error);
        throw new Error('Transaction verification failed');
    }
};

const generateTransactionHash = (transaction) => {
    return crypto.createHash('sha256').update(JSON.stringify(transaction)).digest('hex');
};

module.exports = { verifyTransaction, generateTransactionHash };
