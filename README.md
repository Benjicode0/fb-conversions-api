# Facebook Conversions API

A TypeScript package to interact with the Facebook Conversions API, allowing you to send conversion events from your server directly to Facebook.

## Installation

Install the package via npm:

```npm
npm install @riculum/fb-conversions-api
```

## Setup

- Define Environment Variables: Create a `.env` file in the root of your project and add the following variables:
```dotenv
  FACEBOOK_PIXEL_ID=your_pixel_id
  FACEBOOK_ACCESS_TOKEN=your_access_token
  ```
- Load Environment Variables: Ensure `dotenv` is loaded at the start of your script.

## Usage

To send an event to the Facebook Conversions API, import the package and call the fbEvent function with your desired parameters.

```ts
import 'dotenv/config';
import fbEvent from "@riculum/fb-conversions-api";

// Define the event details
const eventName = 'ViewContent';
const params = {
    event_time: 1731176705,
    action_source: 'website',
    user_data: {
        em: ['fb1a4757f83b74e5a87c1554c8689bab12d09674f9e15db366c3636ab452004c'],
        client_ip_address: '1.2.3.4',
        client_user_agent: 'Mozilla/5.0',
    },
    event_source_url: 'https://example.com/product-page',
    event_id: 'unique-event-id-12345',
};

// Optional test event code for validation in test environments
const testEventCode = 'TESTxxxxx';

const response = await fbEvent(eventName, params, testEventCode);
console.log(response);
```

## Response
The function returns a JSON response from Facebook, which includes the status and any error messages if the request fails.

## More information
[Facebook Conversions API Doku](https://developers.facebook.com/docs/marketing-api/conversions-api)

## Versioning
This project follows [Semantic Versioning](https://semver.org/), which means:

- Major version updates (X.0.0) introduce breaking changes. 
- Minor version updates (0.X.0) add backward-compatible functionality.
- Patch version updates (0.0.X) apply backward-compatible bug fixes.

Version numbers are incremented accordingly with each release, making it easy to manage dependencies.

## License
MIT License
