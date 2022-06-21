import { useState } from "react";

const AddCategory = ({ addGift }) => {
  //state que guarda el valor del input
  const [giftValue, setGiftValue] = useState("");

  //funcion que agrega el valor del input a la funcion que modifica el estado
  const handleChange = ({ target }) => {
    setGiftValue(target.value);
  };

  //funcion que añade el nuevo valor a las categorias
  const onSubmit = (e) => {
    e.preventDefault();
    if (giftValue.trim().lenght <= 1) {
      addGift(giftValue.trim());
      setGiftValue("");
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Search Gift"
        value={giftValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddCategory;
