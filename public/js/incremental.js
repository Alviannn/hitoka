/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { DEFAULT_AJAX_SETTINGS, HITOKA, refreshAuth } from './index.js';

async function postCount() {
    const res = await $.ajax('/v1/counts', {
        type: 'POST',
        headers: {
            Authorization: `Bearer ${HITOKA.accessToken}`
        },
        ...DEFAULT_AJAX_SETTINGS
    });

    $('#counter').text(res.data.totalCount);
}

const addCountBtn = $('#add-count-btn');
addCountBtn.on('click', async () => {
    if (!HITOKA.accessToken) {
        await refreshAuth();
    }

    try {
        await postCount();
    } catch (err) {
        await refreshAuth();
    }
});