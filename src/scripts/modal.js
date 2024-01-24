// функция oткрытия попапа
function openModal(popup) {
    popup.classList.add('popup_is-opened');
    popup.classList.add('popup_is-animated');
    document.addEventListener('keydown',  handleKeydown);
};

// функция закрытия попапа
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
};

// закрытие при клики на оверлей
const handleFormOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        const overlay = document.querySelector('.popup_is-opened')
       closeModal(overlay);
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



