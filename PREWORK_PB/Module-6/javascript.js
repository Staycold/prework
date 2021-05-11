const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const box = document.getElementById("box");

button1.onclick = function () {
    const grow = function () {
        box.style.height = "300px";
        box.style.width = "300px";
    }
    grow();
}

button2.onclick = function () {
    const blue = function () {
        box.style.backgroundColor = "blue";
    }
    blue();
}

button3.onclick = function () {
    const fade = function () {
        box.style.opacity = "0.5";
    }
    fade();
}

button4.onclick = function () {
    const reset = function () {
        box.style.height = "150px";
        box.style.width = "150px";
        box.style.backgroundColor = "orange";
        box.style.margin = "25px";
        box.style.opacity = "1"
    }
    reset();
}