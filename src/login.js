// Data user
const userList = [
  {
    id: "U001",
    firstName: "Vivaldy",
    lastName: "Andhira",
    username: "dididlav",
    password: "andhira",
    address: "Bandung",
    phone: "081111111111",
  },
  {
    id: "U002",
    firstName: "User",
    lastName: "Dua",
    username: "user2",
    password: "pass2",
    address: "Jakarta",
    phone: "082222222222",
  },
  {
    id: "U003",
    firstName: "User",
    lastName: "Tiga",
    username: "user3",
    password: "pass3",
    address: "Bali",
    phone: "081333333333",
  },
  {
    id: "U004",
    firstName: "User",
    lastName: "Empat",
    username: "user4",
    password: "pass4",
    address: "Surabaya",
    phone: "081444444444",
  },
];

// Promise for checking password if it match
const isPassValid = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const user of userList) {
        if (user.username === username && user.password === password) {
          resolve(user);
        }
      }
      reject("Username atau Password tidak cocok");
    }, 100);
  });

// Promise for checking username if it exists
const isUserExist = (username) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const user of userList) {
        if (user.username === username) {
          resolve(true);
        }
      }
      reject("Username atau password tidak ditemukan atau salah");
    }, 100);
  });

// Promise for checking inputs if it is empty
const isInputNotEmpty = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "" || password === "") {
        reject("Username dan password harus terisi");
      }
      resolve(false);
    }, 100);
  });

// Async function for validating username and password
const validate = async () => {
  const username = await document.loginForm.username.value.toLowerCase();
  const password = await document.loginForm.password.value;

  await isInputNotEmpty(username, password);
  await isUserExist(username);
  return await isPassValid(username, password);
};

// Checking if button submit exists
const submit = document.querySelector("#submit");

if (submit) {
  submit.onclick = () => {
    validate()
      .then((userLoggedIn) => {
        alert(
          `Selamat datang ${userLoggedIn.firstName} ${userLoggedIn.lastName}`
        );
        // localStorage.setItem("firstName", userLoggedIn.firstName);
        // localStorage.setItem("lastName", userLoggedIn.lastName);
        // eslint-disable-next-line no-restricted-globals
        location.href = "home.html";
      })
      .catch((errMsg) => {
        alert(errMsg);
      });
  };
}

// Checking if button logout exists
const logout = document.querySelector("#logout");

if (logout) {
  logout.onclick = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = "index.html";
  };
}

// Filling columns in table
const fillCol = (user, tr, td, cell) => {
  const data = Object.entries(user);

  for (const d of data) {
    if (d[0] !== "id" && d[0] !== "username" && d[0] !== "password") {
      td = document.createElement("td");
      cell = document.createTextNode(d[1]);
      td.appendChild(cell);
      tr.appendChild(td);
    }
  }
};

// Filling Table Fields
const fillTableField = (tbody, tr, td, field) => {
  const fields = ["First Name", "Last Name", "Address", "Phone Number"];

  for (const f of fields) {
    td = document.createElement("td");
    field = document.createTextNode(f);
    td.appendChild(field);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
};

// Filling Row in table
const fillRow = (tbody, tr, td, cell) => {
  tr = document.createElement("tr");
  td = document.createElement("td");
  cell = document.createTextNode("");
  fillTableField(tbody, tr, td, cell);

  for (const user of userList) {
    tr = document.createElement("tr");

    fillCol(user, tr, td, cell);

    tbody.appendChild(tr);
  }
};

// Checking if table with id allUser exists
let table = document.querySelector("#allUser");

if (table) {
  let body = document.getElementsByTagName("body")[0];
  table.style.width = "50%";
  table.setAttribute("border", "1");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let cell = document.createTextNode("");

  fillRow(tbody, tr, td, cell);

  table.appendChild(tbody);
  body.appendChild(table);
}
