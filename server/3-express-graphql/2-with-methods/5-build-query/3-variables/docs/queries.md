# Queries

## Get user by Id

```javascript
query user($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```

## Get user by Id with default value

```javascript
query userDefault($default_id: ID = 3) {
  user(id: $default_id) {
    id
    name
    email
  }
}
```

## Get many user by Id

```javascript
query manyUser($user_id_1: ID!, $user_id_2: ID!) {
  user1: user(id: $user_id_1) {
    id
    name
    email
  }
  user2: user(id: $user_id_2) {
    id
    name
    email
  }
}
```

## Variables

```javascript
{
  "id": 1,
  "user_id_1": 1,
  "user_id_2": 3
}
```
