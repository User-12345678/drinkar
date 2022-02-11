

export const createDrink = async(prop) => {

    const name = prop.name;
    const ingredient = prop.ingredient;
    const image = prop.image;

   const ingredientObject = getIngredient(ingredient)

   return {
       name: name, 
       image: image,
       ingredients: ingredientObject
   }
}


const getIngredient = (ingredient) => {

    let object = {};

     Object.keys(ingredient).forEach((key) => {
        if(Object.keys(ingredient[key]).length !== 0){
            Object.assign(object, ingredient[key]) 
        }
    })

    return object;
}