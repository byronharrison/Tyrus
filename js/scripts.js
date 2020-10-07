// HAMBURGER
let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
hamburger.addEventListener('click', function() {
    if(hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    } else {
        hamburger.classList.add('open');
        nav.classList.add('open');
    }
});

// SLIDES
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

// SECTION CONTROLS
$('.closed').mouseup(function() {
    if($(this).hasClass('closed')) {
        $(this).removeClass('closed');
        $(this).addClass('open');
    }
});

$('.open-btn').click(function() {
    if($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');
        $(this).parent().addClass('closed');
    }
});

// TEMP ANCHOR OPEN
$('.open-temp').click(function() {
    $('#templates').addClass('open');
    $('#templates').removeClass('closed');
});
