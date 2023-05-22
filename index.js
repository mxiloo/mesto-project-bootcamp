
// gallery section cards
const galleryTemplate = document.querySelector('#card-template').content;
const galleryList = document.querySelector('.gallery__wrapper');

// дубликат узла
let cardElement  = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

cardElement.querySelector('.gallery__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
cardElement.querySelector('.gallery__image').alt = 'Архыз';
cardElement.querySelector('.gallery__title').textContent = 'Архыз';

galleryList.append(cardElement);

// дубликат узла
cardElement = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

cardElement.querySelector('.gallery__image').src = './src/images/Elbrus.jpg';
cardElement.querySelector('.gallery__image').alt = 'Гора Эльбрус';
cardElement.querySelector('.gallery__title').textContent = 'Гора Эльбрус';

galleryList.append(cardElement);

// дубликат узла
cardElement = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

cardElement.querySelector('.gallery__image').src = './src/images/Dombai.png';
cardElement.querySelector('.gallery__image').alt = 'Домбай';
cardElement.querySelector('.gallery__title').textContent = 'Домбай';

galleryList.append(cardElement);

// дубликат узла
cardElement = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

cardElement.querySelector('.gallery__image').src = './src/images/Elbrus.jpg';
cardElement.querySelector('.gallery__image').alt = "Гора Эльбрус";
cardElement.querySelector('.gallery__title').textContent = 'Гора Эльбрус';

galleryList.append(cardElement);

// дубликат узла
cardElement = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

cardElement.querySelector('.gallery__image').src = './src/images/Dombai.png';
cardElement.querySelector('.gallery__image').alt = 'Домбай';
cardElement.querySelector('.gallery__title').textContent = 'Домбай';

galleryList.append(cardElement);

// дубликат узла
cardElement = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

cardElement.querySelector('.gallery__image').src = './src/images/karachaevsk1.png';
cardElement.querySelector('.gallery__image').alt = 'Карачаевск';
cardElement.querySelector('.gallery__title').textContent = 'Карачаевск';

galleryList.append(cardElement);


// Открытие Попап изменения профиля
document.getElementById('edit-btn').addEventListener('click', function () {
    document.getElementById('modal-profile').classList.add('modal-profile_active')
})

// Закрытие Попап изменения профиля
document.getElementById('modal-close-btn').addEventListener('click', function () {
    document.getElementById('modal-profile').classList.remove('modal-profile_active')
})

// Кнопка сохранения информации профиля
document.getElementById('modal-save-btn').addEventListener('click', function (){
    let name = document.getElementById('name');
    name.textContent = document.getElementById('textarea-name').value;


    let description = document.getElementById('description');
    description.textContent = document.getElementById('textarea-description').value;

    document.getElementById('modal-profile').classList.remove('modal-profile_active')
})

// Открытие Попап добавления поста
document.getElementById('add-btn').addEventListener('click', function (){
    document.getElementById('modal-post').classList.add('modal-post_active')
})

// Закрытие Попап добавления поста
document.getElementById('modal-close-btn-post').addEventListener('click', function (){
    document.getElementById('modal-post').classList.remove('modal-post_active')
})

function like () {
    if (this.classList.contains('gallery__like-button_active')) {
        this.classList.remove('gallery__like-button_active')
    } else {
        this.classList.add('gallery__like-button_active')
    }
}

// Кнопка лайка
document.querySelectorAll('.gallery__like-button').forEach(button => button.addEventListener('click', like
))


// Добавление поста
const addPost = document.getElementById('modal-save-btn-post')
addPost.onclick = () => {
    const createPost = galleryTemplate.querySelector('.gallery__item').cloneNode(true);

    let createText = document.getElementById('textarea-name-post').value;
    let createSrc = document.getElementById('textarea-src-post').value;

    createPost.querySelector('.gallery__title').textContent = createText;
    createPost.querySelector('.gallery__image').src = createSrc;
    createPost.querySelector('.gallery__image').alt = createText;


    document.getElementById('modal-post').classList.remove('modal-post_active')

    galleryList.prepend(createPost);
}


// Открытие картинки поста
document.querySelectorAll('.gallery__image-button').forEach(button => button.addEventListener('click', function (e) {
    document.getElementById('modal-image').classList.add('modal-image_active')

    let image = e.target.src;
    let text = e.target.alt;

    document.querySelector('.modal__image').src = image;
    document.querySelector('.modal__text').textContent = text;
}))

// Закрытие картинки поста
document.getElementById('modal-close-btn-image').addEventListener('click', function () {
    document.getElementById('modal-image').classList.remove('modal-image_active')
});

//Удаление карточки
document.querySelectorAll('.gallery__delete-button').forEach(button => button.addEventListener('click', function (e) {

    let deleteElement = e.target.parentElement

    deleteElement.remove()
}))


