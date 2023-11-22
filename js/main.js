document.addEventListener('DOMContentLoaded', function () {
    // Dynamically add student info to the page
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = 'Student ID: 200520466 | Name: Shivam Gandhi';
});

function validateForm() {
    // Get values from the form
    const pizzaSize = document.getElementById('pizzaSize').value;
    const pizzaFlavour = document.getElementById('pizzaFlavour').value;
    const toppings = document.getElementById('toppings').value;
    const crustType = document.getElementById('crustType').value;

    // Basic validation
    if (!pizzaSize || !pizzaFlavour || !toppings || !crustType) {
        alert('Please fill out all fields before ordering.');
        return;
    }

    // Create a Pizza object
    const pizza = new Pizza(pizzaSize, pizzaFlavour, toppings, crustType);

    // Display pizza description
    const pizzaDescription = document.getElementById('pizzaDescription');
    pizzaDescription.innerHTML = `<p>Thank you for your order!</p>
                                <p>Your custom ${pizza.size} ${pizza.flavour} pizza is being prepared.</p>
                                <p>Toppings: ${pizza.toppings}</p>
                                <p>Crust Type: ${pizza.crustType}</p>
                                <p>Our chefs are working hard to make it delicious!</p>`;
}

// Pizza class
class Pizza {
    constructor(size, flavour, toppings, crustType) {
        this.size = size;
        this.flavour = flavour;
        this.toppings = toppings;
        this.crustType = crustType;
    }
}
