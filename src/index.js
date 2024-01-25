import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard } from './scripts/card.js';
import { openModal, closeModal, handleFormOverlay } from './scripts/modal.js';
import { removeCardElement } from './scripts/card.js';
import { cardLike } from './scripts/card.js';

const popupEditBtn = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close');
const editCard = document.querySelector('.popup_type_edit');
const cardsContainer = document.querySelector('.places__list');

const profileAddBtn = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.popup_type_new-card');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formEditProfile = document.querySelector("[name='edit-profile']");
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

const typeImg = document.querySelector('.popup_type_image');
const placeName = document.querySelector('.popup__input_type_card-name');
const link = document.querySelector('.popup__input_type_url');

const formNewPlace = document.querySelector("[name='new-place']");
const popupImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

// открытие редактирования модального окна
popupEditBtn.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editCard);
});

// открытие добавления карточек
profileAddBtn.addEventListener("click", () => {
  openModal(newCard);
});

// закрытие модальных окон по крестику
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => { closeModal(popup); });
  popup.addEventListener('click', handleFormOverlay);
});

// функция изменения иноформации в профиле
function handlerFormEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value; 

  closeModal(editCard);
};

formEditProfile.addEventListener('submit', handlerFormEditProfile);

// функция добавления карточек
function forAddCard(evt) {
  evt.preventDefault();

  const cardAdd = {};
  cardAdd.name = placeName.value;
  cardAdd.link = link.value;

  const card = createCard(cardAdd, removeCardElement, cardLike, showImg);

  cardsContainer.prepend(card);
  
  placeName.value = '';
  link.value = '';

  closeModal(newCard);
};

formNewPlace.addEventListener('submit', forAddCard);

// функция открытия карточек
function showImg(card) {
  popupImg.src = card.link;
  popupImg.alt = card.name;
  popupCaption.textContent = card.name;

  openModal(typeImg);
};

function addCard(appendCard) {
  cardsContainer.append(createCard(appendCard, removeCardElement, cardLike, showImg));
}

initialCards.forEach ( (element) => addCard(element));
