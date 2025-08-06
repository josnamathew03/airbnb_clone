import { categories, renderRooms, renderCategories } from "./render.js"
import { favorites } from "./wishlist.js"


const categoryCon = document.querySelector(".category-container")

export function search() {
    let updatedCat = {}
    const destinationInput = document.querySelector(".destination-input")
    const destinationInputM = document.querySelector('.search input')
    if (destinationInput) {
        destinationInput.addEventListener('input', (e) => {
            searchImplementation(e)
        })
    }

    if (destinationInputM) {
        destinationInputM.addEventListener('input', (e) => {
            searchImplementation(e)
        })
    }

    function searchImplementation(e) {
        const value = e.target.value.toLowerCase()
        // console.log(value)

        let newCat = {}

        categoryCon.innerHTML = ''

        // console.log(value)
        // setInterval(()=>{

        // })
        if (value === '') {
            // categoryCon.innerHTML = ''
            // console.log(true)
            // console.log(favorites)
            if (favorites.length === 0)
                renderCategories(categories)
            else {
                updatedCat = {
                    'Favorites': favorites,
                    ...categories
                }
                renderCategories(updatedCat)
            }



            return
        }

        // categoryCon.innerHTML = ''

        for (const category in categories) {

            if (category.toLowerCase().includes(value)) {

                newCat[category] = categories[category]
            }

        }
        // console.log(newCat)
        // renderCategories(newCat)
        if (Object.keys(newCat).length > 0) {
            renderCategories(newCat)
        } else {
            // optionally: render "no results found" message or leave blank
            categoryCon.innerHTML = "<p>No matches found.</p>"
        }


    }
}