import express from 'express';
import pokemonsRouter from './routes/pokemons.js';
// Creating an express instance
const app = express();


// Middle ware
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));


// Routes
app.use('/pokemons', pokemonsRouter); // So now when we go to the /pokemon endpoint, the request will be forwarded to the pokemonRouter.


// Catchall route
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon API!');
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
})