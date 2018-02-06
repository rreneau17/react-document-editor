import React from 'react';

const TitleBox = (props) => {
    const titleArray = props.data.map((d,i) => {
        return (
            <div>
                <p onClick={() => {
                    props.handleClick(i);
                    }}>{d.title}</p>
            </div>);
        })
    return (
        <div className="title-styles">
            <h2>TITLE</h2>
            {titleArray}
        </div>
    );
  };

export default TitleBox;