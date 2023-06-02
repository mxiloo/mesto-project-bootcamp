import {saveBtn, addBtnContent} from './consts';


export const profileForm = document.forms.profileForm;
export const nameProfile = profileForm.elements.nameProfile;
export const descriptionProfile = profileForm.elements.descriptionProfile;
export const contentForm = document.forms.contentForm;
export const namePost = contentForm.elements.namePost;
export const srcPost = contentForm.elements.srcPost;

// Ошибки
const showError = (input, form, errorMessage) => {
    const spanId = `${input.id}-error`;
    const errorField = form.querySelector(`#${spanId}`)
    errorField.textContent = errorMessage;
}

const hiddenError = (input, form) => {
    const spanId = `${input.id}-error`;
    const errorField = form.querySelector(`#${spanId}`)
    errorField.textContent = '';
}

const checkValid = (input, form) => {
    if (input.validity.valid) {
        hiddenError(input, form);
    } else {
        showError(input, form, input.validationMessage);
    }
}

const setEventListeners = (form, settings) => {
    const inputList = form.querySelectorAll(settings.inputSelector);
    inputList.forEach(input => {
        input.addEventListener('input', () => checkValid(input, form))
    })
}

export const enableValidation = (settings) => {
    const formList = document.querySelectorAll(settings.formSelector)
    formList.forEach(form => {
        setEventListeners(form, settings)
    })
}

// Состояние кнопки
export function setSubmitButtonStateProfile (isFormValid) {
    if (isFormValid) {
        saveBtn.removeAttribute('disabled');
        saveBtn.classList.remove('modal__save-btn_disabled');
    } else {
        saveBtn.setAttribute('disabled', true);
        saveBtn.classList.add('modal__save-btn_disabled');
    }
}

profileForm.addEventListener('input', (e) => {
    const isValidProfile = nameProfile.value.length >= 2 && descriptionProfile.value.length >= 2;
    setSubmitButtonStateProfile(isValidProfile)
})

export function setSubmitButtonStateContent (isFormValid) {
    if (isFormValid) {
        addBtnContent.removeAttribute('disabled');
        addBtnContent.classList.remove('modal__save-btn_disabled');
    } else {
        addBtnContent.setAttribute('disabled', true);
        addBtnContent.classList.add('modal__save-btn_disabled');
    }
}

contentForm.addEventListener('input', (e) => {
        const isValidContent = namePost.value.length >= 2 && srcPost.validity.valid;
        setSubmitButtonStateContent(isValidContent)
})



