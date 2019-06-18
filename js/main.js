const eatingBlock = document.getElementById('moving-block');
const foodBlock = document.getElementById("food-block");
var positionEatingBlockX = 0;
var positionEatingBlockY = 0;
foodBlock.style.left = "50%";
foodBlock.style.top = "50%";
var scoopies = 0
var aantalScoopies = document.getElementById("aantal-scoopies");
var foodBlockPosition = foodBlock.getBoundingClientRect();

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

    } /* if (eatTop <= foodTop && eatLeft >= foodLeft && eatRight <= foodRight && eatBottom >= foodBottom) {
        foodBlock.style.left = RandomNumberLeft + "%";
        foodBlock.style.right = RandomNumberRight + "%";
        foodBlock.style.top = RandomNumberTop + "%";
        foodBlock.style.bottom = RandomNumberBottom + "%";
        scoopies++;
        aantalScoopies.innerHTML = scoopies;
    } if (eatTop >= foodTop && eatLeft >= foodLeft && eatRight >= foodRight && eatBottom <= foodBottom) {
        foodBlock.style.left = RandomNumberLeft + "%";
        foodBlock.style.right = RandomNumberRight + "%";
        foodBlock.style.top = RandomNumberTop + "%";
        foodBlock.style.bottom = RandomNumberBottom + "%";
        scoopies++;
        aantalScoopies.innerHTML = scoopies;
    } if (eatTop <= foodTop && eatLeft >= foodLeft && eatRight <= foodRight && eatBottom >= foodBottom) {
        foodBlock.style.left = RandomNumberLeft + "%";
        foodBlock.style.right = RandomNumberRight + "%";
        foodBlock.style.top = RandomNumberTop + "%";
        foodBlock.style.bottom = RandomNumberBottom + "%";
        scoopies++;
        aantalScoopies.innerHTML = scoopies;
    } if (eatTop >= foodTop && eatLeft <= foodLeft && eatRight <= foodRight && eatBottom <= foodBottom) {
        foodBlock.style.left = RandomNumberLeft + "%";
        foodBlock.style.right = RandomNumberRight + "%";
        foodBlock.style.top = RandomNumberTop + "%";
        foodBlock.style.bottom = RandomNumberBottom + "%";
        scoopies++;
        aantalScoopies.innerHTML = scoopies;
    }*/
}

function direction(e) {
    // if right arrow is pressed
    if (e.keyCode === 39) {
        goRight();
        // if left arrow is pressed
    } else if (e.keyCode === 37) {
        goLeft();
        // if down arrow is pressed
    } else if (e.keyCode === 40) {
        goDown();
        // if up arrow is pressed
    } else if (e.keyCode === 38) {
        goUp();
    }
}

// Makes the eatingBlock go right
function goRight() {
    positionEatingBlockX += 5;
    eatingBlock.style.left = positionEatingBlockX + "%";
    eatMe();
}

// Makes the eatingBlock go left
function goLeft() {
    positionEatingBlockX -= 5;
    eatingBlock.style.left = positionEatingBlockX + "%";
    eatMe();
}

// Makes the eatingBlock go down
function goDown() {
    positionEatingBlockY += 5;
    eatingBlock.style.top = positionEatingBlockY + "%";
    eatMe();
}

// Makes the eatingBlock go up
function goUp() {
    positionEatingBlockY -= 5;
    eatingBlock.style.top = positionEatingBlockY + "%";
    eatMe();
}
document.onkeydown = direction;