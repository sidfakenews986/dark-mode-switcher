document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle button for dark mode from the DOM
    const toggleButton = document.getElementById('dark-mode-toggle');
    // Retrieve the current mode from local storage, default to 'light'
    const currentMode = localStorage.getItem('dark-mode') || 'light';

    // If the current mode is dark, apply the dark mode class and update the button text
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.innerText = 'Light Mode aktivieren';
    }

    // Add click event listener to the toggle button to switch modes
    toggleButton.addEventListener('click', () => {
        // Toggle the dark mode class on the body
        document.body.classList.toggle('dark-mode');
        // Check if dark mode is now active
        const isDarkMode = document.body.classList.contains('dark-mode');
        // Save the current mode to local storage
        localStorage.setItem('dark-mode', isDarkMode ? 'dark' : 'light');
        // Update the button text based on the current mode
        toggleButton.innerText = isDarkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren';
    });
});