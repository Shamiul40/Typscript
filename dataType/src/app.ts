// // // Student Profile Project

// // type Student = {
// //     name : string,
// //     age : number,
// //     isEnrolled : boolean,
// //     course : string[],
// //     marks : number[],
// //     info : [string, number, boolean]
// // }

// // const student1 :Student = {
// //     name : "Shamiul Islam",
// //     age :27,
// //     isEnrolled : true,
// //     course : ["javascript", "typescript", "redux"],
// //     marks : [88,90,92],
// //     info : ["shamiul islam", 27, true]
// // }

// // const student2:Student = {
// //     name : "Sakib hassan",
// //     age : 22,
// //     isEnrolled :true,
// //     course: ["typescript", "javascript", "python"],
// //     marks :[70,78,80],
// //     info:["Rakib", 22, false]
// // }

// // function displayStudent(student :Student) :void {
// //     console.log(`name : ${student.name}`)

// // }

// // displayStudent(student1)

// // function greetings(firstName: string, lastName: string, title?: string) :string{
// //   return `${firstName} ${lastName} he is a ${title ? title : "N/A"}`;
// // }

// // console.log(greetings("Shamiul", "islam", "doctor"))


// function weleCome(name:string ="Guest") :string{
//     return `welcome ${name}`
// }
// console.log(weleCome())


const add=(a:number, b:number) :number=> a+b
console.log(add(5, 6))
