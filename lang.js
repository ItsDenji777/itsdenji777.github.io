const languageFiles = {
    en: 'en.json',
    fa: 'fa.json',
};

function loadLanguage() {
    let userLanguage = navigator.language || navigator.userLanguage;
    userLanguage = userLanguage.substring(0, 2);
    const languageFile = languageFiles[userLanguage] || languageFiles['en'];

    fetch(languageFile)
        .then(response => response.json())
        .then(data => {
            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
            console.log('Language file loaded', languageFile)
        })
        .catch(error => {
            console.error('Error loading language file:', error);
        });
}

loadLanguage();


onload = init;

function init() {
    // Detect the user's default language (e.g., browser language)
    var userDefaultLang = detectUserLanguage();

    // Apply the default language
    changeLanguage(userDefaultLang);

    // Sync localStorage with the default language on page load
    localStorage.setItem('buttonLang', userDefaultLang);

    // Set up the button click behavior
    var btn = document.getElementById("langbtn");
    var clickHandler = clickUpdates(userDefaultLang);
    btn.addEventListener("click", clickHandler, false);
}

function detectUserLanguage() {
    // Use browser language detection
    let userLanguage = navigator.language || navigator.userLanguage;
    return userLanguage.substring(0, 2); // Return language code, e.g., 'fa' or 'en'
}

function clickUpdates(initialLang) {
    var currentLang = localStorage.getItem('buttonLang') || initialLang;

    var next = function () {
        if (currentLang === 'fa') {
            changeLanguage('en');
            currentLang = 'en';
        } else {
            changeLanguage('fa');
            currentLang = 'fa';
        }
        localStorage.setItem('buttonLang', currentLang); // Store updated language
    };

    return next;
}

function changeLanguage(language) {
    // Example of applying the language logic (customize for your project)
    console.log(`Language set to: ${language}`);
}