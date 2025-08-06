import { loadCatogories, renderCategories, categories } from "./render.js";
import { search } from "./search.js"
import { wishList } from "./wishlist.js"
import { filterUnique } from "./filter.js"

loadCatogories().then(() => {
    renderCategories(categories)

    search()
    wishList()
    filterUnique()
})