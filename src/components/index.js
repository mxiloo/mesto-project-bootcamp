import '../pages/index.css';

// Переменные
import {modalPost, modalImage, textareaName, textareaDescription, modalProfile, description, name, modal__image, modal__text, editBtn, closeBtn, addBtn, closeBtnPost, popups, createText, createSrc, modalName, modalDescription} from "./consts"

import {openPopupNew, closePopupNew} from "./modal"
import {profileForm, contentForm, nameProfile, descriptionProfile, namePost, srcPost} from "./validate"
import {setSubmitButtonStateProfile, setSubmitButtonStateContent, enableValidation} from "./validate";

const validitySelector = {
    formSelector: '.form',
    inputSelector: '.form__input',
}

const handleSubmitForm = (e) => {
    e.preventDefault();
}

document.forms.profileForm.addEventListener('submit', handleSubmitForm);
document.forms.contentForm.addEventListener('submit', handleSubmitForm);

enableValidation(validitySelector);


function addNewCard (name, link) {
    const galleryTemplate = document.getElementById('card-template').content;

// дубликат узла
    const cardElement  = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

    cardElement.querySelector('.gallery__delete-button').addEventListener('click', deleteCard)
    cardElement.querySelector('.gallery__image-button').addEventListener('click', openImage)
    cardElement.querySelector('.gallery__like-button').addEventListener('click', like)
    cardElement.querySelector('.gallery__image').src = link;
    cardElement.querySelector('.gallery__image').alt = name;
    cardElement.querySelector('.gallery__title').textContent = name;

    return cardElement;

}

const createCard = function (name, link) {
    const galleryList = document.querySelector('.gallery__wrapper');
    galleryList.prepend(addNewCard(name, link));
}

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

for (let i = 0; i < initialCards.length; i++) {
    createCard(initialCards[i].name, initialCards[i].link)
}

// Добавление поста
export const addPostBtn = contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    namePost.value;
    srcPost.value;

    createCard(namePost.value, srcPost.value);

    closePopupNew(modalPost)

    contentForm.reset()
    setSubmitButtonStateContent(false)

})

// Удаление карточки
function deleteCard (e) {

    const deleteElement = e.target.parentElement

    deleteElement.remove()
}

// Кнопка лайка
function like () {
    this.classList.toggle('gallery__like-button_active')
}



// Открытие картинки поста
function openImage (e) {
    openPopupNew(modalImage)

    const image = e.target.src;
    const text = e.target.alt;

    modal__image.src = image;
    modal__text.textContent = text;
    modal__text.alt = text;
}

// Закрытие картинки поста
document.getElementById('modal-close-btn-image').addEventListener('click', function () {
    closePopupNew(modalImage)
});

// Открытие Попап
const openPopup = () => {
    editBtn.addEventListener('click', function () {
        openPopupNew(modalProfile)
    })
    addBtn.addEventListener('click', function () {
        openPopupNew(modalPost)
    })
}

// Закрытие Попап
const closePopup = () => {
    closeBtn.addEventListener('click', function () {
        closePopupNew(modalProfile)
    })
    closeBtnPost.addEventListener('click', function () {
        closePopupNew(modalPost)
    })
}

openPopup();
closePopup();

// Кнопка сохранения информации профиля
export const saveInfoBtn = profileForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    name.textContent = nameProfile.value;
    description.textContent = descriptionProfile.value;
    closePopupNew(modalProfile)
    profileForm.reset()
    setSubmitButtonStateProfile(false)
})
