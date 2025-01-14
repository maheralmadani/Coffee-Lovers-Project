document.addEventListener('DOMContentLoaded', () => {
    const coffeeSelect = document.getElementById('coffee');
    const milkSelect = document.getElementById('milk');
    const flavorSelect = document.getElementById('flavor');
    const totalElement = document.getElementById('total');
    const calculateButton = document.getElementById('calculate-total');

    calculateButton.addEventListener('click', () => {
        const coffeePrice = parseFloat(coffeeSelect.options[coffeeSelect.selectedIndex].dataset.price);
        const milkPrice = parseFloat(milkSelect.options[milkSelect.selectedIndex].dataset.price);
        const flavorPrice = parseFloat(flavorSelect.options[flavorSelect.selectedIndex].dataset.price);

        const totalPrice = (coffeePrice + milkPrice + flavorPrice).toFixed(2);
        totalElement.textContent = totalPrice;
    });
});
