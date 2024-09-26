const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

//hidden content
function toggleContent() {
  var content = document.getElementById("hiddenContent");
  var button = document.querySelector(".toggle-button");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.innerText = "Read less";
  } else {
    content.style.display = "none";
    button.innerText = "Read more";
  }
}
