import { skills } from './skills.js';

    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        // Adjust if birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    function createSkillElement(skill) {
// Seleziona il contenitore dove verranno inserite le competenze
// const skillsContainer = document.getElementById('skillsContainer');

// // Ciclo per generare dinamicamente le competenze
// skills.forEach(skill => {
//     // Crea il div contenitore della barra
//     const skillDiv = document.createElement('div');
//     skillDiv.classList.add('bar');

//     // Crea il div info per l'immagine e il nome
//     const infoDiv = document.createElement('div');
//     infoDiv.classList.add('info');

//     // Crea l'immagine dell'icona
//     const img = document.createElement('img');
//     img.src = skill.icon;
//     img.alt = skill.name;

//     // Crea lo span con il nome della competenza
//     const span = document.createElement('span');
//     span.textContent = skill.name;

//     // Aggiungi l'immagine e il nome nel div info
//     infoDiv.appendChild(img);
//     infoDiv.appendChild(span);

//     // Aggiungi il div info nel div della barra
//     skillDiv.appendChild(infoDiv);

//     // Aggiungi il div della barra al container principale
//     skillsContainer.appendChild(skillDiv);
// });
    }
    // Insert the calculated age into the HTML
    document.getElementById('age').innerText = calculateAge('2001-01-18');
    document.getElementById('year').innerText = new Date().getFullYear();
    // createSkillElement(skills);
