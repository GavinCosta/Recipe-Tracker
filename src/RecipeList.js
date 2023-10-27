import React from "react";

function RecipeList({ recipes, deleteHandle }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <table>
      <thead>
        <tr className="wideRow">
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Cuisine</h3>
          </th>
          <th>
            <h3>Photo</h3>
          </th>
          <th>
            <h3>Ingredients</h3>
          </th>
          <th>
            <h3>Preparation</h3>
          </th>
          <th>
            <h3>Actions</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(
          ({ name, cuisine, photo, ingredients, preparation }, index) => (
            <tr className="content_tr wideRow" key={index}>
              <td>{name}</td>
              <td>{cuisine}</td>
              <td>
                <div style={{ objectFit: "scale-down" }}>
                  <img
                    src={photo}
                    alt={photo}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </td>
              <td className="content_td">
                <p>{ingredients}</p>
              </td>
              <td className="content_td">
                <p>{preparation}</p>
              </td>
              <td>
                <button
                  name="delete"
                  type="submit"
                  onClick={() => deleteHandle(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default RecipeList;
