module.exports = (options, app) => {
  return async function(ctx, next) {
    const time = new Date().getTime();
    await next();
    console.log(options, 2222, app);
    const data = ctx.body;
    ctx.body = { data, timestamp: time };
  };
};
