// import needed modules

// state

function getDefaultCity() {
    const defaultCity = {
        name: '',
        climate: 'tropical',
        slogan: '',
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

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const sloganText = document.getElementById('slogan-text');
const SloganDisplay = document.getElementById('slogan-display');
const [climateSelect, designSelect] = creatorSection.querySelectorAll('change');
const addButton = document.getElementById('add-button');


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
    nameDisplay.textContent = nameInput.value;
    displayCreator();        
});
        
climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCreator();
});

sloganText.addEventListener('input', () => {
    SloganDisplay.textContent = sloganText.value;
    displayCreator();
});

designSelect.addEventListener('change', ()=> {
    city.design = designSelect.value;
    displayCreator();
});



        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
//Board
   
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
//Add City
    
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions


