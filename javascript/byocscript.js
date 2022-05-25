console.log ("check check")

var caketypeElement = document.querySelector('#caketype img');
var candlesElement = document.querySelector('#candles img');
var toppingElement = document.querySelector('#topping img');
var finishedElement = document.querySelector('#finished img');
var randomElement = document.querySelector('#random img');
var confettiElement = document.querySelector('#confetti');

var taartElement = document.querySelector('#taart img');
var currentTaart = 0;

var taartAfbeeldingen = ["images/cakes/chocolate-cake.png","images/cakes/orange-cake.png","images/cakes/funfetti-cake.png","images/cakes/strawberry-cake.png"]


function taartNaarNormaal() {
    if(currentTaart == 0) {
        taartElement.src = taartAfbeeldingen[currentTaart];
        currentTaart = currentTaart + 1;
    } else if(currentTaart == 1) {
        taartElement.src = taartAfbeeldingen[currentTaart];
        currentTaart = currentTaart + 1;
    }
    else if(currentTaart== 2){
        taartElement.src = taartAfbeeldingen[currentTaart];
        currentTaart = currentTaart + 1;
    }
    else if(currentTaart== 3){
        taartElement.src = taartAfbeeldingen[currentTaart];
        currentTaart = 0;
    }

}

var kaarsjesElement = document.querySelector('#kaarsjes img');
var currrentKaarsjes = 0; 

var kaarsjesafbeeldingen =["images/candles/blue-candles.png","images/candles/green-candles.png","images/candles/orange-candles.png","images/candles/pink-candles.png","images/candles/rainbow-candles.png","images/candles/red-candles.png"]

function kaarsjesNaarNormaal(){
    if(currrentKaarsjes == 0){
        kaarsjesElement.src = kaarsjesafbeeldingen[currrentKaarsjes];
        currrentKaarsjes = currrentKaarsjes + 1;
    }
    else if(currrentKaarsjes == 1){
        kaarsjesElement.src = kaarsjesafbeeldingen[currrentKaarsjes];
        currrentKaarsjes = currrentKaarsjes + 1;
    }
    else if(currrentKaarsjes == 2){
        kaarsjesElement.src = kaarsjesafbeeldingen[currrentKaarsjes];
        currrentKaarsjes = currrentKaarsjes + 1;
    }
    else if(currrentKaarsjes == 3){
        kaarsjesElement.src = kaarsjesafbeeldingen[currrentKaarsjes];
        currrentKaarsjes = currrentKaarsjes + 1;
    }
    else if(currrentKaarsjes == 4){
        kaarsjesElement.src = kaarsjesafbeeldingen[currrentKaarsjes];
        currrentKaarsjes = currrentKaarsjes + 1;
    }
    else if(currrentKaarsjes == 5){
        kaarsjesElement.src = kaarsjesafbeeldingen[currrentKaarsjes];
        currrentKaarsjes = 0;
    }
}

var toppingsElement = document.querySelector('#daisies img');
var currentToppings = 0;

var toppingafbeeldingen =["images/toppings/blue-flags.png","images/toppings/blueberries.png","images/toppings/daisies.png","images/toppings/green-flags.png","images/toppings/orange-flags.png","images/toppings/pink-flags.png","images/toppings/red-flags.png","images/toppings/strawberries.png"]

function toppingsNaarNormaal(){
    if(currentToppings == 0){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }
    else if(currentToppings == 1){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }
    else if(currentToppings == 2){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }
    else if(currentToppings == 3){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }
    else if(currentToppings == 4){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }
    else if(currentToppings == 5){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }    
    else if(currentToppings == 6){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings + 1;
    }
    else if(currentToppings == 7){
        toppingsElement.src = toppingafbeeldingen[currentToppings];
        currentToppings = currentToppings =0;
    }
}


function speelAudio() {
	var audio = new Audio('audios/fairy-dust-sound-effect.mp3')
	audio.play();
}

function speelAudio2() {
	var audio = new Audio('audios/clicksoundeffect.mp3')
	audio.play();
}

function laatConfettiZien() {
    confettiElement.classList.remove('is-hidden');
}

caketypeElement.addEventListener('click', taartNaarNormaal)
toppingElement.addEventListener('click', toppingsNaarNormaal)
candlesElement.addEventListener('click', kaarsjesNaarNormaal)

finishedElement.addEventListener('click', function(){
    speelAudio();
    laatConfettiZien();

})

randomElement.addEventListener('click', function() {
    speelAudio2()
    toppingsNaarNormaal()
    taartNaarNormaal()
    kaarsjesNaarNormaal()
})
