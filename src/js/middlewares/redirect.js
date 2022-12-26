export const redirect = (state) => {
  const ctx = state.ctx;

  setTimeout(() => {
    if (state.isRendering) {
      setTimeout(() => ctx.page.redirect('/cart'), 500);
    } else {
      ctx.page.redirect('/cart');
    }
  }, 200);
}