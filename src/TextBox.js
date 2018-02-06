import React from 'react';

const TextBox = (props) => {
  
  const textArray = props.data.map((d,i) => {
        console.log(props.titleNum);
        if(i === props.titleNum) {
        return (
            <div>
              <p>{d.content}</p>
            </div>);
        };
      })

  return (
      <div className="text-styles">
          <h2>CONTENT</h2>
          {textArray}
      </div>
  );
};

export default TextBox;