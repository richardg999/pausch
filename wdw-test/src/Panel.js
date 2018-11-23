import React from 'react';
import img from './pauschtest1.jpg';

function Panel(props) {
    return <div style={{
        backgroundColor: props.color
    }}>
        <img style={{
            opacity: .3
        }}
        src={img} alt="Paush Bridge" height="200px" width="200px" />
    </div>;
}

export default Panel;

