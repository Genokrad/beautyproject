const burger = document.querySelector(".burger");
const modal = document.querySelector(".mobile-menu__modal");
const cross = document.querySelector(".cross");

const openModal = () => {
  modal.classList.remove("visually-hidden");
  console.log("Модальное окно открыто");
};

const closeModal = () => {
  modal.classList.add("visually-hidden");
  console.log("Модальное окно закрыто");
};

burger.addEventListener("click", openModal);
cross.addEventListener("click", closeModal);
