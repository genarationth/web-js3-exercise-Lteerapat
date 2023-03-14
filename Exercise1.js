const cost = transaction => {
    return transaction * 3 + transaction * .001;
}
console.log(cost(5));