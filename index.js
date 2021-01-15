const express =require('express')
const app =express();
const { query } = require("./db/conexao");
const bodyParser =require('body-parser')
const cors = require('cors');

//    ultilizando do modo cors
app.use(cors());
//    permitindo a tranferencia de um objeto json
app.use(express.json());
//    permitindo o post pela url
app.use(bodyParser.urlencoded({extended:true}))
//   rota simples
app.get('/',(req,res)=>{
    res.send( 'Hello ');
})

// rota pra mostrar os dados como um objeto json
app.get('/api/produtos',(req,res)=>{
    const sqlSelect ="SELECT * FROM allbikes02.produto JOIN valores ON produto.id_produto = valores.id_valores;" 
//coloquei uma função sql dentro de uma variável
    query( sqlSelect,(err,result)=>{
/* teste para tratamento de erro    console.log(err); */
    res.send(result);
   });
});

app.listen(1977,()=>{
    console.log('Conectado 1977')
})