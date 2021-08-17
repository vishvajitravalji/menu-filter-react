import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <main className="menu section">
      <div className="title">
        <h2>Our menu</h2>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItem} />
    </main>
  );
}

export default App;
