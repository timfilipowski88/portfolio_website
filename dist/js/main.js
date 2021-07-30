$(function () {

  // Contact Me Modal
  $('.btn-contact-open').click(function (e) {
    e.preventDefault;
    let contactModal = document.getElementById("contact-modal")
    console.log(contactModal);
    contactModal.style.display = "block";
  })

  $('.btn-contact-close').click(function (e) {
    e.preventDefault;
    let contactModal = document.getElementById("contact-modal")
    console.log(contactModal);
    contactModal.style.display = "none";
  })

  // Mobile Nav Overlay
  $('.btn-mobile-open').click(function (e) {
    e.preventDefault;
    document.getElementById("nav-overlay").style.height = "100%";
  })

  $('.btn-mobile-close').click(function (e) {
    e.preventDefault;
    document.getElementById("nav-overlay").style.height = "0%";
  })


  // NavBar on top w/ Animation
  const navbar = document.getElementById('navbar');
  let scrolled = false;

  window.onscroll = function () {
    if (window.pageYOffset > 100) {
      navbar.classList.remove('top');
      if (!scrolled) {
        navbar.style.transform = 'translateY(-70px)';
      }
      setTimeout(function () {
        navbar.style.transform = 'translateY(0)';
        scrolled = true;
      }, 200)
    } else {
      navbar.classList.add('top');
      scrolled = false;
    }
  };

      // Smooth Scroll
    $('#navbar a, .btn').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 100,
          },
          800
        );
      }
    });


    // TypeWriter JS, Credit Brad Traversy @ Traversy Media copywright 2020

});