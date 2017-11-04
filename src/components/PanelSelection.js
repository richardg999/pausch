import React from 'react';
import PropTypes from 'prop-types';

import Panels from './Panels';
import ColorSelector from './ColorSelector';

const PanelSelection = ({event, selectPanel, updatePanel}) => {
    const { id, selectedPanel, panels } = event;
    console.log(panels);
    console.log('selected panel', selectedPanel);
    return (
        <div>
            <Panels numPanels={10} colors={panels} selectedPanel={selectedPanel}
                selectPanel={(panelID) => selectPanel(panelID, id)}/>
            <ColorSelector selectedPanelColor={selectedPanel >= 0 ? panels[selectedPanel]: ''}
                selectedPanelId={selectedPanel} updateColor={(panelID, newColor) => updatePanel(id, panelID, newColor)} />
        </div>
    );
};

PanelSelection.propTypes = {
    event: PropTypes.object.isRequired,
    selectPanel: PropTypes.func.isRequired,
    updatePanel: PropTypes.func.isRequired,
};

export default PanelSelection;
