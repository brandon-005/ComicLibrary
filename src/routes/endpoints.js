/* Importing Required Dependencies */
const { Router, static } = require('express');
const { renderFile } = require('ejs');
const { join } = require('path');
const dataFile = require('../../data.json');

function renderEjsFile(filename, data, options) {
    return renderFile(join(__dirname, '../views/', filename), data, { ...options });
}

const router = Router();

/* Using CSS Styles */
router.use('/assets', static(join(__dirname, '../assets')))

/* 
TITLE: Home Page
*/
router.get('/', async (request, response) => {
    response.send(await renderEjsFile('home.ejs', { userSearch: request.query, dataFile }));
});

/* Exporting Router to be used in server.js */
module.exports = router;