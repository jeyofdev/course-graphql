# Query

## Get all characters human

```javascript
query humans {
  humans {
    id
    name
    gender
    dateOfBirth
    actor
  }
}
```

## Get all characters not human

```javascript
query NoHumans {
  noHumans {
    id
    name
    gender
    species
  }
}
```
