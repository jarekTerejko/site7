const openMenu = document.getElementById('open');

const closeMenu = document.getElementById('close');

const overlay = document.getElementById('overlay-nav');

const links = document.querySelectorAll('.overlay a');

const showMoreBtn = document.getElementById('show-more-btn');

const showGallery = document.getElementsByClassName('gallery-hide-show');

Array.from(links).forEach(function (item) {
    item.addEventListener('click', closeNav);
});

openMenu.addEventListener('click', openNav);

closeMenu.addEventListener('click', closeNav);


function openNav() {
    overlay.style.width = "100%";

}

function closeNav() {
    overlay.style.width = '0';
}


$('.gallery-hide-show').css('display', 'none');

$('#show-more-btn').click(function (e) {
    e.preventDefault();
    $('.gallery-hide-show').slideToggle(1000);
    if ($(showMoreBtn).text() !== 'show less') {
        $(showMoreBtn).text('show less');
    } else {
            $(showMoreBtn).text('show more');
        }
});


// unslider
$('.slider').unslider({
    autoplay: true,
    arrows: true,
    nav: false,
    arrows: {
        prev: '<a class="unslider-arrow prev"><i class="fas fa-angle-left"></i></a>',
        next: '<a class="unslider-arrow next"><i class="fas fa-angle-right"></i></a>'
    }
});
