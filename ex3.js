const members = [
    {name:"a", money: 500},
    {name:"b", money: 400},
    {name:"c", money: 5200},
    {name:"d", money: 1200},
];
const result = members.find((member) => { return member.money > 450});
console.log(result);