# Mutation

# Add new author

```javascript
mutation AddAuthor($author: AuthorInput!) {
  addAuthor(author: $author) {
    id
    name
    age
    books {
      id
      name
      genre
    }
  }
}

{
  "author": {
    "name": "John",
    "age": 45
  }
}
```

# Update author

```javascript
mutation UdateAuthor($updateAuthorId: ID!, $author: AuthorInput!) {
  updateAuthor(id: $updateAuthorId, author: $author) {
    id
    name
    age
    books {
      id
      name
      genre
    }
  }
}

{
  "updateAuthorId": "4",
  "author": {
    "name": "Tolkien",
    "age": 89
  }
}
```

# Delete author

```javascript
mutation DeleteAuthor($deleteAuthorId: ID!) {
  deleteAuthor(id: $deleteAuthorId) {
    id
    name
    age
    books {
      id
      name
      genre
    }
  }
}

{
  "deleteAuthorId": "4"
}
```

# Add new book

```javascript
mutation AddBook($book: BookInput!) {
  addBook(book: $book) {
    id
    name
    genre
    author {
      id
      name
      age
    }
  }
}

{
  "book": {
    "name": "Da vinci code",
    "genre": "Sci-fi",
    "authorId": "4"
  }
}
```

# Update book

```javascript
mutation UpdateBook($updateBookId: ID!, $book: BookInput!) {
  updateBook(id: $updateBookId, book: $book) {
    id
    name
    genre
    author {
      id
      name
      age
    }
  }
}

{
  "updateBookId": "7",
  "book": {
    "name": "The Lord of the Rings",
    "genre": "fantasy",
    "authorId": "4"
  }
}
```

# Delete book

```javascript
mutation DeleteBook($deleteBookId: ID!) {
  deleteBook(id: $deleteBookId) {
    id
    name
    genre
    author {
      name
      age
    }
  }
}

{
  "deleteBookId": "7"
}
```
