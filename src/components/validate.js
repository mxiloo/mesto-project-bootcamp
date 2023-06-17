export const profileForm = document.forms.profileForm;
export const nameProfile = profileForm.elements.nameProfile;
export const descriptionProfile = profileForm.elements.descriptionProfile;
export const contentForm = document.forms.contentForm;
export const namePost = contentForm.elements.namePost;
export const srcPost = contentForm.elements.srcPost;
export const avatarForm = document.forms.avatarForm;
export const srcAvatar = avatarForm.elements.srcAvatar;

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
    const button = form.querySelector(settings.submitButtonSelector)
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            checkValid(input, form)
            setSubmitButtonState(button, input, settings)
        })
    })
}

export const disableButton = (button) => {
    button.setAttribute('disabled', true);
    button.classList.add('modal__save-btn_disabled');
}

export const enableValidation = (settings) => {
    const formList = document.querySelectorAll(settings.formSelector)
    formList.forEach(form => {
        setEventListeners(form, settings)
    })
}

// Состояние кнопки
export const setSubmitButtonState = (button, input, settings) => {
    if (input.validity.valid) {
        button.removeAttribute('disabled');
        button.classList.remove(settings.inactiveButtonSelector);
    } else {
        button.setAttribute('disabled', true);
        button.classList.add(settings.inactiveButtonSelector);
    }

    console.log(settings.inactiveButtonSelector)
}
