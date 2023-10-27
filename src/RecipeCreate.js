import React, { useState } from "react";

function RecipeCreate({ createHandle }) {
  //create prop for content
  const initialUseState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [content, setContent] = useState(initialUseState);
  //Create submit handle and change handle
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    createHandle(content);
    setContent(initialUseState);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={submitHandle} className={"bg-warning"}>
      <table>
        <tbody>
          <tr style={{ backgroundColor: "pink" }} className="wideRow">
            <td htmlFor="name">
              <input
                key={content.name}
                name="name"
                id="name"
                placeholder="Name"
                required={true}
                onChange={changeHandle}
                value={content.name}
              />
            </td>
            <td htmlFor="cuisine">
              <input
                key={content.cuisine}
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                required={true}
                onChange={changeHandle}
                value={content.cuisine}
              />
            </td>
            <td htmlFor="photo">
              <input
                key={content.photo}
                name="photo"
                id="photo"
                placeholder="URL"
                required={true}
                type={"url"}
                onChange={changeHandle}
                alt={content.photo}
                value={content.photo}
              />
            </td>

            <td htmlFor="ingredients">
              <textarea
                key={content.ingredients}
                name="ingredients"
                id="ingedients"
                placeholder="Ingredients"
                required={true}
                cols={30}
                onChange={changeHandle}
                value={content.ingredients}
                style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
              />
            </td>

            <td htmlFor="preparation">
              <textarea
                key={content.prep}
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                required={true}
                cols={30}
                onChange={changeHandle}
                value={content.preparation}
                style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
