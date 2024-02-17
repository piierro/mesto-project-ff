// функция oткрытия попапа
function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown',  handleKeydown);
};

// функция закрытия попапа
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown',  handleKeydown);
};

// закрытие при клики на оверлей
const handleFormOverlay = (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
        closeModal(evt.target);
      }
    if (evt.target.closest(".popup__close")) {
        closeModal(evt.target.closest(".popup"));
     }
};
// закрытие при клики esc
const handleKeydown = (evt) => {
    if (evt.key === "Escape") {
      const activePopup = document.querySelector('.popup_is-opened');
      closeModal(activePopup);
    }
};

export { openModal, closeModal, handleFormOverlay };



