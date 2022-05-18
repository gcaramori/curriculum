//requires
const express = require('express');
const path = require('path');

//initiate
const app = express();

//load assets
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

//run server
app.listen(3000, () => {
    console.log(`Server is on 3000!`); 
});