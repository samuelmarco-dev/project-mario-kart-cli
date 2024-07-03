import sortDice from "./sortDice.js";

const rollDices = async () => {
    const [rollOne, rollTwo] = await Promise.all([sortDice(), sortDice()]);
    return [rollOne, rollTwo];
};

export default rollDices;
