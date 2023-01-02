module.exports = (options, app) => {
  return async function(ctx, next) {
    const startTime = Date.now();
    await next();
    const endTime = Date.now();
    console.log(endTime - startTime, 11111111, options);
  };
};
