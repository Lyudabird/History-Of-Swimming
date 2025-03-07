//alert("page linked!")


let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    index = (index + step + totalSlides) % totalSlides;  

    
    const carousel = document.querySelector('.carousel-images');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
