document.getElementById('edit-btn').addEventListener('click', function (){
    document.getElementById('modal-profile').classList.add('active')
})

document.getElementById('modal-close-btn').addEventListener('click', function (){
    document.getElementById('modal-profile').classList.remove('active')
})

document.querySelectorAll('.gallery__like-button').forEach(button => button.addEventListener('click', function (){
    if (button.classList.contains('active')) {
        button.classList.remove('active')
    } else {
        button.classList.add('active')
    }
}))

document.getElementById('modal-save-btn').addEventListener('click', function (){
    let name = document.getElementById('name');
    name.textContent = document.getElementById('textarea-name').value; // можно перезаписать содержимое


    let description = document.getElementById('description');
    description.textContent = document.getElementById('textarea-description').value; // можно перезаписать содержимое

    document.getElementById('modal-profile').classList.remove('active')
})





