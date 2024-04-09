// Header Scroll
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('header__active');
  } else {
    header.classList.remove('header__active');
  }
});

// Accordion
const faqs = document.querySelectorAll('.faq__item');

const openAccordion = (accordion) => {
  const content = accordion.querySelector('.faq__content');
  accordion.classList.add('faq__item-active');
  content.style.maxHeight = content.scrollHeight + 'px';
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector('.faq__content');
  accordion.classList.remove('faq__item-active');
  content.style.maxHeight = null;
};

faqs.forEach((accordion) => {
  const faqTitle = accordion.querySelector('.faq__item-title');
  const content = accordion.querySelector('.faq__content');

  faqTitle.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      faqs.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});


// Dropdown
document.querySelector('.nav-drop').addEventListener('click', function () {
  this.classList.toggle('nav-drop__active');
});

// Burger Menu
document.getElementById('mobile').addEventListener('click', function () {
  document.querySelector('.nav__box').classList.toggle('nav__box-active');
  document.querySelector('.nav__mobile').classList.toggle('nav__mobile-active');
  document.body.classList.toggle('hidden');
});

var navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    document.querySelector('.nav__box').classList.remove('nav__box-active');
    document.querySelector('.nav__mobile').classList.remove('nav__mobile-active');
    document.body.classList.remove('hidden');
  });
});
