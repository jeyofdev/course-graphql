# Queries

## Get all users

```javascript
query users {
  users {
    id
    name
    email
    pet
    petName
  }
}
```

## Get user by Id

```javascript
query getUser($includePet: Boolean = true) {
  user1: user(id: 1) {
    ...userField
  }

  user2: user(id: 2) {
    ...userField
  }

  user3: user(id: 4) {
    ...userField
  }
}

// la directive include permet de dire si on veut retourner les propriétés pet et petName
// la directive skip de dire si on veut exclure une propriété
fragment userField on UserType {
  name
  email @skip(if: $includePet)
  pet @include(if: $includePet)
  petName @include(if: $includePet)
}
```
