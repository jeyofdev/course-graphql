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
