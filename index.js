import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromamount = currency[user_answer.from];
let Toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount=amount / fromamount
let convertedamount=baseamount * Toamount
console.log(convertedamount)
console.log(fromamount);
console.log(Toamount);
console.log(amount);
