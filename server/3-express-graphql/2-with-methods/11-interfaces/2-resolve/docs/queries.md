# Query

## Get all characters and fetch data based on the species property

```javascript
query Characters {
  characters {
    id
    name
    gender
    ... on HumanType {
      dateOfBirth
      actor
    }
    ... on NoHumanType {
      species
    }
  }
}
```
