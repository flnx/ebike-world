import { render } from './views/lib.js';
import { footer } from './views/footer.js';
import { nav, state } from './views/nav.js';
import { loadingTemplate } from './middlewares/loadingTemplate.js';
import { redirect } from './middlewares/redirect.js';

const body = document.querySelector('body');
const navWrapper = document.querySelector('.nav__header');
const mainWrapper = document.querySelector('.main-content');
const footerWrapper = document.querySelector('.main-footer');

let widthMatch = window.matchMedia('(min-width: 640px)');
let widthMatchMobile = window.matchMedia('(max-width: 639px)');

let context = null;

export const ctxDecorator = (ctx, next) => {
  ctx.renderNav = renderNav;
  ctx.isDesktop = widthMatch;
  ctx.render = renderSection;
  ctx.renderFooter = renderFooter;
  ctx.renderLoading = renderLoading;
  context = ctx;
  ctx.redirect = redirect;

  next();
};

const renderNav = (ctx) => render(nav(ctx), navWrapper);
const renderSection = (section) => render(section, mainWrapper);
const renderFooter = () => render(footer(), footerWrapper);
const renderLoading = () => render(loadingTemplate(), mainWrapper);


body.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.classList.contains('on-toggle')) {
    if (!e.target.classList.contains('toggle-item')) {
      state.toggle = state.toggle ? false : true;
      context.renderNav(context);
    }
  } else {
    state.toggle = false;
    state.hamburger = false;
    context.renderNav(context);
  }
}

let resizeTimer = null;

window.addEventListener('resize', (e) => {
  body.classList.add('resize-animation-stopper');

  clearTimeout(resizeTimer);
  
  resizeTimer = setTimeout(() => {
    body.classList.remove('resize-animation-stopper');
  }, 400);


  if (widthMatch.matches) {
    context.renderNav(context);
  }

  if (widthMatchMobile.matches) {
    context.renderNav(context);
  }
});