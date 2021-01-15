const API_KEY = '9f3dd533abd910ed3bca22ff26c58d66';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async() => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'treding',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: []
            }
        ];
    }
}


/*
PT-BR
-originais da netflix 
-recomendados
-em alta 
-generos 
    -ação 
    -comédia 
    -terror 
    -romance 
    -documentários 

ENGLISH
-netflix originals
-treding
-top rated
-genres)
    -action
    -comedy
    -horror
    -romance
    -documentary
*/
