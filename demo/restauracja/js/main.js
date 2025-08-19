// prosty JS do menu mobilnego i modal
const hambBtn = document.getElementById("hambBtn");
const nav = document.querySelector("nav");
hambBtn &&
  hambBtn.addEventListener("click", () => {
    const isHidden = getComputedStyle(nav).display === "none";
    nav.style.display = isHidden ? "flex" : "none";
  });

// modal
const modalBg = document.getElementById("modalBg");
const reserveBtn = document.getElementById("reserveBtn");
const closeModalBtn = document.getElementById("closeModal");

function openModal() {
  modalBg.style.display = "flex";
  modalBg.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modalBg.style.display = "none";
  modalBg.setAttribute("aria-hidden", "true");
}

reserveBtn && reserveBtn.addEventListener("click", openModal);
closeModalBtn && closeModalBtn.addEventListener("click", closeModal);
modalBg &&
  modalBg.addEventListener("click", (e) => {
    if (e.target === modalBg) closeModal();
  });

// accessibility: close modal on Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
