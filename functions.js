
/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop2 = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
}); 
/* SCROLL EXPERIENCE */
srtop2.reveal('.experience .timeline', { delay: 400 });
srtop2.reveal('.experience .timeline .container', { interval: 400 });

// FUNZIONE PER POPUP CREDITS
document.querySelector(".credits-link").addEventListener("click", function () {
    document.getElementById("riconoscimenti").classList.add("active");
  });

  // Chiude il popup quando si clicca sulla "X"
  document.getElementById("chiudi").addEventListener("click", function () {
    document.getElementById("riconoscimenti").classList.remove("active");
  });

  // Chiude il popup cliccando fuori dal contenitore interno
  document.getElementById("riconoscimenti").addEventListener("click", function (e) {
    if (e.target.id === "riconoscimenti") {
      document.getElementById("riconoscimenti").classList.remove("active");
    }
  });

// Description: This file contains the functions used in the website.
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
function validateForm() {
    let isValid = true;
  
    // Ottieni campi del form e elementi per i messaggi di errore
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
  
    // Reset dei messaggi di errore e dei bordi
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    name.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
  
    // Validazione del nome (almeno 3 caratteri)
    if (name.value.trim().length < 2) {
      nameError.innerText = "Name must be at least 2 characters.";
      name.classList.add("error-border");
      isValid = false;
    }
  
    // Validazione dell'email con regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.innerText = "Please enter a valid email address.";
      email.classList.add("error-border");
      isValid = false;
    }
  
    // Validazione del messaggio (almeno 10 caratteri)
    if (message.value.trim().length < 3) {
      messageError.innerText = "Message must be at least 3 characters.";
      message.classList.add("error-border");
      isValid = false;
    }
  
    return isValid; // Invia il form solo se valido
  }
  
  
function sendMail() {
    if (validateForm()) {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_hqeganp";
    const templateID = "template_hfpqjua";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            swal("Message Sent!", "I'll get back to you as soon as possible!", "success");
        })
        .catch(err =>swal("Oops!", "Something went wrong!", "error"));
    }else{
        swal("Oops!", "Please fill the form correctly!", "error");
    }
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


//FUNCTIONS FOR PROJECTS EFFECTS
// title change
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Gaetano Roberto | Portfolio";
        }
        else {
            document.title = "Come Back To Portfolio";
        }
    });

// PROJECTS EFFECTS
// <!-- tilt js effect starts --> 
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
});
// <!-- tilt js effect ends -->

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/* SCROLL PROJECTS */
srtop.reveal('.portfolio-item', { interval: 200 });


// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// $(document).ready(function () {

//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         if (window.scrollY > 60) {
//             document.querySelector('#scroll-top').classList.add('active');
//         } else {
//             document.querySelector('#scroll-top').classList.remove('active');
//         }

//         // scroll spy
//         $('section').each(function () {
//             let height = $(this).height();
//             let offset = $(this).offset().top - 200;
//             let top = $(window).scrollTop();
//             let id = $(this).attr('id');

//             if (top > offset && top < offset + height) {
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find(`[href="#${id}"]`).addClass('active');
//             }
//         });
//     });


// });
