import React from 'react';
import Panel from './Panel.js';

function Panels() {
    let panels = [];
    for (let i = 0; i < 9; i++) {
        panels.push(<Panel />);
    }
    return <div>
        {panels}
    </div>
}

export default Panels;