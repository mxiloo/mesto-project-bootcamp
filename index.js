// Переменные
const modalPost = document.getElementById('modal-post');
const modalImage = document.getElementById('modal-image');
const textareaName = document.getElementById('textarea-name');
const textareaDescription = document.getElementById('textarea-description');
const modalProfile = document.getElementById('modal-profile');
const description = document.getElementById('description');
const name = document.getElementById('name');
const modal__image = document.querySelector('.modal__image');
const modal__text = document.querySelector('.modal__text');
const editBtn = document.getElementById('edit-btn');
const closeBtn =document.getElementById('modal-close-btn');
const addBtn =document.getElementById('add-btn');
const closeBtnPost =document.getElementById('modal-close-btn-post');


function addNewCard (name, link) {
    const galleryTemplate = document.querySelector('#card-template').content;
    const galleryList = document.querySelector('.gallery__wrapper');

// дубликат узла
    const cardElement  = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

    cardElement.querySelector('.gallery__delete-button').addEventListener('click', deleteCard)
    cardElement.querySelector('.gallery__image-button').addEventListener('click', openImage)
    cardElement.querySelector('.gallery__like-button').addEventListener('click', like)
    cardElement.querySelector('.gallery__image').src = link;
    cardElement.querySelector('.gallery__image').alt = name;
    cardElement.querySelector('.gallery__title').textContent = name;

    galleryList.prepend(cardElement);
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
    addNewCard(initialCards[i].name, initialCards[i].link)
}

// Добавление поста
document.getElementById('modal-post').addEventListener('submit', (e) => {
    e.preventDefault();
    const createText = document.getElementById('textarea-name-post').value;
    const createSrc = document.getElementById('textarea-src-post').value;

    addNewCard(createText,createSrc)

    modalPost.classList.remove('popup__open')

    document.getElementById('textarea-name-post').value = '';
    document.getElementById('textarea-src-post').value = '';
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
    modalImage.classList.add('popup__open')

    const image = e.target.src;
    const text = e.target.alt;

    modal__image.src = image;
    modal__text.textContent = text;
    modal__text.alt = text;
}

// Закрытие картинки поста
document.getElementById('modal-close-btn-image').addEventListener('click', function () {
    modalImage.classList.remove('popup__open')
});

// Открытие Попап
openPopup = () => {
    editBtn.addEventListener('click', function () {
        modalProfile.classList.add('popup__open')
    })
    addBtn.addEventListener('click', function (){
        modalPost.classList.add('popup__open')
    })
}

// Закрытие Попап
closePopup = () => {
    closeBtn.addEventListener('click', function () {
        modalProfile.classList.remove('popup__open')
    })
    closeBtnPost.addEventListener('click', function (){
        modalPost.classList.remove('popup__open')
    })
}

openPopup();
closePopup();

// Кнопка сохранения информации профиля
document.querySelector('.popup__profile').addEventListener("submit", function (ev){
    ev.preventDefault();

    name.textContent = textareaName.value;

    description.textContent = textareaDescription.value;

    modalProfile.classList.remove('popup__open');


    document.getElementById('textarea-name').value = "";
    document.getElementById('textarea-description').value = ""
})




