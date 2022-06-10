// import needed modules

// state

function getDefaultCity() {
    const defaultCity = {
        name: '',
        climate: 'tropical.png',
        slogan: [],
        design: 'modern.png',
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
const displaySection = document.getElementById('display-section');


const nameInput = creatorSection.querySelector('input');
const sloganText = creatorSection.querySelector('textarea');

const [climateSelect, designSelect] = creatorSection.querySelectorAll('select');
const [addSlogan, addButton] = creatorSection.querySelectorAll('button');

//display section variables
let [climateImage, designImage] = displaySection.querySelectorAll('img');
const cityName = displaySection.querySelector('h2');
const citySlogan = displaySection.querySelector('p');



    // display functions

function displayCreator() {

    nameInput.value = city.name;
    
    sloganContent = city.slogan;
    
    

}
    // optional: subscribe to events
        // event handlers - what needs to happen?

nameInput.addEventListener('input', () => {
    
    city.name = nameInput.value;
    displayCreator();
    displayBoard();
    
           
});
        
climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCreator();
    displayBoard();
    
    
});

addSlogan.addEventListener('click', () => {
    city.slogan.push(sloganContent);
    displayCreator();
    displayBoard();
    sloganText.value = '';
    
});

let sloganContent;

sloganText.addEventListener('input', () => {
    sloganContent = sloganText.value;
    displayCreator();
});

designSelect.addEventListener('change', ()=> {
    city.design = designSelect.value;
    displayCreator();
    displayBoard();
});

addButton.addEventListener('click', () => {
    cities.push(city);
    
    //displayCities();
    city = getDefaultCity();
    console.log(cities);
    displayBoard();

});

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
//Board
    // define and grab DOM elements

   
    
    // display functions

function displayBoard() {

    cityName.textContent = city.name;
    climateImage.src = './assets/images/climate/' + city.climate;
    designImage.src = './assets/images/design/' + city.design;
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
        const tbody = document.createElement('tbody');
        
        const nameDisplay = document.createElement('td');
        nameDisplay.textContent = city.name;
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


