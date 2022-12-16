import { render } from './views/lib.js'
import { footer } from './views/footer.js';
import { nav } from './views/nav.js';

const navWrapper = document.querySelector('.nav__header');
const mainWrapper = document.querySelector('.main-content');
const footerWrapper = document.querySelector('.main-footer');


export const ctxDecorator = (ctx, next) => {
    ctx.renderNav = renderNav;
    ctx.render = renderSection;
    ctx.renderFooter = renderFooter;

    next();
  }

const renderNav = (ctx) => render(nav(ctx), navWrapper);
const renderSection = (section) => render(section, mainWrapper);
const renderFooter = () => render(footer(), footerWrapper);