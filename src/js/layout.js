import { render } from './views/lib.js'
import { footer } from './views/footer.js';
import { nav } from './views/nav.js';

const body = document.querySelector('body');

export const ctxDecorator = (ctx, next) => {
  ctx.render = ctxRender;
  next();
}

const ctxRender = (section) => render([nav(), section, footer()], body);