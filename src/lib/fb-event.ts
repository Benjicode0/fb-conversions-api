import {ConversionPayload, EventName} from "../types";

const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const FACEBOOK_API_URL = 'https://graph.facebook.com/v21.0';

if (!FACEBOOK_PIXEL_ID || !FACEBOOK_ACCESS_TOKEN) {
    throw new Error('Missing required environment variables: FACEBOOK_PIXEL_ID or FACEBOOK_ACCESS_TOKEN');
}

const buildPayload = (
    event_name: EventName,
    params: Omit<ConversionPayload, 'event_name'>,
    test_event_code?: string
) => ({
    data: [{event_name, ...params}],
    ...(test_event_code && {test_event_code}), // Include only if test_event_code is provided
});

const fbEvent = async (
    event_name: EventName,
    params: Omit<ConversionPayload, 'event_name'>,
    test_event_code?: string
) => {
    const payload = buildPayload(event_name, params, test_event_code);

    try {
        const response = await fetch(`${FACEBOOK_API_URL}/${FACEBOOK_PIXEL_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error(`Failed to send event: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.error('Error sending event:', error);
        throw error;
    }
};

export default fbEvent;
