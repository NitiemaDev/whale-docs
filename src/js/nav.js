const toggleButton = document.querySelector(".menuIcon");
const toggleButtonIcon = document.querySelector(".menuIcon i");

const navMobile = document.querySelector(".nav___mobile");

const handleNavToggle = () => {
    navMobile.classList.toggle("open");

    const isNavMobileOpen = navMobile.classList.contains("open");
    if (isNavMobileOpen) {
        toggleButtonIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        toggleButtonIcon.classList.replace("fa-xmark", "fa-bars");
    }
    // fa-solid fa-xmark
    
}

toggleButton.addEventListener("click", handleNavToggle);