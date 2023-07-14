// Находим форму в DOM
// Находим поля формы в DOM

let profile = document.querySelector('.profile__container');
let name = profile.querySelector('.profile__title');
let job = profile.querySelector('.profile__subtitle');
const popupOpenButton = document.querySelector('.profile__open-popup');

const popup = document.querySelector('.popup');
let nameInput = popup.querySelector('.popup__input-name');
let jobInput = popup.querySelector('.popup__input-job');
const popupCloseButton = popup.querySelector('.popup__close');

const popupToggle = function(){
    popup.classList.toggle('popup__opened');
}

// Отслеживаю клик по кнопке
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); 
// Эта строчка отменяет стандартную отправку формы. 
// Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.

// Получите значение полей jobInput и nameInput из свойства value
// Выберите элементы, куда должны быть вставлены значения полей
// Вставьте новые значения с помощью textContent
let nameValue = nameInput.value;
let jobValue = jobInput.value;

name.textContent = nameValue;
job.textContent = jobValue;
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);