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
TITLE: Action Comics Page (Home)
URL: http://localhost:3000/
*/
router.get('/', async (request, response) => {
    response.send(await renderEjsFile('home.ejs', { userSearch: request.query, dataFile, sort: 'action' }));
});

/* 
TITLE: Action Comics Page
URL: http://localhost:3000/action
*/
router.get('/action', async (request, response) => {
    response.send(await renderEjsFile('home.ejs', { userSearch: request.query, dataFile, sort: 'action' }));
});

/* 
TITLE: Fighting Comics Page
URL: http://localhost:3000/fighting
*/
router.get('/fighting', async (request, response) => {
    response.send(await renderEjsFile('home.ejs', { userSearch: request.query, dataFile, sort: 'fighting' }));
});

/* 
TITLE: Horror Comics Page
URL: http://localhost:3000/horror
*/
router.get('/horror', async (request, response) => {
    response.send(await renderEjsFile('home.ejs', { userSearch: request.query, dataFile, sort: 'horror' }));
});

/* Exporting Router to be used in server.js */
module.exports = router;