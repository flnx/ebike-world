export const redirect = (ctx, state) => {
  setTimeout(() => {
    if (state.isRendering) {
      setTimeout(() => ctx.page.redirect('/cart'), 500);
    } else {
      ctx.page.redirect('/cart');
    }
  }, 100);
}