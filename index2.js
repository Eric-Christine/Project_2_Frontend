const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")
console.log(search_term)

fetch('http://localhost:3000/locations')
    .then (response => response.json())
    .then (renderdata)

function renderdata(data){
    showSearchResult(data)
    displayDeaths(data)
}


function displayDeaths(data) {
}



function showSearchResult(data){
    const result = data.filter(data => data.city == `${search_term}`)
    const confirmed_cases = result.map(object => object.confirmed)
    const confirmed_deaths = result.map(object => object.deaths)
    const confirmed_recoveries = result.map(object => object.recovered)
    console.log(confirmed_recoveries)
    const confirmed_cases_result = confirmed_cases[0]
    const lastUpdated = result.map(object => object.lastUpdate)
    console.log(confirmed_cases_result)
   

    // create element

    const displayCases = document.createElement('li')
    const displayDeaths = document.createElement('li')
    const displayRecovered = document.createElement('li')
    const displayUpdate = document.createElement('li')

    // modifiy element
    displayCases.innerText = `${search_term}'s confirmed cases: ${confirmed_cases_result}`
    displayDeaths.innerText = `${search_term}'s confirmed deaths: ${confirmed_deaths}`
    displayRecovered.innerText =`${search_term}'s recovered cases: ${confirmed_recoveries}`
    displayUpdate.innerText = `Statisticss last updated: ${lastUpdated}`
    


    // append element
    const bullet_point =  document.querySelector('ul')
    bullet_point.append(displayCases, displayDeaths, displayRecovered, lastUpdated)







    // const all_cities = data.map(objects => objects.city)
    // console.log(all_cities)

    // const result = all_cities.filter(cities => cities == "Dallas")
    // console.log(result)

}
