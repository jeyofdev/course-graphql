# Queries

# Create fragments (reusable data structure)

```javascript
query users {
  user1: user(id: 1) {
    ...userFields
  }

  user2: user(id: 2) {
    ...userFields
  }

  user3: user(id: 3) {
    ...userFields
  }
}

fragment userFields on UserType {
  id
  name
  email
}
```
