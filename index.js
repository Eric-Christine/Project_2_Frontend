console.log('working')
//URLS
const baseBackend = 'http://localhost:3000/locations'
const showPage = 'http://localhost:3001/showPage.html'

//search params
const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")
console.log(search_term)

let searchResultsBackend = `${baseBackend}`

if(search_term) {
    searchResultsBackend = `${baseBackend}?search_term=${search_term}`
}
    
fetch(baseBackend)
    .then (response => response.json())
    .then (all_objects => display(all_objects))

function display(data) {
    console.log(data[0])
    const h1 = document.createElement('h1')
    h1.innerText = data[0]
    
}

function display(all_data){
    console.log(all_data)
    console.log(search_term)
    let cities = all_data.map (x => x.city)
    x = cities.find(function(city) {
        city == `"${search_term}"`
    })
}



function findCity(){
    let cities = all_data.map (x => x.city)
    cities.find(function(city) {
        city == search_term 
    })
}




            
            

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
