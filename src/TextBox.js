import React from 'react';

const TextBox = (props) => {
  

  return (
      <div className="text-styles">
          <h2>CONTENT</h2>
          <input
            value={props.document.content}
            onChange={ (event) => {
              // console.log(event.target.value);
              const enteredText = event.target.value;
              props.changeHandler(enteredText);
            }}
          />
      </div>
  );
};

export default TextBox;