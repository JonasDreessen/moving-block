# Move-Block

## Introduction

> With this project the objective is to make the scoop move and "eat" an element on the page. 
When it is eaten, the food must be moved to a random position and a counter must go up. 
It's an education proces made just to have some fun and practice JavaScript


## Code Samples

> Here is the code that I used to eat the food. 
function eatMe() {
    // get position of the moving-block
    var eatingElement = document.getElementById('moving-block').getBoundingClientRect();
    var eatTop = eatingElement.top;
    var eatLeft = eatingElement.left;
    var eatRight = eatingElement.right;
    var eatBottom = eatingElement.bottom;
    // get position of the food-block
    var foodElement = document.getElementById('food-block').getBoundingClientRect();
    var foodTop = foodElement.top;
    var foodLeft = foodElement.left;
    var foodRight = foodElement.right;
    var foodBottom = foodElement.bottom;
    // Generate random number 
    var RandomNumberLeft = Math.floor(Math.random() * 100);
    var RandomNumberRight = Math.floor(Math.random() * 100);
    var RandomNumberTop = Math.floor(Math.random() * 100);
    var RandomNumberBottom = Math.floor(Math.random() * 100);

    if (eatTop <= foodTop && eatLeft <= foodLeft && eatRight >= foodRight && eatBottom >= foodBottom) {


        foodBlock.style.left = RandomNumberLeft + "%";
        foodBlock.style.right = RandomNumberRight + "%";
        foodBlock.style.top = RandomNumberTop + "%";
        foodBlock.style.bottom = RandomNumberBottom + "%";
        scoopies++;
        aantalScoopies.innerHTML = scoopies;

    }}


## Installation

> To use this project, simply clone the file to your computer and open in the browser, or use the link and start playing the game. LINK -->  https://jonasdreessen.github.io/moving-block/