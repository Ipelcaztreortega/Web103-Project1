import { pool } from '../config/database.js'

const getPokemons = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM pokemons ORDER BY id ASC');
        res.status(200).json(results.rows);
        console.log('results:', results.rows);
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
} 

export default {
    getPokemons
}