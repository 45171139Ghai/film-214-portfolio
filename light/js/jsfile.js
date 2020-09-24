
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




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // document.getElementById("myHeader").style.top = "0";
      myBar.style.top= "0";
      myBar.classList.add("nav-colored"); 
     
    } 

    else {
      myBar.style.top = "-50px" 
      myBar.classList.add("nav-transparent");
      myBar.classList.remove("nav-colored");
      
    }
  
}

