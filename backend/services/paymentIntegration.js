const axios = require('axios');

const PAYMENT_API_URL = 'https://api.paymentgateway.com/v1/payments';

const processPayment = async (paymentDetails) => {
    const { amount, currency, paymentMethod, userId } = paymentDetails;

    try {
        const response = await axios.post(PAYMENT_API_URL, {
            amount,
            currency,
            paymentMethod,
            userId,
        });
        return response.data;
    } catch (error) {
        console.error('Payment processing error:', error);
        throw new Error('Payment processing failed');
    }
};

const refundPayment = async (transactionId) => {
    try {
        const response = await axios.post(`${PAYMENT_API_URL}/refund`, { transactionId });
        return response.data;
    } catch (error) {
        console.error('Refund processing error:', error);
        throw new Error('Refund processing failed');
    }
};

module.exports = { processPayment, refundPayment };
