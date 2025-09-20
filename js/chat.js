document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.querySelector(".chat-button");
    const chatMenu = document.querySelector(".chat-menu");

    let isOpen = false;

    chatButton.addEventListener("click", () => {
        if (!isOpen) {
            chatMenu.style.animation = "slideIn 0.3s";
            setTimeout(() => {
                chatMenu.style.opacity = "1";
                chatMenu.style.display = "block";
                isOpen = true;
            }, 300);
            
        } else {
            chatMenu.style.animation = "slideOut 0.3s";
            setTimeout(() => {
                chatMenu.style.opacity = "0";
                chatMenu.style.display = "none";
                isOpen = false;
            }, 300);
        }
    });
})