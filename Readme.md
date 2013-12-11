
# context-middleware

  Middleware that automatically adds a `req.context` so everyone else can assume it exists.

## Example

```js
var context = require('context-middleware')();

app.get('/settings', context, function (req, res, next) {
  var id = req.param('id');
  users.get(id, function (err, user) {
    req.context.user = user;
    next();
  });
});
```

## API

### context()

  Generate your own `context` middleware.