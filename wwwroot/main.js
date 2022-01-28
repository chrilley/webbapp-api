// NASA API Configuration
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const key = 'dTWaCG83goCFI2yRG0ucxYRAx7eMOmBbyyqdzbOY';

// Global Elements
const main = document.getElementById('main');
const roverMenu = document.getElementById('roverMenu');
const roverPanel = document.getElementById('roverPanel');
const roverInfo = document.getElementById('roverInfo');
const roverGallery = document.getElementById('roverGallery');

async function getData(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
}

async function startup() {
    const rovers = await getData('/api/rovers');
    console.log(rovers);
}

async function createMenu() {
    const rovers = await getData('api/rovers');
    for (const rover of rovers) {
        createRoverButton(rover);
    }

    const randomButton = document.createElement('div');
    randomButton.id = 'randomRover';
    randomButton.classList.add('roverButton');
    randomButton.textContent = 'Välj en slumpmässig strövare!'

    randomButton.addEventListener('click', async function (event) {
        event.stopPropagation();
        roverMenu.classList.add('hide');
        roverPanel.classList.remove('hide');

        const randomNum = 1 + Math.floor(Math.random() * 3);
        const randomRover = await getData('api/rovers/' + randomNum); // I realize I can just grab from 'rovers' array but this is to demo the second endpoint of my own API; getRoverById()
        console.log(randomRover);

        showInfo(randomRover);
        showRoverGallery(randomRover);
    })
    roverMenu.appendChild(randomButton);
}

function createRoverButton(rover) {
    const roverButton = document.createElement('div');

    roverButton.id = rover.name;
    roverButton.classList.add('roverButton');
    roverButton.textContent = rover.name;

    roverButton.addEventListener('click', function (event) {
        event.stopPropagation();
        roverMenu.classList.add('hide');
        roverPanel.classList.remove('hide');
        showInfo(rover);
        showRoverGallery(rover);
    });

    roverMenu.appendChild(roverButton);
}

async function showInfo(rover) {
    const roverName = document.createElement('h3');
    roverName.textContent = rover.name;
    roverName.classList.add('infoItem');
    roverInfo.appendChild(roverName);

    const roverWeight = document.createElement('h5');
    roverWeight.textContent = "Vikt: " +rover.weight + " kg";
    roverInfo.appendChild(roverWeight);

    const roverWheels = document.createElement('h5');
    roverWheels.classList.add('infoItem');
    roverWheels.textContent = "Antal hjul: " + rover.wheelCount + " st.";
    roverInfo.appendChild(roverWheels);

    const roverDescription = document.createElement('h5');
    roverDescription.textContent = rover.description;
    roverDescription.classList.add('infoItem');
    roverInfo.appendChild(roverDescription);
}

async function showRoverGallery(rover) {
    const roverData = await getData(url + rover.url + '/photos?sol=1000&page=0&api_key=' + key);

    for (let index = 0; index < roverData.photos.length; index++) {
        const element = roverData.photos[index];

        const roverThumb = document.createElement('img');
        roverThumb.alt = 'Photo';
        roverThumb.src = element.img_src;
        roverThumb.width = 100;
        roverGallery.appendChild(roverThumb);
    }
}

function removeChildren(parent) {
    while (parent.firstElementChild) {
        parent.firstElementChild.remove();
    }
}

startup();
createMenu();

document.addEventListener('click', event => {
        roverMenu.classList.remove('hide');
        roverPanel.classList.add('hide');
        removeChildren(roverInfo);
        removeChildren(roverGallery);
});
