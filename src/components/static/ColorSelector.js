// Color Selector: Allows users to select color and input current color
/**
 * Props:
 * selectedId {number}: Id of the panel that is currently selected. -1 if no panel is selected
 * selectedColor {string}: Color of the panel that is currently selected. Ignore if no panel is selected
 * updateColor {function}: Callback function called when new color is selected. updateColor(panelId, newColor)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
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
        const { classes, selectedColor, updateColor, selectedId } = this.props;

        if (selectedId == -1) {
            return (
                <Paper className={classes.root} style={{position: 'relative'}}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        zIndex: '10',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        backgroundColor: 'rgba(100, 100, 100, 0.3)',
                        textAlign: 'center',
                        padding: '50px',
                    }}>
                        Please select a panel to start modifying.
                    </div>
                </Paper>
            );
        }

        return (
            <Paper className={classes.root} style={{position: 'relative'}}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    padding: '10px',
                    justifyContent: 'space-between',
                }}>
                    <ChromePicker color={selectedColor} onChangeComplete={(color) => updateColor(selectedId, color.hex)} disableAlpha={true} />
                    <SwatchesPicker color={selectedColor} onChangeComplete={(color) => updateColor(selectedId, color.hex)} width={500} height={230} />
                </div>
            </Paper>
        );
    }
}

ColorSelector.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    selectedColor: PropTypes.string,
    selectedId: PropTypes.number,
    updateColor: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(ColorSelector);
