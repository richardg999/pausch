import React from 'react';

import Header from './static/Header';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header title={"Title"} />
                <div id='content'>
                    <ColorSelector />
                </div>
            </div>
        );
    }

}
