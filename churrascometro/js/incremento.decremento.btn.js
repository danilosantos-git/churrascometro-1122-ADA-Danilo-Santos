document.addEventListener('DOMContentLoaded', function () {
    const quantityInputs = document.querySelectorAll('.quantity-input-container');

    if (quantityInputs) {
        quantityInputs.forEach(inputGroup => {
            const input = inputGroup.querySelector('input');
            const incrementButton = inputGroup.querySelector('.increment-button');
            const decrementButton = inputGroup.querySelector('.decrement-button');

            if (incrementButton && decrementButton) {
                incrementButton.addEventListener('click', () => {
                    input.stepUp();
                });

                decrementButton.addEventListener('click', () => {
                    if (input.value > 0) {
                        input.stepDown();
                    }
                });
            }
        });
    }
});