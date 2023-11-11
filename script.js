let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.onclick = (e) => {
        e.preventDefault();

        let overlay = document.createElement("span");
        overlay.classList.add("overlay");

        let x = e.clientX - button.offsetLeft;
        let y = e.clientY - button.offsetTop;

        overlay.style.top = y + "px";
        overlay.style.left = x + "px";

        button.appendChild(overlay);
        setTimeout(() => overlay.remove(), 500);
    }
});
