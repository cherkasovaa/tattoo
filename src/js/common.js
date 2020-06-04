$(document).ready(function() {
	$('.featured-work__image-wrap').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.grid').isotope({
    itemSelector: '.grid__item',
    masonry: {
      columnWidth: 15
    }
  });
});
