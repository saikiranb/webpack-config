import {useState} from 'react'
const sakiReciepe = {
    dal: 2,
    rice: 1,
    oil: 1
}

const sakiNewReceipe = {
    ...sakiReciepe,
    cook: "oven",
    oil: 1,
}

console.log(sakiReciepe)
console.log(sakiNewReceipe)


const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return(
        <div>
            <h3>Current Recipe:</h3>
            <button onClick ={()=>setRecipe(sakiReciepe)}>Saki Recipe</button>
            <button onClick={()=> setRecipe(sakiNewReceipe)}>Saki New Recipe</button>

            <ul>
                {Object.keys(recipe).map((material)=>(
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Recipes