import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addGift = (giftValue) => {
    setCategories([giftValue, ...categories]);
  };
  console.log(categories);

  return (
    <>
      <div className="gift-container">
        <div className="gift__title">GiftExpertApp</div>
        <AddCategory addGift={(value) => addGift(value)} />
        <button className="gift__button" onClick={addGift}>
          Agregar
        </button>
        <ol className="gift__list">
          {categories.map((category, i) => (
            <li key={i}>{category}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default GiftExpertApp;
