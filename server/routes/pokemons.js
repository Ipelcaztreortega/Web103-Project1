import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import pokemonData from '../data/pokemons.js';

//  The import.meta.url is a special property that contains the URL of the current module file. This URL can be used to determine the file path of the module file using the fileURLToPath function.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create a new instance of the express Router
const router = express.Router()

// Create a GET route at the / endpoint that responds with status 200 and sends a JSON of the giftData.
router.get('/', (req, res) => {
    res.status(200).json(pokemonData);
});

router.get('/:pokemonId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/pokemon.html'))
});

export default router;
	