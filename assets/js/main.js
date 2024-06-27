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
                              <h5 class="card-title fw-bold">${hasil[i].judul}</h5>
                              <p class="card-text">
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
