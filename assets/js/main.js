// product
const productArea = document.getElementById("product-area");

const dataProduct = [
  {
    gambar: "https://turnedin.id/img/logo/1714118445603.png",
    namaProduk: "CEK TURNITIN",
    deskripsi: "Cek plagiarisme yang sudah terintegrasi dengan turnitin",
    link: "/cek-turnitin.html",
  },
  {
    gambar: "https://turnedin.id/img/logo/1714118445603.png",
    namaProduk: "FARAFRASE IN",
    deskripsi:
      "Jasa parafrase, turunin hasil turnitin dengan kualitas terjamin anti kecurangan",
    link: "/parafrase-in.html",
  },
  {
    gambar: "https://turnedin.id/img/logo/1714118445603.png",
    namaProduk: "TRANSLATE IN",
    deskripsi:
      "Translate jurnal/dokumen dengan sistem handal & hasil tidak ngasal",
    link: "#",
  },
  {
    gambar: "https://turnedin.id/img/logo/1714118445603.png",
    namaProduk: "SARANG FREELANCE",
    deskripsi: "Tempatnya nyari orang buat bantu kamu di berbagai kebutuhanmu",
    link: "#",
  },
];

for (let i = 0; i < dataProduct.length; i++) {
  productArea.innerHTML += `
     <div class="col-12 col-lg-6 mb-2 mt-0 mt-lg-4">
                <div class="row g-0 p-4 m-2 bg-primary rounded-4 text-white">
                  <div class="col-md-4">
                    <img
                      src="${dataProduct[i].gambar}"
                      class="img-fluid rounded-start w-50"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body h-100 text-start">
                      <h5 class="card-title fw-bold">${dataProduct[i].namaProduk}</h5>
                      <p class="card-text">
                        ${dataProduct[i].deskripsi}
                      </p>
                      <a href="${dataProduct[i].link}">
                        <button type="button" class="btn btn-secondary">
                          KLIK DISINI
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `;
}
// product end

// testimoni
const testiArea = document.getElementById("testi-area");

const dataTesti = [
  {
    foto: "https://turnedin.id/images/default.jpeg",
    nama: "John Doe",
    univ: "Universitas Tadika Mesra",
    isi: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tatus: "nonactive",
  },
  {
    foto: "https://turnedin.id/images/default.jpeg",
    nama: "Jane Smith",
    univ: "Universitas ABC",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "active",
  },
  {
    foto: "https://turnedin.id/images/default.jpeg",
    nama: "David Johnson",
    univ: "Universitas XYZ",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "active",
  },
  {
    foto: "https://turnedin.id/images/default.jpeg",
    nama: "Sarah Williams",
    univ: "Universitas QWE",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "active",
  },
];

for (let i = 0; i < dataTesti.length; i++) {
  if (dataTesti[i].status === "active") {
    testiArea.innerHTML += `
          <div class="card shadow">
                    <div class="card-body">
                      <div
                        class="border border-top-0 border-start-0 border-end-0 mb-2 d-flex"
                      >
                        <img
                          src="${dataTesti[i].foto}"
                          alt="..."
                          class="rounded-circle foto_profil"
                        />
                        <div class="mb-2 ms-2">
                          <h5 class="card-title">${dataTesti[i].nama}</h5>
                          <h6 class="card-subtitle mb-2 text-body-secondary">
                              ${dataTesti[i].univ}
                          </h6>
                        </div>
                      </div>
      
                      <p class="card-text">
                          ${dataTesti[i].isi}
                      </p>
                    </div>
                  </div>
          `;
  }
}
// testimoni end
