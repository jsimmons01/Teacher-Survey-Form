
var modal = document.getElementById("myModal");
var survey =  document.getElementById("survey-form");

var btn = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];

span.addEventListener("click",submitForm)
function submitForm() {
  survey.submit();
btn.onclick = function() {
   modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";

}
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}

