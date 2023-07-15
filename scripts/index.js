const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
let closeButton = document.querySelector('.popup__save-button');

// Находим поля формы в DOM
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_info_name');
let jobInput = popup.querySelector('.popup__input_info_job')


popupOpenButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
});

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameInput.value;// Получите значение полей jobInput и nameInput из свойства value
    jobInput.value;
    nameProfile.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей, вставьте новые значения с помощью textContent
    jobProfile.textContent = jobInput.value;

    popupCloseButton.addEventListener('click', function() {
        popup.classList.remove('popup_opened');
    });
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
closeButton.addEventListener('submit', handleFormSubmit);