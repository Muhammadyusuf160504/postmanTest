const form = document.querySelector("form");
const PutBtn = document.getElementById("put");
form.addEventListener("submit", (e) => {
  // e.preventDefault();
  const newStuden = {
    firstName: form.firstname.value,
    lastName: form.lastname.value,
    age: form.age.value,
    imgURL: form.url.value,
    id: new Date(),
  };
  const respons = request(newStuden, "POST");
  form.firstname.value = "";
  form.lastname.value = "";
  form.age.value = "";
  form.url.value = "";
});

async function request(data, method = "GET", id) {
  let URL = "http://localhost:2156/students/" + `${id ?? ""}`;

  const req = await fetch(URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : "",
  });
  const respons = req.json();
  return respons;
}
// Ekranga chiqarish
fetch("http://localhost:2156/students")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    const ul = document.getElementById("ulContainer");
    data &&
      data.forEach((student) => {
        ul.innerHTML += `
        <li>
        <h2>${student.firstName}</h2>
        <h2>${student.lastName}</h2>
        <p>${student.age}</p>
        <button>Remove</button>
        </li>`;
      });
  })
  .catch((error) => {
    console.log(error);
  });

// async function result(data, method = "GET", id) {
//   let URL = "http://localhost:2156/students/" + `${id ?? ""}`;

//   const req = await fetch(URL, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data ? JSON.stringify(data) : "",
//   });
//   const respons = req.json();
//   console.log(URL);
//   return respons;
// }

// let URL = "http://localhost:2156/students/" + `${id ?? ""}`;
