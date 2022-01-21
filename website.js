function showHideButtonProjects() {
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

// Currently just a copy of projects function
// TODO: Create function with parameters for show-hide buttons
function showHideButtonWork() {
    var work_section = document.getElementById('work-section-sub');
    var displaySetting = work_section.style.display;
    var show_hide_button = document.getElementById('show-hide-work');

    if (displaySetting == 'none') {
        work_section.style.display = 'block';
        show_hide_button.innerHTML = 'Hide'
    } else {
        work_section.style.display = 'none';
        show_hide_button.innerHTML = 'Show';
    }
}
