
// export const isYes = (answer) => {
//     if (answer === 'yes') {
//         return true;
//     }
//     else {
//         return false;
//     }
// };
// export default isYes;
export const isYes = (answer) => {
    if (answer === 'yes') {
        return true;
    } else if (answer === 'y') {
        return true;
    } else if (answer === 'n') {
        return false;
    }
    else {
        return false;
    }
};
export default isYes;
