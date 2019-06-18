const eatingBlock = document.getElementById('moving-block');
const foodBlock = document.getElementById("food-block");
var positionEatingBlock = 0;
foodBlock.style.left = "50%";
foodBlock.style.top = "50%";

var foodBlockPosition = foodBlock.getBoundingClientRect();



/* function currentPositionMovingBlock() {
    let eatingElement = document.getElementById('moving-block').getBoundingClientRect();
    let eatTop = eatingElement.top;
    let eatLeft = eatingElement.left;
    let eatRight = eatingElement.right;
    let eatBottom = eatingElement.bottom;
    console.log(eatTop,eatLeft,eatRight,eatBottom);
}

function currentPositionFoodBlock(){
    let foodElement = document.getElementById('food-block').getBoundingClientRect();
    let foodTop = foodElement.top;
    let foodLeft = foodElement.left;
    let foodRight = foodElement.right;
    let foodBottom = foodElement.bottom;
    console.log(foodTop,foodLeft,foodRight,foodBottom);
} */

function eatMe(){
let eatingElement = document.getElementById('moving-block').getBoundingClientRect();
    let eatTop = eatingElement.top;
    let eatLeft = eatingElement.left;
    let eatRight = eatingElement.right;
    let eatBottom = eatingElement.bottom;
    console.log(eatTop,eatLeft,eatRight,eatBottom);

    let foodElement = document.getElementById('food-block').getBoundingClientRect();
    let foodTop = foodElement.top;
    let foodLeft = foodElement.left;
    let foodRight = foodElement.right;
    let foodBottom = foodElement.bottom;
    console.log(foodTop,foodLeft,foodRight,foodBottom);

}

function direction(e) {
    if (e.keyCode == 39) {
        positionEatingBlock += 2;
        eatingBlock.style.left = positionEatingBlock + '%';
        currentPositionMovingBlock();
        currentPositionFoodBlock();
    }
    if (e.keyCode == 37) {
        positionEatingBlock -= 2;
        eatingBlock.style.left = positionEatingBlock + '%';

    }
    if (e.keyCode == 38) {
        positionEatingBlock -= 2;
        eatingBlock.style.top = positionEatingBlock + '%';
    }
    if (e.keyCode == 40) {
        positionEatingBlock += 2;
        eatingBlock.style.top = positionEatingBlock + '%';
    }
}

document.onkeydown = direction;