function Rock() {
    let value = Math.floor(Math.random() * 3);
    let r = 0;
    if (value == r) {
        alert("Tie");
        console.log("Computer Chooses rock you chooses rock");
    } else if (value == 1) {
        alert("You Won");
        console.log("Computer Chooses paper you chooses rock");
    } else {
        alert("Computer Won");
    }
}

function Paper() {
    let value = Math.floor(Math.random() * 3);
    let p = 1;
    if (value == p) {
        alert("Tie");
    } else if (value == 0) {
        alert("You Won");
    } else {
        alert("Computer Won");
    }
}

function Scissor() {
    let value = Math.floor(Math.random() * 3);
    let s = 2;
    if (value == s) {
        alert("Tie");
    } else if (value == 1) {
        alert("You Won");
    } else {
        alert("Computer Won");
    }
}