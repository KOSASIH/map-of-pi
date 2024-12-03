const db = require('../database'); // Assume a database module is available

const getLoyaltyPoints = async (userId) => {
    const user = await db.getUser ById(userId);
    return user.loyaltyPoints || 0;
};

const addLoyaltyPoints = async (userId, points) => {
    await db.updateUser Points(userId, points);
    return getLoyaltyPoints(userId);
};

const redeemLoyaltyPoints = async (userId, points) => {
    const currentPoints = await getLoyaltyPoints(userId);
    if (currentPoints < points) {
        throw new Error('Insufficient loyalty points');
    }
    await db.updateUser Points(userId, -points);
    return getLoyaltyPoints(userId);
};

module.exports = { getLoyaltyPoints, addLoyaltyPoints, redeemLoyaltyPoints };
