import CategoryItem from "./categoryItem.js";

function Categories(categoriesData) {
    const docFragment = document.createDocumentFragment();
    categoriesData.forEach(item => docFragment.append(CategoryItem(item)));
    return docFragment;
}

export default Categories;

