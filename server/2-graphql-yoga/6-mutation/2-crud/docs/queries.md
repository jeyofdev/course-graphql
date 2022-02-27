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
  add(name: "Johnny", email: "johnny@test.com") {
    id
    name
    email
  }
}
```

## Update user

```javascript
mutation updateUser {
  update(id: "6", name: "Barbara", email: "barbara@test.com") {
    id
    name
    email
  }
}
```

## Delete user

```javascript
mutation deleteUser {
  remove(id: "6") {
    id
    name
    email
  }
}
```
