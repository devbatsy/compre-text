require("dotenv").config()
const http = require("http");
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require("path");
const websocket = require('ws');
const {init_wss} = require("./server_utils/socket_init");
//initialise websocket server
init_wss(server)
//initialise websocket server
const cipher = require("./_g__function_lib/cipher_de_cipher")

//imports from utils
const router = require("./server_utils/router");

app.use(express.static(path.join(__dirname , 'static/routeFiles')))
app.use(express.static(path.join(__dirname , 'static/assets')))
app.use(express.static(path.join(__dirname , 'static/chatApp')))
app.use(express.static(path.join(__dirname , 'static/signUp')))
app.use(express.static(path.join(__dirname , 'static/login')))
app.use(express.static(path.join(__dirname , 'static/redirect')))
app.use(express.static(path.join(__dirname , 'static')))
app.use(express.static(path.join(__dirname)))

app.set('view engine', 'ejs');

//initialise express json parser for fetch API
app.use(express.json());
//initialise express json parser for fetch API


app.use("/" , router);

server.listen(process.env.PORT , () =>{
    console.log(`Server is listening at port ${process.env.PORT}`)
})