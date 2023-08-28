const burger = document.querySelector(".burger");
const modal = document.querySelector(".mobile-menu__modal");
const cross = document.querySelector(".cross");

const openModal = () => {
  modal.classList.remove("visually-hidden");
  document.body.style.overflow = "hidden";
  console.log("Модальное окно открыто");
};

const closeModal = () => {
  modal.classList.add("visually-hidden");
  console.log("Модальное окно закрыто");
  document.body.style.overflow = "";
};

burger.addEventListener("click", openModal);
cross.addEventListener("click", closeModal);
