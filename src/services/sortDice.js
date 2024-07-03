const sortDice = async () => {
    const maxValue = 6;
    return Math.ceil(Math.random() * maxValue);
};

export default sortDice;
