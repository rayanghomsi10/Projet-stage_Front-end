function validateForm() {
    // Récupération des champs du formulaire
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwor = document.getElementById('passwor');

    // Validation des champs
    let isValid = true;

    if (nom.value === '') {
        nom.classList.add('error');
        nom.nextElementSibling.innerHTML = 'Veuillez entrer votre nom';
        isValid = false;
    } else {
        nom.classList.remove('error');
        nom.nextElementSibling.innerHTML = '';
    }

    if (prenom.value === '') {
        prenom.classList.add('error');
        prenom.nextElementSibling.innerHTML = 'Veuillez entrer votre prénom';
        isValid = false;
    } else {
        prenom.classList.remove('error');
        prenom.nextElementSibling.innerHTML = '';
    }

    if (email.value === '') {
        email.classList.add('error');
        email.nextElementSibling.innerHTML = 'Veuillez entrer votre adresse email';
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        email.classList.add('error');
        email.nextElementSibling.innerHTML = 'Veuillez entrer une adresse email valide';
        isValid = false;
    } else {
        email.classList.remove('error');
        email.nextElementSibling.innerHTML = '';
    }

    if (password.value === '') {
        password.classList.add('error');
        password.nextElementSibling.innerHTML = 'Veuillez entrer votre mot de passe';
        isValid = false;
    } else {
        password.classList.remove('error');
        password.nextElementSibling.innerHTML = '';
    }
    if (passwor.value !== password.value){
        passwor.classList.add('error');
        passwor.nextElementSibling.innerHTML = 'le mot de passe est different';
        isValid = false;
    }else {
        password.classList.remove('error');
        password.nextElementSibling.innerHTML = '';
    }

}

function isValidEmail(email) {
    // Vérifie que l'adresse email est valide
    const emailRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?@[0-9]{4}\.[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
}

//MENU BURGER
