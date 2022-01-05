

let count = 0;
function allBox(clickBox) {
    if (count % 2 != 1) {
        document.getElementById(clickBox.id).innerHTML = "X"
    }
    else {
        document.getElementById(clickBox.id).innerHTML = "O"
    }
    count++
}

