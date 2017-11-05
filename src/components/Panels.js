import React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel.js';

const styles = {
    margin: "35px auto 0 auto",
    textAlign: 'center'
};

function Panels(props) {
    console.log(props.colors);

    var list = [];
    for(var i = 0; i < 9; i++) {
        console.log('color is ', props.colors[i]);
        list.push(
            <Panel key={i} id={i} color={props.colors[i]} selectPanel={props.selectPanel}/>
        );
    }

    return (
        <div style={styles}>
            {list}
        </div>
    );
}

Panels.propTypes = {
    colors: PropTypes.object,
    selectPanel: PropTypes.func,
};

export default Panels;
