import { renderCategories, renderRooms, categories } from "./render.js";

export function filterUnique() {
    const listItem = document.querySelectorAll('.unique-content-wrap ul li:not(.showmore-wrap)')
    const categoryCon = document.querySelector(".category-container")
    let renderhtml = ''


    listItem.forEach((list) => {


        list.addEventListener('click', () => {
            let renderhtml = ''

            let filtered = []

            const spans = list.querySelectorAll('span')
            const stay = spans[0].innerText
            const place = spans[1].innerText
            console.log(stay, place)
            for (const category in categories) {
                const matched = categories[category].filter(room =>
                    room.type === stay && room.location === place
                )
                filtered = filtered.concat(matched)
            }
            console.log(filtered)

            filtered.forEach((room) => {
                renderhtml += renderRooms(room, false)

            })
            categoryCon.classList.add('list')
            categoryCon.innerHTML = renderhtml

            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            })


        })
    })

}