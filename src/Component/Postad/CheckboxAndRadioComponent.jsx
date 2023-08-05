import React, { useState } from 'react';

const CheckboxAndRadioComponent = () => {
  const [formState, setFormState] = useState({
    checkboxes: {
      checkbox1: false,
      checkbox2: false,
    },
    radioButtons: {
      radio1: false,
      radio2: false,
    },
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [name]: checked,
      },
    }));
    console.log(formState.checkboxes)
  };

  const handleRadioChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      radioButtons: {
        ...prevState.radioButtons,
        [name]: checked,
      },
    }));

  console.log(formState.radioButtons)
  };

  return (
    <div>
      <h2>Checkbox and Radio Component</h2>
      <label>
        Checkbox 1:
        <input
          type="checkbox"
          name="checkbox1"
          checked={formState.checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Checkbox 2:
        <input
          type="checkbox"
          name="checkbox2"
          checked={formState.checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Radio 1:
        <input
          type="radio"
          name="radio1"
          checked={formState.radioButtons.radio1}
          onChange={handleRadioChange}
        />
      </label>
      <br />
      <label>
        Radio 2:
        <input
          type="radio"
          name="radio2"
          checked={formState.radioButtons.radio2}
          onChange={handleRadioChange}
        />
      </label>
      <br />
      <p>Selected checkboxes: {JSON.stringify(formState.checkboxes)}</p>
      <p>Selected radio buttons: {JSON.stringify(formState.radioButtons)}</p>
    </div>
  );
};

export default CheckboxAndRadioComponent;