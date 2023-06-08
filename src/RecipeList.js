import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
	return (
		<div className="recipe-list">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Recipe</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe, index) => (
						<RecipeView
							deleteRecipe={() => deleteRecipe(index)}
							index={index}
							key={index}
							recipe={recipe}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default RecipeList;
