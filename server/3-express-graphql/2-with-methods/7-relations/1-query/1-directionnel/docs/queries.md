# Queries

## Get all users

```javascript
query users {
  users {
    id
    name
    email
  }
}
```

## Get posts and user by relation

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
