
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
    sortedLocations.slice(0, 10).forEach(displayCityLocations)
}


function displayCityLocations(location) {
    const cityName = document.createElement('li')
    cityName.innerText = `${location.city}, ${location.province} Confirmed Cases: ${location.confirmed} Deaths: ${location.deaths}`
 
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



// const baseBackend = 'http://localhost:3000/locations'
// const showPage = 'http://localhost:3001/showPage.html'

// //search params
// const searchParams = new URLSearchParams(window.location.search)
// const search_term = searchParams.get("search_term")
// console.log(search_term)

// let searchResultsBackend = `${locationIndexURL}`

// if(search_term) {
//     searchResultsBackend = `${locationIndexURL}?search_term=${search_term}`
// }
    
// fetch(locationIndexURL)
//     .then (parseJSON)
//     .then (all_objects => display(all_objects))

// function display(data) {
//     console.log(data[0])
//     const h1 = document.createElement('h1')
//     h1.innerText = data[0]
    
// }

// function display(all_data) {
//     console.log(all_data)
//     console.log(search_term)
//     let cities = all_data.map (x => x.city)
//     x = cities.find(function(city) {
//         city == `"${search_term}"`
//     })
// }



// function findCity(){
//     let cities = all_data.map (x => x.city)
//     cities.find(function(city) {
//         city == search_term 
//     })
// }


function parseJSON(response) {
    return response.json()
}
