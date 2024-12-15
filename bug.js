```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('products').updateOne({ name: 'Example Product' }, { $inc: { price: '10' } });
```