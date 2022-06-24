var buyTicket = document.querySelectorAll('#buy-ticket__btn')
var displayModal = document.querySelector('.modal')
var btnClose = document.getElementById('btn-close')

function addModal() {
    displayModal.classList.add('open')
}

for (var key of buyTicket) {
    key.addEventListener('click', addModal)
}

btnClose.onclick = function() {
    displayModal.classList.remove('open')
}