import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1)
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        'flex-wrap': 'wrap'
    },
    flexChild: {
        margin: theme.spacing(1)
    },
    smallSelect: {
        width: '50px',
        textAlign: 'center'
    }
}));

export default function FormatSettings() {
    const classes = useStyles();
    const [indent, setIndent] = useState(2);
    const [useSemiColon, setUseSemiColon] = useState(true);

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>Format Settings</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={`${classes.root} ${classes.flexContainer}`}>
                    <FormControl className={classes.flexChild}>
                        <InputLabel>Indent</InputLabel>
                        <Select
                            value={indent}
                            onChange={event => setIndent(event.target.value)}
                            className={classes.smallSelect}>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        className={classes.flexChild}
                        control={<Checkbox
                            className={classes.flexChild}
                            checked={useSemiColon}
                            onChange={event => setUseSemiColon(event.target.checked)} />}
                        label="Functions end with semi-colon" />

                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}