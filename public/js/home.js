/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { DEFAULT_AJAX_SETTINGS } from './index.js';

// ----------------------------------------------------------------- //

const registerSwitchBtn = $('#register');
const loginSwitchBtn = $('#login');

const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');

const loginBtn = $('#loginButton');
const registerBtn = $('#registerButton');

// ----------------------------------------------------------------- //

registerSwitchBtn.on('click', () => {
    loginPage.style.display = 'none';
    registerPage.style.display = 'block';
});

loginSwitchBtn.on('click', () => {
    registerPage.style.display = 'none';
    loginPage.style.display = 'block';
});

loginBtn.on('click', async () => {
    const email = String($('#email').val());
    const password = String($('#password').val());

    if (!email || !password) {
        return alert('Email and password cannot be empty');
    }

    const data = JSON.stringify({ email, password });
    try {
        await $.ajax('/v1/auth/login', {
            type: 'POST',
            data,
            ...DEFAULT_AJAX_SETTINGS
        });

        location.href = '/counter';
    } catch (err) {
        /** @type {JQuery.jqXHR} */
        const res = err;
        const { message } = res.responseJSON;

        alert(message);
    }
});

registerBtn.on('click', async () => {
    const fullName = String($('#fullnameRegister').val());
    const email = String($('#emailRegister').val());
    const phone = String($('#phoneNumber').val());
    const password = String($('#passwordRegister').val());
    const confirmPassword = String($('#cPasswordRegister').val());

    if (!fullName || !email || !phone || !password || !confirmPassword) {
        return alert('Registration fields cannot be empty');
    }
    if (password !== confirmPassword) {
        return alert("Confirm password and password doesn't match");
    }

    const data = JSON.stringify({ fullName, email, phone, password });
    try {
        await $.ajax('/v1/auth/register', {
            type: 'POST',
            data,
            ...DEFAULT_AJAX_SETTINGS
        });

        alert('Successfully registered account!');
        location.reload();
    } catch (err) {
        /** @type {JQuery.jqXHR} */
        const res = err;
        const { message } = res.responseJSON;

        alert(message);
    }
});