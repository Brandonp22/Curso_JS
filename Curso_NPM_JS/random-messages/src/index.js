const messages = [
    "oscar",
    "ana",
    "diego",
    "brandon",
    "laura",
    "Yesica",
    "carol",
    "paula",
    "marco",

];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = {randomMsg};