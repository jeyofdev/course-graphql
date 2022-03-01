# Queries

## Get all posts

```javascript
query posts {
  posts {
    id
    title
    content
    user {
      id
      name
      email
    }
  }
}
```

## Get all users

```javascript
query users {
  users {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}
```

# Mutations

## Add new user

```javascript
mutation addUser {
  addUser(name: "Benji", email: "benji@test.com") {
    id
    name
    email
    posts {
      id
    	title
    	content
    }
  }
}
```

## Add new post

```javascript
mutation addPost {
  addPost(title: "learn react", content: "Macaroon biscuit powder marshmallow liquorice cupcake tiramisu candy. Cotton candy jelly-o marzipan chocolate cake topping. Tart dragée chupa chups sweet roll cotton candy oat cake brownie. Tart jelly-o candy canes jujubes gummi bears.", userId: 1) {
    id
    title
    content
    user {
      id
      name
      email
    }
  }
}
```
