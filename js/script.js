const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }
    else{
        navLinks.style.display = "flex";
    }

});
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});


closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});