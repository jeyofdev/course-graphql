const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const coursesData = require('./datas/courses');
const schema = require('./models/courses.model');

/**
 * Get course
 */
const getCourse = function (args) {
    const id = args.id;
    return coursesData.filter((course) => {
        return course.id == id;
    })[0];
};

const getCourses = (args) => {
    if (args.topic) {
        const topic = args.topic;
        return coursesData.filter((course) => course.topic === topic);
    } else {
        return coursesData;
    }
};

/**
 * Get all courses by title
 */
const getCoursesByTitle = (args) => {
    if (args.title) {
        var title = args.title;
        return coursesData.filter((course) => course.title === title);
    } else {
        return coursesData;
    }
};

const updateCourseTopic = ({ id, topic }) => {
    coursesData.map((course) => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter((course) => course.id === id)[0];
};

/**
 * Add new course
 */
const addCourse = ({ title, author, description, topic, url }) => {
    const course = {
        title: title,
        author: author,
        description: description,
        topic: topic,
        url: url,
    };

    return [...coursesData, course];
};

const root = {
    course: getCourse,
    courses: getCourses,
    coursesByTitle: getCoursesByTitle,
    updateCourseTopic: updateCourseTopic,
    addCourse: addCourse,
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(4000, () =>
    console.log('Express GraphQL Server Now Running On localhost:4000/graphql')
);

//
