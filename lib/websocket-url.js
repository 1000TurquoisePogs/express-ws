const trailingSlash = require('./trailing-slash').default;

/* The following fixes HenningM/express-ws#17, correctly. */
exports.default =  function websocketUrl(url) {
  if (url.indexOf('?') !== -1) {
    const [baseUrl, query] = url.split('?');

    return `${trailingSlash(baseUrl)}.websocket?${query}`;
  }
  return `${trailingSlash(url)}.websocket`;
}
