export const CalculateReward = (price) => {
    let rewards = 0;
    if (price > 100) {
        rewards = (price - 100) * 2;
        // A customer receives 2 points for every dollar spent over $100 in each transaction
    }
    if (price > 50) {
        rewards = (price - 50) * 1;
        // plus 1 point for every dollar spent over $50 in each transaction
    }
    return rewards;
}