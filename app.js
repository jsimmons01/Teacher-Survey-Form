const submit = document.getElementById("submit");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const form = document.getElementById("survey-form");


submit.addEventListener("click", (e)=> {
    e.preventDefault();

    modal.style.display = 'block';


});

closeModal.addEventListener('click', ()=> {
    modal.style.display = 'none';
    form.reset();
})