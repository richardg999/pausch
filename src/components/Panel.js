import React from 'react';
import PropTypes from 'prop-types';
import img from '../assets/pauschtest1.jpg';

function Panel(props) {
    return (
        <div
            className='panel'
            style={{
                backgroundColor: props.color,
            }}
            onClick={function() {
                props.selectPanel(props.id);
            }}
        >
            <img src={img} alt="Pausch Panel" width="200px" height="300px"/>
        </div>
    );
}

Panel.propTypes = {
    id: PropTypes.number,
    color: PropTypes.string,
    selectPanel: PropTypes.func,
};

export default Panel;
