const canvas =
document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];
const hearts = [];

for (let i = 0; i < 300; i++) {stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005
    });
}
for (let i = 0; i < 100; i++) {hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.heigth,
        size: Math.random() * 8 + 8,
        speed: Math.random() * 0.5 + 0.2
    });
}
    
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {
        star.y += 0.2;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

        star.alpha += star.speed;

        if (star.alpha > 1 || star.alpha < 0) {
            star.speed *= -1;
        }

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

    });

    ctx.globalAlpha = 1;

    ctx.fillStyle = "#ff4d88";

    hearts.forEach(heart => {
        heart.y -= heart.speed;

        if (heart.y < -20) {
            heart.y = canvas.height + 20;
            heart.x = Math.random() * canvas.width;
        }

        ctx.font = '${heart.size}px Arial';
        ctx.fillText("❤️", heart.x, heart.y);
    });

    requestAnimationFrame(draw)
}

draw();