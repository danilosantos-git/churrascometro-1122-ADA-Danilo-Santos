const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
        themeToggle.textContent = 'Tema Claro';
    } else {
        themeToggle.textContent = 'Tema Escuro';
    }
}

themeToggle.addEventListener('click', function () {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Tema Claro';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.textContent = 'Tema Escuro';
        localStorage.setItem('theme', 'light-theme');
    }
});
