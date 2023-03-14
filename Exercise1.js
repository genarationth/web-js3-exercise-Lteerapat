const cost = transaction => {
    return transaction * 3 + transaction * .01;
}
console.log(cost(5));