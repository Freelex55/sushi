// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на копку минус
btnMinus.addEventListener('click', function () {

    // Проверяем счетчик что бы он был больше 1 и тогда меняет текст в счетчике

    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }

});
// Отслеживаем клик на копку плюс

btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText;
});

