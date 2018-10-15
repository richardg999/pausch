import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
    height: '55px',
    margin: '0 auto',
    marginTop: '30px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
};

const Timeline = ({events, selectedEvent, selectEvent}) => (
    <div style={mainStyles}>
        <div style={styles}>
            {
                Object.keys(events).map((eventKey) => {
                    const event = events[eventKey];
                    return (
                        <div key={event.id}
                            style={{
                                ...sectionStyle,
                                border: '4px solid transparent',
                                borderRadius: '7px',
                                backgroundColor: event.color,
                                flex: event.duration,
                                borderColor: selectedEvent === event.id ? '#3f51b5' : '#808080',
                                margin: 5,
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}
                            onClick={() => selectEvent(event.id)}
                        >
                            <Typography type="title" color="default">
                                {event.name}
                            </Typography>
                        </div>
                    );
                })
            }
        </div>
    </div>
);

Timeline.propTypes = {
    events: PropTypes.object.isRequired,
    selectedEvent: PropTypes.number.isRequired,
    selectEvent: PropTypes.func.isRequired,
};

export default withStyles()(Timeline);
