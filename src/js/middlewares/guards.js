export const hasUser = () => {
  return (ctx, next) => {
    if (!ctx.user) {
      ctx.page.redirect('/login');
    } else {
      next();
    }
  }
}

export const isNotGuest = () => {
  return (ctx, next) => {
    if (ctx.user) {
      ctx.page.redirect('/');
    } else {
      next();
    }
  }
}