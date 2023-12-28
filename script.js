const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const backgroundMusic = document.getElementById("backgroundMusic");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "itttss youuuuuuuuu always you,ginnnnnnn my babyyyyyy";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "No, ITSS YOUUUUUU U DUMMY";
    gif.src = "pretty/mad cat.gif";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Play background music
backgroundMusic.play();
