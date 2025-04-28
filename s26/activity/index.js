const blackBtn = document.querySelector('#themeDark');
const redBtn = document.querySelector('#themeRed');
const greenBtn = document.querySelector('#themeGreen');
const resetBtn = document.querySelector('#themeReset');

const container = document.querySelector('#container');
const welcomeText = document.querySelector('#text');

function changeThemeToDark() {
    welcomeText.style.color = "white";
    welcomeText.style.fontFamily = "fantasy";
    container.style.backgroundColor = "black";
}

function changeThemeToRed() {
    welcomeText.style.color = "white";
    welcomeText.style.fontFamily = "monospace";
    container.style.backgroundColor = "red";
}

function changeThemeToGreen() {
    welcomeText.style.color = "white";
    welcomeText.style.fontFamily = "cursive";
    container.style.backgroundColor = "green";
}

function resetTheme() {
    welcomeText.style.color = "black";
    welcomeText.style.fontFamily = "sans-serif";
    container.style.backgroundColor = "white";
}

blackBtn.addEventListener('click', changeThemeToDark);
redBtn.addEventListener('click', changeThemeToRed);
greenBtn.addEventListener('click', changeThemeToGreen);
resetBtn.addEventListener('click', resetTheme);
