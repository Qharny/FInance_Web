window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
};

const menuBtn = document.getElementById('menu-bars');
const closeBtn = document.getElementById('close-bars');
// const navbar = document.getElementById('navbar'); // assuming 'navbar' is the id of your navigation bar


function menuToggle() {
    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
    };
    // closeBtn.onclick = () => {
    //     menuBtn.classList.toggle('fa-times');
    // };
}
menuToggle();

menuBtn.addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});


