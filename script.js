document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentMode = localStorage.getItem('dark-mode') || 'light';

    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.innerText = 'Light Mode aktivieren';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode ? 'dark' : 'light');
        toggleButton.innerText = isDarkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren';
    });
});