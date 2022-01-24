//CLASE #7: ¿Qué es un closure?

// Como no funciona
const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);


//Como es un closure
const moneyBox = (coins) =>{
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

