const submit = document.getElementById("submit");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");


submit.addEventListener("click", (e)=> {
    e.preventDefault();

    modal.style.display = 'block';


});

closeModal.addEventListener('click', ()=> {
    modal.style.display = "none"
})