/* Importing Required Dependencies */
const express = require('express');
const endpoints = require('./routes/endpoints');

/* Creating Application */
const server = express();

/* Setting HTML path */
server.set('views', 'src/views');

/* Using router endpoints */
server.use(endpoints);

/* Listen for connection to port 3000 */
server.listen(3000, () => {
	console.log('[server]: 🚀 Listening on http://localhost:3000');
});