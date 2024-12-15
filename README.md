# MongoDB $inc operator type error
This repository demonstrates a common error when using the $inc operator in MongoDB update queries.  The $inc operator is used to increment a numerical value in a document. However, if you pass a string value, the update will fail. 

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

This example highlights the importance of ensuring data type consistency when interacting with MongoDB.