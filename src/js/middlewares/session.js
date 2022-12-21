export const userSession = (userData) => {
  return (ctx, next) => {
    const user = userData();

    if (user) {
      ctx.user = user;
    }

    next()
  }
}