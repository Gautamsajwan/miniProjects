const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

const slides = [...document.querySelectorAll('.slide')]
let index = 0;

console.log(slides)

nextBtn.addEventListener('click', () => {
    resetSlideshow()
    nextImage()
})

const nextImage = () => {
    const currSlide = slides[index]
    currSlide.removeAttribute('data-active')

    index = (index + 1) % slides.length

    const nextSlide = slides[index]
    nextSlide.setAttribute('data-active', '')
    console.log(index)
}

prevBtn.addEventListener('click', () => {
    resetSlideshow()

    const currSlide = slides[index]
    currSlide.removeAttribute('data-active')

    if(index <= 0) {
        index = slides.length - 1;
    } else {
        index--;
    }

    const nextSlide = slides[index]
    nextSlide.setAttribute('data-active', '')
    console.log(index)
})

let intervalId

const startSlideShow = () => {
    intervalId = setInterval(() => {
        nextImage()
    }, 3000);   
}

const resetSlideshow = () => {
    if(intervalId) {
        console.log(intervalId)
        clearInterval(intervalId)
    }
}

nextBtn.addEventListener('mouseleave', () => {
    startSlideShow()
})

prevBtn.addEventListener('mouseleave', () => {
    startSlideShow()
})