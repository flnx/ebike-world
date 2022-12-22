let previousPath = null;

export const antiClickSpam = (ctx, next) => {

  if (previousPath == ctx.path) {
    return;
  } else {
    previousPath = ctx.path;
    next();
  }
};
