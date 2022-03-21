var typed = new Typed(".auto-type", {
    strings: ["4U"],
    typeSpeed: 150,
    backSpeed: 350,
    loop: true
})

$('.carousel').carousel({
    interval: 2500
})

function clickbar() {
    if (document.getElementById("sidebar").className.match("d-none"))
        document.getElementById("sidebar").className = " position-absolute";
    else
        document.getElementById("sidebar").className = " d-none d-md-block";
}

function onuserbox() {
    document.getElementById("userbox").style.display = "block";


}

function outuserbox() {
    document.getElementById("userbox").style.display = "none";


}