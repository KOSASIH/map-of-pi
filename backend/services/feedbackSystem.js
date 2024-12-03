const db = require('../database'); // Assume a database module is available

const submitFeedback = async (feedback) => {
    const { userId, businessId, rating, comment } = feedback;
    if (rating < 1 || rating > 5) {
        throw new Error('Rating must be between 1 and 5');
    }
    const feedbackEntry = {
        userId,
        businessId,
        rating,
        comment,
        createdAt: new Date(),
    };
    await db.saveFeedback(feedbackEntry);
    return feedbackEntry;
};

const getBusinessFeedback = async (businessId) => {
    return await db.getFeedbackByBusinessId(businessId);
};

module.exports = { submitFeedback, getBusinessFeedback };
