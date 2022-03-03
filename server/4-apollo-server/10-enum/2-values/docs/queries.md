# Queries

## Get all users

```javascript
query users {
  users {
    id
    name
    email
    status
  }
}
```

## Get user by status

```javascript
query usersByStatus {
  usersByStatus(status: USER) {
    id
    name
    email
    status
  }
}
```

# Mutations

## Add new user

```javascript
mutation addUser {
  add(name: "Johnny", email: "johnny@test.com", status: SUPER_ADMIN) {
    id
    name
    email
    status
  }
}
```
