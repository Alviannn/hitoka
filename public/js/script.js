/* eslint-disable no-undef */

/** @type {JQueryAjaxSettings} */
const DEFAULT_AJAX_SETTINGS = {
    dataType: 'json',
    contentType: 'application/json',
};

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

loginBtn.on('click', () => {
    const emailInput = $('#email');
    const passwordInput = $('#password');

    const email = String(emailInput.val()).trim();
    const password = String(passwordInput.val()).trim();

    if (!email || !password) {
        return alert('Email and password cannot be empty');
    }

    const data = JSON.stringify({ email, password });
    $.ajax('/v1/auth/login', {
        type: 'POST',
        data,
        success: (res) => {
            const { message, status } = res;

            if (status === 'fail') {
                return alert(message);
            }

            location.href = '/counter';
        },
        ...DEFAULT_AJAX_SETTINGS,
    });
});