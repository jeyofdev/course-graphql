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
mutation addUser {
  addUser(name: "Johnny", email: "johnny@test.com") {
    id
    name
    email
  }
}
```

## Update user

```javascript
mutation updateUser {
  updateUser(id: "2", name: "Sophie") {
    id
    name
    email
  }
}
```

## Delete user

```javascript
mutation deleteUser {
  deleteUser(id: "6") {
    id
    name
    email
  }
}
```

# Subscription

```javascript
subscription {
  user {
    user {
      id
      name
      email
    }
    mutation
  }
}
```
