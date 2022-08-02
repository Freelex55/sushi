// Добавляем прослушку на всем окне

window.addEventListener('click', function (e) {
    let counter;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    }

    // Проверяем является ли элемент кнопкой плюс
    if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    // Проверяем является ли элемент кнопкой минус
    if (e.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            e.target.closest('.cart-item').remove();

            toggleCartStatus();
            calcCartPriceAndDelivery();

        }
    }

//    плюс или минус внутри корзины
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

});
