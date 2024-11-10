// Get the button and the skills section
const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.querySelector('.about.skills');

// Add event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';  // Change button text to 'Hide Skills'
    } else {
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';  // Change button text to 'Show Skills'
    }
});