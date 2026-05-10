const btnOpen = document.querySelector('#btn-get');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal_close');

const showModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modal.onclick = (event) => {
    if(event.target == modal){
        closeModal();
    }
}

btnOpen.onclick = showModal;
btnClose.onclick = closeModal;