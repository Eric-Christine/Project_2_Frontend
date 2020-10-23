const baseURL = "http://localhost:3000"
const locationIndexURL = `${baseURL}/locations`
//
citiesPin = document.querySelector('.cities-pin')
usNumbersPin = document.querySelector('.us-numbers-pin')
//


fetch(locationIndexURL)
    .then(parseJSON)
    .then(inputLocations)


function inputLocations(locations) {
    grabCountry = locations.filter(location => location.country == "US")
    sortLocations(grabCountry)
    totalUSNumbers(grabCountry)
}


function sortLocations(locations) {
    const sortedLocations = locations.sort(function (a,b) {
        return b.confirmed - a.confirmed;
    })
    sortedLocations.slice(0, 11).forEach(displayCityLocations)
}


function displayCityLocations(location) {
    const cityName = document.createElement('li')
    cityName.innerText = `${location.city}, confirmed cases: ${location.confirmed} Deaths: ${location.deaths}`
 
    citiesPin.append(cityName)
}

function totalUSNumbers(locations) {
        
    condense_confirmed = grabCountry.reduce( (sum, location) => sum + location.confirmed, 0)
        
    condense_deaths = grabCountry.reduce( (sum, location) => sum + location.deaths, 0)
        
    condense_recovered = grabCountry.reduce( (sum, location) => sum + location.recovered, 0)

    const USNumbers = document.createElement('li')
    USNumbers.innerText = `confirmed cases: ${condense_confirmed} Deaths: ${condense_deaths}`
    usNumbersPin.append(USNumbers)
}   

// const magic_countries = [
//     "Australia",
//     "Brazil",
//     "Canada",
//     "Chile",
//     "China",
//     "Columbia",
//     "Denmark",
//     "France",
//     "Germany",
//     "India",
//     "Italy",
//     "Japan",
//     "Mexico",
//     "Netherlands",
//     "Pakistan",
//     "Peru",
//     "Russia",
//     "Spain",
//     "Sweden",
//     "US",
//     "Ukraine",
//     "United Kingdom"
// ]


function parseJSON(response) {
    return response.json()
}