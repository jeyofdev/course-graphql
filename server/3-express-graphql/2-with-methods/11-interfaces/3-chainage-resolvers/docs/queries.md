# Query

## Get all characters

```javascript
query Characters {
  characters {
    id
    name
    gender
    ... on HumanType {
      dateOfBirth
      actor
      wand {
        wood
        core
        length
      }
    }
    ... on NoHumanType {
      species
    }
  }
}
```
