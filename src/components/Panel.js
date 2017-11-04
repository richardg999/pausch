import React from 'react';
import img from '../assets/pauschtest1.jpg';
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

const Panel = ({ color, isSelected, selectPanel}) => (
    <div className='panel' style={{...styles, borderColor: isSelected ? '#3f51b5' : '#808080'}}
        onClick={selectPanel}
    >
        <img src={img} width='200px' height='300px' style={{
            filter: `opacity(0.3) drop-shadow(0 0 0 ${color})`,
        }}/>
    </div>
);

Panel.defaultProps = {
    color: '#808080',
};

Panel.propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
    selectPanel: PropTypes.func.isRequired,
};

export default Panel;
