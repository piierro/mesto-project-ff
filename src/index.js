import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard } from './scripts/card.js';
import { openModal, closeModal, handleFormOverlay } from './scripts/modal.js';
import { removeCardElement } from './scripts/card.js';
import { cardLike } from './scripts/card.js';
import { enableValidation, clearValidation } from './scripts/validation';
import { getUserInfo, getInitialCards, editProfile, addNewCard, editAvatar } from './scripts/api.js';

const popupEditBtn = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close');
const editCard = document.querySelector('.popup_type_edit');
const cardsContainer = document.querySelector('.places__list');
const popupButton = document.querySelector(".popup__button");

const profileAddBtn = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.popup_type_new-card');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formEditProfile = document.querySelector("[name='edit-profile']");
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');

const formNewPlace = document.querySelector("[name='new-place']");
const typeImg = document.querySelector('.popup_type_image');
const placeName = formNewPlace.querySelector('.popup__input_type_card-name');
const link = formNewPlace.querySelector('.popup__input_type_url');
const popupImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const popupAvatarEdit = document.querySelector('.popup_type_avatar');
const formNewAvatar = document.querySelector("[name='newAvatar']");
const avatarInput = formNewAvatar.querySelector('.popup__input_type_url-ava');
const avatar = document.querySelector('.profile__image');
const popupAvatarEditOpen = document.querySelector('.profile__image-cover');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

let userId;

// Вызов функций отображения профиля и карточек с сервера
Promise.all([getUserInfo(), getInitialCards()])
.then(([user, cardsData]) => {
  userId = user._id;
  profileName.textContent = user.name;
  profileDescription.textContent = user.about;
  avatar.setAttribute('style', `background-image: url(${user.avatar});`);

  if (cardsData.length === 0) {
    initialCards.forEach ( (element) => addCard(element));
  } else {
    cardsData.forEach(element=> {
      cardsContainer.append(createCard(element, removeCardElement, cardLike, showImg, userId));
    });
  }
})
.catch((error) => {
  console.log(error);
});

// Функция, пока данные сохраняются
function renderLoading(isLoading) {
  popupButton.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

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

// открытие аватара
popupAvatarEditOpen.addEventListener("click", () => {
  openModal(popupAvatarEdit);
  formNewAvatar.reset()
});

// закрытие модальных окон по крестику
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => { closeModal(popup); });
  popup.addEventListener('mousedown', handleFormOverlay);
});

// функция открытия карточек
function showImg(card) {
  popupImg.src = card.link;
  popupImg.alt = card.name;
  popupCaption.textContent = card.name;

  openModal(typeImg);
};

// функция изменения иноформации в профиле
function handlerFormEditProfile(evt) {
  evt.preventDefault();
  renderLoading(true);

  editProfile(nameInput.value, jobInput.value)
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
    closeModal(editCard);
    clearValidation(formEditProfile, validationConfig);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  });
};

formEditProfile.addEventListener('submit', handlerFormEditProfile);

// функция добавления карточек
function forAddCard(evt) {
  evt.preventDefault();
  renderLoading(true);

  addNewCard(placeName.value, link.value)
  .then((data) => {
    const currentCard = {
      _id: data._id,
      name: data.name,
      link: data.link,
      likes: data.likes,
      owner: data.owner
    }
    cardsContainer.prepend(createCard(currentCard, removeCardElement, cardLike, showImg, userId));
    clearValidation(formNewPlace, validationConfig);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  });

  placeName.value = '';
  link.value = '';
  
  clearValidation(formNewPlace, validationConfig);
  closeModal(newCard);
};

formNewPlace.addEventListener('submit', forAddCard);

//функция изменения аватарки
function forAddAvatar(evt) {
  evt.preventDefault();
  renderLoading(true);

  editAvatar(avatarInput.value)
  .then((res) => {
    avatar.setAttribute('style', `background-image: url(${res.avatar});`);
    closeModal(popupAvatarEdit);
    clearValidation(formNewAvatar, validationConfig);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  });
}

formNewAvatar.addEventListener('submit', forAddAvatar);

enableValidation(validationConfig);


