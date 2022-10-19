const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const search = document.getElementById('search');
const containerCocktail = document.getElementById('container-cocktail')


window.addEventListener('DOMContentLoaded',getApi)
search.addEventListener('keydown', searchCocktail);


function getApi(){
    
    fetch(API)
    .then(
        response => response.json()
        ).then(
    data => createCocktail(data))
}

function createCocktail(data) {

    data.drinks.forEach(drink =>
        {
            const cocktail = document.createElement('div');
            cocktail.classList.add('drinks')

            const name = document.createElement('h2')
            name.textContent = drink.strDrink
            name.classList.add('name')

            const img = document.createElement('img')
            img.src = drink.strDrinkThumb
            img.classList.add('img')

            cocktail.appendChild(name)
            cocktail.appendChild(img)
            containerCocktail.appendChild(cocktail)
        })
}

function searchCocktail(event) {
        
    if(event.keyCode === 13){

    containerCocktail.innerHTML = ""

    newAPI = API+event.target.value
        fetch(newAPI)
    .then(
        response => response.json()
        ).then(
    data => createCocktail(data))
    }            
}