const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe (el));

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
    const htmlEl = document.documentElement;
    const screenHeightScrollPercent = htmlEl.scrollTop / htmlEl.clientHeight;

    htmlEl.style.setProperty("--scroll", screenHeightScrollPercent * 100);
}

setScrollVar();