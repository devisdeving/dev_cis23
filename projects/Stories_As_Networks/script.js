var pointer = document.getElementById("pointer"),
pointerBox = pointer.getBoundingClientRect(),
centerPoint = window.getComputedStyle(pointer).transformOrigin,
centers = centerPoint.split(" "),
centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset,
centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset;

window.addEventListener("mousemove", function(e) {
    var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
    var degree = (radians * (180 / Math.PI) * 1) + 180; 
    pointer.style.transform = "rotate("+degree+"deg)", {duration: 3000};
    // pointer.animate({
    //     left:`${clientX}deg`,
    //     top: `${clientY}deg`
    // }, {duration: 3000, fill: "forwards"})
});