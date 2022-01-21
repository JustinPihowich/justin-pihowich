function showHideButton() {
    var projects_section = document.getElementById('projects-section-sub');
    var displaySetting = projects_section.style.display;
    var show_hide_button = document.getElementById('show-hide-projects');

    if (displaySetting == 'none') {
        projects_section.style.display = 'block';
        show_hide_button.innerHTML = 'Hide'
    } else {
        projects_section.style.display = 'none';
        show_hide_button.innerHTML = 'Show';
    }
}