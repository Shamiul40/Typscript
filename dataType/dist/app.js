"use strict";
// Student Profile Project
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Shamiul Islam",
    age: 27,
    isEnrolled: true,
    course: ["javascript", "typescript", "redux"],
    marks: [88, 90, 92],
    info: ["shamiul islam", 27, true]
};
const student2 = {
    name: "Rakib",
    age: 22,
    isEnrolled: true,
    course: ["typescript", "javascript", "python"],
    marks: [70, 75, 80],
    info: ["Rakib", 22, true]
};
function displayStudent(student) {
    console.log(`name : ${student.name}`);
    console.log(`age : ${student.age}`);
    console.log(`course : ${student.course.join(", ")}`);
}
displayStudent(student1);
//# sourceMappingURL=app.js.map