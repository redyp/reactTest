import { useState, useEffect } from "react"
import axios from "axios"

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const endpoint = "http://localhost:4000";
        const headers = {
            "content-type": "application/json",
            "Authorization": "",
        };
        const graphqlQuery = {
            "query": `query GetAllRecipe {
                    getAllRecipe {
                        recipes {
                        id
                        recipe_name
                        available
                        price
                        special_offer
                        special_offer_price
                        highlight
                        }
                    }
                    }`,
            "variables": {}
        }
        axios({
            url: endpoint,
            headers,
            method: "post",
            data: graphqlQuery
        })
            .then(resp => {setRecipes(resp.data.data.getAllRecipe.recipes)})
    }, [])
    return (
        <div>
            {recipes.map(recipe => (
                <h3 key={recipe.id} onClick={() => { console.log(recipe.id); setRecipes(recipes.filter((item) => item.id !== recipe.id)) }}>{recipe.recipe_name}</h3>
            ))}
            <button>Refresh Menu</button>
        </div>
    )
}

export default RecipeList
