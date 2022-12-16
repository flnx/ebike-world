export const showFooter = (ctx, next) => {
  ctx.renderFooter();
  next();
}