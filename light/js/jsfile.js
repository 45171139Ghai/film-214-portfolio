
function myFunction(){
  var less = document.getElementById("less");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if(less.style.display === "none"){
    less.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } // close if
  else{
    less.style.display =  "none";
    btnText.innerHTML =  "Read less";
    moreText.style.display = "inline";
  } // close else
}


// about Tina implementation

function myFunc(){
  var less = document.getElementById("read-nothing");
  var moreText = document.getElementById("read-more");
  var btnText = document.getElementById("Btn-id");

  if(less.style.display === "none"){
    less.style.display = "inline";
    btnText.innerHTML = "More about the instructor";
    moreText.style.display = "none";
  } // close if
  else{
    less.style.display =  "none";
    btnText.innerHTML =  "Read less";
    moreText.style.display = "inline";
  } // close else
}




const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-item');
const myBar = document.getElementById("myHeader");




navToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link=> {
  link.addEventListener('click', ()=> {
    document.body.classList.remove('nav-open');
  })
})




// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       // document.getElementById("myHeader").style.top = "0";
//       myBar.style.top= "0";
//       myBar.classList.add("nav-colored"); 
     
//     } 

//     else {
//       myBar.style.top = "0px" 
//       myBar.classList.add("nav-transparent");
//       //myBar.classList.remove("nav-colored");
      
//     }
  
// }





// experimenting with the gallery

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}