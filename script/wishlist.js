import { categories, renderCategories } from "./render.js";

export let favorites = { "favorites": [] }

export function wishList() {
    const wishBtn = document.querySelectorAll('.wish-btn')
    wishBtn.forEach(button => {
        button.addEventListener('click', () => {
            const { roomId } = button.dataset
            // console.log(roomId)
            const wishSvg = document.querySelector(`.wish-svg-${roomId}`)
            // wishSvg.setAttribute('fill','red' )
            if (wishSvg.style.fill === '#ff385c' || wishSvg.style.fill === 'rgb(255, 56, 92)') {
                wishSvg.style.fill = 'rgba(0, 0, 0, 0.5)';
                for (const fav in favorites) {
                    const index = favorites[fav].findIndex(room => Number(roomId) === room.id)
                    favorites.favorites.splice(index, 1)
                }

                renderCategories(favorites)
                return
            }
            else {
                wishSvg.style.fill = '#ff385c';
                for (const category in categories) {
                    const room = categories[category].find(room => room.id === Number(roomId))
                    if (room) {
                        favorites.favorites.push(room)
                        break
                    }

                }
                // console.log(favorites)
                renderCategories(favorites,roomId)


            }

        })
    });
}