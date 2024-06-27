// login
function LOGIN() {
  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  console.log(data);
  fetch("http://192.168.18.12:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((hasil) => {
      console.log(hasil);
    });
}

