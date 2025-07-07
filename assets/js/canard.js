
canard.src = document.getElementById('canard');

document.addEventListener('DOMContentLoaded', function() {
    canard.id = 'canard';
    document.body.appendChild(canard);

    function moveCanard() {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        canard.style.left = x + 'px';
        canard.style.bottom = y + 'px';
        canard.classList.add('moving');

        setTimeout(() => canard.classList.remove('moving'), 2000);
    }

    setInterval(moveCanard, 4000); // Toutes les 4 secondes

    canard.addEventListener('click', function() {
        const audio = new Audio('/song/quack_5.mp3');
        audio.play().catch(function(error) {
            console.error('Erreur lecture son :', error);
        });
    });
});