const 
    button = document.querySelector('button'),
    toggleButton = document.querySelector('.toggle-button'),
    html = document.querySelector('html')

const changeIcon = icon => 
    toggleButton.innerHTML = icon

const applyDarkMode = () => {
    html.classList.add('dark-mode')
    toggleButton.classList.add('toggle')
    changeIcon('&#127769;')
}

const applyLightMode = () => {
    html.classList.remove('dark-mode')
    toggleButton.classList.remove('toggle')
    changeIcon('&#127774;')
}

button.addEventListener('click', () => 
    html.classList.contains('dark-mode') ? applyLightMode() : applyDarkMode())