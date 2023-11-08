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

menuBtn.addEventListener('click', function(event) {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    event.stopPropagation(); // Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
});

document.body.addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'none';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementsById('name')[0].value;
    var email = document.getElementsById('email')[0].value;
    var message = document.getElementsById('message')[0].value;

    Email.send({
        SecureToken: "Your-Secure-Token",
        To: 'cannycc1020@gmail.com',
        From: email,
        Subject: "New message from " + name,
        Body: message,
    }).then(function(response) {
        if (response == 'OK') {
            alert('Your message has been sent. Thank you!');
        } else {
            alert('There was an error sending your message.');
        }
    });
});