/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//On déclare les indépendances du serveur
var express = require('express'),
        http = require('http'),
        app = express();

//On configure le serveur
//app.configure(function(){
//    app.use(express.static(__dirname));
//});

//app.use(express.static(__dirname));


app.get('/', function(req, res, next){
    res.sendfile(__dirname+'/index.html');
});

//On lance le serveur HTTP
app.server = http.createServer(app);
app.server.listen(5900);

console.log('serveur lancé sur http://localhost:3000/');