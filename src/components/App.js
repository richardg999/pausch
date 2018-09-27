import React from 'react';

import Header from './Header';
import ThemeDialog from './ThemeDialog';
//import Sidebar from './Sidebar';
import PanelSelection from './PanelSelection';

import Timeline from './Timeline';

const appStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
};

const contentStyle = {
    backgroundColor: 'transparent',
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogOpen: false,
            themeCreated: true,
            selectedEvent: -1,
            theme: {
                name: 'Great Theme',
                id: 'slade',
                totalDuration: 0,
                events: {
                    0: {
                        id: 0,
                        name: 'Introduction',
                        duration: '5',
                        selectedPanel: -1,
                        color: '#808080',
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
                            9: '#808080',
                        },
                    },
                    1: {
                        id: 1,
                        name: 'Conclusion',
                        duration: '5',
                        selectedPanel: -1,
                        color: '#808080',
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
                            9: '#808080',
                        },
                    },
                },
            },
        };

        this.newTheme = this.newTheme.bind(this);
        this.handleThemeClose = this.handleThemeClose.bind(this);
        this.handleNewTheme = this.handleNewTheme.bind(this);
        this.selectPanel = this.selectPanel.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.selectEvent = this.selectEvent.bind(this);
    }

    newTheme() {
        console.log('This will reset all of the information and create a new theme');
        this.setState({ dialogOpen: true });
    }

    handleThemeClose() {
        console.log('This will close the theme box');
        this.setState({ dialogOpen: false });
    }

    handleNewTheme() {
        console.log('Creating a new theme');

    }

    // Event Information
    selectEvent(eventID) {
        console.log('selecting a new event with id', eventID);
        this.setState({selectedEvent: eventID});
    }

    addEvent() {
        const eventID = Math.floor(Math.random() * 101);
        this.setState((prevState) => {
            return { theme: {
                ...prevState.theme,
                events: {
                    ...prevState.theme.events,
                },
            }};
        });
        this.selectEvent(eventID);
    }

    deleteEvent() {
        this.selectEvent(0);
    }

    // Panel Changing Information
    selectPanel(panel, event) {
        console.log('This panel is now selected', panel, 'in the event', event);
        this.setState((prevState) => {
            return { theme: {
                ...prevState.theme,
                events: {
                    ...prevState.theme.events,
                    [event]: {
                        ...prevState.theme.events[event],
                        selectedPanel: panel,
                    },
                },
            }};
        });
    }

    updateColor(eventID, panelID, newColor) {
        console.log('is this working', eventID, panelID, newColor.hex);
        this.setState((prevState) => {
            return { theme: {
                ...prevState.theme,
                events: {
                    ...prevState.theme.events,
                    [eventID]: {
                        ...prevState.theme.events[eventID],
                        panels: {
                            ...prevState.theme.events[eventID].panels,
                            [panelID]: newColor.hex,
                        },
                    },
                },
            }};
        });
    }

    sendTheme() {
        console.log('Going to send a theme');
    }

    render() {
        const {selectedEvent, theme, dialogOpen} = this.state;
        console.log('selected event', selectedEvent);

        return (
            <div style={appStyle}>
                <Header addNew={this.newTheme} title={theme.name} sendTheme={this.sendTheme}/>
                <ThemeDialog isOpen={dialogOpen} handleRequestClose={this.handleThemeClose}
                    handleRequestFinish={this.handleNewTheme}/>
                <div id='content' style={contentStyle}>
                    <Timeline events={theme.events} selectedEvent={selectedEvent} selectEvent={this.selectEvent}/>
                    { selectedEvent != -1 ?
                        <PanelSelection event={theme.events[selectedEvent]}
                            selectPanel={this.selectPanel} updatePanel={this.updateColor}/>
                        :
                        <div>Please add a new event or select one to start editing</div>
                    }
                </div>
            </div>
        );
    }

}
