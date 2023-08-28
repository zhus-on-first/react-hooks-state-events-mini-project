import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function handleCategoryClick(category) {
    return setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
