// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function removeCardElement(element) {
  element.remove();
};

function createCard(card) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click',  () => removeCardElement(cardElement));

    cardsContainer.append(cardElement);
}

initialCards.forEach ( (element) => createCard(element));


