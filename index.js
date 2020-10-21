console.log('working')
//URLS
const baseBackend = 'http://localhost:3000/locations'
const showPage = 'http://localhost:3001/showPage.html'

//search params
const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")

let searchResultsBackend = `${baseBackend}`

if(search_term) {
    searchResultsBackend = `${baseBackend}?search_term=${search_term}`
}
    
fetch(baseBackend)
    .then (response => response.json())
    .then (result => showCities(result)) 

        function showCities(location) {
            const displayCity = document.querySelector('form')
            console.log(displayCity.submit)
            displayCity.submit = `<a href=${showPage}?search_term=${location.id}> Ok here is data for this city</a>`
            document.body.appendChild(displayCity)
        }