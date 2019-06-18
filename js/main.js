const murphy = document.getElementById('moving-block');

var position = 0;

function direction(e) {
    if (e.keyCode == 39) {
        position += 2;
        murphy.style.left = position + '%';
    }
    if (e.keyCode == 37) {
        position -= 2;
        murphy.style.left = position + '%';

    }
    if (e.keyCode == 38) {
        position -= 2;
        murphy.style.top = position + '%';
    }
    if (e.keyCode == 40) {
        position += 2;
        murphy.style.top = position + '%';
    }
}

document.onkeydown = direction;