import {descriptionProfile, namePost, nameProfile, srcAvatar, srcPost} from "./validate";
import {userId} from "./index";


export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
        authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
        'Content-Type': 'application/json'
    }
}

export const responseStatus = (res) => {
    if (res.ok) {
        return  res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}


// Информация пользователя с сервера
export const getProfileInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(responseStatus)
}

// Изменяем инфу пользователя и отсылаем на сервер
export const setProfileInfo = () => {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/users/me', {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
            name: nameProfile.value,
            about: descriptionProfile.value,
        })
    })
        .then(responseStatus)
}

// Получение карточек с сервера
export const getItems = () => {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/cards', {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        }
    })
        .then(responseStatus)
}

// Отправляем карточку на сервер
export const setItem = (name, link) => {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/cards', {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(responseStatus)
}

// Удаление карточки
export const deleteItem = (cardId) => {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-9/cards/${cardId}`, {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({})
    })
        .then(responseStatus)
}

// Установка Лайка
export const setLike = (item) => {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-9/cards/likes/${item._id}`, {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({})
    })
        .then(responseStatus)
}

// Снятие Лайка
export const delLike = (item) => {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-9/cards/likes/${item._id}`, {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({})
    })
        .then(responseStatus)
}

// Аватар
export const setAvatar = (avatar) => {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/users/me/avatar', {
        headers: {
            authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
            avatar: avatar
        })
    })
        .then(responseStatus)
}