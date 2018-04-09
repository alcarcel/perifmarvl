const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

const tskRoute = require('./routes/formulario');

 
//configuracion
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3030);
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/formulario', tskRoute);

app.use(express.static(path.join(__dirname,'dist')));

//Iniciar servidor
app.listen(app.get('port'), ()=> {
     console.log('server 3030');
 });