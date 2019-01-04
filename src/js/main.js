// CSS import
import '../sass/main.scss';

// Toggle theme
document.querySelector('.resume__theme--switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});