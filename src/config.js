
module.exports = {
  development: (config) => ({
    globals: Object.assign({}, config.globals, {
      API_URL: JSON.stringify(process.env.API_URL),
      API_ROUTE: JSON.stringify(process.env.API_URL),
    })
  }),
};