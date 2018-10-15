import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker, SwatchesPicker } from 'react-color';

const styles = theme => ({
    root: {
        padding: '20px',
        backgroundColor: theme.palette.background.paper,
        width: '830px',
        height: '300px',
        margin: '25px auto 0 auto',
    },
});

class ColorSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    }

    handleChangeIndex(index) {
        this.setState({ value: index });
    }

    render() {
        const { classes, selectedPanelColor, updateColor, selectedPanelId } = this.props;

        return (
            <Paper className={classes.root}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    padding: '10px',
                    justifyContent: 'space-between',
                }}>
                    <ChromePicker color={selectedPanelColor} onChangeComplete={(color) => updateColor(selectedPanelId, color)} disableAlpha={true} />
                    <SwatchesPicker color={selectedPanelColor} onChangeComplete={(color) => updateColor(selectedPanelId, color)} width={500} height={230} />
                </div>
            </Paper>
        );
    }
}

ColorSelector.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    selectedPanelColor: PropTypes.string,
    selectedPanelId: PropTypes.number,
    updateColor: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(ColorSelector);
