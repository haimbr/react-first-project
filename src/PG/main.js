
const box = document.querySelector('.container');
box.addEventListener('mousemove', (event) => {
    var x = event.clientX - box.offsetLeft;
    var y = event.clientY - box.offsetTop;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("display-position").innerHTML = coords;
})