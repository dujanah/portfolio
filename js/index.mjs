document.querySelector("#projects-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#projects-display").scrollIntoView({
        behavior: "smooth"
    });
});