```javascript
//Correct usage of $inc operator
db.collection('products').updateOne({ name: 'Example Product' }, { $inc: { price: 10 } }); 
```