import {url, key} from '../main.js'
import {getData} from './dataFetch.js'

// Existing HTML Elements
const main = document.getElementById('main');
const roverMenu = document.getElementById('roverMenu');
const roverPanel = document.getElementById('roverPanel');
const roverInfo = document.getElementById('roverInfo');
const roverGallery = document.getElementById('roverGallery');

// Rover Menu
export async function createMenu() {
    const rovers = await getData('api/rovers');
    for (const rover of rovers) {
        createRoverButton(rover);
    }

    const randomButton = document.createElement('div');
    randomButton.id = 'randomRover';
    randomButton.classList.add('roverButton');
    randomButton.textContent = 'Välj åt mig!'

    randomButton.addEventListener('click', async function (event) {
        event.stopPropagation();
        roverMenu.classList.add('hide');
        roverPanel.classList.remove('hide');

        const randomNum = 1 + Math.floor(Math.random() * 3);
        const randomRover = await getData('api/rovers/' + randomNum); // I realize I can just read from the 'rovers' array directly but I need to demo the second endpoint of my own API.

        showInfo(randomRover[0]);
        showRoverGallery(randomRover[0]);
    })
    roverMenu.appendChild(randomButton);
}

// Rover Button
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

// Top part of the Rover Panel lists Name, Description, weight, etc.
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

// Lower part grabs clickable photos from Sol 100
async function showRoverGallery(rover) {
    const roverData = await getData(url + rover.url + '/photos?sol=100&page=0&api_key=' + key);

    for (let index = 0; index < roverData.photos.length; index++) {
        const element = roverData.photos[index];

        const link = document.createElement('a');
        link.href = element.img_src;
        link.target = '_blank';
        roverGallery.appendChild(link);

        const roverThumb = document.createElement('img');
        roverThumb.alt = 'Photo';
        roverThumb.src = element.img_src;
        roverThumb.width = 100;
        link.appendChild(roverThumb);
    }
}

// This closes the Rover Pop-Up Panel and returns to Rover Menu.
document.addEventListener('click', event => {
    roverMenu.classList.remove('hide');
    roverPanel.classList.add('hide');
    removeChildren(roverInfo);
    removeChildren(roverGallery);
});

// Empties an element of its children.
function removeChildren(parent) {
    while (parent.firstElementChild) {
        parent.firstElementChild.remove();
    }
}