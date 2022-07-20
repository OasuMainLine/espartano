
export function getCategories(){
    return fetch("http://noticiaslaravel.test/api/categories").then((res) => res.json());

}

