window.addEventListener("scroll", scroll);

function scroll() {
    const homeSection = document.querySelector("#home");
    const navBar = document.querySelector("#navbar");

    if (window.scrollY > (homeSection.offsetHeight - navBar.scrollHeight)) {
        navBar.classList.add("scrolled")
    } else {
        navBar.classList.remove("scrolled")
    }
}