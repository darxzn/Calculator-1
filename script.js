let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
    
    calculation += value;
    document.querySelector('.js-display-calculation').innerHTML = calculation;

    localStorage.setItem('calculation', calculation);
}