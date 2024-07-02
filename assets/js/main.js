// product
(() => {
  const productArea = document.getElementById("product-area");
  let dataProduct = [];

  fetch("http://192.168.18.12:3000/product", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((hasil) => {
      dataProduct = hasil;
      for (let i = 0; i < hasil.length; i++) {
        productArea.innerHTML += `
             <div class="col-12 col-lg-6 mb-2 mt-0 mt-lg-4">
                        <div class="row g-0 p-4 m-2 bg-primary rounded-4 text-white">
                          <div class="col-md-4">
                            <img
                              src="${hasil[i].foto}"
                              class="img-fluid rounded-start w-50"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body h-100 text-start">
                              <h5 class="card-title fw-bold mb-2">${hasil[i].judul}</h5>
                              <p class="card-text" style="font-size: small;">
                                ${hasil[i].isi}
                              </p>
                              <a href="${hasil[i].link}">
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
    });
})();
// product end

// testimoni
(() => {
  const testiArea = document.getElementById("testi-area");
  let dataTestimoni = [];

  fetch("http://192.168.18.12:3000/testimoni", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((hasil) => {
      dataTestimoni = hasil;
      for (let i = 0; i < hasil.length; i++) {
        if (hasil[i].status === "active") {
          testiArea.innerHTML += `
                  <div class="card shadow style">
                            <div class="card-body">
                              <div
                                class="border border-top-0 border-start-0 border-end-0 mb-2 d-flex"
                              >
                                <img
                                  src="${hasil[i].foto}"
                                  alt="..."
                                  class="rounded-circle foto_profil"
                                />
                                <div class="mb-2 ms-2">
                                  <h5 class="card-title">${hasil[i].nama}</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary">
                                      ${hasil[i].univ}
                                  </h6>
                                </div>
                              </div>
              
                              <p class="card-text">
                                  ${hasil[i].isi}
                              </p>
                            </div>
                          </div>
                  `;
        }
      }
    });
})();
// testimoni end

// list job
(() => {
  const listJobArea = document.getElementById("listjob-area");

  fetch("/assets/js/listProject.json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((hasil) => {
      listProject = hasil;
      // inner html
      for (let i = 0; i < listProject.length; i++) {
        // badge
        for (let j = 0; j < listProject[i].badge.length; j++) {
          listProject[i].badge[j] = `
            <p class="badge mb-0 bg-body-secondary text-black fw-normal">
              ${listProject[i].badge[j]}
            </p>
          `;
        }

        if (
          listProject[i].penawaran.penawar === "" ||
          listProject[i].penawaran.penawar === "0"
        ) {
          listProject[i].penawaran = `
            <h6
                                          class="fw-bold mb-0 px-3 mb-lg-2 me-2 me-lg-0"
                                        >
                                          Belum ada penawaran
                                        </h6>
           `;
        } else {
          listProject[i].penawaran = `
            <h6
                                          class="fw-400 mb-0 px-3 mb-lg-2 me-2 me-lg-0"
                                        >
                                          ${listProject[i].penawaran.penawar} Penawaran
                                        </h6>
                                        <div
                                          class="d-flex gap-1 flex-column flex-sm-row flex-lg-column align-items-sm-center align-items-md-end"
                                        >
                                          <h6 class="mb-0 fw-semibold">${listProject[i].penawaran.hargaPenawaran}</h6>
                                          <div
                                            class="d-block fw-semibold"
                                            style="font-size: small"
                                          >
                                            Penawaran rata-rata
                                          </div>
                                        </div>
           `;
        }

        // html
        listJobArea.innerHTML += `
                            <div class="mx-auto mt-md-4">
                        <div class="shadow px-3 mb-3 p-3 p-sm-4 rounded">
                          <div
                            class="row justify-content-between align-items-start"
                          >
                            <!-- profil -->
                            <div
                              class="col-12 col-sm-4 col-md-3 col-lg-2 left text-center mb-3 d-none d-md-block"
                            >
                              <img
                                src="${listProject[i].fotoProfil}"
                                alt=""
                                class="img-thumbnail rounded-circle w-50"
                              />
                              <div class="d-block mt-2">${
                                listProject[i].nama
                              }</div>
                            </div>

                            <!-- right -->
                            <div class="col-12 col-md-9 col-lg-10 right">
                              <div class="row">
                                <div
                                  class="col-12 col-lg-7 ps-0 pe-0 mb-2 d-flex align-items-center justify-content-between"
                                >
                                  <!-- left -->
                                  <div class="me-2">
                                    <h6 class="fw-semibold">${
                                      listProject[i].judul
                                    }</h6>
                               Search     <p class="d-block fw-semibold" style="font-size: smaller;">
                                      Anggaran ${listProject[i].harga}
                                    </p>
                                  </div>
                                  <p class="badge text-bg-success d-md-none">Open</p>
                                </div>

                                <!-- right -->
                                <div
                                  class="col-12 col-lg-5 mt-2 mt-lg-0 d-none d-md-block pe-0"
                                >
                                  <div
                                    class="d-flex handle-flex justify-content-lg-end gap-2"
                                  >
                                    ${listProject[i].penawaran}
                                  </div>
                                </div>
                              </div>

                              <!-- deskripsi -->
                              <div
                                class="mt-3 mt-lg-0 mb-3 d-flex flex-column gap-1"
                              >
                                <p style="font-size: 13px">
                                  ${listProject[i].deskripsi}
                                </p>
                              </div>

                              <!-- badge -->
                              <div class="d-flex flex-column">
                                <div
                                  class="mt-md-3 d-flex align-items-center justify-content-between gap-2"
                                >
                                  <div class="d-flex flex-wrap gap-1">
                                    ${listProject[i].badge.join("")}
                                  </div>
                                   <div class="d-md-none text-nowrap">
                                    <p class="m-auto" style="font-size: 12px;">${listProject[i].tanggal}</p>
                                  </div>
                                </div>
                              </div>

                              <hr class="d-md-none" />
                              <!-- status -->
                              <div
                                class="d-flex flex-column flex-md-row align-items-md-center justify-content-between pt-md-5"
                              >
                                <div
                                  class="d-none d-md-flex align-items-center gap-2 mb-3 mb-md-0"
                                >
                                  <p>status :</p>
                                  <p class="badge text-bg-success">
                                    ${listProject[i].status}
                                  </p>
                                </div>
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <div class="me-3 d-none d-md-block">
                                    ${listProject[i].tanggal}
                                  </div>
                                  <div
                                    class="right d-flex justify-content-between"
                                  >
                                    <div
                                      class="d-flex d-md-none align-items-center gap-2" style="width: 60%;"
                                    >
                                      <img
                                        src="${listProject[i].fotoProfil}"
                                        alt=""
                                        style="width: 30%"
                                        class="img-thumbnail rounded-circle"
                                      />
                                      <p class="d-block my-auto">${
                                        listProject[i].nama
                                      }</p>
                                    </div>
                                    <button
                                      type="button"
                                      class="btn-primary text-white rounded my-auto"
                                      style="font-size: small;"
                                    >
                                      Lihat Proyek
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
      `;
      }
    });
})();
// list job end
