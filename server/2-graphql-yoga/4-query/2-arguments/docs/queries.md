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

## Get user by id

```javascript
query user {
  user(id: 3) {
    id
    name
    email
  }
}
```
