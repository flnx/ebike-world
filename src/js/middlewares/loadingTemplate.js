import { html } from '../views/lib.js';

export const loadingTemplate = () => html` 
<div class="container">
  <div div class="fa-3x">
    <i class="fa-solid fa-cog fa-spin"></i>
  </div>
</div>`;

export const showPageLoading = (ctx, next) => {
  if (ctx.path.includes('page')) {
    next();
    return;
  }

  ctx.renderLoading();
  next();
};
