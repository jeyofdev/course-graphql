### Queries and mutations :

```javascript
query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}

query getCoursesByTitle($courseTitle: String!) {
  coursesByTitle(title: $courseTitle) {
    title
    author
    description
    topic
    url
  }
}

query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1) {
    ...courseFields
  }
  course2: course(id: $courseID2) {
    ...courseFields
  }
}

mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}

mutation addCourse($title: String!, $author: String!, $description: String!, $topic: String!, $url: String!) {
  addCourse(title: $title, author: $author, description: $description, topic: $topic, url: $url) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
```
