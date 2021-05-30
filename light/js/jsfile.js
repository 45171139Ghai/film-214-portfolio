
// about Tina implementation

const myBar = document.querySelector(".menu-bar");
const myBarFooter = document.querySelector(".footer__link");
const dropDown = document.querySelector(".project");
const subMenu = document.querySelector("#it");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     
      myBar.classList.add('change-menuColor');
      myBarFooter.classList.add('change-menuColor');
    } 

    else {
      myBar.classList.remove('change-menuColor');
      myBarFooter.classList.remove('change-menuColor');
      myBtnCol.classList.remove('change-menuColor');
      myTitle.classList.remove('change-menuColor');
    }
    
}


function onHover(){
  dropDown.addEventListener('hover', (e) => {
    classList.remove('sub-menu')
    e.target.classList.add('display-menu');
  })
}





// experimenting with the gallery

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }