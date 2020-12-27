const http = require('http');
const app = require('./app');
 
 const PORT = 5000;

 const server = http.createServer(app);
// Open Server  
server.listen(PORT, () => {
    console.info('Server listening on port ',`http://localhost:${PORT}`)

    })
 