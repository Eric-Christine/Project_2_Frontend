console.log('showPage')

const baseURL = 'http://localhost:3000'
const locationsURL = `${baseURL}/locations`

const searchParams = newURLSearchParams(window.location.search)
const searchTerm = searchParams.get('search_term')
console.log(searchTerm)

// make a user URL later

fetch (locationsURL)
    .then(response => response.json())
    .then(locations => {
        
        const displayLocation = document.createElement('li')
        displayLocation.innerText = locations.name
        document.body.appendChild(displayLocation)

    })