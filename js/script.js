(function ($) {
    $(document).ready(function() {

              ///////// **mobile size** /////////
      $('#navbtn').click(function () {
          $('.main-nav').addClass('open-nav');
          $('.nav-overlay').addClass('on');
        });
    
        $('.close-nav').click(function () {
          $('.main-nav').removeClass('open-nav');
          $('.nav-overlay').removeClass('on');
        });
    
        $('.nav-overlay').click(function () {
          $('.close-nav').trigger('click');
        });

              ///////// **main Slider** /////////
      var mainSlider = new Swiper('.main-slider .swiper-container', {
          loop: true,
          autoplay: true,
          slidesPerView: 1,
          preloadImages: false,
          updateOnWindowResize: true,
              
          // If we need pagination
          pagination: {
              el: '.main-slider .swiper-pagination',
              clickable: true,
          },
          // Navigation arrows   
          navigation: {
              nextEl: '.main-slider .swiper-button-next',
              prevEl: '.main-slider .swiper-button-prev',
          },
          on: {
              init: function (swiper) {
                lazyLoad();
              },
            },
          });

                  ///////// ** Services Slider** /////////
        var newArrivall = new Swiper('.services-row .swiper-container', {
          loop: true,
          autoplay: {
                  delay: 2000,
              },
          speed: 500,
          updateOnWindowResize: true,
          observer: true,
          observeParents: true,
          pagination: {
              el: '.services-row .swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.services-row .swiper-button-next',
              prevEl: '.services-row .swiper-button-prev',
          },
          breakpoints: {
              0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
              },
              767: {
                  slidesPerView: 3,
                  spaceBetween: 15,
              },
              992: {
                  slidesPerView: 4,
                  spaceBetween: 15,
              },
              1199: {
                  slidesPerView: 4,
                  spaceBetween: 30,
              },
          },
        });

        ///////// ** Customer Opinions Slider** /////////
        var newOpinions = new Swiper('.testmonials-row .swiper-container', {
          loop: true,
          autoplay: {
                  delay: 2000,
              },
          speed: 500,
          updateOnWindowResize: true,
          pagination: {
              el: '.testmonials-row .swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.testmonials-row .swiper-button-next',
              prevEl: '.testmonials-row .swiper-button-prev',
          },
          breakpoints: {
              0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
              767: {
                  slidesPerView: 2,
                  spaceBetween: 10,
              },
              992: {
                  slidesPerView: 3,
                  spaceBetween: 15,
              },
              1199: {
                  slidesPerView: 3,
                  spaceBetween: 20,
              },
          },
        });

        ///////// ** Our Clients Slider** /////////
        var newOpinions = new Swiper('.clients-row .swiper-container', {
          loop: true,
          autoplay: {
                  delay: 2000,
              },
          speed: 500,
          updateOnWindowResize: true,
          pagination: {
              el: '.clients-row .swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.clients-row .swiper-button-next',
              prevEl: '.clients-row .swiper-button-prev',
          },
          breakpoints: {
              0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
              },
              767: {
                  slidesPerView: 3,
                  spaceBetween: 10,
              },
              992: {
                  slidesPerView: 4,
                  spaceBetween: 15,
              },
              1199: {
                  slidesPerView: 6,
                  spaceBetween: 20,
              },
          },
        });
    });

    function initMap() {
      var lat = $("#map").data("lat");
      var lng = $("#map").data("lng");
      const myLatlng = { lat: lat, lng: lng };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: myLatlng,
        draggable: true,
      });
    }

    /**********lazy load ***********/
    function lazyLoad() {
        const images = document.querySelectorAll(".lazy-img");
    
        const optionsLazyLoad = {
          //  rootMargin: '-50px',
          // threshold: 1
        };
    
        const imageObserver = new IntersectionObserver(function (enteries) {
          enteries.forEach(function (entery) {
            if (!entery.isIntersecting) {
              return;
            } else {
              preloadImage(entery.target);
              imageObserver.unobserve(entery.target);
            }
          });
        }, optionsLazyLoad);
      
        images.forEach(function (image) {
          imageObserver.observe(image);
        });
      }
      
      function preloadImage(img) {
        img.src = img.getAttribute("data-src");
        img.onload = function () {
          img.parentElement.classList.remove("loading-img");
          img.parentElement.classList.add("loaded-img");
          // img.parentElement.parentElement.classList.add("lazy-head-img");
        };
      }
})(jQuery)

