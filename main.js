const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

function changeHeaderWhenScrol() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.testimonials.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 400,
  reset: true
})
scrollReveal.reveal(
  `#home .text, #home .image,
  #About .text, #About .image,
  #Services header, #Services .card,
  #Testimonials header, #Testimonials .Testimonials,
  #Contact .text, #Contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

const imageSwiper = new Swiper('.image-swiper', {
  loop: true,
  slidesPerView: 1,
  mousewheel: false,
  watchOverflow: false,
  spaceBetween: 0,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.image-swiper .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.image-swiper .swiper-button-next',
    prevEl: '.image-swiper .swiper-button-prev'
  }
});

const backTopButton = document.querySelector('.backtop')

function backTop() {
  if (window.scrollY >= 560) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScrol()
  backTop()
  activateMenuAtCurrentSection()
})
