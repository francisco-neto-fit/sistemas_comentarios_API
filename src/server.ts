import express from 'express';
import 'reflect-metadata'; 
import './database';
import {router} from './routes';
const app = express();
app.use(express.json()); //indica para o exporess que será usado json

app.use(router); // inserindo as rotas no express

app.listen(3000, () => console.log('server is running grr')); // inicializa o servidor na porta 3000