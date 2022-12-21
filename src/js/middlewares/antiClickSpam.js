let prevPath = null;

export const antiClickSpam = (ctx, next) => {

  if (prevPath == ctx.path) {
    return;
  } else {
    prevPath = ctx.path;
    next();
  }
};
