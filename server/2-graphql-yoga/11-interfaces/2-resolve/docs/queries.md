# Query

## Get all characters and fetch data based on the species property

```javascript
query Characters {
  characters {
    __typename
    id
    name
    gender
    ... on Human {
      dateOfBirth
      actor
    }
    ... on NoHuman {
      species
    }
  }
}
```
