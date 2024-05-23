// ============================ Bài tập ==================
// 1. Tạo 1 class User có các thuộc tính: Email, passs, Username, address.
// Các phương thức: login, logout, viewProfile

// 2. Tạo 1 class Admin kế thừ từ User và thêm thuộc tính: ID
// Thêm phương thức: addUser, Update, deleteUser.

// ==> Sau mỗi phương thức => in ra màn hình console

const userList = [
  {
    id: "ST001",
    username: "CaoTV",
    password: "123@123a",
    email: "caotv@gmail.com",
    address: "Ha Noi",
  },
  {
    id: "ST002",
    username: "BachNX",
    password: "123@123a",
    email: "bachnx@gmail.com",
    address: "Ha Noi",
  },
  {
    id: "ST003",
    username: "CuongTM",
    password: "123@123a",
    email: "cuongtm@gmail.com",
    address: "Ha Noi",
  },
];
let check = false;
let userLogin: any;

 class User {
  username: string;
  email: string;
  password: string;
  address: string;
  constructor(
    username: string,
    email: string,
    password: string,
    address: string
  ) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
  }

  login(email: string, password: string) {
    const user = userList.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      userLogin = user;
      check = true;
      return `Login success. Welcome ${user.username}`;
    } else {
      return `Login failed. Please check your email and password`;
    }
  }

  logout() {
    if (check) {
      check = false;
      userLogin = null;
      return "Logout success";
    }
    return `Please login first`;
  }

  viewProfile() {
    if (userLogin) {
        return userLogin;
    }
    return `Please login first`;
  }
}


const user = new User("caotv@gmail.com", "123@123a", "123@123a", "Ha Noi");
console.log(user.login("caotv@gmail.com", "123@123a"));
console.log(user.logout());
console.log(user.viewProfile());
console.log(user.logout());
console.log(user.login("caotv@gmail.com", "123@123a"));
console.log(user.viewProfile());




