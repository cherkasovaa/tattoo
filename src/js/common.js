$(document).ready(function () {
  $('.featured-work__image-wrap').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

  $('.grid').isotope({
    itemSelector: '.grid__item',
    masonry: {
      columnWidth: 15,
    },
  });

  $('.toggle-menu').click(function () {
    $('.menu__list').toggleClass('menu__toggle');

    $.each($('.menu__items'), function (index, link) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
});
