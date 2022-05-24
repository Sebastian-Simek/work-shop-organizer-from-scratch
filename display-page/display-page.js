import { getWorkshops } from '../fetch-utils.js';

const workshopsEl = document.getElementById('workshop-container');
console.log(workshopsEl);

async function displayWorkshops() {
    const workshops = await getWorkshops();
    workshopsEl. textContent = '';
    
    for (let workshop of workshops) {
        const div = document.createElement('div');
        div.textContent = workshop.name;
        div.classList.add('workshops');
        workshopsEl.append(div); 
    }
    
}
displayWorkshops();


window.addEventListener('load', async () => {
    await displayWorkshops();
});