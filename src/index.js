import './pages/index.css';
// import { initialCards } from './scripts/cards.js';
import { createCard } from './scripts/card.js';
import { openModal, closeModal, handleCloseModalByClick } from './scripts/modal.js';
import { removeCardElement } from './scripts/card.js';
import { handleLikeClick } from './scripts/card.js';
import { enableValidation, clearValidation } from './scripts/validation';
import { getUserInfo, getInitialCards, editProfile, addNewCard, editAvatar } from './scripts/api.js';

const popupEditBtn = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close');
const editCard = document.querySelector('.popup_type_edit');
const cardsContainer = document.querySelector('.places__list');

const profileAddBtn = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.popup_type_new-card');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formEditProfile = document.querySelector("[name='edit-profile']");
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');

const formNewPlace = document.querySelector("[name='new-place']");
const popupTypeImage = document.querySelector('.popup_type_image');
const placeNameInput = formNewPlace.querySelector('.popup__input_type_card-name');
const placeLinkInput= formNewPlace.querySelector('.popup__input_type_url');
const popupImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const popupAvatarEdit = document.querySelector('.popup_type_avatar');
const formNewAvatar = document.querySelector("[name='newAvatar']");
const avatarInput = formNewAvatar.querySelector('.popup__input_type_url-ava');
const avatar = document.querySelector('.profile__image');
const popupAvatarEditOpen = document.querySelector('.profile__image-cover');

const formEditProfileBtn = formEditProfile.querySelector(".popup__button");
const formNewPlaceBtn = formNewPlace.querySelector(".popup__button");
const formNewAvatarBtn = formNewAvatar.querySelector(".popup__button");

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
  avatar.style.backgroundImage = `url('${user.avatar}')`;

  cardsData.forEach(element=> {
    cardsContainer.append(createCard(element, removeCardElement, handleLikeClick, showImg, userId));
  });
})
.catch((error) => {
  console.log(error);
});

// открытие редактирования модального окна
popupEditBtn.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editCard);
  clearValidation(formEditProfile, validationConfig);
});

// открытие добавления карточек
profileAddBtn.addEventListener("click", () => {
  openModal(newCard);
});

// открытие аватара
popupAvatarEditOpen.addEventListener("click", () => {
  openModal(popupAvatarEdit);
  formNewAvatar.reset();
  clearValidation(formNewAvatar, validationConfig);
});

// закрытие модальных окон по крестику
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => { closeModal(popup); });
  popup.addEventListener('mousedown', handleCloseModalByClick);
});

// функция открытия карточек
function showImg(card) {
  popupImg.src = card.link;
  popupImg.alt = card.name;
  popupCaption.textContent = card.name;

  openModal(popupTypeImage);
};

// функция изменения иноформации в профиле
function handlerFormEditProfile(evt) {
  evt.preventDefault();
  formEditProfileBtn.textContent = 'Сохранение...';

  editProfile(nameInput.value, jobInput.value)
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
    closeModal(editCard);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    formEditProfileBtn.textContent = 'Сохранить';
  });
};

formEditProfile.addEventListener('submit', handlerFormEditProfile);

// функция добавления карточек
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  formNewPlaceBtn.textContent = 'Сохранение...';

  addNewCard(placeNameInput.value, placeLinkInput.value)
  .then((data) => {
    const addCard = createCard(data, removeCardElement, handleLikeClick, showImg, userId);
    cardsContainer.prepend(addCard);
    closeModal(newCard);
    formNewPlace.reset();
    clearValidation(formNewPlace, validationConfig);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    formNewPlaceBtn.textContent = 'Сохранить';
  });
};

formNewPlace.addEventListener('submit', handleAddCardFormSubmit);

//функция изменения аватарки
function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();
  formNewAvatarBtn.textContent = 'Сохранение...';

  editAvatar(avatarInput.value)
  .then((res) => {
    avatar.style.backgroundImage = `url('${res.avatar}')`;
    closeModal(popupAvatarEdit);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    formNewAvatarBtn.textContent = 'Сохранить';
  });
}

formNewAvatar.addEventListener('submit', handleEditAvatarFormSubmit);

enableValidation(validationConfig);


