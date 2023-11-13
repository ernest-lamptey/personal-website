// Set the links on the navigation up so that when you click one the display status is turned on and the rest are turned off.

const home = document.querySelector("#intro-link");
const works = document.querySelector("#works-link");
const contact = document.querySelector("#contact-link")

const turnOnDislay = (link, arr) => {
    arr.forEach(elem => {
        const elemSection = document.getElementById(elem.href.split("#")[1])
        if(link === elem) {
            elemSection.style.display = "block";
        } else {
            elemSection.style.display = "none"
        }
    });
}

const links = [home, works, contact]

links.forEach(link => {
    link.addEventListener("click", (e) => {
        turnOnDislay(e.target, links);
    })
})