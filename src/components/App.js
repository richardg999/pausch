import React from 'react';
import Header from './Header';

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
            theme: {
                name: 'Great Theme',
                id: '',
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
        };
    }

    render() {
        const {theme} = this.state;

        return (
            <div style={appStyle}>
                <Header addNew={this.newTheme} title={theme.name}/>
            </div>
        );
    }

}
