const renderPokemons = async () => {
    const response = await fetch('/pokemons')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(pokemon => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${pokemon.image})`

            const name = document.createElement('h3')
            name.textContent = pokemon.name
            bottomContainer.appendChild(name)

            const type = document.createElement('p')
            type.textContent = 'Type: ' + pokemon.type
            bottomContainer.appendChild(type)

            const habitat = document.createElement('p')
            habitat.textContent = 'Great For: ' + pokemon.habitat
            bottomContainer.appendChild(habitat)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/pokemons/${pokemon.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
    })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No pokemons Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderPokemons()
}