const prices: (number | string)[] = [1,2,3,4,"5",6];
prices.push(1);
prices.push('a');

const user: [string, number] = ['frediignr', 25]
const otherUser: [string, number, boolean] = ['frediignr', 25, true];

const [username, age] = otherUser;
console.log(username, age, otherUser);
