import Directory from "./directory.js";
export default function CategoryItem({title, imgUrl}) {
    const docFragment = document.createDocumentFragment();

    const categoryItem = document.createElement('div');
    categoryItem.classList.add("category-item");
    categoryItem.addEventListener('click', () => Directory(title));

    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('alt', title);

    const categoryItemTitle = document.createElement('div');
    categoryItemTitle.classList.add("category-item-title");
    categoryItemTitle.textContent = `${title}`;

    categoryItem.append(img);
    categoryItem.append(categoryItemTitle); 

    docFragment.append(categoryItem);

    return docFragment;
}