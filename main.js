// Покраска всех карточек

const productCards = document.querySelectorAll(".card-container");
const changeColorAllButton = document.querySelector(
  "#change-color-all-cards-button"
);
const mintGreenColorHash = "#E8F5E9";

changeColorAllButton.addEventListener("click", () => {
  productCards.forEach(
    (card) => (card.style.backgroundColor = mintGreenColorHash)
  );
});

// Покраска первой карточки
const powderBlueColorHash = "#B0E0E6";

const firstProductCard = document.querySelector(".card-container");
const changeColorFirstButton = document.querySelector(
  "#first-card-color-change-button"
);

changeColorFirstButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = powderBlueColorHash;
});

// переход на страницу

const openGooglePage = document.querySelector("#open-google-button");

openGooglePage.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на "Google.com"?');

  if (answer == true) {
    window.open("https://google.com");
  }
}

// Вывод console.log

const title = document.querySelector(".title");

title.addEventListener("mouseover", () => outputConsoleLog(title.innerText));

function outputConsoleLog(message) {
  console.log(message);
}

// кнопка, меняющая цвет

const toggleColorButton = document.querySelector("#toggle-color-button");

toggleColorButton.addEventListener("click", () =>
  toggleColorButton.classList.toggle("button-orange")
);
