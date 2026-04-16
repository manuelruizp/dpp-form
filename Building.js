let bIndex = 0; // Building Counter
let lIndex = 0; // Level Counter
let aIndex = 0; // Apartment Counter

function addBuilding() {
    bIndex++;
    const container = document.getElementById('buildingContainer');
    const template = document.getElementById('buildingTemplate').innerHTML;
    
    // Replace IDs to keep radio buttons groups unique
    const html = template.replace(/_B_ID_/g, bIndex);
    
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelector('.building-title').innerText = `EDIFICIO #${bIndex}`;
    container.appendChild(div);
}

function addLevel(btn, bId) {
    lIndex++;
    const container = btn.previousElementSibling; // level-container
    const template = document.getElementById('levelTemplate').innerHTML;
    
    const html = template.replace(/_L_ID_/g, `B${bId}L${lIndex}`);
    
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelector('.level-title').innerText = `NIVEL #${lIndex}`;
    container.appendChild(div);
}

function addApartment(btn, lId) {
    aIndex++;
    const container = btn.previousElementSibling; // apartment-container
    const template = document.getElementById('apartmentTemplate').innerHTML;
    
    // Unique ID for the radios in this specific apartment
    const html = template.replace(/_A_ID/g, `L${lId}A${aIndex}`);
    
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelector('.apt-title').innerText = `APARTAMENTO #${aIndex}`;
    container.appendChild(div);
}