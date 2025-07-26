const submitButtonEl = document.querySelector(".submit-button");
const errorMsg = document.querySelector(".error-msg");
const ratingContainerEl = document.querySelector(".rating-container");
const thankContainerEl = document.querySelector(".thank-container");
const rateButtonsEl = document.querySelectorAll(".rate-button");
const selectedEl = document.querySelector(".selected");

let ratingValue = null;


// Why doesn't rateButtonsEl directly use addEventListener? Because it needs to use foreach first to check each element that has a rateButtonsEl value.

// rateButton represents rateButtonsEl
rateButtonsEl.forEach(function(rateButton){
  // If the user clicks on a certain value, the value will be retrieved with getAttribute and then displayed with selectedEl 
  rateButton.addEventListener("click", function(){
      ratingValue = rateButton.getAttribute("value");

      selectedEl.textContent = `You selected ${ratingValue} out 5` ;
      
      if(ratingValue){
        errorMsg.textContent  = "";
      }
  })
})





submitButtonEl.addEventListener("click", function()  {
  if(ratingValue){
    // if ratingValue = true then ratingContainer will disappear by adding hidden css class and remove hidden class for thankContainerEl
    ratingContainerEl.classList.add("hidden");
    thankContainerEl.classList.remove("hidden");
  }else{
    // how to display error message with submit button
  errorMsg.textContent = "Please choose the rating number";
  }
}
  

)