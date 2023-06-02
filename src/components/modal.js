export const popupList = document.querySelectorAll('.popup')
export const openPopupNew = (popup) => {
    popup.classList.add('popup__open');
};

export const closePopupNew = (popup) => {
    popup.classList.remove('popup__open');
    document.addEventListener('keydown', closeByEscape);
};

// Закрытие попап по нажатию клавиши Escape
const closeByEscape = (e) => {
    if (e.key === 'Escape') {
        const popupOpen = document.querySelector('.popup__open');
        closePopupNew(popupOpen);
        popupOpen.removeEventListener('keydown', closeByEscape);
    };
};

// Закрытие попап по оверлею

popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('popup__open')) {
            popup.classList.toggle('popup__open');
        }
    });
});

