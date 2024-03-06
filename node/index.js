import express from 'express';
import generateFakeName from './generate-fake-name.js';
import insertName from './insert-name.js';
import queryNames from './query-names.js';

const app = express();

app.get('/', async (_, res) => {
    const fakeName = generateFakeName();
    insertName(fakeName);

    try {
        const nameList = await queryNames();
        const formattedNames = nameList.map(name => `<li>${name}</li>`).join('');
        res.send(`<h1>Full Cycle Rocks</h1><ul>${formattedNames}</ul>`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}`);
});
