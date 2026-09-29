```javascript
// Mobile menu

const menuBtn = document.getElementById("menu-btn")
const navLinks = document.querySelector(".nav-links")

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active")

})


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a")

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active")

    })

})


// Project button

function showProject(projectName) {

    alert(
        projectName +
        "\n\nThis project demonstrates my development skills, API integration, CRUD operations and responsive web design."
    )

}
```
