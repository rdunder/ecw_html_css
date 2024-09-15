
function switchTheme() {
    const themeContainer = document.getElementById("theme-container");
    const themeSwitch = document.getElementById("darkmode-switch");

    if (themeSwitch.checked == true) {
        themeContainer.classList.remove('clr-light');
        themeContainer.classList.add('clr-dark');
    } else {
        themeContainer.classList.remove('clr-dark');
        themeContainer.classList.add('clr-light');
    }
}