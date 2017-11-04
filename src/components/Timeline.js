import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ClearIcon from 'material-ui-icons/Clear';

const styles = {
    width: '80%',
    height: '100%',
    backgroundColor: '#B0B0B0',
    border: '4px solid transparent',
    borderRadius: '7px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
};

const sectionStyle = {
    marginLeft: '2px',
    marginRight: '2px',
    border: '3px solid transparent',
};

const mainStyles = {
    width: '90%',
    height: '75px',
    margin: '0 auto',
    marginTop: '30px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
};

const buttonStyles = {
    width: '17%',
    height: '100%',
    padding: '10px',
};


const Timeline = ({classes, events, selectedEvent, selectEvent}) => (
    <div style={mainStyles}>
        <div style={styles}>
            {
                Object.keys(events).map((eventKey) => {
                    const event = events[eventKey];
                    return (
                        <div key={event.id}
                            style={{
                                ...sectionStyle,
                                backgroundColor: event.color,
                                flex: event.duration,
                                borderColor: selectedEvent == event.id ? '#3f51b5' : '#808080',
                            }}
                            onClick={() => selectEvent(event.id)}
                        >
                            {event.name}
                        </div>
                    );
                })
            }

        </div>
        <div id='buttons' style={buttonStyles}>
            <Button fab color="primary" aria-label="add" className={classes.button}><AddIcon /></Button>
            <Button fab color="primary" aria-label="delete" className={classes.button}><ClearIcon /></Button>
        </div>
    </div>
);

Timeline.propTypes = {
    classes: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    selectedEvent: PropTypes.number.isRequired,
    selectEvent: PropTypes.func.isRequired,
};

export default withStyles()(Timeline);
