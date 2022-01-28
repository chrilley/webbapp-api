// NASA API Configuration
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const key = 'dTWaCG83goCFI2yRG0ucxYRAx7eMOmBbyyqdzbOY';

async function getData(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
}

async function startup() {
    const rovers = await getData('/api/rovers');
    console.log(rovers);
}

async function roverMenu() {
    const rovers = await getData('api/rovers');
    for (const rover of rovers) {
        createRoverButton(rover);
        getPhoto(rover);
    }
}

startup();
roverMenu();

function createRoverButton(rover) {
    const roverButton = document.createElement('div');
    const roverMenu = document.getElementById('roverMenu');

    roverButton.id = rover.name;
    roverButton.classList.add('roverButton');
    roverButton.textContent = rover.name;

    roverButton.addEventListener('click', function () {
        console.log(roverButton.id + " was clicked!");
    })

    roverMenu.appendChild(roverButton)
}

async function getPhoto(rover) {
    const roverButton = document.getElementById(rover.name);
    const roverPhoto = document.createElement('div');

    const roverPhotoImg = document.createElement('img');
    const roverData = await getData(url + rover.url + '/photos?sol=1000&page=0&api_key=' + key);

    console.log(roverData);
    roverPhotoImg.src = roverData.photos[0].img_src;
    console.log(roverData.photos[0]);

    roverPhoto.appendChild(roverPhotoImg);
    roverButton.appendChild(roverPhoto);
}