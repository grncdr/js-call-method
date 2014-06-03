# call-method

Higher-order-function for calling a method with arguments.

## Synopsis

Consider this document type:

```javascript
function Document (content, published) {
  this.content = content;
  this.published = false;
  this.publishedBy = null;
  this.publishedAt = null;
}

Document.prototype.publish = function (user) {
  this.publishedBy = user;
  this.publishedAt = new Date();
  this.published = true;
}
```

Imagine we have an array of documents:

```javascript
var range = require('range');
var docs = range(1, 11).map(function (i) {
  return new Document("Document " + i, false)
});
```

We can store the action of publishing a document in a variable using `callMethod`:

```javascript
var callMethod = require('./');
var user = { name: 'Me!' };
var publishDoc = callMethod('publish', user);
```

And use it with other higher-order functions for clear, concise code:

```javascript
var assert = require('assert');

docs.forEach(publishDoc);
docs.forEach(function (doc) {
  assert(doc.published)
  assert.equal(doc.publishedBy, user)
});
console.log('Ok - ' + docs.length + ' docs published');
```

## License

MIT
