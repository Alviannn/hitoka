/* eslint-disable no-undef */

/** @type {JQueryAjaxSettings} */
export const DEFAULT_AJAX_SETTINGS = {
    dataType: 'json',
    contentType: 'application/json',
};

export const HITOKA = {
    accessToken: ''
};

export async function refreshAuth() {
    try {
        const res = await $.ajax('/v1/auth/refresh', {
            type: 'POST',
            ...DEFAULT_AJAX_SETTINGS
        });

        HITOKA.accessToken = res.data.accessToken;
    } catch (err) {
        location.href = '/';
    }
}