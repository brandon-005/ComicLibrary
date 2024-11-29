/* Importing Required Dependencies */
const { Router, static } = require('express');
const path = require('path')
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
TITLE: Saikou Home Page
URL: https://saikou.dev/
*/
router.get('/', async (request, response) => {
    response.send(await renderEjsFile('home.ejs', { query: request.query, dataFile }));
});

/* 
Rendering HTML/CSS For Home Page
URL: http://localhost:3000/
*/
router.get('/', (request, response) => {
    response.sendFile('home.html', { root: `${__dirname}/../views`})
});

/* Exporting Router to be used in server.js */
module.exports = router;