// import needed modules

// state

function getDefaultCity() {
    const defaultCity = {
        name: '',
        climate: 'tropical',
        slogan: [],
        design: 'modern',
    };
    return defaultCity;
}

let city = getDefaultCity();
const cities = [];

//creator section
//State: City Object
//events: input, changes, textbox, buttons that store city info

    // define and grab DOM elements
const creatorSection = document.getElementById('creator-section');

const nameInput = creatorSection.querySelector('input');
const sloganText = creatorSection.querySelector('textarea');
const [climateSelect, designSelect] = creatorSection.querySelectorAll('select');
const [addButton, addSlogan] = creatorSection.querySelectorAll('button');


    // display functions

function displayCreator() {

    nameInput.value = city.name;
    climateSelect.value = city.climate;
    sloganText.value = city.slogan;
    designSelect.value = city.design;

}
    // optional: subscribe to events
        // event handlers - what needs to happen?

nameInput.addEventListener('input', () => {
    
    city.name = nameInput.value;
    displayCreator();
    
           
});
        
climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCreator();
});

addSlogan.addEventListener('click', () => {
    city.slogan.push(sloganDisplay.value);
    displayCreator();
});

sloganText.addEventListener('input', () => {
    city.slogan = sloganText.value;
    displayCreator;
});

designSelect.addEventListener('change', ()=> {
    city.design = designSelect.value;
    displayCreator();
});

addButton.addEventListener('click', () => {
    cities.push(city);
    displayCities();
    city = getDefaultCity();
});

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
//Board
    // define and grab DOM elements
const displaySection = document.getElementById('display-section');
const [climateImage, designImage] = displaySection.querySelectorAll('img');
const cityName = displaySection.querySelector('h2');
const citySlogan = displaySection.querySelector('p');
   
    
    // display functions

function displayBoard() {

    cityName.textContent = city.name;
    climateImage.src = './assets/images/climate/' + city.climate + '.png';
    designImage.src = './assets/images/design/' + city.design + '.png';
    citySlogan.textContent = city.slogan;
    
}


    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
//Add City

const logSection = document.getElementById('log-section');
const list = logSection.querySelector('table');

function displayLogSection() {
    list.innerHTML = '';

    for (const city of cities) {
        const li = document.createElement('li');
        
    }

}
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions


