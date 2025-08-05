import { categories, renderRooms, renderCategories } from "./render.js"
import { favorites } from "./wishlist.js"


const categoryCon = document.querySelector(".category-container")

export function search() {
    const destinationInput = document.querySelector(".destination-input")
    destinationInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase()
        let roomshtml = ''

        // console.log(value)
        if (value === '') {
            categoryCon.innerHTML = ''
            // console.log(true)
            renderCategories(favorites,false)
            return
        }
        categoryCon.innerHTML = ''

        for (const category in categories) {

            if (category.toLowerCase().includes(value)) {
                console.log(categories)
                // renderCategories({[category] : categories[category]},false)
                let roomshtml = ''

                let rooms = categories[category]
                rooms.forEach(room => {
                    roomshtml += renderRooms(room,false)
                });
                categoryCon.classList.add('list')
                categoryCon.innerHTML += roomshtml

            }

        }


    })
}