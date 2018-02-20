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

//showMoreBtn.addEventListener('click', showMore);

//showMoreBtn.addEventListener('click', showLess);


function openNav() {
    overlay.style.width = "100%";

}

function closeNav() {
    overlay.style.width = '0%';
}


// dzialajaca funkcja  !!!!!!!!!!!!!!!!!!!!!  
//function showMore(e) {
//    e.preventDefault();
//    if (showGallery[0].style.display !== "grid") {
//        showGallery[0].style.display = 'grid';
//        showMoreBtn.innerHTML = 'show less';
//    } else {
//        showGallery[0].style.display = 'none';
//        showMoreBtn.innerHTML = 'show more';
//
//    }
//}

$('.gallery-hide-show').css('display', 'none');


//$('#show-more-btn').click(function (e) {
//    e.preventDefault();
////    $('.gallery-hide-show').css('display', 'grid');
////    $('.gallery-hide-show').slideToggle(1000);
//    if (showMoreBtn.innerHTML === 'show more') {
//        
//        showMoreBtn.innerHTML = 'show less';
//        
//        $('.gallery-hide-show').slideDown(1000);
//    } else {
//            showMoreBtn.innerHTML = 'show more';
//        $('.gallery-hide-show').slideUp(1000);
//        }
//});

$('#show-more-btn').click(function (e) {
    e.preventDefault();
//    $('.gallery-hide-show').css('display', 'grid');
    $('.gallery-hide-show').slideToggle(1000);
    
    if ($(showMoreBtn).text() !== 'show less') {
        
        $(showMoreBtn).text('show less');
        
        //$('.gallery-hide-show').slideDown(1000);
    } else {
            $(showMoreBtn).text('show more');
        //$('.gallery-hide-show').slideUp(1000);
        }
});





// slider
$('.slider').unslider({
    autoplay: true,
    arrows: true,
    nav: false,
    arrows: {
        prev: '<a class="unslider-arrow prev"><i class="fas fa-angle-left"></i></a>',
        next: '<a class="unslider-arrow next"><i class="fas fa-angle-right"></i></a>'
    }
});
