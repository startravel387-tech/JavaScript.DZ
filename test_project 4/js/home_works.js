// GMAIL CHECKER
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'NOT OK';
        gmailResult.style.color = 'red';
    }
};

// MOVE BLOCK
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let posX = 0;
let posY = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {

    if (posX < offsetWidth && posY === 0) {
        posX++;
        childBlock.style.left = `${posX}px`;
        
        requestAnimationFrame(moveBlock);
    } else if (posX === offsetWidth && posY < offsetHeight) {
        posY++;
        childBlock.style.top = `${posY}px`;
        requestAnimationFrame(moveBlock);
    } else if (posX > 0 && posY === offsetHeight) {
        posX--;
        childBlock.style.left = `${posX}px`;
        requestAnimationFrame(moveBlock);
    } else if (posX === 0 && posY > 0) {
        posY--;
        childBlock.style.top = `${posY}px`;
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();

//TIMER
const secondsDisplay = document.querySelector(`#seconds`);
const startBtn = document.querySelector(`#start`);
const stopBtn = document.querySelector(`#stop`);
const resetBtn = document.querySelector(`#reset`);

let timer = 0;
let interval = null;

const startTimer = () => {
    if (!interval) {
        interval = setInterval(() => {
            timer++;
            secondsDisplay.innerHTML = timer;
        }, 1000);
    }
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
};

const resetTimer = () => {
    stopTimer();
    timer = 0;
    secondsDisplay.innerHTML = timer;
};

startBtn.onclick = () => startTimer();
stopBtn.onclick = () => stopTimer();
resetBtn.onclick = () => resetTimer();

// CHARACTER
const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-mX5vj0aYgY92g05-gIuP_pC7W5R88Pbyw&s";

const charactersList = document.querySelector('.characters-list');

const getCharacters = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/characters.json");
    request.responseType = "json";
    request.send();

    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            const characters = request.response;
            renderCharacters(characters);
        } else {
            console.error("Ошибка загрузки персонажей: " + request.status);
        }
    };
};

const renderCharacters = (data) => {
    charactersList.innerHTML = "";

    data.forEach(char => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        const photoUrl = char.hasOwnProperty('person_photo') && char.person_photo ? char.person_photo : DEFAULT_IMAGE;

        card.innerHTML = `
            <div class="character-photo">
                <img src="${photoUrl}" alt="${char.name}">
            </div>
            <div class="character-info">
                <h4>${char.name}</h4>
                <p>Age: ${char.age}</p>
            </div>
        `;

        charactersList.append(card);
    });
};

getCharacters();


const getMyBio = () => {
    const request = new XMLHttpRequest();
    
    request.open("GET", "../data/bio.json");
    request.responseType = "json";
    request.send();

    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            console.log("=== Моя Биография ===");
            console.log(request.response); 
        } else {
            console.error("Ошибка загрузки bio.json: " + request.status);
        }
    };
};

getMyBio();