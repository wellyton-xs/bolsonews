let express = require("express");
app = express()
let port = process.env.PORT || 7000;

/*app.get('/public/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); // Defina o tipo MIME corretamente para o arquivo CSS
  res.sendFile(__dirname + '/public/style.css'); // Substitua pelo caminho real do arquivo CSS
});
*/

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/html/index.html');
  });

app.listen(port, function () {
  console.log('servidor executando em http:/127.0.0.1:' + port + '/')
})