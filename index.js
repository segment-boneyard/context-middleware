
/**
 * Expose `context`.
 */

module.exports = context;

/**
 * Generate a new context middleware that adds `req.context`.
 *
 * @param {Object} options (optional)
 */

function context (options) {
  return function contextMiddleware (req, res, next) {
    req.context = req.context || {};
    req.context.body = req.context.body || {};
    next();
  };
}