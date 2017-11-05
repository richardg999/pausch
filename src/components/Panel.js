import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    display: 'inline-block',
    margin: '0 2px',
    width: '100px',
    height: '275px',
    border: '3px solid transparent',
    overflow: 'hidden',
    backgroundColor: '#A0A0A0',
};

function Panel(props) {
    return (
        <div
            className='panel'
            style={{...styles, backgroundColor: props.color}}
            onClick={function() {
                props.selectPanel(props.id);
            }}
        >
        </div>
    );
}

Panel.defaultProps = {
    color: '#808080',
};

Panel.propTypes = {
    color: PropTypes.string,
    id: PropTypes.number,
    selectPanel: PropTypes.func,
};

export default Panel;
