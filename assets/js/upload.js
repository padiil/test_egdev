const dropArea = document.querySelector("#dropArea");
const fileInput = document.querySelector("#fileInput");
const fileList = document.querySelector("#fileList");
const titleProduct = document.querySelector("#titleProduct");
const titleProductText = document.querySelector("#titleProductText");
const submitButton = document.querySelector("#submit_button");
const kutipan = document.querySelector("#kutipan");
const daftarPustaka = document.querySelector("#daftarPustaka");
const sumberKurangDari = document.querySelector("#sumberKurangDari");
const radioKecuali = document.querySelector("#radioKecuali");
const whatsApp = document.querySelector("#whatsApp");
const referral = document.querySelector("#referral");
const radioWords = document.querySelector("#radioWords");
const radioPersen = document.querySelector("#radioPersen");

console.log(valueKecuali.value)

sumberKurangDari.addEventListener("change", () => {
  if (sumberKurangDari.checked) {
    radioKecuali.classList.remove("d-none");
  } else {
    radioKecuali.classList.add("d-none");
  }
});

submitButton.setAttribute("disabled", "true");

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", (e) => {
  dropArea.classList.remove("dragover");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("dragover");

  const files = e.dataTransfer.files;

  fileList.innerHTML = ""; // Clear previous file list
  for (let i = 0; i < files.length; i++) {
    const fileItem = document.createElement("div");
    fileItem.className = "fileItem";
    fileItem.textContent = files[i].name;
    fileList.appendChild(fileItem);
  }
  fileList.classList.remove("d-none");
  titleProductText.classList.add("d-none");
  submitButton.removeAttribute("disabled");
});

// upload file cek turnitin
function uploadFile() {
  const fileNames = [];
  for (let i = 0; i < fileInput.files.length; i++) {
    fileNames.push(fileInput.files[i].name);
  }


  const data = {
    title: titleProduct.value,
    fileNames: fileNames,
    kutipan: kutipan.checked,
    daftarPustaka: daftarPustaka.checked,
    sumberKurangDari: {
      type: radioKecuali.querySelector("input:checked").value,
      value: valueKecuali.value,
    },
    whatsApp: whatsApp.value,
    referral: referral.value,
  };

  console.log(data); // To check the data content

  fetch("http://192.168.18.12:3000/cek-turnitin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((hasil) => {
      console.log(hasil);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
