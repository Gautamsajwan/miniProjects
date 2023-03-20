const buttons = document.querySelectorAll(".btn");
const slides = document.querySelector('.carousel');
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let idx;

buttons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        stopAutoplay();
        const choice = btn.dataset.carouselBtn === "next" ? 1 : -1;

        const activeSlide = slides.querySelector("[data-active]");
        let idx = [...slides.children].indexOf(activeSlide) + choice;

        if(idx < 0) idx = slides.children.length - 1;
        if(idx >= slides.children.length) idx = 0;

        slides.children[idx].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

function nextImage() {
    const activeSlide = slides.querySelector('[data-active]');
    idx = [...slides.children].indexOf(activeSlide) + 1;

    if(idx === slides.children.length) {
        idx = 0;
    }

    slides.children[idx].dataset.active = true;
    delete activeSlide.dataset.active;
    console.log(intervalId);
}

let intervalId;

function startAutoplay() {
    intervalId = setInterval(nextImage, 3000);
}

function stopAutoplay() {
    clearInterval(intervalId);
}

leftBtn.addEventListener('mouseleave', ()=> {
    startAutoplay();
})

rightBtn.addEventListener('mouseleave', ()=> {
    startAutoplay();
})










