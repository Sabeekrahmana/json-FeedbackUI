import React, { useState } from "react"

const RatingSelect = ({select}) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => { 
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }; 

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="1"
          id="num1"
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="2"
          id="num2"
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="3"
          id="num3"
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="4"
          id="num4"
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="5"
          id="num5"
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="6"
          id="num6"
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="7"
          id="num7"
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="8"
          id="num8"
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="9"
          id="num9"
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          onChange={handleChange}
          name="rating"
          value="10"
          id="num10"
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
