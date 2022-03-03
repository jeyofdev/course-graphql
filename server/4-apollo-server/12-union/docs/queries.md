# Query

```javascript
query {
  candy(id: 1) {
    __typename
    ... on Candy {
      name
      price
    }
    ... on OutOfStock {
      restockDate
    }
    ... on RegionUnavailability {
      availableRegions
    }
  }
}
```
