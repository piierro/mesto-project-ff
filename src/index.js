import './pages/index.css';
import { createCard } from './scripts/card.js';
import { openModal, closeModal, handleFormOverlay } from './scripts/modal.js';
import { removeCardElement } from './scripts/card.js';
import { cardsContainer } from './scripts/card.js';
import { cardLike } from './scripts/card.js';
export { showCard };

const popupEdit = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close');
const popup = document.querySelector('.popup');
const editCard = document.querySelector('.popup_type_edit');

const profileAddBtn = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.popup_type_new-card');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formElement = document.querySelector("[name='edit-profile']");
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

const typeImg = document.querySelector('.popup_type_image');
const placeName = document.querySelector('.popup__input_type_card-name');
const link = document.querySelector('.popup__input_type_url');

const form = document.querySelector("[name='new-place']");

popupEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editCard);
});

profileAddBtn.addEventListener("click", () => {
  openModal(newCard);
});

closePopupButtons.forEach((button) => {
  const popupAll = button.closest('.popup');
  button.addEventListener('click', () => { closeModal(popupAll); });
  popupAll.addEventListener('click', (evt) => { handleFormOverlay(evt); });
});

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value; 

  closeModal(popup);
};

formElement.addEventListener('submit', handleFormSubmit);

function showCard(card) {
  document.querySelector('.popup__image').src = card.link;
  document.querySelector('.popup__caption').textContent = card.name;

  openModal(typeImg);
};

export function forAddCard(evt) {
  evt.preventDefault();

  const cardAdd = {};
  cardAdd.name = placeName.value;
  cardAdd.link = link.value;

  const card = createCard(cardAdd, removeCardElement);

  cardsContainer.prepend(card);
  
  placeName.value = '';
  link.value = '';

  closeModal(newCard);
};

form.addEventListener('submit', forAddCard);

