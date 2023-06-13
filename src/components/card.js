/*
import {deleteItem, delLike, setLike} from "./api";

export let userId;

// Создание карточки
export function addNewCard (item, userId) {
    const galleryTemplate = document.getElementById('card-template').content;


// дубликат узла
    export const cardElement = galleryTemplate
        .querySelector('.gallery__item')
        .cloneNode(true);

    export const galleryLikeCounter = cardElement.querySelector('.gallery__likeCounter')

    export const cardElementImg = cardElement.querySelector('.gallery__image');


    export let cardLikes = item.likes

    export const galleryDeleteButton = cardElement.querySelector('.gallery__delete-button');

    export const galleryImageButton = cardElement.querySelector('.gallery__image-button')
    galleryImageButton.addEventListener('click', openImage);

    export const galleryLike = cardElement.querySelector('.gallery__like-button')

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

    export function isLiked (likesArray) {
        return likesArray.some(item => item._id === userId)
    }

    // Кнопка лайка
    export function updateLike (likesArray) {
        cardLikes = likesArray
        galleryLike.classList.toggle('gallery__like-button_active', isLiked(likesArray))
        galleryLikeCounter.textContent = likesArray.length
    }

    export const handleLikeButton = (e) => {
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
*/


