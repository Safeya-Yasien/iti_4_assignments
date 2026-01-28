import { fetchInstructors } from "./api.js";
import { generator } from "./course.js";

// class with name and duration properties

class Course {
  constructor(id, name, duration) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
}

// mixin class with startCourse method
const startCourseMixin = {
  startCourse() {
    return `Course ${this.name} has started!`;
  },
};

// what is prototype?
// when you create a class or constructor function js by default create a prototype object
// then prototype object contain all the methods and properties of the class
Object.assign(Course.prototype, startCourseMixin);

// create a set to store all created courses
const courses = new Set();
const course1 = new Course("JavaScript", 10);
const course2 = new Course("React", 20);
const course3 = new Course("Node.js", 30);

courses.add(course1);
courses.add(course2);
courses.add(course3);

// console.log(courses);

// create map to map course and duration
const courseDurationMap = new Map();
courseDurationMap.set(course1, "Mostafa ");
courseDurationMap.set(course2, "Momen");
courseDurationMap.set(course3, "Mohamed");

// console.log(courseDurationMap);

// use proxy to prevent edit course name
// handler is an object define which interactions you want to intercept
// const handler = {
//   set(target, propKey, value) {
//     if (propKey === "name") {
//       console.log("You cannot change the name of the course");
//       return false;
//     }
//     target[propKey] = value;
//     return true;
//   },
// };
// const proxyName = new Proxy(course1, handler);
// proxyName.name = "python";

// day 2 callStack
const addCourseForm = document.getElementById("addCourseForm");
addCourseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const courseName = e.target.name.value;
  if (!courseName) {
    console.log("Please enter a course name");
    return;
  }

  setTimeout(() => {
    console.log("Course Saved");
    setTimeout(() => {
      console.log("Instructor Assigned");
    }, 5000);
  }, 3000);
});

// day 3
// fetch instructors
const gen = generator();

getUsersBtn.addEventListener("click", async () => {
  console.log("Button clicked");

  try {
    const instructors = await fetchInstructors();
    const users = instructors.users;
    console.log(instructors);
    // Randomly assign one
    const randomInstructor = users[Math.floor(Math.random() * users.length)];
    console.log("Random Instructor:", randomInstructor);
    console.log(`Instructor assigned: ${randomInstructor.firstName}`);

    // Create course using generator
    const newCourse = new Course(gen.next().value, "JavaScript Pro", 40);
    console.log(newCourse.startCourse());
  } catch (error) {
    console.error("Error in flow:", error);
  }
});
