document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('menu-container').classList.add('show');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('menu-container').classList.remove('show');
});