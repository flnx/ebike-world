import { render } from './views/lib.js'
import { footer } from './views/footer.js';
import { nav, state } from './views/nav.js';

const body = document.querySelector('body');
const navWrapper = document.querySelector('.nav__header');
const mainWrapper = document.querySelector('.main-content');
const footerWrapper = document.querySelector('.main-footer');

let context = null;

export const ctxDecorator = (ctx, next) => {
    ctx.renderNav = renderNav;
    ctx.render = renderSection;
    ctx.renderFooter = renderFooter;
    context = ctx;

    next();
  }

const renderNav = (ctx) => render(nav(ctx), navWrapper);
const renderSection = (section) => render(section, mainWrapper);
const renderFooter = () => render(footer(), footerWrapper);

body.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.classList.contains('on-toggle')) {
    if (!e.target.classList.contains('toggle-item')) {
      state.toggle = state.toggle ? false : true;
      context.renderNav(context);
    }
  } else {
    state.toggle = false;
    context.renderNav(context);
  }
};

