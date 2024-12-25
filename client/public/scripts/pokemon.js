const renderPokemon = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/pokemons')
    const data = await response.json()

    const pokemonContent = document.getElementById('pokemon-content')

    let pokemon;

    pokemon = data.find(pokemon => pokemon.id === requestedID)

    if (pokemon) {
        document.getElementById('image').src = pokemon.image
        document.getElementById('name').textContent = pokemon.name
        document.getElementById('discoveredBy').textContent = 'Discovered by: ' + pokemon.discoveredby // Railway does not allow capitilization for this one
        document.getElementById('type').textContent = 'Type: ' + pokemon.type
        document.getElementById('habitat').textContent = 'Great For: ' + pokemon.habitat
        document.getElementById('description').textContent = pokemon.description
        document.title = `Pokemon API- ${pokemon.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No pokemons Available 😞'
        pokemonContent.appendChild(message)   
    }
}

renderPokemon()