/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { DEFAULT_AJAX_SETTINGS, HITOKA, refreshAuth } from './index.js';

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