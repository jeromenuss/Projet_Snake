/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//On déclare les indépendances du serveur
var express = require('express'),
        fs = require('fs'),
        https = require('https'),
        app = express();

var path = require("path");

var cert = fs.readFileSync(path.join(__dirname,'..','/private/SSL/servsnake.crt'));
var key = fs.readFileSync(path.join(__dirname,'..', '/private/SSL/servsnake.key'));


//On configure le serveur
//app.configure(function(){
//    app.use(express.static(__dirname));
//});

//app.use(express.static(__dirname));


app.get('/', function(req, res){
    res.sendfile(__dirname+'/index.html');
});

//On lance le serveur HTTP
app.server = https.createServer({key: key, cert: cert}, app);
app.server.listen(1443);

console.log('serveur lancé sur https://localhost:1443/');