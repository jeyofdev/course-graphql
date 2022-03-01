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
  user(id: 2) {
    id
    name
    email
  }
}
```

# Mutations

## Add new user

```javascript
mutation Add {
  add(name: "Johnny", email: "johnny@test.com") {
    id
    name
    email
  }
}
```
