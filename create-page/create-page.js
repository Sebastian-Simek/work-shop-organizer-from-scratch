import { addParticipant, addWorkshop, checkAuth, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const inputForm = document.getElementById('input-form');
const selectEl = document.getElementById('select-form');
const workshopForm = document.getElementById('workshop-form');


window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.name = 'workshop_id';
        option.textContent = workshop.name;
        
        selectEl.append(option);
    }
});

workshopForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(workshopForm);
    const newInput = { name: data.get('name') };
    
    await addWorkshop(newInput);
    workshopForm.reset();
});

inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(inputForm);
    const newInput = {
        name: data.get('name'),
        contact: data.get('contact-info'),
        workshop_id: data.get('workshop_id')
    };
    await addParticipant(newInput);
    inputForm.reset();
});


logoutButton.addEventListener('click', () => {
    logout();
});
