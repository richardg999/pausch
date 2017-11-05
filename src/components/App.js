import React from 'react';
import {serverSend} from './connection.js';

import Header from './Header';
import Panels from './Panels.js';
import ColorSelector from './ColorSelector.js';

const appStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
};

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

    selectPanel = (panelId) => {
        this.setState({ selectedId: panelId });
    }

    updateColor = (panelId, newColor) => {
        this.setState((prevState) => {
            return { panels: {...prevState.panels, [panelId]: newColor} };
        });
    }

    sendTheme = () => {
        serverSend(this.state);
    }

    render() {
        const {panels, name, selectedId} = this.state;
        return (
            <div style={appStyle}>
                <Header title={name} addNew={this.newTheme} sendTheme={this.sendTheme}/>

                <Panels colors={panels} selectPanel={this.selectPanel}/>
                <ColorSelector selectedId={selectedId} selectedColor={panels[selectedId]}
                    updateColor={this.updateColor}/>
            </div>
        );
    }

}
