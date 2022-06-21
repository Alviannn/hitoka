/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { DEFAULT_AJAX_SETTINGS } from './index.js';

const HITOKA = {
    accessToken: ''
};

async function refreshAuth() {
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

async function fetchCounting() {
    const res = await $.ajax('/v1/counts', {
        type: 'GET',
        headers: {
            Authorization: `Bearer ${HITOKA.accessToken}`
        },
        ...DEFAULT_AJAX_SETTINGS
    });

    $('#counter').text(res.data.totalCount);
}

setInterval(async () => {
    if (!HITOKA.accessToken) {
        await refreshAuth();
    }

    try {
        await fetchCounting();
    } catch (err) {
        await refreshAuth();
    }
}, 800);