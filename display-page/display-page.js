import { getWorkshops } from '../fetch-utils.js';

const workshopsEl = document.getElementById('workshop-container');

async function displayWorkshops() {
    const workshops = await getWorkshops();
    workshopsEl. textContent = '';
    
    for (let workshop of workshops) {
        const div = document.createElement('div');
        div.textContent = workshop.name;
        div.classList.add('workshops');

        const ul = document.createElement('ul');

        for (let participant of workshop.participants) {
            const li = document.createElement('li');
            li.textContent = `${participant.name} Contact Info: ${participant.contact}`;

            ul.append(li);
            div.append(ul);
        }
        
        
        
        workshopsEl.append(div); 
    }
    
}
displayWorkshops();

