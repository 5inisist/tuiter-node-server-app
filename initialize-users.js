// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('tuiter');

db.users.drop();

// Create a new document in the collection.
db.users.insertMany([
    { '_id' : 1, 'username': 'alice', 'password': '123', 'firstName': 'Alice', 'lastName': 'Wonderland'},
    { '_id' : 2, 'username': 'bob', 'password': '123', 'firstName': 'Bob', 'lastName': 'Marley'},
    { '_id' : 3, 'username': 'charlie', 'password': '123', 'firstName': 'Charlie', 'lastName': 'Brown'}
])
