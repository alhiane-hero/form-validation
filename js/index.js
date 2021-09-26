const inputsEl = document.querySelectorAll('.input');
const passEl = document.querySelector('.password');

const namePattern = /^\w+\s?\w+$/;
const emailPattern = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{2,3}$/;
const phonePattern = /^\d{3}\s\d{4}-?\s?\d{3}$/;
const webUrlPattern = /(https?):\/\/(www)?\.?(\w)+\.(com||org||net):?(\d+)?\/?(.)+/;

function valid(input, msgEl, msg) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    msgEl.innerHTML = msg;
}

function invalid(input, msgEl, msg) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    msgEl.innerHTML = msg;
}

function removeClasses(input, msgEl) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
    msgEl.classList.remove('show');
}

function checkFunc(input, pattern, msgEl, msgs) {
    if (input.value !== '') {
        if (pattern.test(input.value)) {
            valid(input, msgEl, msgs[0]);
        } else {
            invalid(input, msgEl, msgs[1]);
        }
    } else {
        removeClasses(input, msgEl);
    }
}

inputsEl.forEach(input => {
    input.addEventListener('input', _ => {
        const className = input.getAttribute('data-class');
        const msgEl = document.querySelector(`.${className}`);
        msgEl.classList.add('show');
        if (input.classList.contains('nameInput')) {
            checkFunc(input, namePattern, msgEl, [
                'Valid Name!',
                'Invalid Name!'
            ]);
        } else if (input.classList.contains('emailInput')) {
            checkFunc(input, emailPattern, msgEl, [
                'Valid Email!',
                'Invalid Email!'
            ]);
        } else if (input.classList.contains('phoneInput')) {
            checkFunc(input, phonePattern, msgEl, [
                'Valid Phone Number!',
                'Invalid Phone Number!'
            ]);
        } else if (input.classList.contains('webUrlInput')) {
            checkFunc(input, webUrlPattern, msgEl, [
                'Valid Website Url!',
                'Invalid Website Url!'
            ]);
        } else if (input.classList.contains('confirmPassword')) {
            if (input.value === passEl.value) {
                valid(input, msgEl, 'Password Confirmed!');
            }else {
                invalid(input, msgEl, 'Password Not Confirmed!');
            }
        }
    });
});

