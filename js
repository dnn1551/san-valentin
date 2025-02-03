document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".message", { opacity: 1, y: -20, duration: 2 });

    let maxHearts = 30;
    let hearts = [];

    function createHeart() {
        if (hearts.length >= maxHearts) return;

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);
        hearts.push(heart);

        let size = Math.random() * 20 + 10;
        heart.style.fontSize = ${size}px;
        heart.style.left = ${Math.random() * 100}vw;
        heart.style.animationDuration = ${Math.random() * 5 + 3}s;

        setTimeout(() => {
            heart.remove();
            hearts.shift();
        }, 5000);
    }

    setInterval(createHeart, 500);
});

// Función para abrir la primera carta
function openCard() {
    let card = document.getElementById("card1");
    card.style.opacity = "1";
    card.style.transform = "translate(-50%, -50%) scale(1)";
}

// Función para abrir la segunda carta
function openCard2() {
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");

    // Cerrar la primera carta
    card1.style.opacity = "0";
    card1.style.transform = "translate(-50%, -50%) scale(0)";

    // Mostrar la segunda carta
    card2.style.opacity = "1";
    card2.style.transform = "translate(-50%, -50%) scale(1)";
}

// Función para cerrar la carta
function closeCard() {
    let card2 = document.getElementById("card2");
    card2.style.opacity = "0";
    card2.style.transform = "translate(-50%, -50%) scale(0)";
}
