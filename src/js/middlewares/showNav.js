export const showNav = (ctx, next) => {
  ctx.renderNav(ctx);
  next();
}