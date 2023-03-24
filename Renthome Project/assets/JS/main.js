$(document).ready(function() {
    $('select').each(function() {
        // console.log($(this).data());
        
        $(this).select2($(this).data())
    })
    // $('select').select2();

    // Slides
    if ($('#good-places').length) {
        $('#good-places .item .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:false,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><i class="ti-angle-right"></i></button>'
          });
    }

    if($('#good-reviews-by-customers').length) {
        $('#good-reviews-by-customers .slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
	          arrows: false,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    slidesToShow:2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    slidesToShow:1
                  }
                }
              ]
        })
    }

    if($('#meet-our-team').length) {
      $('#meet-our-team .slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
	      arrows: false,
        autoplaySpeed: 2000,
        dotsClass: 'slick-dots',
        responsive: [
          {
            breakpoint: 992,
            settings: {
            arrows: false,
            slidesToShow:3,
            dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
            arrows: false,
            slidesToShow:2,
            dots: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
            arrows: false,
            slidesToShow:1,
            dots: true,
            }
          }
        ]
      });
    }

    // Fixed Navbar
    $(window).scroll(function(e) {
        if($(this).scrollTop() > 84) {
            $('header nav').addClass('header-fixed')
            $('#back2Top').fadeIn()
        }
        else {
            $('header nav').removeClass('header-fixed')
            $('#back2Top').fadeOut()
        }
    })
    
    // Back to Top
    $('#back2Top').click(function(e) {
      e.preventDefault()
      $("html, body").animate({scrollTop: 0}, 1000);
    })

    // Navbar menu
    const navbar = document.querySelector('.navbar .navbar-bg')
    const sidebar = document.querySelector('.navbar-collapse')

    // events
    $('.navbar-toggler').click(function() {
      sidebar.classList.remove('close')
      sidebar.classList.toggle('show')

      generateBackground()
    })

    $('.navbar-collapse .nav-menus-wrapper-close-button').click(function() {
      sidebar.classList.remove('show')
      sidebar.classList.toggle('close')

      $('.nav-overlay-panel').remove()
    })

    // Accordion 
    let generalBtn = document.querySelector('#general')
    let paymentBtn = document.querySelector('#payment')
    let upgradeBtn = document.querySelector('#upgrade')
    let generalAccor = document.querySelector('.tab-wrapper .tab-content.general-tab')
    let paymentAccor = document.querySelector('.tab-wrapper .tab-content.payment-tab')
    let upgradeAccor = document.querySelector('.tab-wrapper .tab-content.upgrade-tab')

    window.addEventListener('load', (e) => {
      generalBtn.addEventListener('click', () => {
        paymentAccor.classList.remove('active')
        paymentAccor.classList.remove('show')
  
        upgradeAccor.classList.remove('active')
        upgradeAccor.classList.remove('show')
        
        e.preventDefault()
        $(generalAccor).addClass('active').fadeIn('slow')
        $(generalAccor).addClass('show')
      })
    })

    window.addEventListener('load', (e) => {
      paymentBtn.addEventListener('click', (e) => {
        generalAccor.classList.remove('active')
        generalAccor.classList.remove('show')
  
        upgradeAccor.classList.remove('active')
        upgradeAccor.classList.remove('show')

        e.preventDefault()
        $(paymentAccor).addClass('active').fadeIn('slow')
        $(paymentAccor).addClass('show')
      })
    })

    window.addEventListener('load', (e) => {
      upgradeBtn.addEventListener('click', () => {
        generalAccor.classList.remove('active')
        generalAccor.classList.remove('show')
  
        paymentAccor.classList.remove('active')
        paymentAccor.classList.remove('show')

        e.preventDefault()
        $(upgradeAccor).addClass('active').fadeIn('slow')
        $(upgradeAccor).addClass('show')
      })
    })

    // login collapse
    $('#user-checkout-account-details .pls-login').click(function(e) {
      e.preventDefault()
      $('#login-form.collapse').slideToggle(500)
    })

    // coupon collapse
    $('#user-checkout-account-details .apply-coupon').click(function(e) {
      e.preventDefault()
      $('#coupon-form.collapse').slideToggle(500)
    })

    $('#user-checkout-account-details .change-plan').click(function(e) {
      e.preventDefault()
      $('#change-plan.collapse').slideToggle(300)
    })

    // functions
    function generateBackground() {
      let divBack = document.createElement('div')
      divBack.classList.add('nav-overlay-panel')

      $(divBack).attr('style', 'background-color: rgba(0, 0, 0, 0.5); display: block')

      navbar.append(divBack)
    }
});