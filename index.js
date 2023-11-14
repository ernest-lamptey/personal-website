
const home = document.querySelector("#intro-link");
const works = document.querySelector("#works-link");
const contact = document.querySelector("#contact-link")

const turnOnDislay = (link, arr) => {
    arr.forEach(elem => {
        const elemSection = document.getElementById(elem.href.split("#")[1])
        if(link === elem) {
            if (link === works) {
                elemSection.style.display = "flex"
                elemSection.style.gap = "1rem"
            } else {
                elemSection.style.display = "block";
            }
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

//TODOs
//for the works section, when you hover, push all the tech icons to right side and display a list of projects on the left side. 
//Then when a project name is clicked on, a short description should show below the name and only the relevant tech stack show in the side bar on the right