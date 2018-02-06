import React from 'react';

const TitleBox = (props) => {
    console.log(props);
    const titleArray = props.data.map((d,i) => {
        return (
            <div>
                <a href="" onClick={() => {
                    props.handleClick(i);
                    }}>{d.title}</a>
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