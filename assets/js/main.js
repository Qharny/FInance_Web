let menu = document.querySelector('#menu-btn');
        let navbar = document.querySelector('.header .navbar');

        // menu.onclick = () => {
        //     menu.classList.toggle('fas-times');
        //     navbar.classList.toggle('active');
        // }


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
        }