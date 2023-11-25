const menu = document.querySelector(".nav");

document.addEventListener("scroll", () => {
    // use document.documentElement for chrome, firefox, ie or opera
    // and document.body for safari since that's where overflow is set in those browsers
    if (document.documentElement.scrollTop > 500) menu.classList.add("nav--alt");
    else menu.classList.remove("nav--alt");
});
