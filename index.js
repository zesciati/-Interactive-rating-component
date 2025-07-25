const submitButtonEl = document.querySelector(".submit-button");
const errorMsg = document.querySelector(".error-msg");

// cara menampilkan error message dengan submit button
// Buat fungsi tanpa parameter, lalu jalankan kode ini saat tombol diklik.
submitButtonEl.addEventListener("click", () => {
  errorMsg.textContent = "halo";
}
  

)