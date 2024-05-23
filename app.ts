// // ======================Tính Kế Thừa trong OOP =========================
// // Cú pháp:

// class Supper {
//   //    ... your code here
// }

// class Sub extends Supper {
//   //    ... your code here
// }

// // Ví dụ:
// const users = [
//   {
//     name: "CaoTV",
//     age: 15,
//   },
//   {
//     name: "CaoTV11",
//     age: 15,
//   },
// ];
// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   createUser(name: string, age: number) {
//     const user = {
//       name: name,
//       age: age,
//     };
//     users.push(user);
//     return users;
//   }
//   getUser() {
//     return `Name: ${this.name} - Age: ${this.age}`;
//   }
// }

// class Student extends User {
//   id: string;
//   constructor(name: string, age: number, id: string) {
//     super(name, age);
//     this.id = id;
//   }
//   getUser() {
//     return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age} `;
//   }
// }

// const user = new User("CaoTV", 15);

// const student = new Student(user.name, user.age, "ST001");
// console.log(student.getUser());
