import '../pages/index.css';

// Переменные
import {
    modalPost,
    modalImage,
    textareaName,
    textareaDescription,
    modalProfile,
    description,
    name,
    imageFull,
    modalText,
    editBtn,
    closeBtnProfile,
    addBtnProfile,
    closeBtnPost,
    popups,
    createText,
    createSrc,
    modalName,
    modalDescription,
    galleryList,
    avatar, editAvatarButton, modalAvatar, closeBtnAvatar, addBtnContent, saveBtn, saveBtnAvatar
} from "./consts"

import {openPopup, closePopup} from "./modal"
import {
    profileForm,
    contentForm,
    nameProfile,
    descriptionProfile,
    namePost,
    srcPost,
    avatarForm,
    srcAvatar
} from "./validate"; // Переменные
import {setSubmitButtonStateProfile, setSubmitButtonStateContent, setSubmitButtonStateAvatar, enableValidation} from "./validate"; // Функции
import {deleteItem, delLike, getItems, getProfileInfo, setAvatar, setItem, setLike, setProfileInfo} from "./api";
import {all} from "core-js/internals/document-all";


export let userId;


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

// Создание карточки
function addNewCard (item, userId) {
    const galleryTemplate = document.getElementById('card-template').content;
    const galleryLikeCounter = galleryTemplate.getElementById('likeCounter')

// дубликат узла
    const cardElement = galleryTemplate
        .querySelector('.gallery__item')
        .cloneNode(true);

    const cardElementImg = cardElement.querySelector('.gallery__image');

    let cardLikes = item.likes

    const galleryDeleteButton = cardElement.querySelector('.gallery__delete-button');
    galleryDeleteButton.addEventListener('click', deleteCard);

    const galleryImageButton = cardElement.querySelector('.gallery__image-button')
    galleryImageButton.addEventListener('click', openImage);

    const galleryLike = cardElement.querySelector('.gallery__like-button')

    if (item.owner._id === userId) {
        galleryDeleteButton.addEventListener('click', () => {
            deleteItem(item._id)
                .then(()=> {
                    cardElement.remove()
                })
                .catch(err => console.log(err))
        })
    }  else {
        galleryDeleteButton.remove()
    }

    cardElementImg.src = item.link;
    cardElementImg.alt = item.name;
    cardElement.querySelector('.gallery__title').textContent = item.name;

    function isLiked (likesArray) {
        return likesArray.some(item => item._id === userId)
    }

    // Кнопка лайка
    function updateLike (likesArray) {
        cardLikes = likesArray
        galleryLike.classList.toggle('gallery__like-button_active', isLiked(likesArray))
        galleryLikeCounter.textContent = likesArray.length
    }

    const handleLikeButton = (e) => {
        const queryMethod = isLiked(cardLikes) ? delLike(item) : setLike(item);
        queryMethod.then(res => {
            updateLike(res.likes)
        })
            .catch(err => {
                console.log(err)
            })
    }
    galleryLike.addEventListener('click', () => (handleLikeButton(galleryLike)))
    updateLike(cardLikes)

    return cardElement;
}

// Карточки и данные профиля
Promise.all([getProfileInfo(), getItems()])
    .then(([userData, allCards]) => {
        userId = userData._id;
        name.textContent = userData.name;
        description.textContent = userData.about;
        avatar.src = userData.avatar;

        for (let i = 0; i < allCards.length; i++) {
            createCard(allCards[i])
        }
    })
    .catch(err => {
        console.log(err)
    })


const createCard = function (item) {
    galleryList.append(addNewCard(item, userId));
}

// Добавление поста
contentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addBtnContent.textContent = 'Создание...';
    setItem(namePost.value, srcPost.value)
        .then(res => {
            createCard(res);
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            addBtnContent.textContent = 'Создать'
            e.target.reset();
        })
    contentForm.reset()
    closePopup(modalPost)
    setSubmitButtonStateContent(false)
})

// Сохранение информации профиля
profileForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    saveBtn.textContent = 'Сохранение...'
    setProfileInfo(nameProfile.value, descriptionProfile.value)
        .then(res => {
            name.textContent = res.name;
            description.textContent = res.about;
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            saveBtn.textContent = 'Сохранить';
            ev.target.reset();
        })

    closePopup(modalProfile)
    profileForm.reset()
    setSubmitButtonStateProfile(false)
})

// Изменение аватара
avatarForm.addEventListener('submit', function (e) {
    e.preventDefault();
    saveBtnAvatar.textContent = 'Сохранение...';
    setAvatar(srcAvatar.value)
        .then(res => {
            avatar.src = res.avatar
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            saveBtnAvatar.textContent = 'Сохранить';
            e.target.reset()
        })
    avatarForm.reset()
    closePopup(modalAvatar)
    setSubmitButtonStateAvatar(false)
})

// Удаление карточки
function deleteCard (e) {
    const deleteElement = e.target.closest('.gallery__item')
    deleteElement.remove()
}

// Открытие картинки поста
function openImage (e) {
    openPopup(modalImage)

    const image = e.target.src;
    const text = e.target.alt;

    imageFull.src = image;
    modalText.textContent = text;
    modalText.alt = text;
}

// Закрытие картинки поста
document.getElementById('modal-close-btn-image').addEventListener('click', function () {
    closePopup(modalImage)
});

// Открытие Попап
editBtn.addEventListener('click', function () {
    openPopup(modalProfile)
})
addBtnProfile.addEventListener('click', function () {
    openPopup(modalPost)
})

editAvatarButton.addEventListener('click', function () {
    openPopup(modalAvatar)
})

// Закрытие Попап
closeBtnProfile.addEventListener('click', function () {
    closePopup(modalProfile)
})
closeBtnPost.addEventListener('click', function () {
    closePopup(modalPost)
})

closeBtnAvatar.addEventListener('click', function () {
    closePopup(modalAvatar)
})


