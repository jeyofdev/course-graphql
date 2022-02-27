# Query

## Get all characters

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
      wand {
        wood
        core
        length
      }
    }
    ... on NoHuman {
      species
    }
  }
}
```
