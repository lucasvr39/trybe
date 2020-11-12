/* eslint-disable no-undef */

// variables
const getStateElement = document.getElementById('state');
const consolidateInputDiv = document.getElementById('consolidate');
const buttonDeleteAll = document.getElementById('btnClear');
const userForm = document.getElementById('myForm');
const userData = document.getElementById('myForm').elements;
const stateOptions = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

// function to create state options in select html tag
function createStateOptions() {
  const selectState = document.getElementById('state');
  for (let i = 0; i < stateOptions.length; i += 1) {
    const addState = document.createElement('option');
    addState.value = stateOptions[i];
    addState.innerText = stateOptions[i];
    selectState.appendChild(addState);
  }
}

// function to get user's information and consolidate in one div below the form
function getDataFromUser(event) {
  event.preventDefault();
  for (let i = 0; i < userData.length; i += 1) {
    const newLine = document.createElement('p');
    if (
      userData[i].tagName !== 'FIELDSET' &&
      userData[i].tagName !== 'BUTTON' &&
      userData[i].checked !== true &&
      userData[i].tagName !== 'SELECT'
    ) {
      newLine.innerText = userData[i].value;
      consolidateInputDiv.appendChild(newLine);
    }
  }
}

// iterate over paragraphs created by function above to delete all of them
function deleteUserConsolidateInput() {
  while (consolidateInputDiv.firstChild) {
    consolidateInputDiv.removeChild(consolidateInputDiv.firstChild);
  }
}

// CALL TO EVENTS

// delete form's values and call function above to delete all data
buttonDeleteAll.addEventListener('click', () => {
  for (let i = 1; i < userData.length; i += 1) {
    userData[i].value = '';
  }
  deleteUserConsolidateInput();
});

userForm.addEventListener('submit', getDataFromUser);

// CALL TO FUNCTIONS

createStateOptions();
