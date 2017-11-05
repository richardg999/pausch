import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

const ThemeDialog = ({isOpen, handleRequestClose, handleRequestFinish}) => (
    <Dialog open={isOpen} onRequestClose={handleRequestClose}>
        <DialogTitle>Create New Theme</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To start creating a new theme, please enter the name of the theme and your id (Andrew ID is preferred).
            </DialogContentText>
            <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Name of Theme"
                fullWidth
            />
            <TextField
                margin="normal"
                id="id"
                label="ID"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleRequestClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleRequestFinish} color="primary">
                Submit
            </Button>
        </DialogActions>
    </Dialog>
);

ThemeDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleRequestClose: PropTypes.func.isRequired,
    handleRequestFinish: PropTypes.func.isRequired,
};

export default ThemeDialog;
