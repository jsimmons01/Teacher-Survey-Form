const submit = document.getElementById("submit");
const modal = document.querySelector(".modal")

submit.addEventListener("click", (e)=> {
    e.preventDefault();

    modal.style.display = 'block';

})