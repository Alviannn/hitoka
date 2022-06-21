/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { DEFAULT_AJAX_SETTINGS } from './index.js';

// ----------------------------------------------------------------- //

const registerSwitchBtn = $('#register');
const loginSwitchBtn = $('#login');

const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');

const loginBtn = $('#loginButton');

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
    const emailInput = $('#email');
    const passwordInput = $('#password');

    const email = String(emailInput.val()).trim();
    const password = String(passwordInput.val()).trim();

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