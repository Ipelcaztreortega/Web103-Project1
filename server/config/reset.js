import { pool } from './database.js'
import './dotenv.js'
import pokemonData from '../data/pokemons.js'

const createPokemonsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS pokemons;

        CREATE TABLE IF NOT EXISTS pokemons (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type VARCHAR(20) NOT NULL,
            habitat VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            discoveredBy VARCHAR(255) NOT NULL,
            discoveredOn TIMESTAMP NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 pokemons table created successfully')
    } catch (err) {
        console.error('⚠️ error creating pokemons table', err)
    }
}

const seedPokemonsTable = async () => {
    await createPokemonsTable()

    pokemonData.forEach((pokemon) => {
        const insertQuery = {
            text: 'INSERT INTO pokemons (name, type, habitat, image, description, discoveredBy, discoveredOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            pokemon.name,
            pokemon.type,
            pokemon.habitat,
            pokemon.image,
            pokemon.description,
            pokemon.discoveredBy,
            pokemon.discoveredOn
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting pokemon', err)
                return
            }

            console.log(`✅ ${pokemon.name} added successfully`)
        })
    })
}

seedPokemonsTable()