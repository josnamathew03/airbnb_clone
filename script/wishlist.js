import { categories, renderCategories } from "./render.js";

export let favorites = []

export function wishList() {
    const wishBtn = document.querySelectorAll('.wish-btn')
    let updatedCat = {}
    wishBtn.forEach(button => {
        button.addEventListener('click', () => {
            const { roomId } = button.dataset
            // console.log(roomId)
            const wishSvg = document.querySelector(`.wish-svg-${roomId}`)
            // wishSvg.setAttribute('fill','red' )
            if (wishSvg.style.fill === '#ff385c' || wishSvg.style.fill === 'rgb(255, 56, 92)') {
                // wishSvg.style.fill = 'rgba(0, 0, 0, 0.5)';

                const index = favorites.findIndex(room => Number(roomId) === room.id)
                console.log(index)
                favorites.splice(index, 1)

                updatedCat  = {'Favorites': favorites,
                    ...categories
                }
                renderCategories(updatedCat)
                wishList()
                // return
            }
            else {
                // wishSvg.style.fill = '#ff385c';
                // wishSvg.classList.add('fill')
                for (const category in categories) {
                    const room = categories[category].find(room => room.id === Number(roomId))
                    if (room) {
                        favorites.push(room)
                        break
                    }

                }
                updatedCat  = {'Favorites': favorites,
                    ...categories
                }
                // console.log(categories)
                renderCategories(updatedCat, roomId)
                wishList()

            }

        })
    });
}