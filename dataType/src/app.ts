// Student Profile Project



type Student = {
    name : string,
    age : number,
    isEnrolled : boolean,
    course : string[],
    marks : number[],
    info : [string, number, boolean]
}

const student1 :Student = {
    name : "Shamiul Islam",
    age :27,
    isEnrolled : true,
    course : ["javascript", "typescript", "redux"],
    marks : [88,90,92],
    info : ["shamiul islam", 27, true]
}


const student2:Student = {
    name : "Rakib",
    age : 22,
    isEnrolled :true,
    course: ["typescript", "javascript", "python"],
    marks :[70,75,80],
    info:["Rakib", 22, true]
}


function displayStudent(student :Student) :void {
    console.log(`name : ${student.name}`)
    console.log(`age : ${student.age}`)
    console.log(`course : ${student.course.join(", ")}`)
}


displayStudent(student1)