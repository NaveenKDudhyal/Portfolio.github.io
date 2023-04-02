var hamburger = document.querySeletor(".humb");
var navlist = document.querySeletor(".nav-list");
var links = document.querySeletor(".nav-list li");

hamburger.addEventListener
("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
    }
);