import express from 'express';

const UsersController = require ('./controllers/UsersController');
const TanqueController = require ('./controllers/TanquesController');
const ClienteController = require('./controllers/ClientesController');
const UvasController = require('./controllers/UvasController')

const routes = express.Router();

const usersController = new UsersController();
const tanquesController = new TanqueController();
const clientesController = new ClienteController();
const uvasController = new UvasController();


//rota para cadastro de usuário
routes.post('/adduser',usersController.create);
routes.get('/listusers',usersController.index);
routes.put('/addmoviewishlist',usersController.createWishList);
routes.put('/editmovie',usersController.editWishList);



//rota para cadastro de tanques
routes.post('/addtanque',tanquesController.create);
routes.get('/listtanques',tanquesController.index);
routes.put('/insertuva',tanquesController.insert);

//rota para cadastro de clientes
routes.post('/addcliente',clientesController.create);
routes.get('/listclientes',clientesController.index);

//rota para cadastro de clientes
routes.post('/adduva',uvasController.create);
routes.get('/listuvas',uvasController.index);



routes.get('/',(req,res)=>{
    res.json({msg: "Olá mundo"});
})


export default routes;