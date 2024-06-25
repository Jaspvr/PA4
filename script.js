const buttons = document.querySelectorAll('.navigateButton');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        alert(`Navigating to ${section}`);
        // Here you can add the logic to navigate or show different sections
    });
});

document.getElementById('navigateDeeper').addEventListener('click', function() {
    window.location.href = 'depth2.html';
});
