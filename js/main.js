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

    // get window size of current screen
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Generate random number 
    var RandomNumberLeft = Math.floor(Math.random() * windowWidth);
    var RandomNumberRight = Math.floor(Math.random() * windowWidth);
    var RandomNumberTop = Math.floor(Math.random() * windowHeight);
    var RandomNumberBottom = Math.floor(Math.random() * windowHeight);

    // calculate the percentage of the food relative to the viewport 
    var widthPercentageLeft = Math.floor((RandomNumberLeft / windowWidth) * 95);
    var widthPercentageRight = Math.floor((RandomNumberRight / windowWidth) * 95);
    var heightPercentageTop = Math.floor((RandomNumberTop / windowHeight) * 95);
    var heightPercentageBottom = Math.floor((RandomNumberBottom / windowHeight) * 95);

// Collision detection below. 
    // Make the percentages in css convert to "normal" numbers for the food-block and the eating-block
    var eatingBlockWidth = Math.floor((windowWidth / 100) * 10);
    var eatingBlockHeight = Math.floor((windowHeight / 100) * 15);
    var foodBlockWidth = Math.floor((windowWidth / 100) * 5);
    var foodblockHeight = Math.floor((windowHeight / 100) * 10);

    // Declare the 2 "rectangles" that the code must watch out for if they collide
    var rect1 = {x: eatLeft, y: eatTop, width: eatingBlockWidth, height: eatingBlockHeight}
    var rect2 = {x: foodLeft, y: foodTop, width: foodBlockWidth, height: foodblockHeight}
    
    // Declaring when rectangles are colliding
    if (rect1.x < rect2.x + rect2.width &&
       rect1.x + rect1.width > rect2.x &&
       rect1.y < rect2.y + rect2.height &&
       rect1.y + rect1.height > rect2.y) {

        // When rectangles colide, below code makes the food change position. 
        foodBlock.style.left = widthPercentageLeft + "%";
        foodBlock.style.right = widthPercentageRight + "%";
        foodBlock.style.top = heightPercentageTop + "%";
        foodBlock.style.bottom = heightPercentageBottom + "%";
        scoopies++;
        aantalScoopies.innerHTML = scoopies;
    }
}
// end collision detection. 

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
    if (positionEatingBlockX <= 90) {
        positionEatingBlockX += 5;
        eatingBlock.style.left = positionEatingBlockX + "%";
        eatMe();
    }
}

// Makes the eatingBlock go left
function goLeft() {
    if (positionEatingBlockX >= 5) {
        positionEatingBlockX -= 5;
        eatingBlock.style.left = positionEatingBlockX + "%";
        eatMe();
    }
}

// Makes the eatingBlock go down
function goDown() {
    if (positionEatingBlockY <= 90) {
        positionEatingBlockY += 5;
        eatingBlock.style.top = positionEatingBlockY + "%";
        eatMe();
    }
}

// Makes the eatingBlock go up
function goUp() {
    if (positionEatingBlockY >= 5) {
        positionEatingBlockY -= 5;
        eatingBlock.style.top = positionEatingBlockY + "%";
        eatMe();
    }
}
document.onkeydown = direction;