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
        createRoverButton(rover)
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
