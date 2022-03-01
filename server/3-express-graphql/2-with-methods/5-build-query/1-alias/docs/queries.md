# Queries

# Create aliases on similar queries

```javascript
query users {
  user1: user(id: 1) {
    id
    name
    email
  }

  user2: user(id: 2) {
    id
    name
    email
  }

  user3: user(id: 3) {
    id
    name
    email
  }
}
```
