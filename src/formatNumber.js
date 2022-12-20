const a = 20.1;

const formatTwoDigit = number => number.toFixed(2);

// 1. Name Export
export { formatTwoDigit };
export const formatTwoDigit1 = number => number.toFixed(2);
export const formatTwoDigit2 = number => number.toFixed(2);

// 2. Default Export
// export default number => number.toFixed(2)
// export default formatTwoDigit;
// export default [0, 1, 2, 3, 4, 5]; // Export ไม่มีชื่อ
export default { name: 'jack' };
