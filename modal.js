
var modal = document.getElementById("myModal");
var survey =  document.getElementById("survey-form");

var btn = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
   setTimeout(function() {
    modal.style.display = "block";
  }, 5000);

}
span.onclick = function() {
  modal.style.display = "none";
  survey.reset();
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}

