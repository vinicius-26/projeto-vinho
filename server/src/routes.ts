import express from 'express';

const MoviesController = require ('./controllers/MoviesController')
const UsersController = require ('./controllers/UsersController');
const TanqueController = require ('./controllers/TanquesController');

const routes = express.Router();

const moviesController = new MoviesController();
const usersController = new UsersController();
const tanquesController = new TanqueController();

//rotas para buscar os filmes
routes.get('/movies',moviesController.index);
routes.get('/filtermovies',moviesController.filterMovies);

//rota para cadastro de usuário
routes.post('/adduser',usersController.create);
routes.get('/listusers',usersController.index);
routes.put('/addmoviewishlist',usersController.createWishList);
routes.put('/editmovie',usersController.editWishList);



//rota para cadastro de tanques
routes.post('/addtanque',tanquesController.create);
routes.get('/listtanques',tanquesController.index);



routes.get('/',(req,res)=>{
    res.json({msg: "Olá mundo"});
})


export default routes;