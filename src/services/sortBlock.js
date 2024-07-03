const sortBlock = async () => {
    const maxValue = 3;
    const randomValue = Math.ceil(Math.random() * maxValue);

    let result = ""

    switch (randomValue) {
        case 1:
            result = "straight";
            break;
        case 2:
            result = "curve";
            break;
        case 3:
            result = "confrontation";
            break;
        default:
            break;
    }

    return result;
};

export default sortBlock;
