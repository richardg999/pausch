import React from 'react';

// Do not modify these links
import serverSend from './static/connection.js';
import Header from './static/Header.js';
import ColorSelector from './static/ColorSelector.js';

import Panels from './Panels.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Great Theme',
            id: 'slade',
            selectedId: -1,
            panels: {
                0: '#808080',
                1: '#808080',
                2: '#808080',
                3: '#808080',
                4: '#808080',
                5: '#808080',
                6: '#808080',
                7: '#808080',
                8: '#808080',
            },
        };
    }

    // New Theme
    newTheme = () => {}

    // Send the theme to the server
    sendTheme = () => {
        serverSend(this.state.name, this.state.id, this.state.panels);
        alert("You have successfully sent your theme!");
    }

    // Functions for selecting current panel to modify
    selectPanel = (panelId) => {
        this.setState({ selectedId: panelId });
    }

    // Update the color of the currently selected panel
    updateColor = (panelId, newColor) => {
        this.setState((prevState) => {
            return { panels: {...prevState.panels, [panelId]: newColor} };
        });
    }

    render() {
        const {panels, name, selectedId} = this.state;

        return (
            <div className="main">
                <Header title={name} addNew={this.newTheme} sendTheme={this.sendTheme}/>

                <Panels colors={panels} selectPanel={this.selectPanel}/>
                <ColorSelector selectedId={selectedId} selectedColor={panels[selectedId]}
                    updateColor={this.updateColor}/>
            </div>
        );
    }

}
