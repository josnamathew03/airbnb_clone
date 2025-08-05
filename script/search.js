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
            console.log(favorites)
            renderCategories(favorites,false)
            return
        }
        categoryCon.innerHTML = ''

        for (const category in categories) {

            if (category.toLowerCase().includes(value)) {
                // console.log(categories[category])
                // renderCategories({[category] : categories[category]},false)
                let roomshtml = ''
                roomshtml+= `   <div class="section-name-con">
                                <h2>
                                    <span class="section-name">
                                        ${category}<span class="right-arrow-first">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                                role="presentation" focusable="false"
                                                style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                                <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </h2>
                                <div class="right-arrow-con">
                                    <div class="right-arrow-wrap">
                                        <button class="bt1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                                role="presentation" focusable="false"
                                                style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                                                <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                                            </svg>
                                        </button>
                                        <button class="bt2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                                role="presentation" focusable="false"
                                                style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                                                <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                             </div>
                   
                        <div class="section-content-con">
                            <div class="section-content-wrap">`
                let rooms = categories[category]
                rooms.forEach(room => {
                    roomshtml += renderRooms(room,false)
                });
                // categoryCon.classList.add('list')
                categoryCon.innerHTML += roomshtml

            }

        }


    })
}