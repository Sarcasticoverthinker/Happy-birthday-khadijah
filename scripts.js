document.getElementById('surpriseBtn').addEventListener('click', function() {
    document.getElementById('surpriseContent').classList.toggle('hidden');
    
    let audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
    }
    
    gsap.from(".gallery img", { opacity: 0, y: 50, duration: 1, stagger: 0.5 });

    document.getElementById('fireworks').style.opacity = "1";
});

document.getElementById('unlockMessage').addEventListener('click', function() {
    document.getElementById('hiddenMessage').classList.toggle('hidden');
});

function startCountdown() {
    let birthday = new Date("February 14, 2025 00:00:00").getTime();  // Change date to her birthday
    let timer = setInterval(function() {
        let now = new Date().getTime();
        let distance = birthday - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `<h2>Countdown to Khadijah's Birthday: ${days}d ${hours}h ${minutes}m ${seconds}s</h2>`;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "<h2>It's Khadijah's Birthday! 🎉</h2>";
        }
    }, 1000);
}

startCountdown();
