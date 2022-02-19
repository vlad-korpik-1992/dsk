$(document).ready(function() {
  $('.header__bottom__btn__catalog').on('click', function (e) {
    e.preventDefault();
    $('.modal-catalog').toggleClass('modal-catalog_active');
    $( "body" ).toggleClass('body_modal');
  });
  $('.modal-catalog__close').on('click', function (e) {
    e.preventDefault();
    $('.modal-catalog').toggleClass('modal-catalog_active');
    $( "body" ).toggleClass('body_modal');
  });
  $('.modal-catalog__items').click(function (e) {
    e.preventDefault();
    let elem = e.target;
    let id = '1' + elem.getAttribute('id');
    $('.modal-catalog__content').removeClass('modal-catalog__content_active');
    $('.modal-catalog__items').removeClass('modal-catalog__items_active');
    jQuery("#"+id).addClass('modal-catalog__content_active');
    let idElem = elem.getAttribute('id');
    console.log(elem);
    jQuery("#"+idElem).addClass('modal-catalog__items_active');
  });
  $('.modal-catalog__btn__menu-mobile').on('click', function (e) {
      e.preventDefault();
      $('.menu').toggleClass('menu_active');
      $('.modal-catalog__btn__menu-mobile').toggleClass('modal-catalog__btn__menu-mobile_active');
  });
  $('.menu__list__items__btn').on('click', function (e) {
    e.preventDefault();
    $('.menu__list__items__children_one').toggleClass('menu__list__items__children_one_active');
    $('.menu__list__items').toggleClass('menu__list__items_none');
    $('.menu__mobile__btn').toggleClass('menu__mobile__btn_none');
    $('.menu__mobile__soc').toggleClass('menu__mobile__soc_none');
    $('.menu__list').toggleClass('menu__list_children');
});
$('.category__items__box').on('click', function (e) {
  e.preventDefault();
  $('.menu__list__items__children_two').toggleClass('menu__list__items__children_two_active');
});
});
$('.hero__slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    dots: true,
    autoplay: false,
    infinite: true,
    adaptiveHeight: false, 
});
$('.popular-product__slider').slick({
    mobileFirst: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
    dots: false,
    autoplay: false,
    infinite: true,
    adaptiveHeight: false, 
    responsive: [
        {
          breakpoint: 1420,
          settings: {
            autoplay: false,
            slidesToShow: 7,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
        breakpoint: 767,
        settings: {
          autoplay: false,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
});
$('.reviews__slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    dots: false,
    autoplay: false,
    infinite: true,
    adaptiveHeight: true, 
    responsive: [
        {
          breakpoint: 991,
          settings: {
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
});
$('.partners__slider').slick({
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    dots: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            autoplay: false,
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
    ]
});
$('.cart__slider-img-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  autoplay: true,
  arrows: false,
  fade: true,
  asNavFor: '.cart__slider-prev'
});
$('.cart__slider-prev').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  asNavFor: '.cart__slider-img-product',
  dots: false,
  rows: 5,
  focusOnSelect: true
});
if($(window).width() < 991 ){
    $('.benefits__slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        dots: false,
        autoplay: false,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                autoplay: false,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.team__slider').slick({
      responsive: [
          {
            breakpoint: 991,
            settings: {
              autoplay: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              autoplay: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2
            }
          }

      ]
  });
}