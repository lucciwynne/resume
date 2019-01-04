// CSS import
import '../sass/main.scss';

// Toggle theme
document.querySelector('.resume__theme--switch').addEventListener('click', () => {
    let darkThemeEnabled = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

if(JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-theme');
}