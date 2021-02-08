const buttons = document.querySelectorAll("button");

const cook = (event) => {
  const theButtonThatGotClicked = event.target;
  const theClosestMeal = theButtonThatGotClicked.closest(".meal");
  const theDishInside = theClosestMeal.querySelector(".dish");
  const theEmojiToCook = theDishInside.textContent;

  const cookedEmojis = {
    "🐓": "🍗",
    "🐄": "🍔",
    "🥔": "🍟",
    "🌽": "🍿",
    "🥚": "🍳",
    "🦐": "🍤",
  };

  theDishInside.textContent = cookedEmojis[theEmojiToCook];
  theButtonThatGotClicked.disabled = true;
  theButtonThatGotClicked.textContent = "Cooked!";
};

buttons.forEach((button) => button.addEventListener("click", cook));
