import { addLike, removeLike, deleteCard } from './api.js';

const cardTemplate = document.querySelector('#card-template').content;

//удаление карточки
export function removeCardElement(element, cardId, deleteCard) {
  deleteCard(cardId)
  .then(() => {element.remove();})
  .catch((err) => {console.log(err);});
};

//добавление и удаления лайков
export function cardLike(evt, countElement, cardId) {
  const checkedLike = evt.classList.contains('card__like-button_is-active') ? removeLike : addLike;
  checkedLike (cardId)
    .then((data) => {
      evt.classList.toggle('card__like-button_is-active'); 
      countElement.textContent = data.likes.length;
    })
    .catch(err => console.log(err));
};

export function createCard(card, removeCardElement, cardLike, showImg, userId) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImg = cardElement.querySelector('.card__image');
    const cardLikeBtn = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeCount = cardElement.querySelector('.card__like-counter');
    const cardTitle = cardElement.querySelector('.card__title');

    cardTitle.textContent = card.name
    cardImg.src = card.link;
    cardImg.alt = card.name;
    cardLikeCount.textContent = card.likes.length;
    
    // удаление своей карточки
    if (card.owner._id === userId) {
      deleteButton.addEventListener('click', () => removeCardElement (cardElement, card._id, deleteCard));
    } else {deleteButton.setAttribute('style', 'display: none;')}

    if (card.likes.some(element => element._id === userId)) {
      cardLikeBtn.classList.add('card__like-button_is-active');
    }
    cardLikeBtn.addEventListener('click', () => cardLike(cardLikeBtn, cardLikeCount, card._id));

    cardImg.addEventListener("click", () => showImg(card));

    return cardElement;
};





