# Queries

## Get all authors

```javascript
query Authors{
  authors {
    id
    name
    age
    books{
      id
      name
      genre
    }
  }
}
```

## Get author by id

```javascript
query Author($authorId: ID!) {
  author(id: $authorId) {
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
  "authorId": "3"
}
```

## Get all books

```javascript
query Books{
  books {
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
```

## Get books by id

```javascript
query Book($bookId: ID!) {
  book(id: $bookId) {
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
  "bookId": "2"
}
```
