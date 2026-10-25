
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});
