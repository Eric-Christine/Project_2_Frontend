const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")
console.log(search_term)

fetch('http://localhost:3000/locations')
    .then (response => response.json())
    .then (result => showSearchResult(result))



function showSearchResult(data){
    const result = data.filter(data => data.city == `${search_term}`)
    const confirmed_cases = result.map(object => object.confirmed)
    const confirmed_deaths = result.map(object => object.deaths)
    const confirmed_cases_result = confirmed_cases[0]
    console.log(confirmed_cases_result)
   

    // create element
    const displayCases = document.createElement('li')
    const displayDeaths = document.createElement('li')
    displayCases.innerText = `${search_term}'s confirmed cases: ${confirmed_cases_result}`
    displayDeaths.innerText = `${search_term}'s confirmed deaths: ${confirmed_deaths}`


    // append element
    const bullet_point =  document.querySelector('li')
    bullet_point.append(displayCases, displayDeaths)




    // const all_cities = data.map(objects => objects.city)
    // console.log(all_cities)

    // const result = all_cities.filter(cities => cities == "Dallas")
    // console.log(result)

}
