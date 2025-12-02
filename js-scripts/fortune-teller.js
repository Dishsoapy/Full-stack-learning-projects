const fortune1 = "Your cat won't try to kill you today if you rub its belly.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You might get a baja blast pie from Taco Bell today.";
const fortune5 = "It would be wise to avoid the color red today. It honestly doesn't look good on you.";

let selectedFortune = undefined;

const randomNumber = Math.floor((Math.random() * 5 ) + 1);

if (randomNumber === 1){
    selectedFortune = fortune1;
}
if (randomNumber === 2){
    selectedFortune = fortune2;
}
if (randomNumber === 3){
    selectedFortune = fortune3;
}
if (randomNumber === 4){
    selectedFortune = fortune4;
}
if (randomNumber === 5){
    selectedFortune = fortune5;
}

console.log(`You rolled a ${randomNumber}, your fortune reads:`);
console.log(selectedFortune);