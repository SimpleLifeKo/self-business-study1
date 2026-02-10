const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Dark Mode Logic
const enableDarkMode = () => {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = '☀️'; // Sun icon for light mode
    localStorage.setItem('darkMode', 'disabled');
};

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode(); // Ensure sun icon is set on load if not dark mode
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});


// Lotto Number Generation Logic
generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = ''; // Clear previous numbers
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    });
});