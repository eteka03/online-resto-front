export default function fakeMenu(){

    return [
        {
            category: 'Entrees',
            plats:[
                {
                    name:'KIBEH',
                    description:'Lebanese Beef Croquettes',
                    price:45
                },
                {
                    name:'GARLIC POTATOES',
                    description:'Golden seasoned garlic potatoes served with garlic sauce.',
                    price:34
                },
                {
                    name:'TABOULEH',
                    description:'Parsley and Bulgur salad with diced tomatoes, onions, and citrus dressing.',
                    price:15
                },
            ],
            
        },

        {
            category: 'PLATS',
            plats:[
                {
                    name:'CHICKEN SHAWARMA',
                    description:'Marinated chicken. Served with rice, potatoes, coleslaw, and sauce.',
                    price:23
                },
                {
                    name:'KAFTA ARAYES',
                    description:'Lebanese club sandwich. Served with rice, potatoes, coleslaw and sauces.',
                    price:70
                },
                {
                    name:'BROCHETTE CHICKEN',
                    description:'Two sticks of tender chicken or beef cubes or one of each. Served with rice, potatoes, coleslaw, and sauces.',
                    price:7
                },
            ],
        }
    ]
}