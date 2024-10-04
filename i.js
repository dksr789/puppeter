const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: false,defaultViewport: null }); // Set headless: true for headless mode
    const page = await browser.newPage();

    // Set the cookies for the session
    await page.setCookie(
        {
            name: 'PHPSESSID',
            value: '8cc1c418e61d6badd634309a42225cb8',
            domain: '.noxtools.com',
            path: '/',
            httpOnly: true,
            secure: true
        },
        {
            name: '_ga',
            value: 'GA1.1.726707103.1721404607',
            domain: '.noxtools.com',
            path: '/',
            httpOnly: false,
            secure: true
        },
        {
            name: '_ga_M2C66L2Z09',
            value: 'GS1.1.1727964630.14.0.1727964630.0.0.0',
            domain: '.noxtools.com',
            path: '/',
            httpOnly: false,
            secure: true
        },
        {
            name: '_gcl_au',
            value: '1.1.1974811588.1721404607',
            domain: '.noxtools.com',
            path: '/',
            httpOnly: false,
            secure: true
        },
        {
            name: 'amember_nr',
            value: '2ac81bea8411a59a2e51514b423f587f',
            domain: '.noxtools.com',
            path: '/',
            httpOnly: false,
            secure: true
        }
    );

    // Navigate to the target page
    await page.goto('https://noxtools.com/secure/protect/new-rewrite?f=125&url=/&host=quillbot.noxtools.com&ssl=on', {
        waitUntil: 'networkidle0' // Wait until the network is idle
    });

    // Get the page content
    // const content = await page.content(); // Get the HTML content of the page

    // Close the browser
    //await browser.close();

    // Send the content as the response
     res.send('thank you visit');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
