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
