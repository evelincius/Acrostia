var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')
var carousel = new Siema({
    selector: '.img-carousel',
    duration: 500,
    loop: true
})

prevBtn.addEventListener('click', function () {
    carousel.prev()
})

nextBtn.addEventListener('click', function () {
    carousel.next()
})()
