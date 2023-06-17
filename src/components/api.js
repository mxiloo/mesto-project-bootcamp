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
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,

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
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(responseStatus)
}

// Отправляем карточку на сервер
export const setItem = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
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
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        headers: config.headers,
        method: 'DELETE',
        body: JSON.stringify({})
    })
        .then(responseStatus)
}

// Установка Лайка
export const setLike = (item) => {
    return fetch(`${config.baseUrl}/cards/likes/${item._id}`, {
        headers: config.headers,
        method: 'PUT',
        body: JSON.stringify({})
    })
        .then(responseStatus)
}

// Снятие Лайка
export const delLike = (item) => {
    return fetch(`${config.baseUrl}/cards/likes/${item._id}`, {
        headers: config.headers,
        method: 'DELETE',
        body: JSON.stringify({})
    })
        .then(responseStatus)
}

// Аватар
export const setAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        headers: config.headers,
        method: 'PATCH',
        body: JSON.stringify({
            avatar: avatar
        })
    })
        .then(responseStatus)
}