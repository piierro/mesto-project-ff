const cardTemplate = document.querySelector('#card-template').content;

export function removeCardElement(element) {
  element.remove();
};

export function cardLike(element) {
    element.classList.toggle('card__like-button_is-active')
};

export function createCard(card, removeCard, cardLike, showImg) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click',  () => removeCard(cardElement));

    const cardLikeBtn = cardElement.querySelector('.card__like-button');
    cardLikeBtn.addEventListener('click', () => cardLike(cardLikeBtn));

    const cardsImg = cardElement.querySelector('.card__image');
    cardsImg.addEventListener("click", () => showImg(card));

    return cardElement;
};





