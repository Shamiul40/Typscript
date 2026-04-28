"use strict";
// // // Student Profile Project
Object.defineProperty(exports, "__esModule", { value: true });
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
// const add=(a:number, b:number) :number=> a+b
// console.log(add(5, 6))
// const student = {
//     name : 'shamiul islam',
//     age : 25
// }
// const student = {
//     name : 'shamiul islam',
//     age : 25
// }
// const printUser =(user : {name: string, age :number}) :void=>{
// console.log(`${user.name} is ${user.age} years old`)
// }
//  printUser(student)
// type ProductId = number | string;
// const getProducts =(id :ProductId) :void=> {
//     console.log(`product id is ${id}`)
// }
// getProducts("abc13555")
// type of type guard
// const display = (val: string | number): void => {
//     if(typeof val==="string") {
//         console.log("it is a string", val.toLocaleUpperCase())
//     } else {
//         console.log("it is a number", val.toFixed(2))
//     }
// };
// display("Full stack developer")
// display(101.2223454004)
// class define
// class Person {
//   name: string;
//   age: number;
//   constructor() {
//     ((this.name = ""), (this.age = 0));
//   }
//   greet() {
//     console.log(`helllo ${this.name}`);
//   }
// }
// const user1 = new Person();
// user1.name = " Shamiul islam";
// user1.age = 27;
// user1.greet()
class person {
    name;
    age;
    constructor() {
        this.name = "";
        this.age = 0;
    }
    greet() {
        console.log(`hi ${this.name}. your age is${this.age}`);
    }
}
const user2 = new person();
user2.name = "Umme Habiba";
user2.age = 24;
user2.greet();
//# sourceMappingURL=app.js.map

const user2 = new person();
user2.name = "Umme Habiba";
user2.age = 24;
user2.greet();


const user2 = new person();
user2.name = "Umme Habiba";
user2.age = 24;
user2.greet();

const user2 = new person();
user2.name = "Umme Habiba";
user2.age = 24;
user2.greet();
const user2 = new person();
user2.name = "Umme Habiba";
user2.age = 24;
user2.greet();