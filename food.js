console.log("hello world");


// nav - responsive
// function
function navclick() {
    const ham1 = document.getElementById('ham1');
    const ham2 = document.getElementById('ham2');
    let cont = document.getElementById('navh');
    if (cont.style.display === "block") {
        cont.style.display = "none";
        ham1.style.transform = "rotate(0deg)";
        ham2.style.transform = "rotate(0deg)";


    } else {
        cont.style.display = "block";
        ham1.style.transform = "rotate(-45deg) translate(-2px)";
        ham2.style.transform = "rotate(45deg) translate(-8px, -7px)";
    }
}