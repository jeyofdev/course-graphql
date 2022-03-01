# Queries

## Get all posts and user by relation

```javascript
query posts {
  posts {
    id
    title
    content
    user {
      id
      name
      email
    }
  }
}
```

## Get all users and posts by relation

```javascript
query users {
  users {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}
```
