const submitButtonEl = document.querySelector(".submit-button");
const errorMsg = document.querySelector(".error-msg");
const ratingContainerEl = document.querySelector(".rating-container");
const thankContainerEl = document.querySelector(".thank-container")

let ratingValue = null;
submitButtonEl.addEventListener("click", function()  {
  if(ratingValue){
    // jika ratingValue = true maka ratingContainer akan hilang dengan menambahkan kelas css hidden dan remove kelas hidden untuk thankContainerEl
    ratingContainerEl.classList.add("hidden");
    thankContainerEl.classList.remove("hidden");
  }else{
// cara menampilkan error message dengan submit button
  errorMsg.textContent = "Please choose the rating number";
  }
}
  

)