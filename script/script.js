const btnMobileNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('header');

function toggleNavigation() {
  header.classList.toggle('nav-open');
}

btnMobileNav.addEventListener('click', toggleNavigation);

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

    if (link.classList.contains('main-nav-link')) toggleNavigation();
  });
});

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);

    if (!entry.isIntersecting) document.body.classList.add('sticky');

    if (entry.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

if (window.innerWidth <= 944) {
  console.log('less than 944px');
  document.body.classList.remove('sticky');
  obs.unobserve(sectionHeroEl);
}

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
