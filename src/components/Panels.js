import React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel.js';

function Panels(props) {
    var list = [];
    for(var i = 0; i < 9; i++) {
        list.push(
            <Panel key={i} id={i} color={props.colors[i]} selectPanel={props.selectPanel}/>
        );
    }

    return ( <div id="panels">{list}</div> );
}

Panels.propTypes = {
    colors: PropTypes.object,
    selectPanel: PropTypes.func,
};

export default Panels;
