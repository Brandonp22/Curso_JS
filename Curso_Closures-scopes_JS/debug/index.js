//CLASE #11: Debugging

var a = "hello";

function hello() {
    let b = "hello World";
    const c = "Hello World!";
    if (true) {
        let d = "Hello World!!";
        debugger
    }
}
hello();


//Como es un closure
const moneyBox = (coins) =>{
    debugger
    var saveCoins = 0;
    const countCoins = (coins) =>{
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);