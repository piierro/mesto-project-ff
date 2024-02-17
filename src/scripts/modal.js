// функция oткрытия попапа
function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown',  handleCloseByEsc);
};

// функция закрытия попапа
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown',  handleCloseByEsc);
};

// закрытие при клики на оверлей
const handleCloseModalByClick = (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
        closeModal(evt.target);
      } else if (evt.target.closest(".popup__close")) {
        closeModal(evt.target.closest(".popup"));
     }
};
// закрытие при клики esc
const handleCloseByEsc = (evt) => {
    if (evt.key === "Escape") {
      const activePopup = document.querySelector('.popup_is-opened');
      closeModal(activePopup);
    }
};

export { openModal, closeModal, handleCloseModalByClick };



