import React from "react";

function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, id) => {
        return (
          <button
            className="filter-btn"
            key={id}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
