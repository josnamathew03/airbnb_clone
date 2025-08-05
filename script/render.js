import { search } from "./search.js"
import { wishList } from "./wishlist.js"
import { filterUnique } from "./filter.js"

export let categories = []
async function loadCatogories() {

    const response = await fetch("./data/categories.json")
    const data = await response.json()
    categories = data
}
// loadCatogories()

const categoryCon = document.querySelector(".category-container")
export async function renderCategories(favorites, fillId) {
    await loadCatogories()
    let categorieshtml = ''
    if (favorites === null) {
        return
    }
    else {

        for (const fav in favorites) {
            categorieshtml += `   <div class="section-name-con">
                                <h2>
                                    <span class="section-name">
                                        ${fav}<span class="right-arrow-first">
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
            favorites[fav].forEach((item) => {
                categorieshtml += renderRooms(item, true)
                // console.log(item)
            });
            categorieshtml += ` 
                                           </div>
                        </div>`
        }
    }
    for (const category in categories) {
        categorieshtml += `   <div class="section-name-con">
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

        categories[category].forEach(room => {

            if (room.id === Number(fillId)) {
                const wishSvg = document.querySelector(` .wish-svg-${fillId}`)
                categorieshtml += renderRooms(room, true)
            }
            else
                categorieshtml += renderRooms(room, false)

        });
        categorieshtml += ` 
                                           </div>
                        </div>`;


    }
    categoryCon.innerHTML = categorieshtml

    search()
    wishList()
    filterUnique()
}
renderCategories({})

export function renderRooms(room, isFav) {
    let roomshtml = ''
    return roomshtml += `
                            <div class="content-con">
                                <div class="content-wrap">
                                    <div class="image-con">
                                        <div class="image-wrap">
                                            <img src=${room.image}
                                                alt="">
                                        </div>
                                        <div class="guest-con">
                                            <span>Guest favourite</span>
                                        </div>
                                        <button class="wish-btn" data-room-id=${room.id}>
                                            <span class="wish-span">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                                    aria-hidden="true" role="presentation" focusable="false" class="wish-svg-${room.id}"
                                                    style="display: block; fill: ${isFav ? 'rgb(255, 56, 92)' : 'rgba(0, 0, 0, 0.5)'}; height: 24px; width: 24px; stroke: #ffffff; stroke-width: 2; overflow: visible;">
                                                    <path
                                                        d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </button>

                                    </div>
                                    <div class="des-con">
                                        <span class="text-wrap">
                                            <div class="text-div">${room.name}</div>
                                        </span>
                                        <div class="price-wrap">
                                            <div>
                                                <span>₹${room.price.toLocaleString('en-IN')}</span>
                                                <span>for ${room.for} nights</span>
                                            </div>
                                            <span>&nbsp.&nbsp</span>

                                            <span class="rating-span">
                                                <span class="star-span">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                                        aria-hidden="true" role="presentation" focusable="false"
                                                        style="display: block; height: 8px; width: 8px; fill: currentcolor;">
                                                        <path fill-rule="evenodd"
                                                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span>${room.rating.toFixed(1)}</span>

                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
`

}