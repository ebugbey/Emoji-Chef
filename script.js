const dish = document.querySelector(".dish");

const button = document.querySelector("button");

const cook = () => {
  dish.textContent = "🍳";
};

button.addEventListener("click", cook);
