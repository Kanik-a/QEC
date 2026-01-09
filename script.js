   window.onload = function(){
    document.getElementById("autoplay").play()
 }
const cursor = document.querySelector(".cb-cursor");
window.onpointermove = event => {
    const { clientX, clientY } = event;
    cursor.animate({
       left: `${clientX}px`,
       top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
 }
const elements = [...document.querySelectorAll("h2 div")];
elements.map(element => {
    element.onmouseover = () => {
       cursor.classList.add("-video");
    }
    element.onmouseout = () => {
       cursor.classList.remove("-video");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            var content = this.nextElementSibling;

            // Close all other content sections
            var allContent = document.getElementsByClassName("content");
            for (var j = 0; j < allContent.length; j++) {
                if (allContent[j] !== content) {
                    allContent[j].classList.remove("show");
                    allContent[j].style.maxHeight = null;
                }
            }

            // Toggle the clicked content
            if (content.classList.contains("show")) {
                content.classList.remove("show");
                content.style.maxHeight = null;
            } else {
                content.classList.add("show");
                content.style.maxHeight = content.scrollHeight + "px"; // Adjust based on content height
            }
        });
    }
});

let slideIndex = 1;
showSlides(slideIndex);
            
function plusSlides(n) {
    showSlides(slideIndex += n);
}
            
function currentSlide(n) {
    showSlides(slideIndex = n);
}
            
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
}
