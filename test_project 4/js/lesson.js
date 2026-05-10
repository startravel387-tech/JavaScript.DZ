const phoneInput = document.querySelector('#phone_input');
const phoneBtn = document.querySelector('#phone_button'); 
const phoneResult = document.querySelector('#phone_result');

const regex = /^(?:\+996\s?|0)\s?(?:[3579]\d{2}|22\d)\s?\d{3}\s?\d{3}$/;

phoneBtn.onclick = () => {
    if (regex.test(phoneInput.value)) {
        phoneResult.style.color = 'green';
        phoneResult.innerHTML = 'Phone is valid';
    } else {
        phoneResult.style.color = 'red';
        phoneResult.innerHTML = 'Phone is invalid';
    }
}

const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items')


const hideBlocks = () => {
    tabBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showBlock = (index = 0) => {
    tabBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
}

hideBlocks();
showBlock();

tabsParent.onclick = (event) => {
    if(event.target.tagName.toLowerCase() === 'button'){
        tabs.forEach((item, index) => {
            if(event.target === item){
                hideBlocks();
                showBlock(index)
            }
        })
    }
}

// const card = document.querySelector('.card');
// const btnNext = document.querySelector('#btn-next');

// btnNext.onclick = () => {
//     const request = new XMLHttpRequest();

// }