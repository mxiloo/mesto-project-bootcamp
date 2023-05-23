function addNewCard (name, link) {
    const galleryTemplate = document.querySelector('#card-template').content;
    const galleryList = document.querySelector('.gallery__wrapper');

// дубликат узла
    let cardElement  = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

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
const addPost = document.getElementById('modal-save-btn-post')
addPost.onclick = () => {
    /*const createPost = galleryTemplate.querySelector('.gallery__item').cloneNode(true);*/

    let createText = document.getElementById('textarea-name-post').value;
    let createSrc = document.getElementById('textarea-src-post').value;

    addNewCard(createText,createSrc)

    document.getElementById('modal-save-btn-post').classList.remove('popup__open')

}

// Удаление карточки
function deleteCard (e) {

    const deleteElement = e.target.parentElement

    deleteElement.remove()
}

// Открытие картинки поста
function openImage (e) {
    document.getElementById('modal-image').classList.add('popup__open')

    const image = e.target.src;
    const text = e.target.alt;

    document.querySelector('.modal__image').src = image;
    document.querySelector('.modal__text').textContent = text;
    document.querySelector('.modal__text').alt = text;
}

// Кнопка лайка
function like () {
    this.classList.toggle('gallery__like-button_active')
}

// Открытие Попап изменения профиля
document.getElementById('edit-btn').addEventListener('click', function () {
    document.getElementById('modal-profile').classList.add('popup__open')
})

// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА НОВОЕ
/*document.querySelectorAll('.popup').forEach(button => button.addEventListener('click', function () {
    document.getElementById('edit-btn')
    document.getElementById('add-btn')
    document.getElementById('gallery__image-btn')
    document.querySelector('.popup').classList.add('popup__open')
    }
))*/


// Закрытие Попап изменения профиля
document.getElementById('modal-close-btn').addEventListener('click', function (ev) {
    ev.preventDefault();
    document.getElementById('modal-profile').classList.remove('popup__open')
})

// Кнопка сохранения информации профиля
document.querySelector('.modal__save-btn').addEventListener("click", function (ev){
    ev.preventDefault();
    const name = document.getElementById('name');
    name.textContent = document.getElementById('textarea-name').value;


    const description = document.getElementById('description');
    description.textContent = document.getElementById('textarea-description').value;

    document.getElementById('modal-profile').classList.remove('popup__open')
})

// Открытие Попап добавления поста
document.getElementById('add-btn').addEventListener('click', function (){
    document.getElementById('modal-post').classList.add('popup__open')
})

// Закрытие Попап добавления поста
document.getElementById('modal-close-btn-post').addEventListener('click', function (){
    document.getElementById('modal-post').classList.remove('popup__open')
})

// Закрытие картинки поста
document.getElementById('modal-close-btn-image').addEventListener('click', function () {
    document.getElementById('modal-image').classList.remove('popup__open')
});

//Удаление карточки





