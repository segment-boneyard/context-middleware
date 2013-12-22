
# context-middleware

  Attach `req.context` to all [express](https://github.com/visionmedia/express) requests.

## Example

```js
var context = require('context-middleware');

var app = express();
app.use(context());
app.use('/user', function (req, res, next) {
  var id = req.param('id');
  users.get(id, function (err, user) {
    req.context.user = user;
    next();
  });
});
```

## API

### context()

  Generate a context middleware.

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

