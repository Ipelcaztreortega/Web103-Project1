// Create a variable called header that points to the header tag.
const header = document.querySelector('header');

// Create a div element with a class name header-container.
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');

const headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');

const headerLogo= document.createElement('img');
headerLogo.src = '/logo.png';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Pokemon';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.classList.add('header-right');

const headerButton = document.createElement('button');
headerButton.textContent = 'Home';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer)

