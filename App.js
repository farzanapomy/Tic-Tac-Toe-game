

let count = 1;
function allBox(clickBox) {
    if (count <= 9) {

        if (count % 2 != 0) {
            document.getElementById(clickBox.id).innerHTML = "X"
        }
        else {
            document.getElementById(clickBox.id).innerHTML = "O"
        }
        count++;

        if (winner()) {
            alert("winner")
            // document.getElementById("alert").innerHTML = "Winner"
        }
    }
    else {
        document.getElementById("alert").innerHTML = "Match Draw"

    }
}





function winner() {
    if (shortBox("box-1", "box-2", "box-3") || shortBox("box-4", "box-5", "box-6") || shortBox("box-7", "box-8", "box-9") || shortBox("box-1", "box-5", "box-9") || shortBox("box-1", "box-4", "box-7") || shortBox("box-2", "box-5", "box-8") || shortBox("box-3", "box-6", "box-9")) {

        return true;
    }
}

function shortBox(box1, box2, box3) {
    matching(box1) != "" && matching(box2) != "" &&
        matching(box3) != "" &&
        matching(box1) ==
        matching(box2) &&
        matching(box2) ==
        matching(box3)
}


function matching(box) {
    return document.getElementById(box).innerHTML;

}