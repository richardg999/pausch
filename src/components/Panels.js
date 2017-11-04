import React from 'react';
import Panel from './Panel';
import PropTypes from 'prop-types';

const styles = {
    textAlign: 'center',
    margin: '35px auto 0 auto',
    //backgroundColor: 'lightgrey',
};

const Panels = ({numPanels, selectedPanel, colors, selectPanel}) => (
    <div id='panels' style={styles}>
        {[...Array(numPanels)].map(
            (e, i) =>
                <Panel key={i} id={i} color={colors[i]}
                    isSelected={selectedPanel == i} selectPanel={() => selectPanel(i)}
                />
        )}
    </div>
);


Panels.propTypes = {
    numPanels: PropTypes.number.isRequired,
    selectedPanel: PropTypes.number.isRequired,
    colors: PropTypes.object.isRequired,
    selectPanel: PropTypes.func.isRequired,
};

export default Panels;
