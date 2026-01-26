// task 1
// create course class
class Course {
  constructor(name) {
    this.name = name;
  }

  startCourse() {
    return `Course ${this.name} has started!`;
  }
}

const myCourse = new Course("JavaScript");
console.log("myCourse", myCourse.startCourse());

// task 2
// create mixin object
// when attach to course this method will be called and refer to the course
const canStart = {
  startCourse() {
    return `Course ${this.name} has started!`;
  },
};

Object.assign(Course.prototype, canStart);

// task 3
// use proxy
// A Proxy lets you control operations on other objects.
// wraps an object and intercepts operations on it
const courseProxy = new Proxy(myCourse, {
  // target: is the name
  // propKey: is 'set' or 'get'
  // value: is the value you want to set or get
  set(target, propKey, value) {
    if (propKey === "name") {
      console.log("You are not allowed to change the course name");
      return false;
    } else {
      target[propKey] = value;
      return true;
    }
  },
});
// console.log("courseProxy", courseProxy.name);
courseProxy.name = "CSS";

// task 4
const coursesSet = new Set();
const jsCourse = new Course("JavaScript");
coursesSet.add(jsCourse);
const htmlCourse = new Course("HTML");
coursesSet.add(htmlCourse);
const cssCourse = new Course("CSS");
coursesSet.add(cssCourse);

console.log(coursesSet);

// task 5
// create map
const courseInstructorMap = new Map();
courseInstructorMap.set(myCourse, "John Doe");
courseInstructorMap.set(htmlCourse, "Jack");
courseInstructorMap.set(cssCourse, "Jane");

console.log(courseInstructorMap.get(myCourse));

// task 6
// test all
