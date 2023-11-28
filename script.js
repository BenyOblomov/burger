document.getElementById("burger").addEventListener("click", (event) => {
    document.getElementById("navbar_mob").style.display = "block";
    document.getElementById("navmob").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("titre").style.display = "none";
})

document.getElementById("quit").addEventListener("click", (event) => {
    document.getElementById("navbar_mob").style.display = "none";
    document.getElementById("navmob").style.display = "flex";
    document.getElementById("main2").style.display = "flex";
    document.getElementById("footer").style.display = "flex";
    document.getElementById("titre").style.display = "block";
})