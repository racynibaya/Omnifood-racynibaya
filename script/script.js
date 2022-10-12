const yearEl = document.querySelector('.year');
const h1El = document.querySelector('.heading-primary');

const mobileNavMenu = document.querySelector(
  '.icon-mobile-nav[name="menu-outline"]'
);
const mobileNavClose = document.querySelector(
  '.icon-mobile-nav[name="close-outline"]'
);
const header = document.querySelector('header');

function toggleNavOpen() {
  header.classList.toggle('nav-open');
}

mobileNavMenu.addEventListener('click', toggleNavOpen);
mobileNavClose.addEventListener('click', toggleNavOpen);

// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function checkFlexGap() {
  let flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '.1rem';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);

  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();
